import type { ProductPage } from "./types";
import { ecommerceGallery } from "./ecommerce.gallery";

/**
 * Testi: quelli della pagina attuale di rifipack.it/buste-e-scatole-e-commerce-personalizzate/
 * (letta il 10 novembre 2026), invariati, tranne dove indicato come NUOVO.
 * Buste e scatole hanno le stesse quantità e misure diverse.
 */
const busta = {
  quantities: ["100 pz", "300 pz", "500 pz", "1000 pz"],
  sizes: ["18x24cm", "24x33cm", "28x35cm", "33x43cm", "43x50cm", "50x60cm"],
};
const scatola = {
  quantities: ["100 pz", "300 pz", "500 pz", "1000 pz"],
  sizes: ["14x10/6h", "19x14/8h", "21x18/8h", "25x23x11h", "32x28x8h", "34x24x10,5h", "37x28x14h", "42,5x31x15,5h"],
};

const variante = (label: string, file: string, group: typeof busta) => ({
  label,
  image: `/img/prodotti/ecommerce/varianti/${file}.webp`,
  ...group,
});

export const ecommerce: ProductPage = {
  slug: "buste-e-scatole-e-commerce-personalizzate",
  name: "Buste e scatole e-commerce personalizzate",
  family: "Prodotti per spedizioni",
  seo: {
    title: "Scatole ecommerce personalizzate per spedizioni | Rifipack",
    description:
      "Quali sono le migliori scatole per ecommerce da usare durante le spedizioni dei prodotti acquistati? Ecco la proposta esclusiva di Rifipack.",
  },
  hero: {
    eyebrow: "Prodotti per spedizioni",
    h1: "Packaging economico per ecommerce",
    lead:
      "Se hai deciso di vendere online hai bisogno anche di buste e scatole e-commerce personalizzate. Rifipack ti aiuta a confezionare il tuo prodotto personalizzato Made in Italy in modo da trasformare il tuo packaging in uno strumento di marketing fondamentale.",
    usps: [
      { title: "Made in Italy", text: "packaging personalizzato, prodotto in Italia." },
      { title: "Unboxing", text: "il cliente riconosce il brand appena apre il pacco." },
      { title: "Resistenza", text: "un involucro che riduce i danni in spedizione e i resi." },
      { title: "Scorte", text: "ci mandi le esigenze e ti spediamo il packaging in breve tempo." },
    ],
    image: {
      src: ecommerceGallery[0].src,
      w: ecommerceGallery[0].w,
      h: ecommerceGallery[0].h,
      alt: "Vox, busta spedizione rossa",
    },
    caption: "Busta spedizione personalizzata",
  },
  gallery: {
    eyebrow: "Realizzazioni", // NUOVO
    title: "Le nostre buste e scatole", // NUOVO
    intro:
      "Infatti, le scatole per le spedizioni sono un elemento fondamentale di ogni e-commerce: nel momento stesso in cui arriva il prodotto ordinato, il cliente riconosce il tuo brand e lo associa a un’esperienza positiva. Che puoi amplificare con una stampa personalizzata delle scatole per spedizioni o delle buste in carta o plastica con logo e valori aziendali riconoscibili.",
    items: ecommerceGallery,
    initial: 12,
    moreLabel: "Mostra tutte le realizzazioni", // NUOVO
  },
  sections: [
    {
      title: "Perché scegliere delle scatole per ecommerce?",
      paragraphs: [
        "Il motivo è semplice: grazie agli imballaggi per ecommerce con stampe personalizzate puoi farti riconoscere subito e rinforzare la tua brand identity. Diversi studi ci confermano che la fase di unboxing – aprire la scatola del prodotto acquistato – è molto importante.",
        "Le persone attendono il bene acquistato con ansia e la confezione che usi per la spedizione ecommerce diventa il riferimento per creare un legame diretto con l’acquirente. Ovviamente, le scatole per spedizioni ecommerce hanno un ruolo decisivo per catturare l’attenzione.",
      ],
    },
    {
      title: "La qualità è decisiva nel packaging per ecommerce",
      paragraphs: [
        "Spesso, gli imprenditori che scelgono le buste e le scatole per lo shop online si concentrano solo sull’aspetto estetico. Bisogna vere disposizione scatole economiche e personalizzate con logo e colori aziendali, ma nel mondo della vendita online è fondamentale la qualità.",
        "Durante le spedizioni dopo l’acquisto online la resistenza dell’involucro è fondamentale, perché in questo modo puoi evitare spiacevoli danni ai beni. E ridurre il numero dei resi da affrontare che è sempre un problema per chi si occupa di vendere online.",
        "Riuscire a diminuire il numero dei prodotti che tornano indietro per un difetto dovuto al trasporto è un obiettivo che puoi raggiungere anche grazie alle scatole personalizzate ed economiche per l’ecommerce. Rispettiamo il tuo budget destinato al packaging.",
      ],
    },
    {
      title: "Ordina subito le tue scatole personalizzate per le spedizioni",
      paragraphs: [
        "C’è sempre un grande bisogno di scatole personalizzate e buste di carta o plastica brandizzate per chi deve spedire prodotti venduti online. Noi ti aiutiamo a mantenere in ordine le scorte: mandaci le tue esigenze e ti spediamo il packaging in breve tempo.",
      ],
    },
  ],
  sectionsCta: "Richiedi un preventivo",
  faqs: [
    {
      q: "Perché personalizzare buste e scatole da spedizione?",
      a: "Perché, quando arriva il pacco, il cliente riconosce il brand. L’unboxing è un passaggio importante, e la stampa su scatole, buste di carta o plastica porta logo e valori aziendali già sulla confezione.",
    },
    {
      q: "Conta solo l’aspetto o anche la resistenza?",
      a: "Contano entrambi. In spedizione l’involucro deve tenere, così si riducono i danni e i resi dovuti al trasporto. Le scatole e le buste restano economiche e personalizzate, dentro il budget che destini al packaging. Sono prodotte in Italia.",
    },
    {
      q: "Che misure hanno buste e scatole?",
      a: "Le buste vanno da 18x24 cm a 50x60 cm, comprese le maxi, quelle con chiusura adesiva e le delivery-return. Le scatole, automontanti, da imballo o in micro-onda, vanno da 14x10/6h a 42,5x31x15,5h. Scegliendo il modello, il menu misure si aggiorna.",
    },
    {
      q: "Da quanti pezzi si parte?",
      a: "Da 100 pezzi, poi 300, 500 e 1000, sia per le buste sia per le scatole. Se ci mandi il fabbisogno, ti aiutiamo a tenere le scorte e a ricevere il packaging in breve tempo.",
    },
    {
      q: "Come si ordina?",
      a: "Dal modulo indichi se ti serve una busta o una scatola, la quantità e la misura, e puoi allegare il logo. La confezione diventa parte della vendita, non solo un involucro anonimo.",
    },
  ],
  form: {
    title: "Compila il form per avere il tuo prodotto personalizzato",
    intro: "Tre passi, pochi campi. Preferisci parlare con noi? Chiama o scrivi su WhatsApp.", // NUOVO
    variants: {
      label: "Seleziona il prodotto a cui sei interessato",
      options: [
        variante("Busta e-commerce maxi", "busta-e-commerce-maxi", busta),
        variante("Busta e-commerce", "busta-e-commerce", busta),
        variante("Busta spedizione chiusura adesiva", "busta-chiusura-adesiva", busta),
        variante("Busta spedizione maxi", "busta-spedizione-maxi", busta),
        variante("Busta spedizione personalizzate", "busta-spedizione-personalizzate", busta),
        variante("Busta spedizione", "busta-spedizione", busta),
        variante("Buste delivery-return", "buste-delivery-return", busta),
        variante("Scatola automontante", "scatola-automontante", scatola),
        variante("Scatola da imballaggio", "scatola-imballaggio", scatola),
        variante("Scatola e-commerce", "scatola-e-commerce", scatola),
        variante("Scatola micro-onda", "scatola-micro-onda", scatola),
        variante("Scatole automontanti", "scatole-automontanti", scatola),
        variante("Scatole e-commerce", "scatole-e-commerce", scatola),
        variante("Scatole spedizione", "scatole-spedizione", scatola),
      ],
    },
    quantities: { label: "Quantità", options: ["100 pz", "300 pz", "500 pz", "1000 pz"] },
    sizes: { label: "Misure in cm", options: [] },
  },
};
