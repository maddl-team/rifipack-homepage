import type { Img } from "@/content/products/types";

/** Blocco di testo con titolo. */
export type SectorBlock = { title: string; text: string };

/**
 * Pagina settore. Il template è unico: una pagina nuova è un file in src/content/sectors/
 * registrato in index.ts.
 */
export type SectorPage = {
  slug: string;
  /** Nome breve per breadcrumb e dati strutturati. */
  name: string;
  seo: { title: string; description: string };
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    image: Img;
    caption?: string;
  };
  /** Sezioni presenti solo se il testo della pagina le prevede. */
  benefits?: { eyebrow: string; title: string; intro?: string; items: SectorBlock[] };
  process?: { eyebrow: string; title: string; intro?: string; steps: SectorBlock[] };
  materials?: { eyebrow: string; title: string; intro?: string; image: Img; items: SectorBlock[] };
  solutions?: { eyebrow: string; title: string; intro?: string; items: (SectorBlock & { image: Img })[] };
  finishes?: { eyebrow: string; title: string; intro?: string; items: SectorBlock[] };
  faqs: { q: string; a: string }[];
};
