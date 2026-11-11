import type { SectorPage } from "./types";

/** Testo dal documento SEO, senza riscritture. */
export const packagingCosmetici: SectorPage = {
  slug: "packaging-cosmetici-personalizzato",
  name: "Packaging cosmetici",
  seo: {
    title: "Packaging Cosmetici e Profumeria Personalizzato | Rifipack",
    description:
      "Crea scatole e astucci su misura per i tuoi cosmetici e profumi. Packaging personalizzato con finiture di lusso, inserti protettivi e cartoncini certificati.",
  },
  hero: {
    eyebrow: "Settori",
    h1: "Packaging per Cosmetici Personalizzato: Bellezza che Inizia dalla Scatola",
    lead:
      "Nel settore beauty, la prima impressione è tutto. Un packaging per cosmetici personalizzato non si limita a proteggere il prodotto, ma comunica immediatamente i valori del tuo brand: purezza, ricerca scientifica, lusso o sostenibilità. In Rifipack, progettiamo astucci lineari e scatole rigide ad altissima precisione cartotecnica, studiati per esaltare i tuoi prodotti sugli scaffali e regalare un'esperienza di unboxing memorabile.",
    image: {
      src: "/img/prodotti/shopper-lusso/10-sephora-shopper-lusso-30x30-10-non-plastificata-bellezza-cura-del-corp.webp",
      w: 870,
      h: 1000,
      alt: "Shopper di lusso per bellezza e cura del corpo",
    },
    caption: "Shopper beauty",
  },
  benefits: {
    eyebrow: "Beauty",
    title: "L'Importanza Strategica del Packaging nel Settore Beauty",
    intro: "Il mercato della cosmesi è iper-competitivo. Investire in un packaging cosmetico di alta gamma offre vantaggi misurabili:",
    items: [
      {
        title: "Differenziazione a Scaffale",
        text: "Nobilitazioni tattili e visive (soft-touch, stampa a caldo) catturano l'attenzione.",
      },
      {
        title: "Protezione di Contenitori Fragili",
        text: "I cosmetici utilizzano flaconi in vetro o airless. Un'architettura interna (inlay) sagomata ammortizza gli urti.",
      },
      {
        title: "Compliance Normativa",
        text: "Gli astucci devono garantire spazio e leggibilità per INCI, PAO, lotti e codici a barre.",
      },
    ],
  },
  process: {
    eyebrow: "Produzione",
    title: "Il Processo Cartotecnico per la Cosmetica: Precisione Millimetrica",
    steps: [
      {
        title: "Studio degli Ingombri",
        text: "Riceviamo il flacone originale per calcolare al millimetro la fustella esterna.",
      },
      {
        title: "Prototipazione",
        text: "Realizziamo un campione neutro tagliato a plotter per testare la macchinabilità.",
      },
      {
        title: "Controllo Colore",
        text: "Utilizziamo spettrofotometri per garantire che il tuo Pantone® sia identico in ogni lotto.",
      },
    ],
  },
  materials: {
    eyebrow: "Materiali",
    title: "Tipologie di Astucci e Materiali Consigliati",
    image: {
      src: "/img/prodotti/shopper-lusso/37-cotril-shopper-lusso.webp",
      w: 750,
      h: 1000,
      alt: "Shopper di lusso per un brand di bellezza",
    },
    items: [
      {
        title: "Cartoncino SBS (Solid Bleached Sulphate)",
        text: "Standard aureo per la cosmesi premium. Cartoncino di pura cellulosa, ultra-bianco.",
      },
      {
        title: "Cartoncino Kraft e Carte Riciclate",
        text: "Ideali per brand di \"Clean Beauty\".",
      },
      {
        title: "Scatole Rigide Rivestite",
        text: "Soluzioni in cartone pressato da 2-3 mm rivestite con carte pregiate per profumi di nicchia.",
      },
    ],
  },
  finishes: {
    eyebrow: "Finiture",
    title: "Nobilitazioni: L'Esperienza Tattile e Visiva",
    items: [
      {
        title: "Plastificazione Soft-Touch",
        text: "Skincare, creme viso, sieri. Sensazione vellutata al tatto che richiama la morbidezza della pelle.",
      },
      {
        title: "Stampa a Caldo (Hot Foil)",
        text: "Profumi, make-up luxury. Dettagli in oro o argento che comunicano immediato prestigio.",
      },
      {
        title: "Verniciatura UV a Spessore",
        text: "Packaging minimalista. Crea un contrasto lucido/opaco ed evidenzia loghi in rilievo.",
      },
    ],
  },
  faqs: [
    {
      q: "Realizzate interni sagomati (inlay) per tenere fermi i flaconi in vetro?",
      a: "Sì, sviluppiamo interni sagomati (culle) in cartoncino fustellato o schiuma, progettati per bloccare flaconi in vetro, prevenendo rotture durante il trasporto.",
    },
    {
      q: "È possibile stampare l'astuccio anche all'interno?",
      a: "Certo. La stampa interna (reverse printing) permette di inserire texture o istruzioni d'uso direttamente nel cartone, evitando il bugiardino in carta.",
    },
    {
      q: "I vostri astucci sono compatibili con le macchine astucciatrici automatiche?",
      a: "Assolutamente sì. Studiamo la \"macchinabilità\" della fustella (incollaggio lineare) per garantire che scorrano perfettamente sulle linee automatizzate.",
    },
  ],
};
