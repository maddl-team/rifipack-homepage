import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogList, type BlogCategoryLink } from "@/components/blog/BlogList";
import { getCategories, getPosts } from "@/lib/wp/client";
import { POSTS_PER_PAGE } from "@/lib/wp/config";
import { decodeEntities, normalizePost } from "@/lib/wp/content";

export const revalidate = 3600;

const lead = "Guide su confezioni, stampa e imballaggi personalizzati, scritte da chi li produce.";

export const metadata: Metadata = {
  title: "Blog | Rifipack",
  description: lead,
  alternates: { canonical: "/blog/" },
  openGraph: { title: "Blog | Rifipack", description: lead, url: "/blog/" },
};

function pageNumber(value: string | undefined) {
  const page = Number(value ?? "1");
  return Number.isInteger(page) && page > 0 ? page : 0;
}

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const page = pageNumber((await searchParams).page);
  if (!page) notFound();

  let posts: ReturnType<typeof normalizePost>[] = [];
  let totalPages = 0;
  let categories: BlogCategoryLink[] = [];
  let unavailable = false;

  try {
    const [result, allCategories] = await Promise.all([
      getPosts({ page, perPage: POSTS_PER_PAGE }),
      getCategories(),
    ]);
    if (page > 1 && page > result.totalPages) notFound();
    posts = result.posts.map(normalizePost);
    totalPages = result.totalPages;
    categories = allCategories
      .filter((category) => category.count > 0)
      .map((category) => ({ name: decodeEntities(category.name), slug: category.slug, count: category.count }));
  } catch {
    if (page > 1) notFound();
    unavailable = true;
  }

  return (
    <BlogList
      eyebrow="Blog"
      title="Note di packaging"
      lead={lead}
      posts={posts}
      page={page}
      totalPages={totalPages}
      basePath="/blog/"
      categories={categories}
      crumb="Blog"
      unavailable={unavailable}
    />
  );
}
