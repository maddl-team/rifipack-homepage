import { WORDPRESS_API_URL } from "./config";
import type { WPCategory, WPPost } from "./types";

type FetchOptions = RequestInit & { next?: { revalidate?: number; tags?: string[] } };

function buildWpUrl(endpoint: string): string {
  const path = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  return `${WORDPRESS_API_URL}${path}`;
}

/** Alcune risposte del WAF arrivano con testo dopo il JSON. Si tiene solo il primo valore. */
function extractFirstJsonValue(text: string): string | null {
  const start = text.search(/[\[{]/);
  if (start === -1) return null;
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let i = start; i < text.length; i += 1) {
    const char = text[i];
    if (inString) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === '"') inString = false;
      continue;
    }
    if (char === '"') {
      inString = true;
      continue;
    }
    if (char === "{" || char === "[") depth += 1;
    else if (char === "}" || char === "]") {
      depth -= 1;
      if (depth === 0) return text.slice(start, i + 1);
    }
  }
  return null;
}

function parseWpJson<T>(body: string): T {
  const trimmed = body.trim();
  try {
    return JSON.parse(trimmed) as T;
  } catch (error) {
    const json = extractFirstJsonValue(trimmed);
    if (!json) throw error;
    return JSON.parse(json) as T;
  }
}

async function wpFetchWithMeta<T>(endpoint: string, options: FetchOptions = {}) {
  const response = await fetch(buildWpUrl(endpoint), {
    ...options,
    next: { revalidate: 3600, ...(options.next ?? {}) },
  });
  if (!response.ok) throw new Error(`WordPress API error ${response.status} on ${endpoint}`);
  const totalItems = Number.parseInt(response.headers.get("X-WP-Total") ?? "0", 10);
  const totalPages = Number.parseInt(response.headers.get("X-WP-TotalPages") ?? "0", 10);
  const data = parseWpJson<T>(await response.text());
  return { data, totalPages, totalItems };
}

async function wpFetch<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
  const { data } = await wpFetchWithMeta<T>(endpoint, options);
  return data;
}

export async function getPosts(options: { page?: number; perPage?: number; categoryId?: number; exclude?: number } = {}) {
  const query = new URLSearchParams({
    _embed: "1",
    page: String(options.page ?? 1),
    per_page: String(options.perPage ?? 9),
  });
  if (options.categoryId) query.set("categories", String(options.categoryId));
  if (options.exclude) query.set("exclude", String(options.exclude));
  const { data, totalPages, totalItems } = await wpFetchWithMeta<WPPost[]>(`/wp/v2/posts?${query}`);
  return { posts: data, totalPages, totalPosts: totalItems };
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const posts = await wpFetch<WPPost[]>(`/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed=1`);
  return posts[0] ?? null;
}

export async function getPostIndex(): Promise<Array<{ slug: string; modified: string }>> {
  const first = await wpFetchWithMeta<Array<{ slug: string; modified: string }>>("/wp/v2/posts?per_page=100&_fields=slug,modified&page=1");
  const all = [...first.data];
  for (let page = 2; page <= first.totalPages; page += 1) {
    const next = await wpFetch<Array<{ slug: string; modified: string }>>(`/wp/v2/posts?per_page=100&_fields=slug,modified&page=${page}`);
    all.push(...next);
  }
  return all;
}

export async function getCategories(): Promise<WPCategory[]> {
  return wpFetch<WPCategory[]>("/wp/v2/categories?per_page=100&_fields=id,name,slug,count,description");
}

export async function getCategoryBySlug(slug: string): Promise<WPCategory | null> {
  const categories = await wpFetch<WPCategory[]>(`/wp/v2/categories?slug=${encodeURIComponent(slug)}`);
  return categories[0] ?? null;
}
