import {
  appendContactToSheet,
  isGoogleSheetsConfigured,
} from "@/lib/google-sheets";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_MESSAGE_LENGTH = 2000;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 8;

type ContactRequestBody = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  website?: string;
  message?: string;
  source?: string;
  hpField?: string;
};

type RateEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateEntry>();

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for") ?? "";
  return forwardedFor.split(",")[0]?.trim() || "unknown";
}

function checkRateLimit(request: Request) {
  const ip = getClientIp(request);
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || now > current.resetAt) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return null;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return Response.json(
      { error: "Too many requests. Please wait a minute and try again." },
      { status: 429 },
    );
  }

  current.count += 1;
  rateLimitStore.set(ip, current);
  return null;
}

export async function POST(request: Request) {
  try {
    const rateLimitResponse = checkRateLimit(request);
    if (rateLimitResponse) {
      return rateLimitResponse;
    }

    const body = (await request.json()) as ContactRequestBody;

    if (typeof body.hpField === "string" && body.hpField.trim().length > 0) {
      return Response.json({ ok: true });
    }

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim().toLowerCase();
    const company = (body.company ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const website = (body.website ?? "").trim();
    const message = (body.message ?? "").trim();
    const source = (body.source ?? "website-contact-form").trim();

    if (name.length < 2 || name.length > 120) {
      return Response.json(
        { error: "Please enter a valid name." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 180) {
      return Response.json(
        { error: "Please enter a valid email." },
        { status: 400 },
      );
    }

    if (message.length < 10 || message.length > MAX_MESSAGE_LENGTH) {
      return Response.json(
        { error: "Please enter a short project message (10+ characters)." },
        { status: 400 },
      );
    }

    if (!isGoogleSheetsConfigured()) {
      console.error("[contact] Google Sheets env vars are not configured.");
      return Response.json(
        { error: "Contact form is not configured yet." },
        { status: 500 },
      );
    }

    await appendContactToSheet({
      submittedAt: new Date().toISOString(),
      name,
      email,
      company,
      phone,
      website,
      message,
      source,
      ip: getClientIp(request),
      userAgent: request.headers.get("user-agent") ?? "",
    });

    return Response.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Contact form request failed";
    console.error("[contact]", message);

    const hint = message.includes("ENOTFOUND") ||
      message.includes("getaddrinfo") ||
      message.includes("ECONNREFUSED") ||
      message.includes("ETIMEDOUT")
      ? "Cannot reach Google APIs from this network. Check your internet/DNS or try another connection (e.g. disable VPN, switch Wi‑Fi)."
      : message.includes("permission") || message.includes("403")
        ? "Share the Google Sheet with the service account email as Editor."
        : "Could not send your request. Please try again.";

    return Response.json({ error: hint }, { status: 500 });
  }
}
