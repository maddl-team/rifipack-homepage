import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";
import { productPages } from "@/content/products";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    ...productPages.map((p) => ({ url: `${SITE_URL}/${p.slug}/`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
