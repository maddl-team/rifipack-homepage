/**
 * Modello di una pagina prodotto. Ogni pagina nuova è un file in src/content/products/
 * che esporta un oggetto di questo tipo e viene registrato in index.ts:
 * layout, SEO, dati strutturati e modulo si generano da qui.
 */
export type Img = { src: string; w: number; h: number; alt: string };
export type GalleryItem = Img;

export type ProductPage = {
  /** Ultimo segmento dell'URL: uguale a quello attuale di rifipack.it per non perdere posizionamento. */
  slug: string;
  /** Nome breve per breadcrumb e dati strutturati. */
  name: string;
  /** Famiglia di prodotto (home: sezione "I nostri prodotti"). */
  family: string;
  seo: { title: string; description: string };
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    /** Punti di forza: titolo breve + frase. */
    usps: { title: string; text: string }[];
    image: Img;
    /** Didascalia sotto l'immagine (facoltativa). */
    caption?: string;
  };
  gallery: { eyebrow: string; title: string; intro: string; items: GalleryItem[]; initial: number; moreLabel: string };
  /** Blocchi descrittivi numerati, ognuno con il suo H2. */
  sections: { title: string; paragraphs: string[] }[];
  sectionsCta: string;
  /** Domande frequenti, scritte a partire dai testi della pagina. */
  faqs?: { q: string; a: string }[];
  /** Modulo preventivo specifico del prodotto. */
  form: {
    title: string;
    intro: string;
    /** Modelli scelti con tessere-immagine (stesso elenco del modulo originale). */
    variants: {
      label: string;
      options: {
        label: string;
        image: string;
        /** Se presenti, quantità e misure dipendono dal modello scelto, come nel modulo originale. */
        quantities?: string[];
        sizes?: string[];
      }[];
    };
    quantities: { label: string; options: string[]; /** Campo libero, non un menu. Sul modulo originale è facoltativo. */ free?: boolean };
    sizes: { label: string; options: string[] };
  };
  /** Slug dei prodotti suggeriti in fondo alla pagina (se manca: tutti gli altri). */
  related?: string[];
};
