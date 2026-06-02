import { chatWithGroq, type ChatMessage } from "@/lib/groq";
import { getKnowledgeBase } from "@/lib/knowledge";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_MESSAGES = 12;
const MAX_MESSAGE_LENGTH = 600;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 12;

type ChatRequestBody = {
  messages?: Array<{ role: string; content: string }>;
};

type RateEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateEntry>();

function checkRateLimit(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for") ?? "";
  const ip = forwardedFor.split(",")[0]?.trim() || "unknown";
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
      { error: "Too many chat requests. Please wait a minute and retry." },
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

    const body = (await request.json()) as ChatRequestBody;

    if (!body.messages?.length) {
      return Response.json(
        { error: "Messages array is required" },
        { status: 400 },
      );
    }

    const messages: ChatMessage[] = body.messages
      .filter(
        (m): m is ChatMessage =>
          (m.role === "user" || m.role === "assistant") &&
          typeof m.content === "string" &&
          m.content.trim().length > 0 &&
          m.content.length <= MAX_MESSAGE_LENGTH,
      )
      .slice(-MAX_MESSAGES);

    if (messages.length === 0) {
      return Response.json({ error: "No valid messages" }, { status: 400 });
    }

    const knowledge = getKnowledgeBase();
    const reply = await chatWithGroq(messages, knowledge);

    return Response.json({ reply });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to generate reply";

    console.error("[chat]", message);

    return Response.json(
      {
        error:
          message === "GROQ_API_KEY is not configured"
            ? "Chat is not configured. Add GROQ_API_KEY to .env.local and restart the dev server."
            : "Sorry, I could not respond right now. Please try again or email hello@clientflow.ai.",
      },
      { status: 500 },
    );
  }
}
