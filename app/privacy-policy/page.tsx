import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how ClientFlow collects, processes, and protects data across website forms, analytics, and communication systems.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-20 text-slate-100 sm:px-8">
      <article className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-slate-900/60 p-8">
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          Effective date: {new Date().toISOString().slice(0, 10)}
        </p>
        <div className="mt-8 space-y-6 text-sm leading-7 text-slate-300">
          <p>
            ClientFlow collects information submitted through this website such
            as name, email, phone number, and project details to respond to
            inquiries and deliver services.
          </p>
          <p>
            We may use analytics and tracking tools to understand website
            performance and improve user experience. We do not sell personal
            information.
          </p>
          <p>
            If you use our chatbot, submitted prompts may be processed by third
            party AI providers to generate a response.
          </p>
          <p>
            To request deletion or review of your personal data, email
            hello@clientflow.ai.
          </p>
        </div>
      </article>
    </main>
  );
}
