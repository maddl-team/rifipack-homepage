import type { ProductPage } from "./types";
import { busteEconomicheGallery } from "./buste-economiche.gallery";

/**
 * Testi: quelli della pagina attuale di rifipack.it/buste-economiche-in-carta/ (letta il 26 ottobre 2026),
 * invariati, tranne dove indicato come NUOVO.
 * Quantità e misure seguono i due elenchi del modulo originale: uno per le maniglie piatte, uno per le ritorte.
 */
const piatta = {
  quantities: ["600 pz", "1200 pz", "2400 pz", "4800 pz"],
  sizes: ["18x8x24h", "22x10x29h", "27x12x37h", "32x13x41h", "32x17x45h", "45x15x49h"],
};
const ritorta = {
  quantities: ["400 pz", "800 pz", "1600 pz", "3200 pz"],
  sizes: ["14x8,5x21,5h", "18x8x24h", "22x10x29h", "27x12x37h", "36x12x41h", "45x15x49h", "55x15x49h"],
};

const variante = (label: string, file: string, group: typeof piatta) => ({
  label,
  image: `/img/prodotti/buste-economiche/varianti/${file}.webp`,
  ...group,
});

export const busteEconomiche: ProductPage = {
  slug: "buste-economiche-in-carta",
  name: "Buste in carta economiche personalizzate",
  family: "Shopping bag",
  seo: {
    title: "Buste di carta personalizzate economiche | Rifipack",
    description:
      "Ecco le buste in carta economiche e personalizzate. Scegli tra vari formati e materiali per valorizzare il tuo brand con shopper uniche.",
  },
  hero: {
    eyebrow: "Shopping bag",
    h1: "Buste di carta economiche personalizzate",
    lead:
      "Le buste in carta economiche sono prodotte esclusivamente in Italia e sono la soluzione ideale per chi è alla ricerca di un shopping bag dalla linea semplice, versatile con un ottimo rapporto qualità/prezzo. Senza però rinunciare alla personalizzazione dei manici e delle stampe. Ma anche del tipo di carta che decidi di utilizzare per il tuo prodotto.",
    usps: [
      { title: "Prodotte in Italia", text: "realizzate esclusivamente in Italia." },
      { title: "Qualità e prezzo", text: "linea semplice e versatile, con un ottimo rapporto qualità/prezzo." },
      { title: "Personalizzazione", text: "manici, stampe e tipo di carta a tua scelta." },
      { title: "Su misura", text: "shopper in carta adatte al budget del tuo negozio." },
    ],
    image: {
      src: busteEconomicheGallery[0].src,
      w: busteEconomicheGallery[0].w,
      h: busteEconomicheGallery[0].h,
      alt: "Shopper economica con maniglia ritorta e fondo largo",
    },
    caption: "Maniglia ritorta, fondo largo",
  },
  gallery: {
    eyebrow: "Realizzazioni", // NUOVO
    title: "Le nostre buste economiche", // NUOVO
    intro:
      "Le shopper economiche di carta possono trasformare ogni esperienza di acquisto in qualcosa di unico. Se gestisci un negozio e vuoi che il packaging dei tuoi prodotti rispecchi i valori del tuo brand, le nostre borse di carta low cost sono la scelta ideale. Offriamo soluzioni su misura per shopper in carta personalizzate, adatte al tuo budget.",
    items: busteEconomicheGallery,
    initial: 12,
    moreLabel: "Mostra tutte le realizzazioni", // NUOVO
  },
  sections: [
    {
      title: "Il punto di forza: la qualità della materia prima",
      paragraphs: [
        "Ogni sacchetto di carta personalizzato che realizziamo è frutto di un’attenta selezione di materiali, come la carta kraft personalizzata, perfetta per chi cerca una bag notevole ma resistente al tempo stesso. Siamo specializzati in shopper di carta personalizzate ed economiche che uniscono eleganza e convenienza, senza mai compromettere la qualità.",
        "Inoltre, nel nostro catalogo trovi le borse per qualsiasi esigenza: dalle buste in carta personalizzate per eventi alle borse di carta personalizzate – ma sempre economiche – per il retail. Possiamo soddisfare le necessità del piccolo negozio come quelle della GDO.",
      ],
    },
    {
      title: "Non dimentichiamo la stampa personalizzata",
      paragraphs: [
        "Buste di carta economiche non vuol dire scarsa attenzione ai dettagli. Infatti, anche in questo caso la stampa è uno degli aspetti più importanti nel creare un’immagine di impatto.",
        "Grazie alla nostra esperienza nella stampa su buste di carta, ti permettiamo di scegliere la migliore combinazione possibile di forme e colori. Indipendentemente dal tipo di carta richiesta. Utilizziamo inchiostri di qualità che garantiscono colori vivaci e duraturi anche sulle shopper di carta personalizzate di color avana, spesso meno vivace rispetto al bianco.",
      ],
    },
    {
      title: "Shopper economiche per ogni esigenza",
      paragraphs: [
        "Se sei su questa pagina è perché hai bisogno di buste di carta economiche e personalizzate, belle da vedere e pratiche. Sappiamo che il costo è un fattore importante per molte aziende, probabilmente anche per la tua. Ecco perché proponiamo una vasta gamma di shopping bag in carta che puoi personalizzare con il logo a prezzi bassi.",
        "Ma il low cost non vuol rinunciare a qualità e durata. Grazie a una gestione efficiente del processo produttivo, possiamo garantirti sempre e comunque borse di carta adatte a far spiccare il tuo brand. Le nostre buste personalizzate di carta sono progettate per offrire impatto visivo e user experience, anche se hai a disposizione un budget contenuto.",
      ],
    },
    {
      title: "Ordina le buste di carta personalizzate economiche",
      paragraphs: [
        "Possiamo guidarti per realizzare la tua shopping bag economica di carta, dalla selezione dei materiali alla personalizzazione con il logo. Siamo a disposizione sia per shopper su carta da usare in negozio, sia per realizzare sacchetti personalizzati carta da lasciare durante un evento, ti offriamo un servizio completo, dalla progettazione alla consegna.",
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
        variante("Bianca ritorta", "bianca-ritorta", ritorta),
        variante("Busta fondo largo", "busta-fondo-largo", piatta),
        variante("Formato pizza", "formato-pizza", ritorta),
        variante("Maniglia piatta", "maniglia-piatta", piatta),
        variante("Piatta avana", "piatta-avana", piatta),
        variante("Piatta quadricromia", "piatta-quadricromia", piatta),
        variante("Piatta, stampa 1 colore", "piatta-stampa-1-colore", piatta),
        variante("Riciclata avana", "riciclata-avana", ritorta),
        variante("Riciclata piatta", "riciclata-piatta", piatta),
        variante("Ritorta bianca", "ritorta-bianca", ritorta),
        variante("Ritorta bottiglia", "ritorta-bottiglia", ritorta),
        variante("Ritorta fondo pieno", "ritorta-fondo-pieno", ritorta),
        variante("Ritorta fondo pieno 2", "ritorta-fondo-pieno-2", ritorta),
        variante("Ritorta fondo pieno 3", "ritorta-fondo-pieno-3", ritorta),
        variante("Ritorta quadricromia", "ritorta-quadricromia", ritorta),
        variante("Ritorta, stampa 1 colore", "ritorta-stampa-1-colore", ritorta),
        variante("Ritorta, avana", "ritorta-avana", ritorta),
        variante("Ritorta, stampa 2 colori", "ritorta-stampa-2-colori", ritorta),
        variante("Sealing avana", "sealing-avana", ritorta),
        variante("Shopper delivery", "shopper-delivery", ritorta),
        variante("Shopper food", "shopper-food", piatta),
        variante("Shopper sushi", "shopper-sushi", ritorta),
        variante("Stampa quadricromia", "stampa-quadricromia", piatta),
      ],
    },
    quantities: { label: "Quantità", options: piatta.quantities },
    sizes: { label: "Misure in cm", options: piatta.sizes },
  },
};
