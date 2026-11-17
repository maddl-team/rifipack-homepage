export type WPPost = {
  id: number;
  date: string;
  modified: string;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  categories?: number[];
  _embedded?: {
    author?: Array<{
      name?: string;
      description?: string;
      code?: string;
      avatar_urls?: Record<string, string>;
    }>;
    "wp:featuredmedia"?: Array<{
      source_url?: string;
      alt_text?: string;
      code?: string;
      media_details?: { width?: number; height?: number };
    }>;
    "wp:term"?: Array<Array<{ id: number; name: string; slug: string; taxonomy: string }>>;
  };
};

export type WPCategory = {
  id: number;
  name: string;
  slug: string;
  count: number;
  description: string;
};

export type Heading = { id: string; text: string; level: 2 | 3 };

export type ArticleAuthor = { name: string; description: string; avatar?: string };

export type ArticleImage = { src: string; alt: string; width: number; height: number };

export type ArticleCategory = { name: string; slug: string };

export type Article = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  html: string;
  headings: Heading[];
  date: string;
  modified: string;
  dateLabel: string;
  image?: ArticleImage;
  categories: ArticleCategory[];
  categoryIds: number[];
  author: ArticleAuthor;
};
