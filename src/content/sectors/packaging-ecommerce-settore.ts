import type { SectorPage } from "./types";

export const packagingEcommerceSettore: SectorPage = {
  slug: "packaging-ecommerce",
  name: "Packaging ecommerce",
  seo: {
    title: "Packaging Ecommerce Personalizzato | Scatole Spedizioni | Rifipack",
    description:
      "Ottimizza la tua logistica con il packaging ecommerce personalizzato Rifipack. Mailer box in cartone ondulato, tear-tape per resi e unboxing experience memorabile.",
  },
  hero: {
    eyebrow: "Settori",
    h1: "Packaging Ecommerce Personalizzato: Scatole per Spedizioni Efficaci",
    lead:
      "Nel mondo asettico degli acquisti digitali, il pacco consegnato dal corriere rappresenta l'unico punto di contatto fisico (touchpoint) tra il tuo brand e il cliente. Un packaging e-commerce personalizzato deve eccellere su due fronti opposti: massima resistenza meccanica per superare gli stress logistici (urti, compressione) e design interno sorprendente per innescare un'esperienza di unboxing gratificante. In Rifipack ingegnerizziamo scatole per spedizioni (mailer box) che abbassano i tassi di rottura e aumentano la fedeltà del cliente (retention rate).",
    image: {
      src: "/img/prodotti/ecommerce/13-scatola-bianca.webp",
      w: 1000,
      h: 688,
      alt: "Scatola bianca per spedizioni",
    },
    caption: "Scatola spedizioni",
  },
  benefits: {
    eyebrow: "Logistica",
    title: "Resistenza Logistica: ECT e Cartone Ondulato",
    intro: "Un pacco viaggia in media attraverso 5 centri di smistamento prima di arrivare a destinazione. La solidità è garantita dai nostri materiali tecnici:",
    items: [
      {
        title: "Cartone Ondulato (Microonda E e Onda B)",
        text: "Utilizziamo profili ondulati con elevata resistenza allo schiacciamento verticale (Edge Crush Test - ECT) e allo scoppio (Mullen Test). L'onda ammortizza le cadute, proteggendo il contenuto (es. elettronica, cosmetici, abbigliamento).",
      },
      {
        title: "Mailer Box Automontanti (Fefco 0427)",
        text: "La struttura a incastro più utilizzata nell'e-commerce. Dotata di alette laterali che si ripiegano verso l'interno, creando pareti a doppio spessore che offrono un'incredibile rigidità strutturale e una chiusura antimanomissione sicura senza l'abuso di nastro adesivo.",
      },
    ],
  },
  process: {
    eyebrow: "Magazzino",
    title: "Efficienza in Magazzino e Logistica di Reso (Reverse Logistics)",
    intro: "Il tempo è denaro nel settore e-commerce. Le nostre scatole ottimizzano le operazioni dei packer (addetti all'imballaggio) e migliorano l'esperienza del consumatore in caso di reso:",
    steps: [
      {
        title: "Tear-Tape e Doppia Striscia Adesiva (Peel & Seal)",
        text: "Applicazione di una striscia biadesiva sul lembo di chiusura (permettere al magazziniere di sigillare il pacco in un secondo) e di un filo a strappo (tear-tape) che permette al cliente di aprire la scatola senza cutter. L'aggiunta di una seconda striscia adesiva consente al cliente di riutilizzare la stessa scatola intatta per un eventuale reso, riducendo le frizioni nel customer care.",
      },
      {
        title: "Ottimizzazione Dimensionale (Void Reduction)",
        text: "Progettiamo fustelle calcolate al millimetro sugli ingombri dei tuoi prodotti standard per eliminare il \"vuoto\" interno. Questo abbatte drasticamente i costi di spedizione (calcolati sul peso volumetrico) e riduce il consumo di materiali riempitivi costosi (pluriball, patatine in polistirolo).",
      },
    ],
  },
  materials: {
    eyebrow: "Unboxing",
    title: "L'Unboxing: Stampa Reverse e Componenti Aggiuntivi",
    intro:
      "Se l'esterno della mailer box deve essere anonimo e resistente per non attirare furti (spesso in cartone kraft avana o stampato a un colore flexo), l'interno è il vero palcoscenico del marketing. La stampa fronte/retro (inside/out printing) permette di nascondere pattern vivaci, grafiche a colori, istruzioni o codici sconto (QR code) all'interno del coperchio, sorprendendo il cliente al momento dell'apertura (Effetto WOW).",
    image: {
      src: "/img/prodotti/ecommerce/09-chiusura-adesiva.webp",
      w: 797,
      h: 1000,
      alt: "Scatola e-commerce con chiusura adesiva",
    },
    items: [],
  },
  faqs: [
    {
      q: "Fornite anche materiali per il riempimento interno (void fill) e nastri adesivi?",
      a: "Sì, offriamo un ecosistema di imballaggio completo per l'e-commerce. Forniamo nastri adesivi logati in carta Kraft (per una riciclabilità totale del pacco senza separazione dei materiali), trucioli in carta colorata (zig-zag shred) e carte veline personalizzate per avvolgere il prodotto creando un'estetica premium stile \"gift\".",
    },
    {
      q: "Le vostre scatole per spedizioni sono ecologiche?",
      a: "Assolutamente. Il cartone ondulato che impieghiamo per le mailer box è composto da un'altissima percentuale (fino all'80-100%) di fibre riciclate post-consumo (Testliner e Fluting). L'intero imballo, essendo monomateriale in cellulosa e stampato con inchiostri all'acqua flexografici, è al 100% biodegradabile, riciclabile e rinnovabile.",
    },
    {
      q: "Come gestite la stampa a colori su cartone ondulato ruvido (Avana)?",
      a: "Per grafiche semplici a 1-2 colori su cartone grezzo (avana) utilizziamo la stampa flessografica diretta. Se il tuo brand e-commerce richiede una qualità fotografica in quadricromia (es. per grafiche interne mozzafiato), utilizziamo la stampa offset laminata (litho-lamination), accoppiando un foglio di cartoncino patinato stampato in alta definizione sull'onda grezza.",
    },
  ],
};
