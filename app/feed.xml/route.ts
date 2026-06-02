import { SITE_URL } from "@/lib/site-config";
import { insightPosts } from "@/lib/insights-data";

export async function GET() {
  const items = insightPosts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE_URL}/insights/${post.slug}</link>
      <guid>${SITE_URL}/insights/${post.slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
    </item>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>ClientFlow Insights</title>
    <link>${SITE_URL}/insights</link>
    <description>Guides on CRM, AI voice, automation, and lead conversion systems.</description>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
