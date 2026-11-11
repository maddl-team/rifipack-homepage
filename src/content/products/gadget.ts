import type { ProductPage } from "./types";
import { gadgetGallery } from "./gadget.gallery";

/**
 * Testi: quelli della pagina attuale di rifipack.it/gadget-personalizzati/
 * (letta il 10 novembre 2026), invariati, tranne dove indicato come NUOVO.
 * Il modulo ha i modelli e non chiede quantità né misure.
 */
const variante = (label: string, file: string) => ({
  label,
  image: `/img/prodotti/gadget/varianti/${file}.webp`,
});

export const gadget: ProductPage = {
  slug: "gadget-personalizzati",
  name: "Gadget e altri prodotti personalizzati",
  family: "Gadget personalizzati",
  seo: {
    title: "Gadget personalizzati per aziende | Rifipack",
    description:
      "Cerchi gadget personalizzati per regali aziendali? il nostro servizio di stampa e personalizzazione è al tuo servizio. Dai uno sguardo ora.",
  },
  hero: {
    eyebrow: "Gadget personalizzati",
    h1: "Stampa gadget personalizzati",
    lead:
      "Scopri i nostri prodotti e gadget personalizzati. Con Rifipack puoi avere il tuo prodotto personalizzato Made in Italy. Ottimizzando così uno dei passaggi fondamentali per la tua brand identity: trasformare un semplice regalo aziendale in uno strumento di marketing.",
    usps: [
      { title: "Made in Italy", text: "taccuini, magliette, ombrelli e altri oggetti con il tuo logo." },
      { title: "Brand identity", text: "cappelli, penne, tappetini, custodie e shopper da ricordare." },
      { title: "Eventi", text: "gift bag, lanyard, cartelle stampa e caricabatteria." },
      { title: "Budget", text: "stampe ottimizzate dentro i limiti che ci indichi." },
    ],
    image: {
      src: gadgetGallery[0].src,
      w: gadgetGallery[0].w,
      h: gadgetGallery[0].h,
      alt: "Portaocchiali personalizzato per hotel",
    },
    caption: "Gadget personalizzato",
  },
  gallery: {
    eyebrow: "Realizzazioni", // NUOVO
    title: "I nostri gadget", // NUOVO
    intro:
      "Grazie alle competenze del nostro team puoi realizzare gadget personalizzabili da stampare e customizzare in tutti i modi. Ad esempio, possiamo creare per te dei taccuini, delle magliette, degli ombrelli con il tuo logo. In modo da renderti indimenticabile anche nelle occasioni speciali, nei meeting e durante gli incontri con i tuoi clienti migliori.",
    items: gadgetGallery,
    initial: 12,
    moreLabel: "Mostra tutte le realizzazioni", // NUOVO
  },
  sections: [
    {
      title: "Perché investire nei gadget da personalizzare?",
      paragraphs: [
        "I motivi che spingono le aziende a chiedere il nostro contributo per realizzare gadget personalizzati online: il marketing. Ad esempio, puoi lavorare sulla brand identity e creare dei cappelli o delle penne USB con il tuo logo. Lo stesso vale per un’ampia gamma di prodotti come, ad esempio, tappetini per il mouse, custodie, penne e taccuini.",
        "Questo lavoro può riguardare anche la fidelizzazione dei clienti, magari durante un incontro importante o un evento. Ricevere una shopper con logo con altri prodotti personalizzati può essere un buon modo per farti ricordare dal pubblico che ha accettato il tuo invito.",
      ],
    },
    {
      title: "Le caratteristiche dei nostri gadget pubblicitari",
      paragraphs: [
        "La qualità del nostro lavoro di stampa su gadget personalizzati inizia con la scelta dei colori e dei materiali ideali per ottenere il risultato utile al tuo scopo. Ovvero, stampare la tua identità su prodotti personalizzati da utilizzare nel tuo lavori di marketing offline.",
        "Siamo specializzati nella realizzazione di gadget personalizzati per aziende che vogliono sfruttare le proprie capacità. Possiamo aiutarti a individuare gli oggetti promozionali più venduti in modo da scegliere la combinazione giusta per le tue esigenze.",
        "Ad esempio, per meeting e seminari puoi creare una gift bag con oggetti promozionali come i lanyard personalizzati per fiere, feste ed eventi, le cartelle stampa e i caricabatteria.",
      ],
    },
    {
      title: "In quali occasioni hai bisogno di gadget personalizzabili?",
      paragraphs: [
        "Analizziamo un attimo i nostri clienti: ci occupiamo della vendita dei gadget da personalizzare alle aziende che vogliono realizzare una divisa interna o a imprese che hanno bisogno di marcare la propria identità di brand con i clienti.",
        "Supportiamo ogni giorno chi deve dare il benvenuto a relatori e pubblico di un congresso. Ci occupiamo anche di dettagli per il restyling degli spazi dell’ufficio, come ad esempio tappetini del mouse e zerbini.",
      ],
    },
    {
      title: "Vuoi personalizzare i migliori gadget online?",
      paragraphs: [
        "Noi siamo la soluzione giusta per creare regali aziendali e oggetti promozionali su misura, con logo e colori di brand. Possiamo ottimizzare le stampe e rispettare i tuoi limiti di budget per stampare gadget da lasciare ai clienti e ai fornitori. Ecco il nostro portfolio:",
      ],
    },
  ],
  sectionsCta: "Richiedi un preventivo",
  faqs: [
    {
      q: "I gadget sono prodotti in Italia?",
      a: "Sì. Il prodotto personalizzato è Made in Italy. L’idea è trasformare un regalo aziendale in uno strumento di marketing, con logo e colori del brand.",
    },
    {
      q: "Che oggetti posso personalizzare?",
      a: "Taccuini, magliette, ombrelli, cappelli, penne, shopper, lanyard, cartelle stampa, caricabatteria, tappetini e zerbini. Nel modulo scegli il modello tra quelli in elenco: ci sono anche beauty, borracce, banner e prese universali.",
    },
    {
      q: "Per quali occasioni si usano?",
      a: "Meeting, seminari, fiere e congressi, per accogliere relatori e pubblico con gift bag, lanyard, cartelle stampa e caricabatteria. Servono anche alle divise interne, al rapporto con i clienti e a piccoli interventi in ufficio, come tappetini e zerbini.",
    },
    {
      q: "Come funziona la stampa?",
      a: "Si parte da colori e materiali adatti all’oggetto, così l’identità del brand sta sul gadget e non è un’applicazione generica. Se ci indichi il budget, ottimizziamo le stampe dentro quel limite.",
    },
    {
      q: "Devo indicare quantità e misure?",
      a: "No. Il modulo chiede solo quale gadget ti interessa, insieme ai tuoi dati. Quantità, materiali e grafica li definiamo nella richiesta, in base all’evento o al regalo che hai in mente.",
    },
  ],
  form: {
    title: "Compila il form per avere il tuo prodotto personalizzato",
    intro: "Tre passi, pochi campi. Preferisci parlare con noi? Chiama o scrivi su WhatsApp.", // NUOVO
    variants: {
      label: "Seleziona il prodotto a cui sei interessato",
      options: [
        variante("Banner personalizzati", "banner"),
        variante("Beauty con maniglia", "beauty-maniglia"),
        variante("Beauty cotone", "beauty-cotone"),
        variante("Beauty cotone chiusura zip", "beauty-zip"),
        variante("Bilancia digitale pesa valigia", "bilancia"),
        variante("Borraccia personalizzata", "borraccia"),
        variante("Cappello ricamato", "cappello"),
        variante("Cartellina porta documenti", "cartellina"),
        variante("Gadget", "gadget"),
        variante("Laccio con moschettone", "laccio"),
        variante("Matite personalizzate", "matite"),
        variante("Menù personalizzati", "menu"),
        variante("Ombrelli con custodia", "ombrelli"),
        variante("Orologio", "orologio"),
        variante("Orsetto personalizzato", "orsetto"),
        variante("Pallone personalizzato", "pallone"),
        variante("Penna in plastica", "penna-plastica"),
        variante("Penna personalizzata", "penna"),
        variante("Porta documenti", "porta-documenti"),
        variante("Portaocchiali personalizzato", "portaocchiali"),
        variante("Prese universali con custodia", "prese"),
        variante("Quaderno con elastico", "quaderno-elastico"),
        variante("Quaderno personalizzato", "quaderno"),
        variante("Tappetino mouse", "tappetino"),
        variante("Tappeto personalizzato", "tappeto"),
        variante("Vela bandiera", "vela"),
        variante("Zerbino personalizzato", "zerbino"),
      ],
    },
    quantities: { label: "Quantità", options: [] },
    sizes: { label: "Misure in cm", options: [] },
  },
};
