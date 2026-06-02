import type { Metadata } from "next";
import Link from "next/link";
import { industryPages } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "ClientFlow builds lead automation systems for dental clinics, home services, and real estate teams.",
  alternates: {
    canonical: "/industries",
  },
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-20 text-slate-100 sm:px-8">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Industry-Specific Automation Systems
        </h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Our architecture adapts by sales cycle, call volume, and booking flow.
          Explore how we tailor automation stacks by industry.
        </p>
      </section>

      <section className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {industryPages.map((industry) => (
          <article
            key={industry.slug}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
          >
            <h2 className="text-xl font-semibold text-white">{industry.title}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
              {industry.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Link
              href={`/industries/${industry.slug}`}
              className="mt-5 inline-flex rounded-full border border-blue-400/40 bg-blue-500/15 px-4 py-2 text-sm font-medium text-blue-100 transition hover:bg-blue-500/25"
            >
              View industry page
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
