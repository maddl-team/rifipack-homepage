import type { ProductPage } from "./types";
import { etichetteAdesiveGallery } from "./etichette-adesive.gallery";

/**
 * Testi: quelli della pagina attuale di rifipack.it/etichette-adesive/
 * (letta il 10 novembre 2026), invariati, tranne dove indicato come NUOVO.
 * Il modulo ha la quantità e non le misure.
 */
const variante = (label: string, file: string) => ({
  label,
  image: `/img/prodotti/etichette-adesive/varianti/${file}.webp`,
});

export const etichetteAdesive: ProductPage = {
  slug: "etichette-adesive",
  name: "Etichette adesive",
  family: "Etichette e adesivi",
  seo: {
    title: "Etichette Adesive Personalizzate | Rifipack",
    description:
      "Scopri le etichette adesive personalizzate di Rifipack: alta qualità e design su misura. Ideali per packaging, branding e comunicazione.",
  },
  hero: {
    eyebrow: "Etichette e adesivi",
    h1: "Etichette adesive personalizzate",
    lead:
      "Le etichette adesive personalizzate sono strumenti versatili, pratici e indispensabili per valorizzare il packaging dei tuoi prodotti. Perfette per sigillare buste, scatole o confezioni, le etichette adesive Rifipack garantiscono qualità e personalizzazione, adattandosi a ogni esigenza. Scegli tra una vasta gamma di materiali, finiture e forme per creare etichette uniche che rappresentino al meglio il tuo brand.",
    usps: [
      { title: "Materiali", text: "carta, plastica o vinile, con una forte aderenza." },
      { title: "Stampa", text: "digitale e offset, nitida su logo, colori e grafiche." },
      { title: "Chiudibusta", text: "dimensioni, forme e design per buste, inviti e lettere." },
      { title: "Ogni settore", text: "food & beverage, moda, cosmetica e attività artigianali." },
    ],
    image: {
      src: etichetteAdesiveGallery[0].src,
      w: etichetteAdesiveGallery[0].w,
      h: etichetteAdesiveGallery[0].h,
      alt: "Eni Cafè, etichette adesive tonde",
    },
    caption: "Etichette adesive a rotolo",
  },
  gallery: {
    eyebrow: "Realizzazioni", // NUOVO
    title: "Le nostre etichette adesive", // NUOVO
    intro:
      "Le nostre etichette adesive vengono realizzate con materiali resistenti e duraturi, garantendo una forte aderenza su ogni superficie. Disponibili in carta, plastica o materiali speciali come il vinile, possono essere personalizzate con il tuo logo, colori e grafiche distintive. Grazie alla stampa digitale e offset di alta qualità, ogni dettaglio risulterà nitido e professionale.",
    items: etichetteAdesiveGallery,
    initial: 12,
    moreLabel: "Mostra tutte le realizzazioni", // NUOVO
  },
  sections: [
    {
      title: "Qualità e personalizzazione su misura",
      paragraphs: [
        "Le nostre etichette adesive vengono realizzate con materiali resistenti e duraturi, garantendo una forte aderenza su ogni superficie. Disponibili in carta, plastica o materiali speciali come il vinile, possono essere personalizzate con il tuo logo, colori e grafiche distintive. Grazie alla stampa digitale e offset di alta qualità, ogni dettaglio risulterà nitido e professionale.",
      ],
    },
    {
      title: "Chiudibusta personalizzati: l’attenzione ai dettagli che conquista i tuoi clienti",
      paragraphs: [
        "I chiudibusta personalizzati aggiungono un tocco di eleganza e cura al tuo packaging. Perfetti per buste regalo, inviti o lettere commerciali, contribuiscono a rafforzare l’immagine del tuo brand con un dettaglio ricercato e funzionale. Anche qui, la personalizzazione è massima: scegli dimensioni, forme e design che si adattano perfettamente al tuo stile..",
      ],
    },
    {
      title: "Etichette adesive e chiudibusta: soluzioni ideali per ogni settore",
      paragraphs: [
        "Sia che tu gestisca un negozio fisico, un e-commerce o un’attività artigianale, le nostre etichette adesive e i chiudibusta sono perfetti per aumentare il valore percepito dei tuoi prodotti. Sono ideali per settori come food & beverage, moda, cosmetica e tanti altri.",
      ],
    },
    {
      title: "Ordina le tue etichette adesive e chiudibusta personalizzate",
      paragraphs: [
        "Realizza ora le tue etichette adesive e chiudibusta personalizzati. Contattaci per ricevere supporto nella scelta dei materiali e delle personalizzazioni più adatte al tuo progetto. Grazie alla nostra esperienza, ti aiuteremo a creare soluzioni che valorizzano al massimo il tuo brand.",
      ],
    },
  ],
  sectionsCta: "Richiedi un preventivo",
  faqs: [
    {
      q: "Su che materiali sono fatte le etichette adesive?",
      a: "Su carta, plastica o vinile, con una forte aderenza e materiali resistenti. Si personalizzano con logo, colori e grafiche, in stampa digitale oppure offset, così il dettaglio resta nitido.",
    },
    {
      q: "Che differenza c’è tra etichetta e chiudibusta?",
      a: "L’etichetta valorizza la confezione. Il chiudibusta sigilla buste regalo, inviti e lettere commerciali, con dimensioni, forme e design scelti sul tuo stile. Nel modulo trovi anche il chiudibusta in PVC, le adesive tonde, quelle a quattro colori e le copriprezzo.",
    },
    {
      q: "Per quali settori funzionano?",
      a: "Food & beverage, moda, cosmetica e attività artigianali, in negozio o in un e-commerce. Servono ad alzare il valore percepito del prodotto con un dettaglio piccolo e preciso.",
    },
    {
      q: "Da quanti pezzi si parte?",
      a: "Nel modulo le quantità sono 3000 o 5000 pezzi. Le misure non sono un elenco chiuso: dimensioni e forme si scelgono insieme, in base a busta, scatola o confezione.",
    },
    {
      q: "Come si richiede il progetto?",
      a: "Dal modulo indichi il tipo di etichetta e la quantità. Poi ti aiutiamo a scegliere materiale, finitura e grafica, così l’adesivo rappresenta il brand e non è un’etichetta generica.",
    },
  ],
  form: {
    title: "Compila il form per avere il tuo prodotto personalizzato",
    intro: "Tre passi, pochi campi. Preferisci parlare con noi? Chiama o scrivi su WhatsApp.", // NUOVO
    variants: {
      label: "Seleziona il prodotto a cui sei interessato",
      options: [
        variante("Chiudibusta in PVC", "chiudibusta-pvc"),
        variante("Etichette adesive, stampa 4 colori", "adesive-4-colori"),
        variante("Etichette adesive tonde", "adesive-tonde"),
        variante("Etichette chiudibusta adesivi personalizzati con logo", "chiudibusta-logo"),
        variante("Etichette chiudibusta", "chiudibusta"),
        variante("Etichette copriprezzo", "copriprezzo"),
      ],
    },
    quantities: { label: "Quantità", options: ["3000 pz", "5000 pz"] },
    sizes: { label: "Misure in cm", options: [] },
  },
};
