import type { ProductPage } from "./types";
import { borseTessutoGallery } from "./borse-tessuto.gallery";

/**
 * Testi: quelli della pagina attuale di rifipack.it/shopping-bag-in-tessuto-personalizzate/
 * (letta il 26 ottobre 2026), invariati, tranne dove indicato come NUOVO.
 * Quantità e misure seguono i sei elenchi del modulo originale, uno per famiglia di modello.
 */
const cotone = {
  quantities: ["250 pz", "500 pz", "1000 pz", "1500 pz", "2000 pz"],
  sizes: ["32x10/24h", "38x42h", "40x10x30h", "50x15x38h"],
};
const tnt = {
  quantities: ["250 pz", "500 pz", "1000 pz", "1500 pz", "2000 pz"],
  sizes: ["23x10/25h", "36x40x9h", "38x10/34h", "50x12/40h", "60x20/45h"],
};
const zaino = {
  quantities: ["250 pz", "500 pz", "1000 pz", "1500 pz", "2000 pz"],
  sizes: ["37x40cm"],
};
const sacca = {
  quantities: ["300 pz", "600 pz", "900 pz", "1200 pz", "1500 pz"],
  sizes: ["15x20cm", "25x30cm", "30x45cm", "40x50cm", "50x75cm"],
};
const spesa = {
  quantities: ["300 pz", "600 pz", "900 pz", "1200 pz", "1500 pz"],
  sizes: ["45x18/40h"],
};
const juta = {
  quantities: ["100 pz", "200 pz", "300 pz", "500 pz"],
  sizes: ["26x14x22cm", "38x42cm", "50x12x38cm", "50x22x35cm", "45x12x35cm", "35x12x17cm", "35x15x48cm"],
};

const variante = (label: string, file: string, group: typeof cotone) => ({
  label,
  image: `/img/prodotti/borse-tessuto/varianti/${file}.webp`,
  ...group,
});

export const borseTessuto: ProductPage = {
  slug: "shopping-bag-in-tessuto-personalizzate",
  name: "Shopping bag in tessuto personalizzate",
  family: "Shopping bag",
  seo: {
    title: "Borse in tela da personalizzare con stampa | Rifipack",
    description:
      "Cerchi borse in tela da personalizzare con stampa mettendo logo e colori aziendali? Con Rifipack trovi la soluzione giusta.",
  },
  hero: {
    eyebrow: "Shopping bag",
    h1: "Borse in stoffa personalizzate",
    lead:
      "Se cerchi un’idea per promuovere il tuo evento? Vuoi rendere unico il tuo negozio? Hai intenzione di donare ai tuoi clienti una shopper ecologica e riutilizzabile più volte? Le nostre borse in tela da personalizzare in cotone o TNT si prestano perfettamente allo scopo.",
    usps: [
      { title: "Cotone o TNT", text: "borse in tela da personalizzare per eventi e negozi." },
      { title: "Riutilizzabili", text: "shopper ecologiche, da usare più volte." },
      { title: "Per il brand", text: "un ricordo che diventa pubblicità offline." },
      { title: "Con stampa", text: "logo e colori aziendali sulla tua borsa in tela." },
    ],
    image: {
      src: borseTessutoGallery[0].src,
      w: borseTessutoGallery[0].w,
      h: borseTessutoGallery[0].h,
      alt: "Shopper in TNT formato bottiglia",
    },
    caption: "TNT, formato bottiglia",
  },
  gallery: {
    eyebrow: "Realizzazioni", // NUOVO
    title: "Le nostre borse in tessuto", // NUOVO
    intro:
      "Le shopper tela personalizzate sono, da sempre, un ottimo metodo per comunicare l’identità del tuo brand e lasciare un ricordo positivo ai tuoi clienti o ai congressisti che partecipano a seminari e workshop. Perché si porteranno a casa un oggetto di valore, riutilizzabile. Che, nel frattempo, diventa anche uno strumento per farti buona pubblicità offline.",
    items: borseTessutoGallery,
    initial: 12,
    moreLabel: "Mostra tutte le realizzazioni", // NUOVO
  },
  sections: [
    {
      title: "La stoffa è decisiva per la tua borsa stampata",
      paragraphs: [
        "Il motivo per scegliere le borse in tessuto personalizzate di Rifipack: la qualità. Avere una shopper di tela e cotone è un valore aggiunto, un modo per donare valore a chi riceve questo prodotto. Scegliere la stampa sulle borse in tessuto e non su plastica o carta vuol dire fare una scelta ben precisa a favore di un rapporto unico con la tua clientela.",
        "Infatti, le borse in stoffa personalizzate sono resistenti, pratiche, adatte a essere riutilizzate e anche per questo attente alla natura e con un grande valore in termini ecologici.",
        "Una shopping bag in cotone la puoi sfruttare sempre e l’azienda usa questo punto di forza per fare un buon lavoro di viral marketing, diffondendo il brand in modo intelligente. La borsa di tela personalizzata mantiene l’aspetto originale anche dopo numerosi utilizzi, offrendo al tuo brand una visibilità continua anche grazie alla qualità del prodotto.",
      ],
    },
    {
      title: "La stampa sulle nostre borse di tela è tutto",
      paragraphs: [
        "La stampa sulle borse di tela Rifipack è un punto di forza essenziale del nostro servizio di packaging. Le nostre shopper stampate si distinguono per nitidezza e vivacità dei colori.",
        "Questo perché usiamo inchiostri di altissima qualità. In questo modo ogni borsa con stampa personalizzata può fare la differenza per i tuoi scopi. Le tecniche di stampa per le nostre shopping bag personalizzate si adeguano alle esigenze per ottenere il tuo design.",
        "Il processo di stampa su borse di tela esige precisione e attenzione ai dettagli per garantire una resa perfetta su ogni tipo di tessuto. Ecco perché hai bisogno di un centro specializzato per la realizzazione e la vendita online di borse di cotone personalizzate ed economiche.",
      ],
    },
    {
      title: "Ordina subito il tuo modello di shopper di tela",
      paragraphs: [
        "Stai cercando borse tela da stampare con il logo per regalare gadget personalizzati ai congressi? Ti servono le migliori shopper di cotone personalizzate per la tua azienda? Contattaci subito. Il nostro servizio di printing su sacchetti di tela è al tuo servizio.",
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
        variante("Borsa juta manici lunghi", "borsa-juta-manici-lunghi", juta),
        variante("Chiusura a strozzo", "chiusura-a-strozzo", sacca),
        variante("Cotone blu 2 colori", "cotone-blu-2-colori", cotone),
        variante("Cotone colorato", "cotone-colorato", cotone),
        variante("Cotone pesante", "cotone-pesante", cotone),
        variante("Cotone stampa quadricromia", "cotone-stampa-quadricromia", cotone),
        variante("Manici colorati", "manici-colorati", cotone),
        variante("Manici lunghi, 2 colori", "manici-lunghi-2-colori", cotone),
        variante("Naturale 1 colore", "naturale-1-colore", cotone),
        variante("Sacca cotone ecologico", "sacca-cotone-ecologico", sacca),
        variante("Sacca in cotone ecrù", "sacca-in-cotone-ecru", sacca),
        variante("Sacchetto in TNT", "sacchetto-in-tnt", sacca),
        variante("Shopper colorato", "shopper-colorato", cotone),
        variante("Shopper cotone melange", "shopper-cotone-melange", cotone),
        variante("Shopper cotone cucito", "shopper-cotone-cucito", cotone),
        variante("Shopper evento", "shopper-evento", cotone),
        variante("Shopper in cotone riciclato", "shopper-in-cotone-riciclato", cotone),
        variante("Shopper manici lunghi", "shopper-manici-lunghi", cotone),
        variante("Shopper soffietto base", "shopper-soffietto-base", cotone),
        variante("Shopper spesa", "shopper-spesa", spesa),
        variante("Shopper TNT maxi", "shopper-tnt-maxi", tnt),
        variante("TNT bottiglia", "tnt-bottiglia", tnt),
        variante("TNT canottiera", "tnt-canottiera", tnt),
        variante("TNT food", "tnt-food", tnt),
        variante("Zainetto 2 colori", "zainetto-2-colori", zaino),
        variante("Zainetto cotone ecologico", "zainetto-cotone-ecologico", sacca),
        variante("Zainetto poliestere", "zainetto-poliestere", zaino),
      ],
    },
    quantities: { label: "Quantità", options: cotone.quantities },
    sizes: { label: "Misure in cm", options: cotone.sizes },
  },
};
