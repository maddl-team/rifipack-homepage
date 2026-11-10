/**
 * Validazione del modulo preventivo. Stesse regole nel browser e sul server.
 * Campi: quelli dei moduli attuali di rifipack.it (home e pagine prodotto).
 */
export type QuoteInput = {
  azienda: string;
  referente: string;
  citta: string;
  telefono: string;
  email: string;
  messaggio: string;
  consenso: boolean;
  /** Campo trappola contro lo spam: deve restare vuoto. */
  website?: string;
  /** Famiglia o prodotto scelto dalle schede (facoltativo). */
  prodotto?: string;
  /** Solo moduli di pagina prodotto: slug della pagina (attiva i campi sotto). */
  pagina?: string;
  variante?: string;
  quantita?: string;
  misure?: string;
  /** Nome del file logo (il file viaggia a parte). Serve solo per mostrare gli errori. */
  logo?: string;
};

export type QuoteErrors = Partial<Record<keyof QuoteInput, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+\d][\d\s().\-/]{5,}$/;

/** Passi del modulo della home. */
export const QUOTE_STEPS: (keyof QuoteInput)[][] = [
  ["azienda", "referente", "citta"],
  ["telefono", "email"],
  ["messaggio", "consenso"],
];

/** Passi del modulo di pagina prodotto: dati di contatto, scelta del prodotto, dettagli e invio. */
export const PRODUCT_QUOTE_STEPS: (keyof QuoteInput)[][] = [
  ["azienda", "referente", "citta", "telefono", "email"],
  ["variante", "quantita", "misure"],
  ["logo", "messaggio", "consenso"],
];

export const LOGO_MAX_BYTES = 8 * 1024 * 1024;
export const LOGO_EXT = ["png", "jpg", "jpeg", "svg", "pdf", "ai", "eps", "webp"] as const;
export const LOGO_ACCEPT = LOGO_EXT.map((e) => `.${e}`).join(",");

/** Controlla il file logo (nome e dimensione). Restituisce il messaggio d'errore o null. */
export function validateLogo(file: { name: string; size: number } | null | undefined): string | null {
  if (!file || !file.name) return null;
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (!(LOGO_EXT as readonly string[]).includes(ext)) return "Formato non supportato: usa PNG, JPG, SVG, PDF, AI o EPS.";
  if (file.size > LOGO_MAX_BYTES) return "Il file è troppo grande: massimo 8 MB.";
  return null;
}

type MeasureForm = {
  quantities: { options: string[] };
  sizes: { options: string[] };
  variants: { options: { quantities?: string[]; sizes?: string[] }[] };
};

/** Quali menu del modulo di pagina vanno mostrati: quantità, misure, o entrambi. */
export function formAsks(form: MeasureForm): { quantita: boolean; misure: boolean } {
  return {
    quantita: form.quantities.options.length > 0 || form.variants.options.some((o) => (o.quantities?.length ?? 0) > 0),
    misure: form.sizes.options.length > 0 || form.variants.options.some((o) => (o.sizes?.length ?? 0) > 0),
  };
}

export function validateQuote(
  v: Partial<QuoteInput>,
  fields?: (keyof QuoteInput)[],
  opts?: { quantita?: boolean; misure?: boolean },
): QuoteErrors {
  const e: QuoteErrors = {};
  const check = (k: keyof QuoteInput, ok: boolean, msg: string) => {
    if ((!fields || fields.includes(k)) && !ok) e[k] = msg;
  };
  check("azienda", !!v.azienda?.trim(), "Scrivi il nome dell'azienda.");
  check("referente", !!v.referente?.trim(), "Scrivi nome e cognome del referente.");
  check("citta", !!v.citta?.trim(), "Scrivi la città.");
  check("telefono", !!v.telefono && PHONE.test(v.telefono.trim()), "Inserisci un numero di telefono.");
  check("email", !!v.email && EMAIL.test(v.email.trim()), "Inserisci un indirizzo email completo.");
  check("consenso", v.consenso === true, "Il consenso è necessario per inviare la richiesta.");
  if (v.pagina) {
    check("variante", !!v.variante?.trim(), "Scegli il prodotto che ti interessa.");
    if (opts?.quantita !== false) check("quantita", !!v.quantita?.trim(), "Scegli la quantità.");
    if (opts?.misure !== false) check("misure", !!v.misure?.trim(), "Scegli le misure.");
  }
  if (v.messaggio && v.messaggio.length > 2000) check("messaggio", false, "Il messaggio è troppo lungo.");
  return e;
}
