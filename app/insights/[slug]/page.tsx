import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site/site-shell";
import { JsonLd } from "@/components/seo/json-ld";
import { BOOKING_URL } from "@/lib/site-config";
import {
  getCategoryBySlug,
  getPostBySlug,
  getRelatedPosts,
  insightPosts,
} from "@/lib/insights-data";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/seo-schema";

type InsightArticleProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: InsightArticleProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `/insights/${post.slug}`,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      url: `/insights/${post.slug}`,
    },
  };
}

export default async function InsightArticlePage({ params }: InsightArticleProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const category = getCategoryBySlug(post.categorySlug);
  const relatedPosts = getRelatedPosts(post.relatedPostSlugs);

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
    {
      name: category?.name ?? "Article",
      path: `/insights/category/${post.categorySlug}`,
    },
    { name: post.title, path: `/insights/${post.slug}` },
  ]);

  const articleSchema = blogPostingSchema({
    title: post.title,
    description: post.seoDescription,
    slug: post.slug,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    keywords: post.keywords,
  });

  return (
    <SiteShell>
      <JsonLd data={[breadcrumbs, articleSchema]} />
      <main className="px-5 py-16 sm:px-8">
        <article className="mx-auto max-w-4xl">
          <Link href="/insights" className="text-sm text-blue-300 hover:text-blue-200">
            ← Back to insights
          </Link>
          <p className="mt-4 text-xs uppercase tracking-[0.14em] text-blue-200">
            {category?.name} · {post.readTimeMinutes} min read
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">{post.excerpt}</p>

          <div className="mt-10 space-y-8">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-base leading-8 text-slate-300">
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-300">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          {post.relatedServiceSlug ? (
            <section className="mt-10 rounded-2xl border border-blue-400/30 bg-blue-600/10 p-6">
              <h2 className="text-xl font-semibold text-white">Need this implemented?</h2>
              <p className="mt-2 text-slate-200">
                We can design and deploy this system for your business.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href={`/services/${post.relatedServiceSlug}`}
                  className="inline-flex rounded-full border border-blue-300/40 px-4 py-2 text-sm text-blue-100 hover:bg-blue-500/20"
                >
                  View related service
                </Link>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
                >
                  Book strategy call
                </a>
              </div>
            </section>
          ) : null}

          {relatedPosts.length > 0 ? (
            <section className="mt-10">
              <h2 className="text-xl font-semibold text-white">Related guides</h2>
              <ul className="mt-4 space-y-3">
                {relatedPosts.map((related) => (
                  <li key={related.slug}>
                    <Link
                      href={`/insights/${related.slug}`}
                      className="text-blue-300 hover:text-blue-200"
                    >
                      {related.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </article>
      </main>
    </SiteShell>
  );
}
