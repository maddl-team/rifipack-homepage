import type { ProductPage } from "./types";
import { shopperBioGallery } from "./shopper-bio.gallery";

/**
 * Testi: quelli della pagina attuale di rifipack.it/shopper-in-plastica-bio/ (letta il 26 ottobre 2026),
 * invariati, tranne dove indicato come NUOVO.
 * Quantità e misure seguono i cinque elenchi del modulo originale, uno per famiglia di modello.
 */
const chiusura = {
  quantities: ["5000 pz", "10000 pz", "15000 pz"],
  sizes: ["12x20cm", "15x25cm", "18x30cm", "22x35cm", "30x40cm"],
};
const bioCanotta = {
  quantities: ["150 kg", "250 kg", "350 kg", "450 kg"],
  sizes: ["23x14x45h", "27x16x50h", "30x18x60h", "35x20x70h"],
};
const bioFagiolo = {
  quantities: ["150 kg", "250 kg", "350 kg", "450 kg"],
  sizes: ["22x10x35h", "25x10x40h", "35x10x50h"],
};
const canotta = {
  quantities: ["100 kg", "200 kg", "300 kg", "400 kg"],
  sizes: ["23x14x45h", "27x16x50h", "30x18x60h", "35x20x70h", "40x26x80h", "50x30x90h"],
};
const fagiolo = {
  quantities: ["100 kg", "200 kg", "300 kg", "400 kg"],
  sizes: ["22x10x35h", "25x10x40h", "35x10x50h", "40x12x60h", "50x12x70h"],
};

const variante = (label: string, file: string, group: typeof chiusura) => ({
  label,
  image: `/img/prodotti/shopper-bio/varianti/${file}.webp`,
  ...group,
});

export const shopperBio: ProductPage = {
  slug: "shopper-in-plastica-bio",
  name: "Shopper bio e sacchetti in plastica riciclata",
  family: "Shopping bag",
  seo: {
    title: "Shopper di plastica Bio, buste personalizzate | Rifipack",
    description:
      "Stai cercando le migliori buste e shopper di plastica per la tua attività? Noi ti aiutiamo a trovare la soluzione giusta.",
  },
  hero: {
    eyebrow: "Shopping bag",
    h1: "Borse di plastica ecologiche e personalizzate",
    lead:
      "Le nostre shopper di plastica in materiale bio sono economiche, riciclabili, riutilizzabili, resistenti e prodotte rispettando le norme vigenti in merito agli spessori e alla composizione dei materiali utilizzati. Tutto questo senza dimenticare la personalizzazione e la possibilità di trasformare i classici sacchetti plastica per negozi in uno strumento di branding.",
    usps: [
      { title: "Riciclabili", text: "riutilizzabili, resistenti e prodotte in materiale bio." },
      { title: "A norma", text: "spessori e composizione secondo le norme vigenti." },
      { title: "Personalizzabili", text: "colori e logo, per fare del sacchetto uno strumento di branding." },
      { title: "Per i negozi", text: "shopper in plastica economiche, al miglior prezzo." },
    ],
    image: {
      src: shopperBioGallery[0].src,
      w: shopperBioGallery[0].w,
      h: shopperBioGallery[0].h,
      alt: "Shopper in plastica bio con maniglia a fagiolo",
    },
    caption: "Cartene opaline, maniglia a fagiolo",
  },
  gallery: {
    eyebrow: "Realizzazioni", // NUOVO
    title: "Le nostre shopper bio", // NUOVO
    intro:
      "Vuoi una prova concreta? Contattaci subito per avere maggiori informazioni sul nostro catalogo di shopper in plastica al miglior prezzo, da personalizzare e caratterizzare con colori e logo in modo da trasferire sempre il concetto di marca in qualsiasi momento.",
    items: shopperBioGallery,
    initial: 12,
    moreLabel: "Mostra tutte le realizzazioni", // NUOVO
  },
  sections: [
    {
      title: "La plastica può essere un materiale speciale",
      paragraphs: [
        "La nostra idea è sempre quella di garantire massimo rispetto per le norme vigenti per la tutela dell’ambiente. Quindi le borsine in plastica che puoi trovare nel nostro catalogo sono studiate per essere prodotte con materiali biodegradabili, non impattanti sull’ambiente.",
        "Questo però non significa rinunciare allo stile e al design. Tantomeno alla praticità. Le nostre shopper plastica – disponibili anche in grandi dimensioni e all’ingrosso – sono resistenti e comode da usare, tanto che i clienti le utilizzeranno anche più volte.",
      ],
    },
    {
      title: "Scegli il modello di busta che preferisci",
      paragraphs: [
        "Uno degli aspetti fondamentali delle shopper di plastica economiche del nostro catalogo: possono essere personalizzate come preferisci. Ci sono modelli con maniglie, shopper in plastica con soffietto e manico a fagiolo, sempre in materiale bio ed ecologico.",
        "Tutto questo senza dimenticare la possibilità di personalizzare le buste in plastica con colori, fantasie e disegni compreso il tuo logo aziendale. E poi c’è il tipo di plastica: lucida, trasparente, rigida, morbida, rinforzata, opaca: tu scegli e noi ti seguiamo.",
      ],
    },
    {
      title: "Versatilità e convenienza per le shopper di plastica",
      paragraphs: [
        "Sappiamo che per la tua azienda è importante adottare soluzioni ecocompatibili per le buste di plastica. Per questo, offriamo shopper personalizzate e realizzate con materiali riciclati, riducendo l’impatto ambientale e dimostrando l’impegno verso la sostenibilità.",
        "Queste shopping bag di sono perfette per coniugare praticità e rispetto per l’ambiente, con un packaging resistente e a basso impatto. Ma anche economico. le soluzioni che ti proponiamo sono gestibili e adattabili al tuo budget.",
      ],
    },
    {
      title: "Scegli le tue buste di plastica per te",
      paragraphs: [
        "Le shopping bag di Rifipack sono perfette per negozi, centri commerciali, uffici ed eventi. Se vuoi realizzare dei sacchetti con il tuo logo e cerchi un punto di riferimento per la vendita all’ingrosso e al dettaglio dei sacchetti di plastica sei nel posto giusto.",
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
        variante("Bianca fagiolo", "bianca-fagiolo", fagiolo),
        variante("Bianca stampa 2 colori", "bianca-stampa-2-colori", fagiolo),
        variante("Biodegradabile maniglia canottiera", "biodegradabile-maniglia-canottiera", bioCanotta),
        variante("Biodegradabile maniglia fagiolo", "biodegradabile-maniglia-fagiolo", bioFagiolo),
        variante("Biodegradabile colorata fagiolo", "biodegradabile-colorata-fagiolo", bioFagiolo),
        variante("Biodegradabile colorata", "biodegradabile-colorata", bioCanotta),
        variante("Biodegradabile compostabile", "biodegradabile-compostabile", bioCanotta),
        variante("Biodegradabile fondo pieno", "biodegradabile-fondo-pieno", bioFagiolo),
        variante("Biodegradabile soffietto base", "biodegradabile-soffietto-base", bioFagiolo),
        variante("Biodegradabile", "biodegradabile", bioCanotta),
        variante("Bustina chiusura a pressione", "bustina-chiusura-a-pressione", chiusura),
        variante("Cartene opaline bottiglia", "cartene-opaline-bottiglia", fagiolo),
        variante("Chiusura a pressione con tasca", "chiusura-a-pressione-con-tasca", chiusura),
        variante("Chiusura a pressione con tasca 2", "chiusura-a-pressione-con-tasca-2", chiusura),
        variante("Chiusura a pressione due colori", "chiusura-a-pressione-due-colori", chiusura),
        variante("Chiusura a pressione un colore", "chiusura-a-pressione-un-colore", chiusura),
        variante("Chiusura a pressione", "chiusura-a-pressione", chiusura),
        variante("Chiusura con cursore", "chiusura-con-cursore", chiusura),
        variante("Fustellata 2 colori", "fustellata-2-colori", fagiolo),
        variante("Maniglia a borsetta", "maniglia-a-borsetta", canotta),
        variante("Maniglia termosaldata", "maniglia-termosaldata", canotta),
        variante("Nera stampa 2 colori", "nera-stampa-2-colori", fagiolo),
        variante("Nera stampa argento", "nera-stampa-argento", fagiolo),
        variante("Plastica opaca colorata", "plastica-opaca-colorata", fagiolo),
        variante("Plastica 30% riciclata", "plastica-30-riciclata", fagiolo),
        variante("Plastica lucida canottiera", "plastica-lucida-canottiera", canotta),
        variante("Plastica lucida colorata", "plastica-lucida-colorata", fagiolo),
        variante("Polietilene trasparente", "polietilene-trasparente", fagiolo),
        variante("Trasparente con cursore", "trasparente-con-cursore", chiusura),
      ],
    },
    quantities: { label: "Quantità", options: fagiolo.quantities },
    sizes: { label: "Misure in cm", options: fagiolo.sizes },
  },
};
