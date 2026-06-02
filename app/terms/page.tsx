import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review ClientFlow terms regarding service scope, deliverables, and client responsibilities.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-20 text-slate-100 sm:px-8">
      <article className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-slate-900/60 p-8">
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Terms of Service
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-7 text-slate-300">
          <p>
            ClientFlow provides website, CRM, automation, and advisory services
            based on agreed proposals and statements of work.
          </p>
          <p>
            Timelines depend on scope, client response times, and required
            third-party account access. Deliverables are considered complete
            when approved in writing or deployed to production.
          </p>
          <p>
            Client is responsible for account credentials, domain ownership,
            and compliance requirements relevant to their industry.
          </p>
          <p>
            For support, billing, or legal questions, contact hello@clientflow.ai.
          </p>
        </div>
      </article>
    </main>
  );
}
