import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";
import { JsonLd } from "@/components/seo/json-ld";
import {
  getCategoryBySlug,
  insightCategories,
  insightPosts,
} from "@/lib/insights-data";
import { breadcrumbSchema } from "@/lib/seo-schema";

export const metadata: Metadata = {
  title: "Insights on CRM, Voice AI, and Automation",
  description:
    "Expert guides on GoHighLevel, HubSpot, AI voice agents, n8n, Make, and conversion systems for service businesses.",
  alternates: {
    canonical: "/insights",
  },
};

export default function InsightsPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
  ]);

  return (
    <SiteShell>
      <JsonLd data={breadcrumbs} />
      <main className="px-5 py-16 sm:px-8">
        <section className="mx-auto max-w-6xl">
          <p className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
            SEO Insights Hub
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Guides for CRM, Voice AI, and Automation Growth
          </h1>
          <p className="mt-4 max-w-3xl text-slate-300">
            Long-form resources designed to rank for high-intent keywords and
            help businesses implement systems that capture and convert more leads.
          </p>
        </section>

        <section className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {insightCategories.map((category) => (
            <article
              key={category.slug}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
            >
              <h2 className="text-lg font-semibold text-white">{category.name}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                {category.description}
              </p>
              <Link
                href={`/insights/category/${category.slug}`}
                className="mt-4 inline-flex text-sm text-blue-300 hover:text-blue-200"
              >
                Browse category →
              </Link>
            </article>
          ))}
        </section>

        <section className="mx-auto mt-14 max-w-6xl">
          <h2 className="text-2xl font-semibold text-white">Latest articles</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {insightPosts.map((post) => {
              const category = getCategoryBySlug(post.categorySlug);
              return (
                <article
                  key={post.slug}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
                >
                  <p className="text-xs uppercase tracking-[0.14em] text-blue-200">
                    {category?.name}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    <Link href={`/insights/${post.slug}`} className="hover:text-blue-200">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{post.excerpt}</p>
                  <p className="mt-4 text-xs text-slate-400">
                    {post.readTimeMinutes} min read
                  </p>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
