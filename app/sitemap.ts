import type { MetadataRoute } from "next";
import {
  insightCategories,
  insightPosts,
} from "@/lib/insights-data";
import { industryPages, servicePages, SITE_URL } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/insights", priority: 0.9, changeFrequency: "weekly" },
    { path: "/services", priority: 0.85, changeFrequency: "monthly" },
    { path: "/industries", priority: 0.85, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ];

  const serviceRoutes = servicePages.map((service) => ({
    path: `/services/${service.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const industryRoutes = industryPages.map((industry) => ({
    path: `/industries/${industry.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const categoryRoutes = insightCategories.map((category) => ({
    path: `/insights/category/${category.slug}`,
    priority: 0.75,
    changeFrequency: "weekly" as const,
  }));

  const insightRoutes = insightPosts.map((post) => ({
    path: `/insights/${post.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: new Date(post.updatedAt),
  }));

  type SitemapEntry = {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    lastModified?: Date;
  };

  const routes: SitemapEntry[] = [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...categoryRoutes,
    ...insightRoutes,
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: route.lastModified ?? new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
