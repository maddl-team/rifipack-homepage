import type { ProductPage } from "./types";
import { nastriRasoGallery } from "./nastri-raso.gallery";

/**
 * Testi: quelli della pagina attuale di rifipack.it/nastri-raso/
 * (letta il 10 novembre 2026), invariati, tranne dove indicato come NUOVO.
 * Il modulo non ha modelli da scegliere: la quantità è un campo libero e facoltativo.
 */
export const nastriRaso: ProductPage = {
  slug: "nastri-raso",
  name: "Nastri in raso",
  family: "Etichette e adesivi",
  seo: {
    title: "Nastri in Raso Personalizzati - Alta Qualità per Confezioni Raffinate",
    description:
      "Scopri i nastri in raso personalizzati di Rifipack: eleganza e qualità per confezioni regalo, packaging di lusso e decorazioni.",
  },
  hero: {
    eyebrow: "Etichette e adesivi",
    h1: "Nastri in raso personalizzati",
    lead:
      "I nastri in raso personalizzati sono la scelta ideale per chi desidera un packaging raffinato ed esclusivo. Perfetti per confezioni regalo, bomboniere o articoli di lusso, i nostri nastri in raso conferiscono un tocco di classe ai tuoi prodotti. Grazie alla possibilità di personalizzazione, puoi trasformare un semplice dettaglio in un potente strumento di branding.",
    usps: [
      { title: "Raso", text: "finitura morbida e lucente, in tanti colori e larghezze." },
      { title: "Il tuo brand", text: "logo, messaggio promozionale o un design più creativo." },
      { title: "Stampa", text: "serigrafia e rilievo a caldo, dal minimal all’elaborato." },
      { title: "Ogni occasione", text: "moda, gioielleria, cosmetica e food & beverage." },
    ],
    image: {
      src: nastriRasoGallery[0].src,
      w: nastriRasoGallery[0].w,
      h: nastriRasoGallery[0].h,
      alt: "Nastro in raso personalizzato, stampa su un lato",
    },
    caption: "Nastro in raso con logo",
  },
  gallery: {
    eyebrow: "Realizzazioni", // NUOVO
    title: "I nostri nastri in raso", // NUOVO
    intro:
      "Realizzati con raso di alta qualità, i nostri nastri garantiscono una finitura morbida e lucente, ideale per esaltare l’estetica delle tue confezioni. Offriamo una vasta gamma di colori, larghezze e opzioni di personalizzazione: dal logo aziendale al messaggio promozionale, fino a design più creativi.",
    items: nastriRasoGallery,
    initial: 12,
    moreLabel: "Mostra tutte le realizzazioni", // NUOVO
  },
  sections: [
    {
      title: "Nastri in raso di qualità superiore",
      paragraphs: [
        "Realizzati con raso di alta qualità, i nostri nastri garantiscono una finitura morbida e lucente, ideale per esaltare l’estetica delle tue confezioni. Offriamo una vasta gamma di colori, larghezze e opzioni di personalizzazione: dal logo aziendale al messaggio promozionale, fino a design più creativi.",
      ],
    },
    {
      title: "Personalizzazione su misura per il tuo brand",
      paragraphs: [
        "I nastri in raso Rifipack vengono personalizzati utilizzando tecniche di stampa avanzate, come la serigrafia e il rilievo a caldo, per garantire una resa impeccabile. Che tu voglia un design minimal o più elaborato, troveremo la soluzione perfetta per il tuo progetto.",
      ],
    },
    {
      title: "Adatti a ogni occasione e settore",
      paragraphs: [
        "I nastri personalizzati in raso sono perfetti per settori come la moda, la gioielleria, la cosmetica e il food & beverage. Utilizzali per confezionare regali aziendali, creare unboxing memorabili o semplicemente per distinguerti dalla concorrenza.",
      ],
    },
    {
      title: "Ordina i tuoi nastri in raso personalizzati",
      paragraphs: [
        "Contattaci oggi stesso per richiedere i tuoi nastri in raso personalizzati. Ti guideremo nella scelta di materiali, colori e grafiche per garantire un prodotto che esprima al meglio il valore del tuo brand.",
      ],
    },
  ],
  sectionsCta: "Richiedi un preventivo",
  faqs: [
    {
      q: "Che raso usate per i nastri?",
      a: "Raso di alta qualità, con finitura morbida e lucente. La gamma comprende tanti colori e larghezze, oltre al logo, al messaggio o a un disegno più creativo.",
    },
    {
      q: "Come si stampa il logo?",
      a: "In serigrafia o con rilievo a caldo, per una resa impeccabile. Può essere un logo, un messaggio promozionale o un design più creativo, dal minimal al più elaborato.",
    },
    {
      q: "Per quali confezioni sono adatti?",
      a: "Per regali, bomboniere e articoli di lusso, e per i settori moda, gioielleria, cosmetica e food & beverage. Si usano anche per i regali aziendali e per un unboxing memorabile.",
    },
    {
      q: "Devo scegliere un modello e una misura nel modulo?",
      a: "No. Non c’è un elenco di modelli né di misure fisse. Nel modulo puoi indicare la quantità, se la conosci già, ed è un campo facoltativo. Colori, larghezza e grafica li definiamo insieme nella richiesta.",
    },
    {
      q: "Come si chiede un’offerta?",
      a: "Compili il modulo della pagina con i dati e, se vuoi, la quantità. Ti guidiamo su materiale, colore e grafica, così il nastro esprime il valore del brand.",
    },
  ],
  form: {
    title: "Compila il modulo per ricevere un'offerta personalizzata per nastri in raso su misura",
    intro: "Tre passi, pochi campi. Preferisci parlare con noi? Chiama o scrivi su WhatsApp.", // NUOVO
    variants: { label: "Seleziona il prodotto a cui sei interessato", options: [] },
    quantities: { label: "Quantità", options: [], free: true },
    sizes: { label: "Misure in cm", options: [] },
  },
};
