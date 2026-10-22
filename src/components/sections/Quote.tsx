"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { company, quote } from "@/content/site";
import { QUOTE_STEPS, validateQuote, type QuoteErrors, type QuoteInput } from "@/lib/quote-schema";
import { Button } from "@/components/ui/Button";
import s from "./Quote.module.css";

type Values = QuoteInput;
const EMPTY: Values = { azienda: "", referente: "", citta: "", telefono: "", email: "", messaggio: "", consenso: false, website: "", prodotto: "" };

const prefersReduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function Quote() {
  const [v, setV] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [leaving, setLeaving] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [delivered, setDelivered] = useState(true);
  const paneRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const onPick = (e: Event) => setV((p) => ({ ...p, prodotto: String((e as CustomEvent).detail ?? "") }));
    window.addEventListener("rifipack:prodotto", onPick);
    return () => window.removeEventListener("rifipack:prodotto", onPick);
  }, []);

  const set = <K extends keyof Values>(k: K, val: Values[K]) => {
    setV((p) => ({ ...p, [k]: val }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const focusFirstInvalid = (errs: QuoteErrors) => {
    const first = QUOTE_STEPS[step].find((k) => errs[k]);
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  };

  const go = (n: number) => {
    setDir(n > step ? 1 : -1);
    const swap = () => {
      setStep(n);
      setLeaving(false);
      requestAnimationFrame(() => paneRef.current?.querySelector<HTMLElement>("h3")?.focus());
    };
    if (prefersReduced()) return swap();
    setLeaving(true);
    window.setTimeout(swap, 200);
  };

  const next = async () => {
    const errs = validateQuote(v, QUOTE_STEPS[step]);
    setErrors(errs);
    if (Object.keys(errs).length) return focusFirstInvalid(errs);
    if (step < 2) return go(step + 1);
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(v) });
      const data = await res.json();
      if (!res.ok) {
        setErrors(data.errors ?? {});
        setStatus("error");
        return;
      }
      setDelivered(data.delivered !== false);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  const onSubmit = (e: FormEvent) => { e.preventDefault(); void next(); };

  const fieldProps = (k: keyof Values) => ({
    name: k,
    id: `q-${k}`,
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `q-${k}-err` : undefined,
  });
  const err = (k: keyof Values) =>
    errors[k] ? (
      <span className={s.err} id={`q-${k}-err`}>
        <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M8 4.5v4.2M8 11v.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
        {errors[k]}
      </span>
    ) : null;

  return (
    <section className={`${s.sec} sec`} id="preventivo" aria-labelledby="preventivo-h">
      <div className={`wrap ${s.in}`}>
        <div>
          <p className={`mono ${s.eyebrow}`}>Preventivo</p>
          <h2 id="preventivo-h" className="h-section">{quote.title}</h2>
          <p className={s.intro}>{quote.intro}</p>
          <div className={s.phones}>
            <span>Tel. <a href={company.phone.href}>{company.phone.display}</a></span>
            <span>WhatsApp <a href={company.mobile.whatsapp} target="_blank" rel="noopener noreferrer">{company.mobile.display}</a></span>
            <span>Email <a href={`mailto:${company.email}`}>{company.email}</a></span>
          </div>
        </div>

        <form ref={formRef} className={s.form} onSubmit={onSubmit} noValidate data-reveal="block" aria-label="Richiesta di preventivo">
          {status !== "done" && (
            <ol className={`mono ${s.steps}`} aria-label="Avanzamento">
              {quote.steps.map((l, i) => (
                <li key={l} className={i === step ? s.on : i < step ? s.done : ""} aria-current={i === step ? "step" : undefined}>{l}</li>
              ))}
            </ol>
          )}

          {status === "done" ? (
            <div className={s.ok} role="status">
              <svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="28" pathLength="1" /><path d="M20 33l9 9 16-18" pathLength="1" /></svg>
              <h3 tabIndex={-1}>{delivered ? quote.success.title : "Modulo di prova"}</h3>
              <p className="muted">
                {delivered
                  ? <>Ti ricontatteremo al più presto. Per le urgenze chiama <a href={company.phone.href}>{company.phone.display}</a>.</>
                  : <>La richiesta è stata controllata ma non è stata inviata: l'invio reale verrà collegato a fine lavori.</>}
              </p>
            </div>
          ) : (
            <div ref={paneRef} className={`${s.pane} ${leaving ? s.out : s.in2}`} data-dir={dir}>
              {step === 0 && (
                <>
                  <h3 tabIndex={-1}>Chi sei</h3>
                  <div className={s.fields}>
                    <div className={s.fld}><label htmlFor="q-azienda">Azienda</label><input className={s.input} type="text" autoComplete="organization" required {...fieldProps("azienda")} value={v.azienda} onChange={(e) => set("azienda", e.target.value)} />{err("azienda")}</div>
                    <div className={s.fld}><label htmlFor="q-referente">Referente</label><input className={s.input} type="text" autoComplete="name" required {...fieldProps("referente")} value={v.referente} onChange={(e) => set("referente", e.target.value)} />{err("referente")}</div>
                    <div className={s.fld}><label htmlFor="q-citta">Città</label><input className={s.input} type="text" autoComplete="address-level2" required {...fieldProps("citta")} value={v.citta} onChange={(e) => set("citta", e.target.value)} />{err("citta")}</div>
                  </div>
                </>
              )}
              {step === 1 && (
                <>
                  <h3 tabIndex={-1}>Come ti contattiamo</h3>
                  <div className={s.fields}>
                    <div className={s.fld}><label htmlFor="q-telefono">Telefono</label><input className={s.input} type="tel" inputMode="tel" autoComplete="tel" placeholder="Inserisci il tuo numero di telefono" required {...fieldProps("telefono")} value={v.telefono} onChange={(e) => set("telefono", e.target.value)} />{err("telefono")}</div>
                    <div className={s.fld}><label htmlFor="q-email">Email</label><input className={s.input} type="email" inputMode="email" autoComplete="email" required {...fieldProps("email")} value={v.email} onChange={(e) => set("email", e.target.value)} />{err("email")}</div>
                  </div>
                </>
              )}
              {step === 2 && (
                <>
                  <h3 tabIndex={-1}>Di cosa hai bisogno</h3>
                  <div className={s.fields}>
                    {v.prodotto ? (
                      <p className={s.pick}>
                        <span className="mono">Famiglia scelta</span> <b>{v.prodotto}</b>{" "}
                        <button type="button" onClick={() => set("prodotto", "")}>Rimuovi</button>
                      </p>
                    ) : null}
                    <div className={s.fld}><label htmlFor="q-messaggio">Messaggio <small>(opzionale)</small></label><textarea className={s.input} placeholder="Prodotto, quantità, scadenza" {...fieldProps("messaggio")} value={v.messaggio} onChange={(e) => set("messaggio", e.target.value)} />{err("messaggio")}</div>
                    <div className={s.fld}>
                      <label className={s.chk} htmlFor="q-consenso">
                        <input type="checkbox" required {...fieldProps("consenso")} checked={v.consenso} onChange={(e) => set("consenso", e.target.checked)} />
                        <span>{quote.consent}</span>
                      </label>
                      {err("consenso")}
                    </div>
                    {/* Campo trappola: nascosto agli utenti, compilato dai bot */}
                    <div className={s.trap} aria-hidden="true"><label>Sito web<input type="text" name="website" tabIndex={-1} autoComplete="off" value={v.website} onChange={(e) => set("website", e.target.value)} /></label></div>
                  </div>
                </>
              )}
              {status === "error" && !Object.keys(errors).length && (
                <p className={s.err} role="alert">Non siamo riusciti a inviare la richiesta. Riprova o chiama <a href={company.phone.href}>{company.phone.display}</a>.</p>
              )}
              <div className={s.nav}>
                <button type="button" className={s.back} onClick={() => go(step - 1)} style={{ visibility: step > 0 ? "visible" : "hidden" }}>Indietro</button>
                <button type="submit" className={s.next} disabled={status === "sending"}>
                  {step === 2 ? (status === "sending" ? "Invio in corso" : "Invia richiesta") : "Avanti"} <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
