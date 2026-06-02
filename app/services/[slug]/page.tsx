import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BOOKING_URL, getServiceBySlug, servicePages } from "@/lib/site-config";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `/services/${service.slug}`,
      type: "article",
    },
  };
}

export default async function ServiceDetailsPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-20 text-slate-100 sm:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <article className="mx-auto max-w-5xl">
        <Link href="/services" className="text-sm text-blue-300 hover:text-blue-200">
          ← Back to all services
        </Link>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {service.title}
        </h1>
        <p className="mt-5 text-base leading-8 text-slate-300">{service.intro}</p>

        <section className="mt-12 rounded-2xl border border-white/10 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-semibold text-white">What We Deliver</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            {service.deliverables.map((item) => (
              <li key={item} className="rounded-xl border border-white/10 p-3">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-2xl border border-white/10 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-semibold text-white">Typical Outcomes</h2>
          <ul className="mt-5 list-disc space-y-2 pl-6 text-slate-300">
            {service.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-2xl border border-white/10 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-semibold text-white">FAQ</h2>
          <div className="mt-5 space-y-4">
            {service.faq.map((item) => (
              <div key={item.question} className="rounded-xl border border-white/10 p-4">
                <h3 className="font-medium text-white">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-blue-400/30 bg-blue-600/10 p-8">
          <h2 className="text-2xl font-semibold text-white">
            Ready to implement this in your business?
          </h2>
          <p className="mt-3 text-slate-200">
            Book a free strategy call and we will map your current system, identify
            bottlenecks, and propose the highest-impact build plan.
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
