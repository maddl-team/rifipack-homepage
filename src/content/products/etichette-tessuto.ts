import type { ProductPage } from "./types";
import { etichetteTessutoGallery } from "./etichette-tessuto.gallery";

/**
 * Testi: quelli della pagina attuale di rifipack.it/etichette-in-tessuto/
 * (letta il 10 novembre 2026), invariati, tranne dove indicato come NUOVO.
 * Le etichette tessute hanno una quantità, fettuccia e nastri un’altra e le misure.
 */
const tessute = {
  quantities: ["1000 pz", "2000 pz", "3000 pz"],
  sizes: [] as string[],
};
const nastri = {
  quantities: ["250 pz", "500 pz", "1000 pz", "1500 pz", "2000 pz"],
  sizes: ["1,0 cm", "1,5 cm", "2 cm", "2,5 cm", "3,5 cm"],
};

const variante = (label: string, file: string, group: typeof nastri) => ({
  label,
  image: `/img/prodotti/etichette-tessuto/varianti/${file}.webp`,
  ...group,
});

export const etichetteTessuto: ProductPage = {
  slug: "etichette-in-tessuto",
  name: "Etichette in stoffa personalizzate",
  family: "Etichette e adesivi",
  seo: {
    title: "Etichette in tessuto personalizzabili | Rifipack",
    description:
      "Qui trovi le migliori etichette in tessuto personalizzabili per dare un riferimento specifico ai tuoi prodotti e all’abbigliamento.",
  },
  hero: {
    eyebrow: "Etichette e adesivi",
    h1: "Etichette in stoffa personalizzate",
    lead:
      "Le etichette in tessuto personalizzabili di Rifipack sono un punto di riferimento per le aziende che hanno bisogno di uno strumento valido per personalizzare un capo di abbigliamento. Noi lavoriamo con tecniche di ricamo collaudate per ottenere qualità e durata.",
    usps: [
      { title: "Ricamo", text: "tecniche collaudate, per qualità e durata." },
      { title: "Con o senza logo", text: "a colori, con naming, brand o nome del team." },
      { title: "Da cucire o con velcro", text: "forma, colore, fantasia e carattere su misura." },
      { title: "Dove servono", text: "abbigliamento, cucina, logistica, trasporti e sanità." },
    ],
    image: {
      src: etichetteTessutoGallery[0].src,
      w: etichetteTessutoGallery[0].w,
      h: etichetteTessutoGallery[0].h,
      alt: "Bangià, etichette in tessuto",
    },
    caption: "Etichetta tessuta",
  },
  gallery: {
    eyebrow: "Realizzazioni", // NUOVO
    title: "Le nostre etichette in tessuto", // NUOVO
    intro:
      "Noi possiamo realizzare etichette in stoffa personalizzate online con o senza logo, a colori, con scritte che tu puoi comunicarci in modo da riprodurre dove serve il naming, il brand, il nome di una persona del team. Decidi cosa proficisci inserire sulle tue etichette in tessuto da cucire, con o senza velcro. Siamo a tua disposizione per ogni necessità.",
    items: etichetteTessutoGallery,
    initial: 12,
    moreLabel: "Mostra tutte le realizzazioni", // NUOVO
  },
  sections: [
    {
      title: "Quali sono i punti di forza delle nostre etichette?",
      paragraphs: [
        "In primo luogo c’è la qualità delle materie prime, che ti permettono di ottenere delle etichette in tessuto personalizzate adatte a tutti i lavori e gli scopi. Poi c’è la massima cura per i dettagli che ti consentono di avere logo, disegno e colori allineati alle esigenze.",
      ],
    },
    {
      title: "A chi servono le etichette tessili?",
      paragraphs: [
        "Ci sono mille motivi per chiedere ai professionisti della stampa e del packaging personalizzato una consegna di etichette in stoffa ricamate con logo cucito. Si usano molto, ad esempio, nelle brigate di cucina e nei magazzini. Nel settore della logistica, dei trasporti e della sanità si fa largo uso di questi strumenti per dare informazioni a prima vista.",
        "Possiamo stampare e ricamare etichette di manutenzione per i capi, o contesto personalizzato e logo. In base alle tue esigenze possiamo decidere insieme forma, colore, fantasia e carattere da utilizzare per quello che scriviamo sulla stoffa.",
      ],
    },
    {
      title: "Ordina le tue etichette stampate su tessuto",
      paragraphs: [
        "Le esigenze sono diverse ma noi possiamo adeguare la nostra produzione di etichette per abbigliamento in base alle tue esigenze, in modo da personalizzare giacche, divise, pantaloni e camicie da lavoro. Puoi scegliere i modelli con velcro a strappo o da cucine.",
      ],
    },
  ],
  sectionsCta: "Richiedi un preventivo",
  faqs: [
    {
      q: "Le etichette sono ricamate o stampate?",
      a: "Entrambe le strade. Lavoriamo con tecniche di ricamo collaudate e possiamo anche stampare. Materie prime e cura del dettaglio tengono allineati logo, disegno e colori, con una resa fatta per durare.",
    },
    {
      q: "Cosa posso scriverci sopra?",
      a: "Naming, brand, nome di una persona del team, oppure un’etichetta senza logo. Si definiscono insieme forma, colore, fantasia e carattere. Ci sono anche le etichette taglie, quelle a cavallotto, a due colori, fondo nero e alta definizione.",
    },
    {
      q: "Si cuciono o si attaccano?",
      a: "Puoi scegliere etichette da cucire oppure con velcro a strappo. Servono per giacche, divise, pantaloni e camicie da lavoro, e anche per le etichette di manutenzione del capo.",
    },
    {
      q: "Fuori dall’abbigliamento, dove si usano?",
      a: "Nelle brigate di cucina, nei magazzini, in logistica, nei trasporti e nella sanità: ovunque serva un’informazione leggibile a prima vista su un’etichetta in stoffa.",
    },
    {
      q: "Quali quantità e quali larghezze ci sono?",
      a: "Le etichette tessute, comprese le taglie, si ordinano a 1000, 2000 o 3000 pezzi. Fettuccia di cotone, nastro in raso e doppio raso si ordinano a 250, 500, 1000, 1500 o 2000 pezzi, con larghezze 1,0, 1,5, 2, 2,5 o 3,5 cm.",
    },
  ],
  form: {
    title: "Compila il form per avere il tuo prodotto personalizzato",
    intro: "Tre passi, pochi campi. Preferisci parlare con noi? Chiama o scrivi su WhatsApp.", // NUOVO
    variants: {
      label: "Seleziona il prodotto a cui sei interessato",
      options: [
        variante("Etichetta tessuta", "etichetta-tessuta", tessute),
        variante("Etichetta tessuta, 2 colori", "tessuta-2-colori", tessute),
        variante("Etichetta tessuta a cavallotto", "tessuta-cavallotto", tessute),
        variante("Etichetta tessuta alta definizione", "tessuta-alta-definizione", tessute),
        variante("Etichetta tessuta fondo nero", "tessuta-fondo-nero", tessute),
        variante("Etichetta tessuta personalizzata", "tessuta-personalizzata", tessute),
        variante("Etichetta tessuta taglio e piega", "tessuta-taglio-piega", tessute),
        variante("Etichette taglie", "etichette-taglie", tessute),
        variante("Fettuccia cotone personalizzata", "fettuccia-cotone", nastri),
        variante("Nastro in raso personalizzato", "nastro-raso", nastri),
        variante("Nastro tessuto personalizzato doppio raso", "doppio-raso", nastri),
      ],
    },
    quantities: { label: "Quantità", options: ["1000 pz", "2000 pz", "3000 pz"] },
    sizes: { label: "Misure in cm", options: [] },
  },
};
