import type { ProductPage } from "./types";
import { packagingAlimentare } from "./packaging-alimentare";
import { sacchettiAlluminioGallery } from "./sacchetti-alluminio.gallery";

/**
 * Testi: quelli della pagina attuale di rifipack.it/sacchetti-alluminio-alimenti/
 * (letta il 26 ottobre 2026), invariati, tranne dove indicato come NUOVO.
 * Il modulo è lo stesso del packaging alimentare (stesse scelte e immagini): niente quantità né misure.
 */
export const sacchettiAlluminio: ProductPage = {
  slug: "sacchetti-alluminio-alimenti",
  name: "Sacchetti in alluminio per alimenti",
  family: "Packaging personalizzato",
  seo: {
    title: "Sacchetti Doypack Alluminio per Alimenti | Rifipack",
    description:
      "Sacchetti in alluminio alimentare e Mylar con chiusura zip ermetica. Packaging ad alta barriera personalizzabile per cibo secco, caffè e pet food.",
  },
  hero: {
    eyebrow: "Packaging personalizzato",
    h1: "Sacchetti Doypack in Alluminio per Alimenti ad Alta Protezione",
    lead:
      "I sacchetti in alluminio Rifipack rappresentano lo standard d’eccellenza per il confezionamento alimentare che richiede massima protezione e lunga conservazione. Progettati per unire praticità e design, questi imballaggi flessibili offrono una barriera totale contro gli agenti esterni, garantendo che le proprietà organolettiche del tuo prodotto rimangano inalterate dal confezionamento fino al consumo.",
    usps: [
      { title: "Barriera totale", text: "luce, ossigeno, umidità e odori non passano." },
      { title: "Zip ermetica", text: "si richiude e mantiene la freschezza dopo l’apertura." },
      { title: "Stand-up", text: "fondo ovale, il sacchetto resta in piedi sullo scaffale." },
      { title: "Con stampa", text: "logo, grafiche full-color e istruzioni sul sacchetto." },
    ],
    image: {
      src: sacchettiAlluminioGallery[0].src,
      w: sacchettiAlluminioGallery[0].w,
      h: sacchettiAlluminioGallery[0].h,
      alt: "Sacchetto stand-up in alluminio con chiusura zip ermetica",
    },
    caption: "Stand-up, zip ermetica",
  },
  gallery: {
    eyebrow: "Realizzazioni", // NUOVO
    title: "I nostri sacchetti in alluminio", // NUOVO
    intro:
      "Realizzati in accoppiato di alta qualità ( Mylar e Alluminio ), i nostri sacchetti sono la scelta ideale per le aziende che non scendono a compromessi sulla sicurezza alimentare e sulla presentazione a scaffale.",
    items: sacchettiAlluminioGallery,
    initial: 12,
    moreLabel: "Mostra tutte le realizzazioni", // NUOVO
  },
  sections: [
    {
      title: "Caratteristiche Tecniche e Vantaggi del Doypack in Alluminio",
      paragraphs: [
        "La struttura dei nostri sacchetti è studiata per rispondere alle esigenze dell’industria alimentare moderna:",
        "Barriera Totale (Alta Protezione): La struttura pluristrato impedisce il passaggio di luce (raggi UV), ossigeno, umidità e odori. Questo previene l’ossidazione e l’irrancidimento, estendendo significativamente la shelf-life (vita a scaffale) del prodotto.",
        "Ermetici e Richiudibili: Dotati di una pratica zip a pressione “apri e chiudi”, permettono al consumatore di conservare il prodotto nella sua confezione originale anche dopo l’apertura, mantenendone la freschezza.",
        "Design Stand-Up (Autoportante): Grazie al fondo ovale espandibile, il sacchetto resta perfettamente in piedi sugli scaffali, garantendo massima visibilità al tuo brand e ordine nell’esposizione.",
        "Materiali Certificati: Materiali conformi alla certificazione SGS e idonei al contatto diretto con gli alimenti (Food Grade), privi di contaminanti e sicuri.",
        "Resistenza Meccanica: La laminazione in alluminio offre un’elevata resistenza a strappi, perforazioni e cadute accidentali durante il trasporto.",
      ],
    },
    {
      title: "Applicazioni Ideali",
      paragraphs: [
        "Questi imballaggi flessibili sono perfetti per:",
        "Prodotti secchi e in polvere: Farine, integratori, spezie.",
        "Snack e Frutta Secca: Noci, mandorle, patatine.",
        "Caffè e Tè: Grazie alla barriera contro la luce e l’aria.",
        "Pet Food: Cibo secco per animali e snack.",
        "Carne secca (Jerky) e prodotti disidratati.",
      ],
    },
    {
      title: "Personalizzazione e Stampa",
      paragraphs: [
        "Non solo prodotti standard: offriamo sacchetti in alluminio completamente personalizzabili . Possiamo stampare il tuo logo, grafiche full-color e istruzioni direttamente sul materiale, trasformando il packaging in un potente strumento di marketing.",
        "Disponibili in vari formati (da monodose a grandi formati).",
        "Finiture lucide, opache o metallizzate.",
      ],
    },
  ],
  sectionsCta: "Richiedi un preventivo",
  form: {
    title: "Compila il form per avere il tuo prodotto personalizzato",
    intro: "Tre passi, pochi campi. Preferisci parlare con noi? Chiama o scrivi su WhatsApp.", // NUOVO
    variants: packagingAlimentare.form.variants,
    quantities: packagingAlimentare.form.quantities,
    sizes: packagingAlimentare.form.sizes,
  },
};
