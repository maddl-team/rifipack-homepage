import type { ProductPage } from "./types";
import { scatoleRegaloGallery } from "./scatole-regalo.gallery";

/**
 * Testi: quelli della pagina attuale di rifipack.it/scatole-regalo-lusso/
 * (letta il 10 novembre 2026), invariati, tranne dove indicato come NUOVO.
 * Il modulo ha la quantità e non le misure.
 */
const variante = (label: string, file: string) => ({
  label,
  image: `/img/prodotti/scatole-regalo/varianti/${file}.webp`,
});

export const scatoleRegalo: ProductPage = {
  slug: "scatole-regalo-lusso",
  name: "Scatole regalo di lusso",
  family: "Packaging personalizzato",
  seo: {
    title: "Scatole Regalo di Lusso - Packaging Elegante e Personalizzabile",
    description:
      "Scopri le scatole regalo di lusso Rifipack: eleganza, materiali pregiati e personalizzazione su misura. Richiedi un preventivo gratuito ora!",
  },
  hero: {
    eyebrow: "Packaging personalizzato",
    h1: "Scatole Regalo di Lusso",
    lead:
      "Eleva il valore dei tuoi regali con le nostre scatole regalo di lusso , perfette per chi cerca un packaging elegante e di alta qualità. Ideali per gioielli, accessori pregiati, bottiglie di vino e molto altro, le nostre scatole sono pensate per stupire con un design raffinato e materiali di pregio. Richiedi ora un preventivo personalizzato e scopri come possiamo rendere unico ogni tuo regalo.",
    usps: [
      { title: "Materiali pregiati", text: "resistenti e raffinati, per protezione e stile." },
      { title: "Chiusure", text: "a calamita, oppure fondo e coperchio." },
      { title: "Su misura", text: "logo, colori, texture e nastri del tuo marchio." },
      { title: "Made in Italy", text: "produzione italiana e consulenza dedicata." },
    ],
    image: {
      src: scatoleRegaloGallery[0].src,
      w: scatoleRegaloGallery[0].w,
      h: scatoleRegaloGallery[0].h,
      alt: "Scatola a calamita in carta nera",
    },
    caption: "Scatola a calamita",
  },
  gallery: {
    eyebrow: "Realizzazioni", // NUOVO
    title: "Le nostre scatole regalo", // NUOVO
    intro:
      "Le scatole regalo di lusso Rifipack rappresentano il connubio perfetto tra estetica e funzionalità:",
    items: scatoleRegaloGallery,
    initial: 12,
    moreLabel: "Mostra tutte le realizzazioni", // NUOVO
  },
  sections: [
    {
      title: "Materiali di Alta Qualità e Design Ricercato",
      paragraphs: [
        "Le scatole regalo di lusso Rifipack rappresentano il connubio perfetto tra estetica e funzionalità:",
        "Materiali pregiati : utilizziamo solo materiali resistenti e raffinati per garantire protezione e stile.",
        "Finiture eleganti : le nostre scatole sono disponibili in una vasta gamma di colori e texture per adattarsi a ogni occasione speciale.",
        "Chiusure sofisticate : scegli tra la praticità delle chiusure a calamita o l’eleganza senza tempo delle scatole con fondo e coperchio.",
      ],
    },
    {
      title: "Un Packaging di Lusso per Ogni Esigenza",
      paragraphs: [
        "Perfette per valorizzare prodotti di alta gamma, le nostre scatole regalo si prestano a molteplici utilizzi:",
        "Gioielli e oreficeria : confeziona anelli, collane e bracciali in modo impeccabile.",
        "Accessori di pregio : crea un impatto indimenticabile con portafogli, foulard e altri oggetti di lusso.",
        "Vini e liquori : rendi memorabile ogni occasione con scatole perfette per bottiglie pregiate. Ogni scatola è progettata per trasformare il packaging in un’esperienza che lascia il segno.",
      ],
    },
    {
      title: "Personalizzazione su Misura",
      paragraphs: [
        "Distinguiti con un packaging personalizzato, ideato per riflettere il tuo stile o quello del tuo brand:",
        "Logo e branding : aggiungi il tuo logo o elementi grafici per comunicare professionalità e cura dei dettagli.",
        "Colori esclusivi e texture uniche : scegli abbinamenti che rispecchiano la tua identità o l’evento che vuoi celebrare.",
        "Dettagli distintivi : dai rilievi eleganti ai nastri in tessuto, ogni dettaglio può essere personalizzato. Offriamo soluzioni completamente su misura per aziende e privati. Contattaci per discutere delle tue esigenze e ricevere una consulenza gratuita.",
      ],
    },
    {
      title: "Perché Scegliere Rifipack",
      paragraphs: [
        "Con anni di esperienza nel settore del packaging di lusso, Rifipack è il partner ideale per chi cerca scatole regalo che combinino eleganza e funzionalità. I nostri punti di forza includono:",
        "Materiali eco-sostenibili per un packaging di lusso responsabile.",
        "Produzione 100% Made in Italy.",
        "Consulenza dedicata per progetti su misura.",
        "Affidati a noi per rendere unico ogni regalo!",
      ],
    },
  ],
  sectionsCta: "Richiedi un preventivo",
  form: {
    title: "Compila il form per avere il tuo prodotto personalizzato",
    intro: "Tre passi, pochi campi. Preferisci parlare con noi? Chiama o scrivi su WhatsApp.", // NUOVO
    variants: {
      label: "Seleziona il prodotto a cui sei interessato",
      options: [
        variante("Scatole e-commerce", "scatole-e-commerce"),
        variante("Scatola panettone", "scatola-panettone"),
        variante("Scatola fondo e coperchio", "scatola-fondo-e-coperchio"),
        variante("Scatola colomba", "scatola-colomba"),
        variante("Scatola calamita", "scatola-calamita"),
        variante("Scatola regalo shopper", "scatola-regalo-shopper"),
        variante("Scatola calamita gioielleria", "scatola-calamita-gioielleria"),
        variante("Scatola regalo bottiglia", "scatola-regalo-bottiglia"),
      ],
    },
    quantities: { label: "Quantità", options: ["500 pz", "1000 pz", "2500 pz", "5000 pz", "10000 pz"] },
    sizes: { label: "Misure in cm", options: [] },
  },
};
