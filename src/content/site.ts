/**
 * Unica sorgente dei contenuti della homepage.
 * Origine: rifipack.it (letto il 22 ottobre 2026) e blueprint di Fase 4.
 * Quando arriverà WordPress headless cambia solo questo file, non i componenti.
 */

export const SITE_URL = "https://www.rifipack.it";

/** Valori non presenti sul sito attuale: sono FITTIZI e vanno verificati con Rifipack. */
export const PLACEHOLDER_FACTS = {
  moq: "100 pezzi",
  quoteTime: "24 ore lavorative",
  deliveryTime: "7-15 giorni lavorativi",
} as const;

export const company = {
  legalName: "RIFIPACK Srl",
  vat: "09926201006",
  address: { street: "Via Cherasco 335", zip: "00123", city: "Roma", province: "RM", country: "IT" },
  phone: { display: "06 305 0860", href: "tel:+39063050860", e164: "+39063050860" },
  mobile: { display: "+39 324 794 6947", href: "tel:+393247946947", whatsapp: "https://wa.me/393247946947" },
  email: "info@rifipack.it",
  payoff: "Creative Packaging",
  mepa: true,
} as const;

/** Voci semplici. Prodotti e Settori sono menu a tendina costruiti in Header dai registri delle pagine. */
export const nav = [
  { label: "Portfolio", href: "https://www.rifipack.it/portfolio/", external: true },
  { label: "Chi siamo", href: "https://www.rifipack.it/chi-siamo/", external: true },
  { label: "Contatti", href: "#preventivo" },
] as const;

export const links = {
  shop: "https://shop.rifipack.it/",
  catalog: "https://catalog.on-catalogue.com/view/316666780/",
  portfolio: "https://www.rifipack.it/portfolio/",
  blog: "https://www.rifipack.it/blog/",
  // URL non letto dal sito: da verificare prima della pubblicazione.
  privacy: "https://www.rifipack.it/privacy-policy/",
} as const;

export const social = [
  { label: "Instagram", href: "https://www.instagram.com/rifipack_creative_packaging/" },
  { label: "Facebook", href: "https://www.facebook.com/rifipackcreativepackaging" },
  { label: "TikTok", href: "https://www.tiktok.com/@rifipack" },
  { label: "YouTube", href: "https://www.youtube.com/@RifipackCreativepackaging" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/rifipack/" },
  { label: "Google", href: "https://g.co/kgs/rENB1NE" },
] as const;

export const hero = {
  lines: ["Il tuo", "packaging", "personalizzato"],
  accentLine: 2,
  sub: "Shopper, scatole, packaging alimentare, etichette e nastri con il tuo marchio. Progettati con chi li produce, Made in Italy.",
  primaryCta: "Richiedi un preventivo",
  secondaryCta: "Vedi i prodotti",
  imageAlt: "Shopper di lusso personalizzata con manici in nastro",
} as const;

export const scene = {
  title: "Dalla carta al tuo marchio",
  cta: "Richiedi un preventivo",
  moments: [
    {
      n: "01",
      name: "Apri",
      text: "Ogni confezione racconta il tuo marchio prima ancora di essere aperta.",
      image: "/img/shopper.jpg",
      alt: "Shopper di lusso personalizzata",
    },
    {
      n: "02",
      name: "Scopri",
      text: "Carta, kraft, tessuto, cartone: scegli materiale e formato con chi li produce.",
      image: "/img/kraft.jpg",
      alt: "Scatola kraft aperta con stampa personalizzata",
    },
    {
      n: "03",
      name: "Personalizza",
      text: "Il tuo logo e i tuoi colori sulla confezione: ne parliamo insieme.",
      image: "/img/borse.jpg",
      alt: "Borse in tessuto personalizzate",
    },
    {
      n: "04",
      name: "Ordina",
      text: "Richiedi un preventivo o chiama: ti seguiamo noi.",
      image: "/img/coffee.jpg",
      alt: "Bicchieri e coffee kit personalizzati",
    },
  ],
} as const;

export type ProductFamily = {
  id: string;
  title: string;
  blurb: string;
  image: string | null;
  imageAlt: string;
  products: { label: string; href: string }[];
};

const P = (path: string) => `${SITE_URL}/${path}/`;

/**
 * Le 4 famiglie sono quelle del sito attuale; l'assegnazione dei 15 prodotti
 * alle famiglie è una proposta di Fase 4 (il sito li elenca senza raggrupparli).
 */
export const products = {
  title: "I nostri prodotti Made in Italy",
  families: [
    {
      id: "shopping-bag",
      title: "Shopping bag",
      blurb: "Buste di carta, shopper di lusso e borse in tessuto con il tuo marchio.",
      image: "/img/shopper.jpg",
      imageAlt: "Shopper di lusso personalizzata",
      products: [
        { label: "Shopper di lusso personalizzate", href: P("shopper-in-carta-lusso") },
        { label: "Buste carta personalizzate", href: P("buste-economiche-in-carta") },
        { label: "Shopper di plastica", href: P("shopper-in-plastica-bio") },
        { label: "Borse in tessuto", href: P("shopping-bag-in-tessuto-personalizzate") },
      ],
    },
    {
      id: "packaging-personalizzato",
      title: "Packaging personalizzato",
      blurb: "Soluzioni su misura per food & beverage, regalo e vendita.",
      image: "/img/kraft.jpg",
      imageAlt: "Scatola kraft con stampa personalizzata",
      products: [
        { label: "Packaging alimentare", href: P("packaging-alimentare-personalizzato") },
        { label: "Sacchetti in alluminio per alimenti", href: P("sacchetti-alluminio-alimenti") },
        { label: "Scatole regalo di lusso", href: P("scatole-regalo-lusso") },
        { label: "Carte regalo e imballaggio", href: P("carta-regalo-personalizzata") },
      ],
    },
    {
      id: "spedizioni",
      title: "Prodotti per spedizioni",
      blurb: "Scatole per e-commerce e nastro adesivo personalizzati.",
      image: "/img/spedizioni.jpg",
      imageAlt: "Scatole per e-commerce personalizzate, bianca e avana",
      products: [
        { label: "Scatole per e-commerce", href: P("buste-e-scatole-e-commerce-personalizzate") },
        { label: "Nastri adesivi", href: P("nastro-adesivo-personalizzati") },
      ],
    },
    {
      id: "etichette",
      title: "Etichette e adesivi",
      blurb: "Etichette, nastri e cartellini per campagne e confezioni.",
      image: "/img/etichette.jpg",
      imageAlt: "Etichette in tessuto personalizzate",
      products: [
        { label: "Etichette in tessuto", href: P("etichette-in-tessuto") },
        { label: "Etichette adesive", href: P("etichette-adesive") },
        { label: "Nastri in raso", href: P("nastri-raso") },
        { label: "Cartellini personalizzati", href: P("cartellini-personalizzati") },
      ],
    },
  ] satisfies ProductFamily[],
  gadget: {
    label: "Gadget personalizzati",
    href: P("gadget-personalizzati"),
    catalogLabel: "Catalogo Gadget 2026",
  },
  cta: "Richiedi un preventivo",
} as const;

export const why = {
  title: "Perché scegliere Rifipack",
  items: [
    {
      n: "01",
      title: "Made in Italy",
      text: "Produzione italiana, con la garanzia di chi segue il lavoro dall'inizio alla consegna.",
    },
    {
      n: "02",
      title: "Su misura",
      text: "Font, logo, colori aziendali e pittogrammi: la confezione parla il linguaggio del tuo marchio.",
    },
    {
      n: "03",
      title: "Materiali responsabili",
      text: "Buste di carta biodegradabili, sacchetti compostabili, shopper in tela e plastica riciclata.",
    },
    {
      n: "04",
      title: "Assistenza attenta",
      text: "Un servizio clienti disponibile a progettare con te confezioni coerenti con la tua identità.",
    },
  ],
  cta: "Parti dal preventivo",
} as const;

export const trust = {
  title: "Dati e riferimenti",
  portfolioCta: "Guarda il portfolio",
  /** Loghi inseriti dalle foto esistenti: liberatoria da verificare. */
  logosNote: "Referenze da confermare con Rifipack prima della pubblicazione.",
} as const;

export const quote = {
  title: "Dicci cosa ti serve",
  intro: "Tre passi, pochi campi. Preferisci parlare con noi? Chiama o scrivi su WhatsApp.",
  steps: ["01 Chi sei", "02 Contatti", "03 Richiesta"],
  productSteps: ["01 Chi sei", "02 Prodotto", "03 Invio"],
  consent:
    "Compilando questo modulo autorizzo il trattamento dei dati secondo il Regolamento Europeo (GDPR n. 679/2016). Leggi la Privacy Policy prima di inviare.",
  success: {
    title: "Richiesta ricevuta",
  },
} as const;

export const shop = {
  eyebrow: "Shop online",
  title: "Preferisci ordinare online?",
  text: "Una selezione di prodotti pronti si acquista direttamente sullo shop.",
  cta: "Vai allo shop",
} as const;

export const seo = {
  title: "Packaging personalizzato Made in Italy: shopper e scatole | Rifipack",
  description:
    "Packaging personalizzato Made in Italy per la tua attività: shopper, scatole, packaging alimentare, etichette e nastri con il tuo marchio. Richiedi un preventivo.",
} as const;
