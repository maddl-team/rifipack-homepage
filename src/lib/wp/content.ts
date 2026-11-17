import { productPages } from "@/content/products";
import { sectorPages } from "@/content/sectors";
import { company, hero } from "@/content/site";
import { WORDPRESS_URL } from "./config";
import type { Article, Heading, WPPost } from "./types";

const products = new Set(productPages.map((page) => page.slug));
const sectors = new Set(sectorPages.map((page) => page.slug));

const NAMED: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  hellip: "…",
  rsquo: "’",
  lsquo: "’",
  rdquo: "”",
  ldquo: "“",
  ndash: "–",
  mdash: "—",
};

export function decodeEntities(value: string): string {
  return value
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&([a-z]+);/gi, (all, name) => NAMED[name.toLowerCase()] ?? all);
}

function plainText(html: string): string {
  const text = html
    .replace(/<(\/)?(p|div|li|h[1-6]|br|blockquote|figcaption|tr)[^>]*>/gi, " ")
    .replace(/<[^>]+>/g, "");
  return decodeEntities(text).replace(/\s+/g, " ").replace(/\s+([.,;:!?»%])/g, "$1").trim();
}

function slugify(value: string): string {
  const base = value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 72);
  return base || "sezione";
}

function excerptFrom(html: string): string {
  const text = plainText(html).replace(/\s*(\[…\]|…)\s*$/, "").trim();
  if (text.length <= 180) return text;
  const cut = text.slice(0, 180);
  const space = cut.lastIndexOf(" ");
  return `${(space > 80 ? cut.slice(0, space) : cut).trim()}…`;
}

/** Pagine di questo sito. I post diventano /blog/; il resto del vecchio sito resta sul dominio attuale. */
function localHref(href: string, type?: string): string | null {
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return null;
  let url: URL;
  try {
    url = new URL(href, WORDPRESS_URL);
  } catch {
    return null;
  }
  if (url.hostname.replace(/^www\./, "") !== "rifipack.it") return null;
  const parts = url.pathname.split("/").filter(Boolean);
  if (parts[0] === "category" && parts[1]) return `/blog/categoria/${parts[1]}/`;
  if (parts[0] === "blog" && parts[1]) return `/blog/${parts[1]}/${url.hash}`;
  if (parts.length !== 1) return null;
  const slug = parts[0];
  if (slug === "contatti") return "/#preventivo";
  if (products.has(slug)) return `/${slug}/${url.hash}`;
  if (sectors.has(slug)) return `/settori/${slug}/${url.hash}`;
  if (type === "post") return `/blog/${slug}/${url.hash}`;
  return null;
}

function rewriteLinks(html: string): string {
  return html.replace(/<a\b([^>]*)>/gi, (full, attrs: string) => {
    const hrefMatch = attrs.match(/\bhref="([^"]*)"/i);
    if (!hrefMatch) return full;
    const typeMatch = attrs.match(/\btype="([^"]*)"/i);
    const next = localHref(hrefMatch[1], typeMatch?.[1]);
    const href = next ?? hrefMatch[1];
    let cleaned = attrs.replace(/\s(?:type|id)="[^"]*"/gi, "").replace(/\bhref="[^"]*"/i, `href="${href}"`);
    if (/^https?:/i.test(href)) {
      if (!/\btarget=/i.test(cleaned)) cleaned += ' target="_blank"';
      if (!/\brel=/i.test(cleaned)) cleaned += ' rel="noopener noreferrer"';
    }
    return `<a${cleaned}>`;
  });
}

function removeDivMatching(html: string, test: (openTag: string) => boolean): string {
  let cursor = 0;
  while (cursor < html.length) {
    const open = /<div\b[^>]*>/gi;
    open.lastIndex = cursor;
    const match = open.exec(html);
    if (!match) break;
    if (!test(match[0])) {
      cursor = match.index + match[0].length;
      continue;
    }
    const tags = /<\/?div\b[^>]*>/gi;
    tags.lastIndex = match.index;
    let depth = 0;
    let end = -1;
    let tag: RegExpExecArray | null;
    while ((tag = tags.exec(html))) {
      depth += tag[0].startsWith("</") ? -1 : 1;
      if (depth === 0) {
        end = tag.index + tag[0].length;
        break;
      }
    }
    if (end < 0) break;
    html = html.slice(0, match.index) + html.slice(end);
    cursor = match.index;
  }
  return html;
}

function addHeadingIds(html: string): { html: string; headings: Heading[] } {
  const headings: Heading[] = [];
  const used = new Set<string>();
  const next = html.replace(/<h([23])\b([^>]*)>([\s\S]*?)<\/h\1>/gi, (_, level: string, attrs: string, inner: string) => {
    const text = plainText(inner);
    if (!text) return _;
    let id = slugify(text);
    let n = 2;
    while (used.has(id)) {
      id = `${slugify(text)}-${n}`;
      n += 1;
    }
    used.add(id);
    headings.push({ id, text, level: Number(level) as 2 | 3 });
    const clean = attrs.replace(/\sid="[^"]*"/i, "");
    return `<h${level}${clean} id="${id}">${inner}</h${level}>`;
  });
  return { html: next, headings };
}

export function formatArticleHtml(source: string): { html: string; headings: Heading[] } {
  let html = source.replace(/<!--[\s\S]*?-->/g, "");
  html = removeDivMatching(html, (tag) => /ez-toc/i.test(tag));
  html = html
    .replace(/<span\b[^>]*class="[^"]*ez-toc-section(?:-end)?[^"]*"[^>]*>\s*<\/span>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<div\b[^>]*\bwp-block-spacer\b[^>]*>\s*<\/div>/gi, "")
    .replace(/<p\b[^>]*>(?:\s|&nbsp;|&#160;)*<\/p>/gi, "")
    .replace(/\sstyle="[^"]*"/gi, "");
  html = rewriteLinks(html);
  html = html.replace(/<img\b([^>]*)>/gi, (_, attrs: string) => {
    let next = attrs.replace(/\bsrc="(\/wp-content\/[^"]+)"/i, `src="${WORDPRESS_URL}$1"`);
    if (!/\bloading=/i.test(next)) next += ' loading="lazy"';
    if (!/\bdecoding=/i.test(next)) next += ' decoding="async"';
    return `<img${next}>`;
  });
  const headed = addHeadingIds(html);
  html = headed.html.replace(/<p class="wp-block-paragraph">/, '<p class="wp-block-paragraph lead">');
  return { html: html.trim(), headings: headed.headings };
}

const dateFormat = new Intl.DateTimeFormat("it-IT", { day: "numeric", month: "long", year: "numeric" });

function authorFrom(post: WPPost): Article["author"] {
  const raw = post._embedded?.author?.[0];
  const fallback = `${company.payoff}. ${hero.sub}`;
  if (raw?.name && !raw.code) {
    const description = plainText(raw.description || "");
    return {
      name: decodeEntities(raw.name),
      description: description || fallback,
      avatar: raw.avatar_urls?.["96"],
    };
  }
  return { name: "Rifipack", description: fallback };
}

export function normalizePost(post: WPPost): Article {
  const formatted = formatArticleHtml(post.content?.rendered || "");
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  const terms = (post._embedded?.["wp:term"] ?? []).flat().filter((term) => term.taxonomy === "category");
  const image = media?.source_url && !media.code
    ? {
        src: media.source_url,
        alt: media.alt_text?.trim() || plainText(post.title.rendered),
        width: media.media_details?.width || 1600,
        height: media.media_details?.height || 900,
      }
    : undefined;
  return {
    id: post.id,
    slug: post.slug,
    title: plainText(post.title.rendered),
    excerpt: excerptFrom(formatted.html || post.excerpt?.rendered || ""),
    html: formatted.html,
    headings: formatted.headings,
    date: post.date,
    modified: post.modified,
    dateLabel: dateFormat.format(new Date(post.date)),
    image,
    categories: terms.map((term) => ({ name: decodeEntities(term.name), slug: term.slug })),
    categoryIds: post.categories ?? terms.map((term) => term.id),
    author: authorFrom(post),
  };
}
