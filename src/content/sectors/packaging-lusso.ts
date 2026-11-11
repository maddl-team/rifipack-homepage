import type { SectorPage } from "./types";

/**
 * Prima pagina settore. Testo fornito dal cliente (11 novembre 2026).
 * Le foto sono realizzazioni già presenti nel sito, scelte per nicchia.
 */
export const packagingLusso: SectorPage = {
  slug: "packaging-lusso-e-retail-premium",
  name: "Packaging di lusso e retail premium",
  seo: {
    title: "Packaging di Lusso Personalizzato & Retail Premium | Rifipack",
    description:
      "Esalta il tuo brand con il packaging di lusso Rifipack. Scatole premium su misura, materiali tecnici, cartone rigido e finiture esclusive per un unboxing indimenticabile.",
  },
  hero: {
    eyebrow: "Settori",
    h1: "Packaging di lusso e retail premium: l’eccellenza incontra il tuo brand",
    lead:
      "Nel settore del lusso, il prodotto non inizia e non finisce con l’oggetto in sé: inizia dalla sua confezione. Un packaging di lusso personalizzato non è un semplice contenitore logistico, ma il primo vero punto di contatto fisico e tattile tra il tuo brand e il cliente. In Rifipack progettiamo e realizziamo soluzioni di retail premium ad altissima densità qualitativa, capaci di trasformare il gesto dell’apertura in una vera e propria esperienza di unboxing. Il nostro approccio ingegneristico alla cartotecnica garantisce scatole che aumentano il valore percepito del prodotto, proteggono contenuti fragili e fidelizzano una clientela sempre più esigente.",
    image: {
      src: "/img/prodotti/scatole-regalo/01-acchitto-scatola-calamita-nera.webp",
      w: 986,
      h: 1000,
      alt: "Scatola a calamita in carta nera, chiusura a scomparsa",
    },
    caption: "Scatola rigida a calamita",
  },
  benefits: {
    eyebrow: "Perché",
    title: "Perché scegliere un packaging premium",
    intro: "Investire in un packaging di alta gamma genera ritorni misurabili sul posizionamento del brand. Ecco i vantaggi diretti per le aziende del settore luxury.",
    items: [
      {
        title: "Brand identity e posizionamento",
        text: "Il packaging è il vestito del prodotto. Materiali ad alto spessore e nobilitazioni metallizzate comunicano subito esclusività e giustificano un prezzo premium.",
      },
      {
        title: "Unboxing come marketing",
        text: "Nell’era digitale l’apertura di un pacco è un evento condivisibile. Un design sorprendente stimola i video di unboxing sui social e amplifica la visibilità del brand a costo zero.",
      },
      {
        title: "Protezione strutturale",
        text: "Il lusso richiede perfezione. Cartoni accoppiati, scatole rigide rivestite e interni sagomati su misura fanno arrivare a destinazione, intatti, prodotti costosi o fragili in vetro.",
      },
      {
        title: "Fidelizzazione",
        text: "L’impatto visivo, tattile e sonoro, come il click di una chiusura magnetica, lascia un ricordo positivo e incentiva il riacquisto.",
      },
    ],
  },
  process: {
    eyebrow: "Produzione",
    title: "Dal concept allo scaffale",
    intro: "Realizzare una scatola premium richiede rigore tecnico. Accompagniamo i brand in un processo produttivo strutturato, passo dopo passo.",
    steps: [
      {
        title: "Analisi e briefing tecnico",
        text: "Studiamo il prodotto da confezionare, il suo peso, la fragilità e i canali di distribuzione, per definire i carichi di rottura.",
      },
      {
        title: "Ingegneria cartotecnica e fustella",
        text: "I progettisti sviluppano il tracciato fustella. Realizziamo soluzioni automontanti, scatole a marmotta o cofanetti a libro, ottimizzando gli incastri.",
      },
      {
        title: "Campionatura neutra",
        text: "Forniamo un prototipo in cartone bianco, non stampato. Serve a testare le tolleranze millimetriche degli alveoli interni.",
      },
      {
        title: "Stampa, nobilitazione e assemblaggio",
        text: "Approvato il prototipo, procediamo con la stampa offset, applichiamo le finiture speciali, come hot foil e vernici UV, e assembliamo le scatole rigide.",
      },
    ],
  },
  materials: {
    eyebrow: "Materiali",
    title: "L’anima del packaging di lusso",
    intro: "La scelta del supporto cartaceo determina la rigidità e la resa cromatica. Selezioniamo i materiali per il settore luxury.",
    image: {
      src: "/img/prodotti/scatole-regalo/14-scatole-calamita-mix-colori.webp",
      w: 1000,
      h: 948,
      alt: "Scatole a calamita in più colori e formati",
    },
    items: [
      {
        title: "Cartone rigido rivestito",
        text: "L’apice del lusso. Anima in cartone pressato, da 1,5 a 3 mm, rivestita esternamente con carte speciali. È la soluzione dei cofanetti per gioielleria.",
      },
      {
        title: "Cartoncino SBS",
        text: "Solid Bleached Sulphate: cartoncino di pura cellulosa vergine, bianco su entrambi i lati, con una resa fotografica eccezionale. Si usa per gli astucci cosmetici.",
      },
      {
        title: "Carte speciali e da rivestimento",
        text: "Per gli effetti tattili rivestiamo le scatole con carte goffrate, martellate o materiche, che simulano texture come pelle o legno.",
      },
    ],
  },
  solutions: {
    eyebrow: "Nicchie",
    title: "Soluzioni su misura per il retail premium",
    intro: "Progettiamo architetture cartotecniche specifiche per le diverse nicchie del lusso.",
    items: [
      {
        title: "Cosmetica e profumeria",
        text: "Astucci lineari in cartoncino SBS, scatole rigide con interni fustellati anti-urto in schiuma e finiture soft-touch.",
        image: {
          src: "/img/prodotti/shopper-lusso/10-sephora-shopper-lusso-30x30-10-non-plastificata-bellezza-cura-del-corp.webp",
          w: 870,
          h: 1000,
          alt: "Shopper di lusso per bellezza e cura del corpo",
        },
      },
      {
        title: "Gioielleria e orologeria",
        text: "Cofanetti rigidi rivestiti in carte speciali, interni strutturati in velluto e chiusure magnetiche a scomparsa.",
        image: {
          src: "/img/prodotti/scatole-regalo/08-from-springs-to-ravello-scatola-calamita.webp",
          w: 1000,
          h: 1000,
          alt: "Cofanetto rigido a chiusura magnetica",
        },
      },
      {
        title: "Abbigliamento e moda boutique",
        text: "Shopper di lusso in carta alto spessore con manici in doppio raso, scatole fondo e coperchio e veline personalizzate.",
        image: {
          src: "/img/prodotti/shopper-lusso/20-fabio-salini-shopper-carta-in-pasta-nera-stampa-a-caldo-argento-manigl.webp",
          w: 1000,
          h: 929,
          alt: "Shopper di lusso in carta nera, stampa a caldo argento e manici in raso",
        },
      },
      {
        title: "Vino e spirits",
        text: "Cofanetti porta bottiglia in cartone teso o accoppiato a microonda, per unire estetica premium e resistenza.",
        image: {
          src: "/img/prodotti/scatole-regalo/13-scatola-cantinetta-calamita.webp",
          w: 946,
          h: 1000,
          alt: "Scatola cantinetta a calamita per bottiglie",
        },
      },
    ],
  },
  finishes: {
    eyebrow: "Finiture",
    title: "Dettagli che fanno la differenza",
    intro: "Le nobilitazioni si scelgono sul prototipo approvato. Ogni tecnica ha un effetto preciso, visivo o tattile.",
    items: [
      {
        title: "Stampa a caldo",
        text: "Applicazione termica di una lamina metallizzata. Conferisce una brillantezza assoluta.",
      },
      {
        title: "Rilievo a secco",
        text: "Deformazione meccanica della carta tramite cliché, per loghi in rilievo o incavati.",
      },
      {
        title: "Verniciatura UV spessorata",
        text: "Vernice trasparente lucida, con uno spessore percepibile al tatto.",
      },
      {
        title: "Plastificazione soft-touch",
        text: "Film plastico ultra-sottile, con una sensazione vellutata o gommata.",
      },
      {
        title: "Chiusure magnetiche a scomparsa",
        text: "Magneti al neodimio, invisibili tra gli strati di cartone, per un’apertura fluida e silenziosa.",
      },
    ],
  },
  faqs: [
    {
      q: "Qual è l’ordine minimo per il packaging di lusso personalizzato?",
      a: "Gestiamo tirature flessibili. Per gli astucci lineari i lotti minimi sono accessibili. Per le scatole rigide rivestite, a causa dei costi di avviamento dei macchinari artigianali, il lotto minimo è superiore. Contattaci per uno studio di fattibilità.",
    },
    {
      q: "Quali sono i tempi di produzione di una scatola premium?",
      a: "I tempi variano dalle 3 alle 5 settimane dall’approvazione del prototipo neutro e del file grafico. Servono tempistiche più lunghe quando le nobilitazioni sono più di una, in sequenza.",
    },
    {
      q: "Quali materiali consigliate per un packaging di lusso ecologico?",
      a: "Consigliamo cartoncini SBS o carte goffrate certificate FSC®. Al posto delle plastificazioni in polipropilene usiamo verniciature protettive a base d’acqua, così il prodotto resta riciclabile al 100%.",
    },
  ],
};
