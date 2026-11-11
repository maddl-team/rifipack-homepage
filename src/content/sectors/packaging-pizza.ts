import type { SectorPage } from "./types";

export const packagingPizza: SectorPage = {
  slug: "packaging-pizza-e-asporto",
  name: "Scatole pizza e asporto",
  seo: {
    title: "Scatole Pizza Personalizzate e Packaging da Asporto | Rifipack",
    description:
      "Scatole per pizza personalizzate e packaging per il take-away. Materiali idonei al contatto alimentare, mantenimento del calore e stampe atossiche ad acqua.",
  },
  hero: {
    eyebrow: "Settori",
    h1: "Scatole Pizza Personalizzate e Packaging da Asporto",
    lead:
      "Il food delivery ha trasformato la scatola della pizza e il sacchetto dell'hamburger nei principali veicoli pubblicitari (e ambasciatori della qualità) per pizzerie e ristoranti. Le scatole per pizza personalizzate e il packaging da asporto progettati da Rifipack sono architetture termiche: mantengono i cibi caldi, prevengono l'effetto spugna (condensa) e veicolano il tuo brand fino alla tavola del consumatore, il tutto nel pieno rispetto delle normative sanitarie MOCA.",
    image: {
      src: "/img/prodotti/packaging-alimentare/45-de-roma-scatola-pizza.webp",
      w: 1000,
      h: 833,
      alt: "Scatola per pizza personalizzata",
    },
    caption: "Scatola pizza",
  },
  benefits: {
    eyebrow: "Ingegneria",
    title: "Ingegneria della Scatola Pizza: Calore senza Condensa",
    intro:
      "Una pizza molle e fredda rovina la reputazione di una pizzeria. Il nostro cartone ondulato per pizza è progettato per ottimizzare due fattori contrastanti: l'isolamento termico e la traspirazione.",
    items: [
      {
        title: "Cartone Microonda (Onda E / Onda B)",
        text: "Utilizziamo un cartone ondulato che crea una camera d'aria isolante. L'onda B (più spessa) offre massima tenuta termica, mentre l'onda E offre una superficie esterna più liscia per stampe grafiche di altissima qualità.",
      },
      {
        title: "Gestione del Vapore (Fori di Sfiato)",
        text: "Le fustelle prevedono sistemi di sfiatamento posteriori o laterali calcolati per evacuare il vapore in eccesso, impedendo che l'umidità ricaschi sull'impasto ammorbidendone la crosta.",
      },
      {
        title: "Fibra Vergine (Pura Cellulosa)",
        text: "Lo strato interno, a diretto contatto con la pizza, è rigorosamente in pura cellulosa (kraft bianco o avana vergine) per evitare qualsiasi contaminazione da idrocarburi (MOH) presenti nella carta da macero.",
      },
    ],
  },
  solutions: {
    eyebrow: "Asporto",
    title: "Packaging Take-Away per Hamburger, Fritti e Sushi",
    intro: "Oltre alla classica scatola quadrata, il nostro catalogo copre l'intero settore street-food e delivery:",
    items: [
      {
        title: "Scatole per Hamburger (Clamshell) e Vaschette per Fritti",
        text: "Contenitori automontanti con alette a incastro, rivestiti internamente con patine anti-unto (greaseproof) che impediscono agli oli di inzuppare il cartone e macchiare le mani o i sedili dell'auto.",
        image: {
          src: "/img/prodotti/packaging-alimentare/34-boca-burger-contenitori-per-alimenti-personalizzati.webp",
          w: 917,
          h: 1000,
          alt: "Contenitori alimentari personalizzati per hamburger",
        },
      },
      {
        title: "Contenitori per Sushi e Poke",
        text: "Alternative di design ed eco-friendly ai vassoi in plastica nera. Vaschette in cartoncino laminato PLA o PET, eleganti e sicure per il contatto con pesce crudo e salse.",
        image: {
          src: "/img/prodotti/packaging-alimentare/32-cibo-contenitore-per-take-away-asporto-e-delivery.webp",
          w: 1000,
          h: 700,
          alt: "Contenitore per take-away e delivery",
        },
      },
      {
        title: "Shopper Delivery a Base Larga",
        text: "Sacchetti in carta kraft ultra-resistente progettati con fondi larghi (es. 32x32 cm o 36x36 cm) per accogliere le scatole pizza in perfetta orizzontalità, evitando ribaltamenti del condimento durante il tragitto in motorino.",
        image: {
          src: "/img/prodotti/packaging-alimentare/41-shopper-porta-pizza.webp",
          w: 850,
          h: 1000,
          alt: "Shopper porta pizza",
        },
      },
    ],
  },
  faqs: [
    {
      q: "Che tipo di inchiostri utilizzate per la personalizzazione delle scatole pizza?",
      a: "Utilizziamo esclusivamente inchiostri a base d'acqua (flexografici o offset) certificati per il settore alimentare (Low Migration). Questo è cruciale perché le scatole, quando impilate ancora bollenti nei box dei fattorini, potrebbero trasferire i solventi della stampa del coperchio inferiore al fondo della scatola superiore.",
    },
    {
      q: "Posso stampare la scatola della pizza anche all'interno (sotto il coperchio)?",
      a: "Sì, offriamo la stampa all'interno del coperchio (dove consentito dalle stringenti normative MOCA). È una zona strategica e di forte impatto per stampare QR code che rimandano al menù digitale, messaggi di ringraziamento o promozioni per il prossimo ordine.",
    },
    {
      q: "Quali formati di cartoni per pizza producete?",
      a: "Copriamo tutte le esigenze: dai formati standard per pizza tonda (29x29 cm, 33x33 cm), ai formati \"Maxi\" e \"Famiglia\" (40x40 cm, 50x50 cm), fino a scatole rettangolari per pizza al trancio, pinza romana o calzoni. Realizziamo anche inserti in alluminio o cartoncino per separare tranci diversi nella stessa scatola.",
    },
  ],
};
