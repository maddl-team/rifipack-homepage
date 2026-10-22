import { NextResponse } from "next/server";
import { validateQuote, type QuoteInput } from "@/lib/quote-schema";

export const runtime = "nodejs";

/**
 * Ricezione del modulo preventivo.
 * STUB: valida e risponde, ma NON invia nulla finché non si collega Resend
 * (previsto a fine lavori). Le chiavi andranno solo in variabili d'ambiente.
 */
export async function POST(req: Request) {
  const raw = await req.text();
  if (raw.length > 10_000) return NextResponse.json({ ok: false }, { status: 413 });

  let body: Partial<QuoteInput>;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Campo trappola compilato: rispondiamo come se fosse andata bene, senza fare nulla.
  if (body.website) return NextResponse.json({ ok: true, delivered: true });

  const errors = validateQuote(body);
  if (Object.keys(errors).length) return NextResponse.json({ ok: false, errors }, { status: 422 });

  // TODO(Resend): inviare qui l'email con la richiesta e restituire delivered: true.
  return NextResponse.json({ ok: true, delivered: false });
}
