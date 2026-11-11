import type { ProductPage } from "./types";
import { nastroAdesivoGallery } from "./nastro-adesivo.gallery";

/**
 * Testi: quelli della pagina attuale di rifipack.it/nastro-adesivo-personalizzati/
 * (letta il 10 novembre 2026), invariati, tranne dove indicato come NUOVO.
 * Il modulo comprende nastri ed etichette: quantità diverse, misure solo per i nastri.
 */
const etichette = {
  quantities: ["144 pz", "288 pz", "360 pz"],
  sizes: [] as string[],
};
const nastri = {
  quantities: ["144 pz", "288 pz", "360 pz", "504 pz", "720 pz"],
  sizes: ["mm50x66m"],
};

const variante = (label: string, file: string, group: typeof nastri) => ({
  label,
  image: `/img/prodotti/nastro-adesivo/varianti/${file}.webp`,
  ...group,
});

export const nastroAdesivo: ProductPage = {
  slug: "nastro-adesivo-personalizzati",
  name: "Nastro con logo e scotch personalizzato",
  family: "Prodotti per spedizioni",
  seo: {
    title: "Nastro adesivo personalizzato e scotch con logo",
    description:
      "Cerchi un nastro adesivo personalizzato per il tuo lavoro di imballaggio? Qui hai a disposizione i servizi di Rifipack per iniziare grande.",
  },
  hero: {
    eyebrow: "Prodotti per spedizioni",
    h1: "Nastro con logo e scotch personalizzato",
    lead:
      "Quando lavori con gli imballaggi e le spedizioni dei pacchi per la tua azienda, magari perché lavori con un e-commerce e devi inviare una gran numero di oggetti venduti, è indispensabile avere a disposizione il miglior nastro adesivo personalizzato con logo.",
    usps: [
      { title: "Il tuo pacco", text: "simboli e pittogrammi del brand, visibili al primo sguardo." },
      { title: "Affidabilità", text: "stampa su un nastro adeguato a logistica e spedizione." },
      { title: "Formato", text: "dimensione, formato e materiale scelti per le tue scatole." },
      { title: "Scorte", text: "ordini online e ricevi i nastri in azienda." },
    ],
    image: {
      src: nastroAdesivoGallery[0].src,
      w: nastroAdesivoGallery[0].w,
      h: nastroAdesivoGallery[0].h,
      alt: "Chiudibusta adesivi personalizzati, stampa argento a rotolo",
    },
    caption: "Nastro e chiudibusta personalizzati",
  },
  gallery: {
    eyebrow: "Realizzazioni", // NUOVO
    title: "I nostri nastri e adesivi", // NUOVO
    intro:
      "Questo è un dettaglio che i tuoi clienti non possono ignorare. Il marketing inizia dal packaging che puoi creare anche con nastro da imballo personalizzato con i simboli e i pittogrammi del tuo brand. Noi possiamo aiutarti a ottenere tutto quello che ti serve.",
    items: nastroAdesivoGallery,
    initial: 12,
    moreLabel: "Mostra tutte le realizzazioni", // NUOVO
  },
  sections: [
    {
      title: "Perché stampare un nastro adesivo personalizzato?",
      paragraphs: [
        "In primo luogo perché così puoi rendere tuo ogni pacco, ogni confezione che mandi ai tuoi clienti o ai fornitori. Chi ha deciso di scegliere la tua azienda ha diritto a essere coccolato in ogni modo. E tu devi farti riconoscere al primo sguardo, anche guardando il pacco che è appena arrivato a casa o in ufficio. Questo è possibile anche con lo scotch personalizzato.",
        "Uno scotch da imballaggio che devi comunque acquistare valutando tutti i criteri di sicurezza e affidabilità. Noi di Rifipack riusciamo a fondere queste esigenze a realizzare una stampa su nastro adesivo personalizzato e adeguato alle tue attività di logistica e spedizione.",
      ],
    },
    {
      title: "Attenzione al formato dello scotch da imballaggio",
      paragraphs: [
        "Quando ordini il tuo nastro adesivo online da personalizzare devi prestare massima attenzione alla sua dimensione, al formato e al materiale di realizzazione. Infatti, esistono modelli specifici per chiudere scatole di cartone e da montare sui dispenser.",
        "Però possono esserci esigenze particolari per realizzare nastri da imballaggio con personalizzazioni estetiche e caratteristiche specifiche. Comunica tutto quello che ti serve per la tua attività, riusciamo a realizzare il nastro adesivo stampato adatto a te.",
      ],
    },
    {
      title: "Ordina online il tuo scotch con logo",
      paragraphs: [
        "La comodità del servizio Rifipack è chiara: scegli il tuo modello di nastro isolante per imballaggio da usare nelle spedizioni o nelle fasi di logistica, personalizza con logo, scritte e colori del tuo brand. Poi fai il tuo ordine online e ricevi tutto in azienda, in modo da avere sempre una buona scorta di nastri adesivi e scotch personalizzati per imballi.",
      ],
    },
  ],
  sectionsCta: "Richiedi un preventivo",
  faqs: [
    {
      q: "Perché stampare il nastro adesivo?",
      a: "Per rendere riconoscibile ogni pacco, a casa del cliente o in ufficio. Logo, scritte, simboli e pittogrammi stanno sullo scotch che chiude la spedizione, così il marketing inizia dall’imballo.",
    },
    {
      q: "Che nastri e che misura posso ordinare?",
      a: "Nastro avana, bianco, in carta avana e scotch personalizzato. Per questi il modulo prevede la misura mm50x66m e le quantità 144, 288, 360, 504 o 720 pezzi. Dimensione e materiale si scelgono anche in base alle scatole di cartone e al dispenser.",
    },
    {
      q: "Nel modulo ci sono anche le etichette: che quantità hanno?",
      a: "Chiudibusta in PVC, etichette adesive a quattro colori, tonde, chiudibusta con logo e copriprezzo si ordinano a 144, 288 o 360 pezzi. Per queste il modulo non chiede la misura.",
    },
    {
      q: "Posso chiedere un formato diverso dallo standard?",
      a: "Sì. Dimensione, formato e materiale vanno scelti in base alle scatole e al dispenser. Se ti serve una personalizzazione particolare, la indichi nella richiesta e realizziamo il nastro adatto alla tua logistica.",
    },
    {
      q: "Come arriva l’ordine?",
      a: "Scegli il modello nel modulo, la quantità e, per i nastri, la misura. Poi personalizzi con logo e colori e ricevi la scorta in azienda, pronta per spedizioni e logistica.",
    },
  ],
  form: {
    title: "Compila il form per avere il tuo prodotto personalizzato",
    intro: "Tre passi, pochi campi. Preferisci parlare con noi? Chiama o scrivi su WhatsApp.", // NUOVO
    variants: {
      label: "Seleziona il prodotto a cui sei interessato",
      options: [
        variante("Chiudibusta in PVC", "chiudibusta-pvc", etichette),
        variante("Etichette adesive, stampa 4 colori", "adesive-4-colori", etichette),
        variante("Etichette adesive tonde", "adesive-tonde", etichette),
        variante("Etichette chiudibusta adesivi personalizzati con logo", "chiudibusta-logo", etichette),
        variante("Etichette chiudibusta", "chiudibusta", etichette),
        variante("Etichette copriprezzo", "copriprezzo", etichette),
        variante("Nastro adesivo avana", "nastro-avana", nastri),
        variante("Nastro adesivo bianco personalizzato", "nastro-bianco", nastri),
        variante("Nastro adesivo carta avana", "nastro-carta-avana", nastri),
        variante("Nastro adesivo personalizzato", "nastro-personalizzato", nastri),
        variante("Natro adesivo", "natro-adesivo", nastri),
        variante("Scotch carta avana", "scotch-carta-avana", nastri),
        variante("Scotch personalizzato", "scotch-personalizzato", nastri),
      ],
    },
    quantities: { label: "Quantità", options: ["144 pz", "288 pz", "360 pz", "504 pz", "720 pz"] },
    sizes: { label: "Misure", options: [] },
  },
};
