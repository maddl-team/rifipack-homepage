import type { ProductPage } from "./types";
import { cartaRegaloGallery } from "./carta-regalo.gallery";

/**
 * Testi: quelli della pagina attuale di rifipack.it/carta-regalo-personalizzata/
 * (letta il 10 novembre 2026), invariati, tranne dove indicato come NUOVO.
 * Il modulo ha la quantità in chili e non le misure.
 */
const variante = (label: string, file: string) => ({
  label,
  image: `/img/prodotti/carta-regalo/varianti/${file}.webp`,
});

export const cartaRegalo: ProductPage = {
  slug: "carta-regalo-personalizzata",
  name: "Carte regalo e imballaggio",
  family: "Packaging personalizzato",
  seo: {
    title: "Carte regalo personalizzate con stampa | Rifipack",
    description:
      "Chi ha bisogno di carte regalo personalizzate per le proprie spedizioni o per gli imballaggi su misura? Ecco l’offerta di Rifipack.",
  },
  hero: {
    eyebrow: "Packaging personalizzato",
    h1: "Carta personalizzata da regalo",
    lead:
      "Chi si occupa di imballaggio e spedizioni professionali ha bisogno anche di carte regalo personalizzate per rendere unici i pacchi che arrivano a destinazione. O almeno questa è la regola da rispettare quando si vuole ottenere un risultato degno di nota, memorabile.",
    usps: [
      { title: "Imballaggio", text: "un supporto in più per robustezza e durata del pacco." },
      { title: "Il tuo brand", text: "logo, colori e fantasie che fanno riconoscere il marchio." },
      { title: "Stampa", text: "di qualità, sul supporto e nei colori che preferisci." },
      { title: "Carta velina", text: "per bottiglie, abbigliamento, calzature e prodotti di lusso." },
    ],
    image: {
      src: cartaRegaloGallery[0].src,
      w: cartaRegaloGallery[0].w,
      h: cartaRegaloGallery[0].h,
      alt: "Carta da involgere personalizzata, vari tagli e logo",
    },
    caption: "Carta da involgere personalizzata",
  },
  gallery: {
    eyebrow: "Realizzazioni", // NUOVO
    title: "Le nostre carte regalo", // NUOVO
    intro:
      "Molte aziende, infatti, decidono di creare e acquistare carta da regalo personalizzata online in modo da avere sempre a disposizione uno strumento per creare un packaging memorabile. L’esperienza dell’unboxing deve essere sfruttata al massimo, e lo puoi fare anche grazie alla nostra carta per pacchi personalizzata con il tuo logo o i colori del brand.",
    items: cartaRegaloGallery,
    initial: 12,
    moreLabel: "Mostra tutte le realizzazioni", // NUOVO
  },
  sections: [
    {
      title: "I vantaggi per chi usa la carta da pacchi personalizzata",
      paragraphs: [
        "In primo luogo, dobbiamo considerare che la carta da pacchi – personalizzata o meno con stampa – può essere uno strumento in più per garantire la robustezza e la durata dell’imballaggio. Certo, alla base deve esserci sempre una scatola per spedizioni di qualità.",
        "Però anche la carta da pacchi personalizzata può aiutarti in questo lavoro. Se poi hai la possibilità di aggiungere simboli, loghi, font, colori e fantasie che rispecchiano il tuo nome puoi ottenere un effetto speciale. E utilizzare i pacchi per azioni di marketing ben precise.",
        "Le persone amano essere coccolate e una stampa su carta da regalo può essere un buon modo per far notare ai clienti che tu ci sei, che hai a cuore il tuo lavoro. Inoltre, avere una carta da regalo con logo è sempre un buon modo per far notare il tuo brand in pubblico.",
      ],
    },
    {
      title: "Il tipo di carta da regalo stampabile conta",
      paragraphs: [
        "Di sicuro devi scegliere un modello sì personalizzabile – e qui possiamo aiutarti con stampa di qualità su qualsiasi supporto e con i colori che preferisci – ma anche di grande qualità. La nostra carta da imballaggio personalizzata è pensata per ottenere entrambi i risultati.",
        "Puoi scegliere carta da involgere di qualsiasi colore e con la stampa che preferisci, senza dimenticare la possibilità di personalizzare anche la carta velina per bottiglie, abbigliamento, calzature o prodotti di lusso. Il tuo logo può essere ovunque, basta scegliere Rifipack.",
      ],
    },
  ],
  sectionsCta: "Richiedi un preventivo",
  faqs: [
    {
      q: "A cosa serve la carta regalo personalizzata?",
      a: "A rendere riconoscibile il pacco quando arriva. La base resta una scatola da spedizione di qualità: la carta da pacchi aggiunge un sostegno in più, e ci metti simboli, logo, colori e fantasie. L’unboxing diventa un passaggio di marketing.",
    },
    {
      q: "Che tipi di carta posso stampare?",
      a: "Carta da involgere, carta regalo e carta velina, anche sealing avana. Nel modulo ci sono fondi oro, nero e rosso, lucidatura UV, stampa a due o tre colori, offset e quadricromia.",
    },
    {
      q: "La carta velina per cosa si usa?",
      a: "Per avvolgere bottiglie, abbigliamento, calzature e prodotti di lusso. Il logo può stare sulla velina come sulla carta da pacco, sul colore e con la stampa che preferisci.",
    },
    {
      q: "In che quantità si ordina?",
      a: "A chili: nel modulo 100, 200, 300 o 400 kg. Le misure non sono nel menu e si indicano nella richiesta.",
    },
    {
      q: "Come si richiede la stampa?",
      a: "Dal modulo scegli il tipo di carta e i chili, poi ci mandi logo, font e fantasie. La stampa è di qualità sul supporto e nei colori che ti servono.",
    },
  ],
  form: {
    title: "Compila il form per avere il tuo prodotto personalizzato",
    intro: "Tre passi, pochi campi. Preferisci parlare con noi? Chiama o scrivi su WhatsApp.", // NUOVO
    variants: {
      label: "Seleziona il prodotto a cui sei interessato",
      options: [
        variante("Carta da involgere, stampa 3 colori", "stampa-3-colori"),
        variante("Carta da involgere nera", "nera"),
        variante("Carta da involgere oro", "oro"),
        variante("Carta da involgere rossa, lucidatura UV", "rossa-uv"),
        variante("Carta da involgere, stampa 2 colori", "stampa-2-colori"),
        variante("Carta da involgere, stampa off set", "stampa-offset"),
        variante("Carta da involgere, stampa quadricromia", "quadricromia"),
        variante("Carta da involgere", "carta-da-involgere"),
        variante("Carta regalo fondo pieno", "regalo-fondo-pieno"),
        variante("Carta regalo oro", "regalo-oro"),
        variante("Carta regalo rossa", "regalo-rossa"),
        variante("Carta sealing avana", "sealing-avana"),
        variante("Carta velina personalizzata", "velina-personalizzata"),
        variante("Carta velina", "velina"),
      ],
    },
    quantities: { label: "Quantità", options: ["100 kg", "200 kg", "300 kg", "400 kg"] },
    sizes: { label: "Misure in cm", options: [] },
  },
};
