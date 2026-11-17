import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";
import { productPages } from "@/content/products";
import { sectorPages } from "@/content/sectors";
import { getCategories, getPostIndex } from "@/lib/wp/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    ...productPages.map((p) => ({ url: `${SITE_URL}/${p.slug}/`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...sectorPages.map((p) => ({ url: `${SITE_URL}/settori/${p.slug}/`, changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: `${SITE_URL}/blog/`, changeFrequency: "weekly", priority: 0.6 },
  ];
  try {
    const [posts, categories] = await Promise.all([getPostIndex(), getCategories()]);
    pages.push(
      ...posts.map((post) => ({
        url: `${SITE_URL}/blog/${post.slug}/`,
        lastModified: post.modified,
        changeFrequency: "monthly" as const,
        priority: 0.5,
      })),
      ...categories
        .filter((category) => category.count > 0)
        .map((category) => ({
          url: `${SITE_URL}/blog/categoria/${category.slug}/`,
          changeFrequency: "weekly" as const,
          priority: 0.4,
        })),
    );
  } catch {
    /* Il sito resta in sitemap anche se WordPress non risponde. */
  }
  return pages;
}
