import type { ProductPage } from "./types";
import { shopperLussoGallery } from "./shopper-lusso.gallery";

/**
 * Testi: quelli della pagina attuale di rifipack.it (letta il 26 ottobre 2026), invariati,
 * tranne dove indicato come NUOVO (titolo e didascalie della galleria, etichette del modulo).
 */
export const shopperLusso: ProductPage = {
  slug: "shopper-in-carta-lusso",
  name: "Shopper di lusso personalizzate",
  family: "Shopping bag",
  seo: {
    title: "Shopper di lusso personalizzate | Rifipack",
    description:
      "Scopri le shopper di lusso personalizzate e di qualità. Materiali super, design esclusivo e stampa su misura per il tuo brand. Ordina le tue shopper.",
  },
  hero: {
    eyebrow: "Shopping bag",
    h1: "Buste di lusso personalizzate",
    lead:
      "Le shopper di lusso personalizzate sono il prodotto ideale per valorizzare Brand e Prodotti d’eccellenza. Le nostre shopper bag personalizzate sono prodotte e allestite esclusivamente in Italia dalle sapienti mani dei nostri artigiani. E se stai cercando un servizio esclusivo per creare borse in carta personalizzate, sei nel posto giusto.",
    usps: [
      { title: "Materiali di lusso", text: "le migliori carte per una qualità senza compromessi." },
      { title: "Design personalizzato", text: "fai emergere il tuo brand." },
      { title: "Stampa professionale", text: "risultati impeccabili, sempre." },
      { title: "Consegna rapida", text: "ordina le shopper di lusso personalizzate in carta online." },
    ],
    image: {
      src: "/img/prodotti/shopper-lusso/20-fabio-salini-shopper-carta-in-pasta-nera-stampa-a-caldo-argento-manigl.webp",
      w: 1000,
      h: 929,
      alt: "Shopper di lusso in carta nera con stampa a caldo argento",
    },
    caption: "Carta in pasta nera, stampa a caldo argento, maniglia in raso",
  },
  gallery: {
    eyebrow: "Realizzazioni", // NUOVO
    title: "Le nostre shopper di lusso", // NUOVO
    intro:
      "Rifipack mette a disposizione la sua esperienza nel mondo della stampa per proporti soluzioni su misura. Infatti, seguiamo numerose aziende e negozi di qualsiasi tipo, soprattutto abbigliamento, che vogliono distinguersi con shopper eleganti e di qualità.",
    items: shopperLussoGallery,
    initial: 12,
    moreLabel: "Mostra tutte le realizzazioni", // NUOVO
  },
  sections: [
    {
      title: "Materiali per shopper di lusso personalizzate",
      paragraphs: [
        "Ogni dettaglio delle nostre buste di lusso personalizzate viene curato con la massima attenzione, a partire dai materiali. Utilizziamo solo carta di lusso di qualità per realizzare borse di fascia alta. Che non sono solo belle da vedere ma anche resistenti e comode.",
        "Se hai bisogno di dare una marcia in più al tuo shop, le nostre buste di lusso donano un aspetto sofisticato e tocco in più all’esperienza di acquisto, valorizzando il tuo prodotto.",
      ],
    },
    {
      title: "Inchiostro e stampa di qualità",
      paragraphs: [
        "La qualità della stampa è fondamentale per comunicare l’immagine che il tuo brand merita. Utilizziamo solo inchiostri di alta qualità, che garantiscono colori vivaci e duraturi.",
        "Che si tratti di una stampa elegante in rilievo o di un logo a colori, le nostre buste shopper online vengono realizzate con la massima cura, per assicurare una resa impeccabile.",
      ],
    },
    {
      title: "Design per shopper di lusso personalizzate",
      paragraphs: [
        "La personalizzazione è al cuore del nostro servizio. Ogni progetto è unico, così come le esigenze di ogni cliente. Puoi creare shopper di lusso personalizzate che riflettono l’identità del tuo brand. Preferisci borse di carta con finiture opache o lucide?",
        "Noi siamo qui per realizzare borse di carta luxury personalizzate che possono essere realizzate con i colori e le texture che preferisci, seguiamo le tue indicazioni.",
      ],
    },
    {
      title: "Ordina le tue shopper eleganti online",
      paragraphs: [
        "Ordina le tue shopper di lusso personalizzate direttamente online. Il nostro processo ti permette di scegliere il design, i materiali e le finiture che preferisci, le migliori borse di carta personalizzate con logo e colori aziendali sono sempre realizzate su misura per te.",
      ],
    },
  ],
  sectionsCta: "Richiedi un preventivo",
  faqs: [
    {
      q: "Dove vengono realizzate le shopper di lusso?",
      a: "Sono prodotte e allestite esclusivamente in Italia, dalle mani degli artigiani Rifipack.",
    },
    {
      q: "Che carta e che finiture posso scegliere?",
      a: "Usiamo carta di lusso, bella da vedere e anche resistente e comoda. Puoi chiedere una finitura opaca o lucida, plastificata o non plastificata, e i colori e le texture del tuo brand. Nel modulo trovi anche il fiocco centrale, la maniglia a quattro nodi, la tracolla e il nastro.",
    },
    {
      q: "Come viene stampato il logo?",
      a: "Con inchiostri di alta qualità, per colori vivaci e duraturi. La stampa può essere elegante in rilievo, a caldo, come sull’argento della carta in pasta nera, oppure a colori. La lavorazione è seguita con la massima cura, per una resa impeccabile.",
    },
    {
      q: "Per quali negozi e prodotti sono pensate?",
      a: "Per brand e prodotti d’eccellenza, soprattutto abbigliamento. I modelli coprono anche gioielleria, editoria, fiere, gallerie, camicerie, centri benessere, guanti, sneakers, panettone e formati per una bottiglia, due bottiglie o magnum.",
    },
    {
      q: "Quali quantità e misure posso ordinare?",
      a: "Nel modulo le quantità sono 100, 200, 300, 500 o 1000 pezzi. Le misure previste vanno da 12x9x39h a 70x15x50h, con i formati intermedi del menu.",
    },
    {
      q: "Come si ordinano online?",
      a: "Dal modulo della pagina scegli il modello, la quantità e le misure, poi ci mandi logo e indicazioni. Design, materiali e finiture restano su misura, con i colori e le texture che ci indichi.",
    },
  ],
  form: {
    title: "Compila il form per avere il tuo prodotto personalizzato",
    intro: "Tre passi, pochi campi. Preferisci parlare con noi? Chiama o scrivi su WhatsApp.", // NUOVO
    variants: {
      label: "Seleziona il prodotto a cui sei interessato",
      options: [
        { label: "Centro benessere", image: "/img/prodotti/shopper-lusso/varianti/centro-benessere.webp" },
        { label: "Fiocco centrale", image: "/img/prodotti/shopper-lusso/varianti/fiocco-centrale.webp" },
        { label: "Maniglia 4 nodi", image: "/img/prodotti/shopper-lusso/varianti/maniglia-4-nodi.webp" },
        { label: "Maniglia tracolla", image: "/img/prodotti/shopper-lusso/varianti/maniglia-tracolla.webp" },
        { label: "Non plastificata", image: "/img/prodotti/shopper-lusso/varianti/non-plastificata.webp" },
        { label: "Plastificata lucida", image: "/img/prodotti/shopper-lusso/varianti/plastificata-lucida.webp" },
        { label: "Plastificata opaca", image: "/img/prodotti/shopper-lusso/varianti/plastificata-opaca.webp" },
        { label: "Plastificata opaca 2", image: "/img/prodotti/shopper-lusso/varianti/plastificata-opaca-2.webp" },
        { label: "Plastificata opaca 3", image: "/img/prodotti/shopper-lusso/varianti/plastificata-opaca-3.webp" },
        { label: "Shopper 2 bottiglie", image: "/img/prodotti/shopper-lusso/varianti/shopper-2-bottiglie.webp" },
        { label: "Shopper bottiglia singola", image: "/img/prodotti/shopper-lusso/varianti/shopper-bottiglia-singola.webp" },
        { label: "Shopper camiceria", image: "/img/prodotti/shopper-lusso/varianti/shopper-camiceria.webp" },
        { label: "Shopper carta", image: "/img/prodotti/shopper-lusso/varianti/shopper-carta.webp" },
        { label: "Shopper carta 2", image: "/img/prodotti/shopper-lusso/varianti/shopper-carta-2.webp" },
        { label: "Shopper editoria", image: "/img/prodotti/shopper-lusso/varianti/shopper-editoria.webp" },
        { label: "Shopper elegance", image: "/img/prodotti/shopper-lusso/varianti/shopper-elegance.webp" },
        { label: "Shopper fiera", image: "/img/prodotti/shopper-lusso/varianti/shopper-fiera.webp" },
        { label: "Shopper galleria", image: "/img/prodotti/shopper-lusso/varianti/shopper-galleria.webp" },
        { label: "Shopper gioielleria", image: "/img/prodotti/shopper-lusso/varianti/shopper-gioielleria.webp" },
        { label: "Shopper guanti", image: "/img/prodotti/shopper-lusso/varianti/shopper-guanti.webp" },
        { label: "Shopper magnum", image: "/img/prodotti/shopper-lusso/varianti/shopper-magnum.webp" },
        { label: "Shopper maniglia 4 nodi", image: "/img/prodotti/shopper-lusso/varianti/shopper-maniglia-4-nodi.webp" },
        { label: "Shopper maniglia nastro", image: "/img/prodotti/shopper-lusso/varianti/shopper-maniglia-nastro.webp" },
        { label: "Shopper nastro", image: "/img/prodotti/shopper-lusso/varianti/shopper-nastro.webp" },
        { label: "Shopper panettone", image: "/img/prodotti/shopper-lusso/varianti/shopper-panettone.webp" },
        { label: "Shopper sneakers", image: "/img/prodotti/shopper-lusso/varianti/shopper-sneakers.webp" },
        { label: "Shopper stampa a caldo", image: "/img/prodotti/shopper-lusso/varianti/shopper-stampa-a-caldo.webp" },
      ],
    },
    quantities: { label: "Quantità", options: ["100 pz", "200 pz", "300 pz", "500 pz", "1000 pz"] },
    sizes: {
      label: "Misure in cm",
      options: [
        "12x9x39h", "16x7,5x24h", "22x10x38h", "25x15x35h", "26x12x37h", "32x13x37h",
        "36x12x37h", "41x12x35h", "45x14x36h", "54x14x50h", "60x15x50h", "70x15x50h",
      ],
    },
  },
};
