import type { ProductPage } from "./types";
import { cartelliniGallery } from "./cartellini.gallery";

/**
 * Testi: quelli della pagina attuale di rifipack.it/cartellini-personalizzati/
 * (letta il 10 novembre 2026), invariati, tranne dove indicato come NUOVO.
 * Il modulo ha la quantità e non le misure.
 */
const variante = (label: string, file: string) => ({
  label,
  image: `/img/prodotti/cartellini/varianti/${file}.webp`,
});

export const cartellini: ProductPage = {
  slug: "cartellini-personalizzati",
  name: "Cartellini personalizzati",
  family: "Etichette e adesivi",
  seo: {
    title: "Stampa cartellini personalizzati con logo e prezzo",
    description:
      "Qui puoi scegliere il tuo servizio di stampa online per cartellini personalizzati con logo aziendale da attaccare a vestiti, buste, pacchi, capi di abbigliamento.",
  },
  hero: {
    eyebrow: "Etichette e adesivi",
    h1: "Stampa cartellini personalizzati",
    lead:
      "Chi lavora con capi di abbigliamento e vendite di vari prodotti sa bene quanto siano importanti le stampe dei cartellini personalizzati sui quali aggiungere tutte le informazioni necessarie per valutare l’acquisto. Come, ad esempio, le caratteristiche del prodotto e il prezzo. Ma qui puoi aggiungere anche il pittogramma o il logotipo aziendale.",
    usps: [
      { title: "Informazioni", text: "prezzo, uso, ingredienti, tessuti, lavaggio e logo." },
      { title: "Stampa resistente", text: "carta, caratteri, colori e forme che durano nel tempo." },
      { title: "Formati", text: "pieghevoli, per bottiglie, tondi, quadrati, rettangolari." },
      { title: "Budget", text: "cartellini economici, anche per sconti e saldi." },
    ],
    image: {
      src: cartelliniGallery[0].src,
      w: cartelliniGallery[0].w,
      h: cartelliniGallery[0].h,
      alt: "Biarritz Cashmere, cartellini con nastro piatto",
    },
    caption: "Cartellino con nastro",
  },
  gallery: {
    eyebrow: "Realizzazioni", // NUOVO
    title: "I nostri cartellini", // NUOVO
    intro:
      "Noi di Rifipack, azienda specializzata in packaging personalizzato e su misura, possiamo aiutarti a ottenere i migliori cartellini da stampare online con tutte le caratteristiche che ti servono. E nel formato adatto alle tue esigenze, con le informazioni necessarie al cliente: modalità d’uso, ingredienti, tessuti, lavaggio, prezzo e, ovviamente, logo aziendale.",
    items: cartelliniGallery,
    initial: 12,
    moreLabel: "Mostra tutte le realizzazioni", // NUOVO
  },
  sections: [
    {
      title: "Caratteristiche della stampa etichette e cartellini",
      paragraphs: [
        "Quando decidi di creare cartellini personalizzati con logo e altre informazioni tecniche devi puntare su un servizio di stampa e personalizzazione in grado di rispettare alcuni parametri tecnici. Ad esempio, devi assicurarti che la carta sia adeguata alle tue esigenze. E che la stampa dei caratteri, dei colori e delle forme sia resistente nel tempo.",
        "Noi di Rifipack offriamo una stampa dei cartellini per abbigliamento, alimenti, bottiglie e altri oggetti da esporre al pubblico con delle condizioni molto vantaggiose. Possiamo aiutarti anche a stampare cartellini per sconti e saldi in tempi rapidi per sfruttare i trend positivi.",
      ],
    },
    {
      title: "Un occhio di riguardo per il tuo budget",
      paragraphs: [
        "Uno degli aspetti fondamentali della stampa cartellini personalizzati per vestiti, alimenti e abbigliamento di Rifipack è la possibilità di ottenere ciò che ti serve valutando bene i costi. Comunica il tuo budget, noi ti aiuteremo a trovare la migliore soluzione per i tuoi cartellini personalizzati ed economici, in linea con le necessità delle tua attività commerciale.",
      ],
    },
    {
      title: "Quali formati di cartellini stampare?",
      paragraphs: [
        "Molto importante la scelta delle varie dimensioni e dei formati per la stampa dei cartellini personalizzati. Possiamo aiutarti a ottenere cartellini pieghevoli, per bottiglie con forma circolare, con formato personalizzato (rotondo, quadrato, rettangolare) e per le maniglie.",
        "Avere la possibilità di scegliere il formato e la carta ideale per le tue esigenze è importante. Noi ti permettiamo di scegliere le soluzioni ideali sia in termini di dimensioni che di colore e tipologia del supporto utilizzato, in modo da allineare il tutto alle tue necessità.",
      ],
    },
    {
      title: "Ordina subito i tuoi cartellini economici da stampare",
      paragraphs: [
        "Di sicuro, è fondamentale per un’azienda che vende al dettaglio avere un buon numero di etichette di carta e cartoncino da utilizzare per comunicare dettagli tecnici, caratteristiche specifiche, prezzi, sconti e offerte speciali. Ma anche dati per la manutenzione.",
        "In realtà la stampa delle etichette personalizzate con logo e colori del brand può fare la differenza in diversi ambiti. Vuoi maggiori informazioni? Ecco le nostre offerte migliori.",
      ],
    },
  ],
  sectionsCta: "Richiedi un preventivo",
  faqs: [
    {
      q: "Quali informazioni stanno sul cartellino?",
      a: "Prezzo, caratteristiche del prodotto, modalità d’uso, ingredienti, tessuti, lavaggio e il logo o il pittogramma aziendale. La stessa stampa serve anche per sconti, saldi e offerte.",
    },
    {
      q: "Che formati posso chiedere?",
      a: "Pieghevoli, per bottiglie con forma circolare, tondi, quadrati, rettangolari e per le maniglie. Nel modulo ci sono la stampa fronte-retro, il cartellino con laccio, quello con nastro, il doppio e il personalizzato.",
    },
    {
      q: "Su che prodotti si applicano?",
      a: "Su abbigliamento, alimenti, bottiglie e altri oggetti esposti al pubblico. La carta e la stampa di caratteri, colori e forme sono scelte per restare leggibili nel tempo.",
    },
    {
      q: "Da quanti pezzi si parte?",
      a: "Da 1000 pezzi, poi 2000 e 3000. Le misure non sono un menu fisso: formato, colore e tipo di supporto si allineano al capo o al prodotto. Se ci indichi il budget, cerchiamo la soluzione dentro quel limite.",
    },
    {
      q: "Riuscite a stampare i cartellini per i saldi in tempi stretti?",
      a: "Sì. I cartellini per sconti e saldi si stampano in tempi rapidi. Dal modulo scegli il modello e la quantità e ci mandi testi e logo.",
    },
  ],
  form: {
    title: "Compila il form per avere il tuo prodotto personalizzato",
    intro: "Tre passi, pochi campi. Preferisci parlare con noi? Chiama o scrivi su WhatsApp.", // NUOVO
    variants: {
      label: "Seleziona il prodotto a cui sei interessato",
      options: [
        variante("Cartellini stampa fronte-retro", "fronte-retro"),
        variante("Cartellino con laccio", "con-laccio"),
        variante("Cartellino con nastro", "con-nastro"),
        variante("Cartellino doppio", "doppio"),
        variante("Cartellino personalizzato", "personalizzato"),
      ],
    },
    quantities: { label: "Quantità", options: ["1000 pz", "2000 pz", "3000 pz"] },
    sizes: { label: "Misure in cm", options: [] },
  },
};
