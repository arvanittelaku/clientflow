import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site/site-shell";
import { JsonLd } from "@/components/seo/json-ld";
import {
  getCategoryBySlug,
  getPostsByCategory,
  insightCategories,
} from "@/lib/insights-data";
import { breadcrumbSchema } from "@/lib/seo-schema";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return insightCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: `${category.name} Automation Guides`,
    description: category.description,
    alternates: {
      canonical: `/insights/category/${category.slug}`,
    },
  };
}

export default async function InsightCategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const posts = getPostsByCategory(slug);
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
    { name: category.name, path: `/insights/category/${category.slug}` },
  ]);

  return (
    <SiteShell>
      <JsonLd data={breadcrumbs} />
      <main className="px-5 py-16 sm:px-8">
        <section className="mx-auto max-w-6xl">
          <Link href="/insights" className="text-sm text-blue-300 hover:text-blue-200">
            ← Back to insights
          </Link>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {category.name}
          </h1>
          <p className="mt-4 max-w-3xl text-slate-300">{category.description}</p>
        </section>

        <section className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
            >
              <h2 className="text-xl font-semibold text-white">
                <Link href={`/insights/${post.slug}`} className="hover:text-blue-200">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{post.excerpt}</p>
            </article>
          ))}
        </section>
      </main>
    </SiteShell>
  );
}
