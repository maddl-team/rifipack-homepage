import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogList } from "@/components/blog/BlogList";
import { getCategories, getCategoryBySlug, getPosts } from "@/lib/wp/client";
import { POSTS_PER_PAGE } from "@/lib/wp/config";
import { decodeEntities, normalizePost } from "@/lib/wp/content";

export const revalidate = 3600;

type Params = { slug: string };

export async function generateStaticParams() {
  try {
    const categories = await getCategories();
    return categories.filter((category) => category.count > 0).map((category) => ({ slug: category.slug }));
  } catch {
    return [];
  }
}

function pageNumber(value: string | undefined) {
  const page = Number(value ?? "1");
  return Number.isInteger(page) && page > 0 ? page : 0;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug).catch(() => null);
  if (!category) return { title: "Categoria | Rifipack" };
  const name = decodeEntities(category.name);
  const description = decodeEntities(category.description.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim()
    || `Articoli Rifipack nella categoria ${name}.`;
  const url = `/blog/categoria/${category.slug}/`;
  return {
    title: `${name} | Blog Rifipack`,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${name} | Blog Rifipack`, description, url },
  };
}

export default async function BlogCategoryPage({ params, searchParams }: { params: Promise<Params>; searchParams: Promise<{ page?: string }> }) {
  const [{ slug }, query] = await Promise.all([params, searchParams]);
  const page = pageNumber(query.page);
  if (!page) notFound();

  const category = await getCategoryBySlug(slug).catch(() => null);
  if (!category) notFound();

  let posts: ReturnType<typeof normalizePost>[] = [];
  let totalPages = 0;
  let unavailable = false;
  const all = await getCategories().catch(() => []);

  try {
    const result = await getPosts({ page, perPage: POSTS_PER_PAGE, categoryId: category.id });
    if (page > 1 && page > result.totalPages) notFound();
    posts = result.posts.map(normalizePost);
    totalPages = result.totalPages;
  } catch {
    if (page > 1) notFound();
    unavailable = true;
  }

  const name = decodeEntities(category.name);
  const description = decodeEntities(category.description.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

  return (
    <BlogList
      eyebrow="Categoria"
      title={name}
      lead={description || `Articoli raccolti sotto ${name}.`}
      posts={posts}
      page={page}
      totalPages={totalPages}
      basePath={`/blog/categoria/${category.slug}/`}
      categories={all.filter((item) => item.count > 0).map((item) => ({ name: decodeEntities(item.name), slug: item.slug, count: item.count }))}
      activeCategory={category.slug}
      crumb={name}
      unavailable={unavailable}
    />
  );
}
