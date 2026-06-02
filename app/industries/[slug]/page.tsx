import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BOOKING_URL, getIndustryBySlug, industryPages } from "@/lib/site-config";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return industryPages.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) return {};

  return {
    title: industry.seoTitle,
    description: industry.seoDescription,
    alternates: {
      canonical: `/industries/${industry.slug}`,
    },
  };
}

export default async function IndustryDetailsPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-20 text-slate-100 sm:px-8">
      <article className="mx-auto max-w-5xl">
        <Link href="/industries" className="text-sm text-blue-300 hover:text-blue-200">
          ← Back to industries
        </Link>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {industry.title}
        </h1>
        <p className="mt-5 text-base leading-8 text-slate-300">
          {industry.seoDescription}
        </p>

        <section className="mt-10 rounded-2xl border border-white/10 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-semibold text-white">
            Core automation priorities for this industry
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-300">
            {industry.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-2xl border border-blue-400/30 bg-blue-600/10 p-8">
          <h2 className="text-2xl font-semibold text-white">
            Want this architecture built for your team?
          </h2>
          <p className="mt-3 text-slate-200">
            Book a free strategy call and we will map your inbound flow,
            follow-up stack, CRM setup, and highest-impact automation gaps.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Book Your Strategy Call
          </a>
        </section>
      </article>
    </main>
  );
}
