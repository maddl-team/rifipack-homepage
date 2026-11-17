import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleView } from "@/components/blog/ArticleView";
import { getPostBySlug, getPostIndex, getPosts } from "@/lib/wp/client";
import { normalizePost } from "@/lib/wp/content";
import type { WPPost } from "@/lib/wp/types";

export const revalidate = 3600;

type Params = { slug: string };

export async function generateStaticParams() {
  try {
    const posts = await getPostIndex();
    return posts.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

async function load(slug: string) {
  const post = await getPostBySlug(slug);
  return post ? normalizePost(post) : null;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await load(slug).catch(() => null);
  if (!article) return { title: "Articolo | Rifipack" };
  const title = `${article.title} | Rifipack`;
  const url = `/blog/${article.slug}/`;
  return {
    title,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description: article.excerpt,
      url,
      images: article.image ? [{ url: article.image.src, alt: article.image.alt }] : undefined,
    },
  };
}

async function relatedPosts(id: number, categoryId?: number) {
  const collected: WPPost[] = [];
  if (categoryId) {
    const same = await getPosts({ perPage: 4, categoryId, exclude: id });
    collected.push(...same.posts);
  }
  if (collected.length < 3) {
    const latest = await getPosts({ perPage: 6, exclude: id });
    const seen = new Set(collected.map((post) => post.id));
    for (const post of latest.posts) {
      if (seen.has(post.id)) continue;
      collected.push(post);
      if (collected.length === 3) break;
    }
  }
  return collected.slice(0, 3);
}

export default async function BlogArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = await load(slug).catch(() => null);
  if (!article) notFound();
  const related = await relatedPosts(article.id, article.categoryIds[0]).catch(() => []);
  return <ArticleView article={article} related={related.map(normalizePost)} />;
}
