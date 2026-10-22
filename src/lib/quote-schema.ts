/**
 * Validazione del modulo preventivo. Stesse regole nel browser e sul server.
 * Campi: quelli del modulo attuale di rifipack.it.
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
  /** Famiglia di prodotto scelta dalle schede (facoltativa). */
  prodotto?: string;
};

export type QuoteErrors = Partial<Record<keyof QuoteInput, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+\d][\d\s().\-/]{5,}$/;

export const QUOTE_STEPS: (keyof QuoteInput)[][] = [
  ["azienda", "referente", "citta"],
  ["telefono", "email"],
  ["messaggio", "consenso"],
];

export function validateQuote(v: Partial<QuoteInput>, fields?: (keyof QuoteInput)[]): QuoteErrors {
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
  if (v.messaggio && v.messaggio.length > 2000) check("messaggio", false, "Il messaggio è troppo lungo.");
  return e;
}
