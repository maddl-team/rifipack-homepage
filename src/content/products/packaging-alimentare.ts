import type { ProductPage } from "./types";
import { packagingAlimentareGallery } from "./packaging-alimentare.gallery";

/**
 * Testi: quelli della pagina attuale di rifipack.it/packaging-alimentare-personalizzato/
 * (letta il 26 ottobre 2026), invariati, tranne dove indicato come NUOVO.
 * Il modulo originale ha solo la scelta del prodotto: niente elenchi di quantità o misure.
 */
const variante = (label: string, file: string) => ({
  label,
  image: `/img/prodotti/packaging-alimentare/varianti/${file}.webp`,
});

export const packagingAlimentare: ProductPage = {
  slug: "packaging-alimentare-personalizzato",
  name: "Packaging alimentare personalizzato",
  family: "Packaging personalizzato",
  seo: {
    title: "Packaging alimentare personalizzato | Rifipack",
    description:
      "Il packaging alimentare personalizzato può essere un’ottima soluzione per promuovere il tuo brand in ogni occasione possibile. Vuoi approfondire?",
  },
  hero: {
    eyebrow: "Packaging personalizzato",
    h1: "Packaging per alimenti",
    lead:
      "Il packaging alimentare sostenibile e personalizzato è un punto fondamentale della tua attività. Noi possiamo aiutarti per tutte le necessità del settore food & beverage , sia dolce che salato. Siamo al fianco di supermercati, ristoranti, take away e grossisti.",
    usps: [
      { title: "Food & beverage", text: "per supermercati, ristoranti, take away e grossisti, dolce e salato." },
      { title: "A norma", text: "imballaggi per alimenti caldi e freddi, nel rispetto di igiene e leggi." },
      { title: "Ecosostenibile", text: "materiali monouso, con attenzione al rispetto per la natura." },
      { title: "Con il marchio", text: "logo e colori aziendali su scatole, sacchetti e contenitori." },
    ],
    image: {
      src: packagingAlimentareGallery[0].src,
      w: packagingAlimentareGallery[0].w,
      h: packagingAlimentareGallery[0].h,
      alt: "Shopper e sacchetto per take away",
    },
    caption: "Take away e delivery",
  },
  gallery: {
    eyebrow: "Realizzazioni", // NUOVO
    title: "I nostri packaging per alimenti", // NUOVO
    intro:
      "E lo facciamo con un approccio etico, qualitativamente ineccepibile. Perché sappiamo che il packaging alimentare personalizzato non è un passaggio che riguarda solo la comunicazione ma anche la salute dei clienti e il rispetto delle normative.",
    items: packagingAlimentareGallery,
    initial: 12,
    moreLabel: "Mostra tutte le realizzazioni", // NUOVO
  },
  sections: [
    {
      title: "Perché personalizzare gli imballaggi alimentari?",
      paragraphs: [
        "Usare imballaggi alimentari con logo e colori aziendali rafforza la comunicazione e il valore del tuo marchio. E lo puoi fare anche in modo etico, scegliendo materiali monouso. In questo modo ottieni un duplice vantaggio: fai muovere il tuo brand e sfrutti l’impegno dell’ecosostenibile per dimostrare che hai a cuore i temi del rispetto per la natura.",
        "Un dettaglio non da poco quando realizzi contenitori da asporto personalizzati: bicchieri in carta per bevande, tovaglioli e tovagliette, carta antiunto, scatole alimentari in cartoncino e packaging alimentare su misura, produzione vaschette per alimenti sostenibili ed ecologiche. In pratica, tutto quello di cui hai bisogno per la ristorazione e il take away.",
      ],
    },
    {
      title: "Quali sono i punti di forza del packaging per il cibo?",
      paragraphs: [
        "Alcuni punti sono già stati chiariti: la produzione imballaggi alimentari proposta da Rifipack ha come punto di partenza la qualità che ti consente di poter gestire gli alimenti, sia caldi che freddi, con la massima sicurezza, la pulizia e l’igiene richiesta per legge.",
        "Poi c’è la personalizzazione da prendere in considerazione: con la scelta delle migliori qualità di inchiostro e dei materiali da stampa, possiamo riprodurre nel miglior modo possibile le tue idee e la tua identità di brand. Sarà facile indicare la stampa delle scatole per alimenti e ordinare online il quantitativo, per riceverle in sede in poco tempo.",
        "Il packaging personalizzato alimentare di Rifipack si basa anche su un altro aspetto: la varietà dei contenitori. Possiamo aiutare le enoteche che devono trovare confezioni per le bottiglie ma anche tavole calde che hanno bisogno di tovaglie e sacchetti per le posate. Il tutto avviene con materiali a norma, adatti al contatto alimentare.",
      ],
    },
    {
      title: "Ordina il tuo packaging alimentare da personalizzare",
      paragraphs: [
        "Le scatole alimentari personalizzate sono importanti. Lo stesso vale per i sacchetti e i contenitori, le buste e le vaschette. Noi possiamo aiutarti in tutti i casi, contattaci subito per studiare insieme le idee della migliore stampa per il tuo eco packaging sostenibile .",
      ],
    },
  ],
  sectionsCta: "Richiedi un preventivo",
  faqs: [
    {
      q: "Per quali attività è il packaging alimentare?",
      a: "Per supermercati, ristoranti, take away e grossisti, sia sul dolce sia sul salato. Copre anche enoteche che confezionano bottiglie e tavole calde che usano tovaglie e sacchetti per le posate.",
    },
    {
      q: "È adatto al contatto con il cibo?",
      a: "Sì. Gli imballaggi gestiscono alimenti caldi e freddi con la pulizia e l’igiene richieste dalla legge. I materiali sono a norma e adatti al contatto alimentare: la confezione non è solo comunicazione, riguarda anche la salute di chi mangia.",
    },
    {
      q: "Cosa posso personalizzare?",
      a: "Bicchieri in carta per bevande calde e fredde, carta antiunto, scatole da asporto, sacchetti delivery e fondo piatto, buste porta posate, bustine per le bacchette, barattoli per il gelato, vaschette e confezioni per il panettone. Su tutti puoi mettere logo e colori aziendali.",
    },
    {
      q: "Si può scegliere un materiale più sostenibile?",
      a: "Sì. Lavoriamo con materiali monouso e un packaging ecosostenibile, così il marchio si muove e allo stesso tempo mostri attenzione per l’ambiente.",
    },
    {
      q: "Come si ordina la quantità?",
      a: "Nel modulo scegli il prodotto. Quantità e formato si definiscono nella richiesta: indichi il quantitativo e ti aiutiamo a studiare la stampa, così le confezioni arrivano in sede.",
    },
  ],
  form: {
    title: "Compila il form per avere il tuo prodotto personalizzato",
    intro: "Tre passi, pochi campi. Preferisci parlare con noi? Chiama o scrivi su WhatsApp.", // NUOVO
    variants: {
      label: "Seleziona il prodotto a cui sei interessato",
      options: [
        variante("Asporto bicchieri", "asporto-bicchieri"),
        variante("Barattoli gelato", "barattoli-gelato"),
        variante("Bicchieri bevanda calda", "bicchieri-bevanda-calda"),
        variante("Bicchieri bevanda fredda", "bicchieri-bevanda-fredda"),
        variante("Bicchieri in carta", "bicchieri-in-carta"),
        variante("Busta porta posate", "busta-porta-posate"),
        variante("Bustina porta bacchette", "bustina-porta-bacchette"),
        variante("Carta antigrasso, 2 colori", "carta-antigrasso-2-colori"),
        variante("Carta antigrasso", "carta-antigrasso"),
        variante("Carta per alimenti", "carta-per-alimenti"),
        variante("Fondo piatto, 1 colore", "fondo-piatto-1-colore"),
        variante("Packaging alimentare 2", "packaging-alimentare-2"),
        variante("Packaging alimentare personalizzato", "packaging-alimentare-personalizzato"),
        variante("Packaging alimentare", "packaging-alimentare"),
        variante("Panettone con corda", "panettone-con-corda"),
        variante("Sacchetti delivery", "sacchetti-delivery"),
        variante("Sacchetti fondo piatto", "sacchetti-fondo-piatto"),
        variante("Sacchetti stampa 2 colori", "sacchetti-stampa-2-colori"),
        variante("Scatola alimentare per asporto", "scatola-alimentare-per-asporto"),
        variante("Scatola bianca regalo", "scatola-bianca-regalo"),
        variante("Scatola cilindrica per bottiglia", "scatola-cilindrica-per-bottiglia"),
        variante("Scatola colomba", "scatola-colomba"),
        variante("Scatola fondo e coperchio", "scatola-fondo-e-coperchio"),
        variante("Scatola takeaway", "scatola-takeaway"),
        variante("Scatole alimentari", "scatole-alimentari"),
        variante("Scatole con divisorio", "scatole-con-divisorio"),
        variante("Scatole da asporto", "scatole-da-asporto"),
        variante("Scatole pizza", "scatole-pizza"),
        variante("Scatolina monoporzione", "scatolina-monoporzione"),
        variante("Shopper packaging alimentare", "shopper-packaging-alimentare"),
        variante("Take-away & delivery", "take-away-delivery"),
        variante("Tovaglietta carta paglia", "tovaglietta-carta-paglia"),
        variante("Tovaglietta in carta politenata", "tovaglietta-in-carta-politenata"),
        variante("Tovagliette in carta riciclabile", "tovagliette-in-carta-riciclabile"),
        variante("Tovaglioli Air laid", "tovaglioli-air-laid"),
        variante("Sacchetti in alluminio", "sacchetti-in-alluminio"),
      ],
    },
    quantities: { label: "Quantità", options: [] },
    sizes: { label: "Misure in cm", options: [] },
  },
};
