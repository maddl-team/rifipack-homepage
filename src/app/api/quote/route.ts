import { NextResponse } from "next/server";
import { validateLogo, validateQuote, type QuoteInput } from "@/lib/quote-schema";

export const runtime = "nodejs";

const MAX_JSON = 10_000;
const MAX_MULTIPART = 9 * 1024 * 1024; // logo (8 MB) + campi

/**
 * Ricezione del modulo preventivo (home e pagine prodotto).
 * STUB: valida e risponde, ma NON invia nulla finché non si collega Resend
 * (previsto a fine lavori). Le chiavi andranno solo in variabili d'ambiente.
 * Il logo, se presente, viene solo controllato (tipo e peso): non viene salvato.
 */
export async function POST(req: Request) {
  const type = req.headers.get("content-type") ?? "";
  let body: Partial<QuoteInput>;
  let logo: File | null = null;

  if (type.includes("multipart/form-data")) {
    if (Number(req.headers.get("content-length") ?? 0) > MAX_MULTIPART) return NextResponse.json({ ok: false }, { status: 413 });
    let fd: FormData;
    try {
      fd = await req.formData();
    } catch {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    const f = fd.get("logo");
    if (f instanceof File && f.size > 0) logo = f;
    const str = (k: string) => (typeof fd.get(k) === "string" ? (fd.get(k) as string) : "");
    body = {
      azienda: str("azienda"), referente: str("referente"), citta: str("citta"), telefono: str("telefono"),
      email: str("email"), messaggio: str("messaggio"), consenso: str("consenso") === "true",
      website: str("website"), prodotto: str("prodotto"), pagina: str("pagina"),
      variante: str("variante"), quantita: str("quantita"), misure: str("misure"),
    };
  } else {
    const raw = await req.text();
    if (raw.length > MAX_JSON) return NextResponse.json({ ok: false }, { status: 413 });
    try {
      body = JSON.parse(raw);
    } catch {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
  }

  // Campo trappola compilato: rispondiamo come se fosse andata bene, senza fare nulla.
  if (body.website) return NextResponse.json({ ok: true, delivered: true });

  const errors = validateQuote(body);
  const logoError = validateLogo(logo);
  if (logoError) errors.logo = logoError;
  if (Object.keys(errors).length) return NextResponse.json({ ok: false, errors }, { status: 422 });

  // TODO(Resend): inviare qui l'email con la richiesta (e il logo come allegato) e restituire delivered: true.
  return NextResponse.json({ ok: true, delivered: false });
}
