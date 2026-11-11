"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import { company, quote } from "@/content/site";
import {
  LOGO_ACCEPT, PRODUCT_QUOTE_STEPS, QUOTE_STEPS, formAsks, validateLogo, validateQuote,
  type QuoteErrors, type QuoteInput,
} from "@/lib/quote-schema";
import s from "./Quote.module.css";

type Values = QuoteInput;
const EMPTY: Values = {
  azienda: "", referente: "", citta: "", telefono: "", email: "", messaggio: "", consenso: false,
  website: "", prodotto: "", variante: "", quantita: "", misure: "",
};

/** Dati del modulo di una pagina prodotto (arrivano dal contenuto della pagina). */
export type ProductFormConfig = {
  slug: string;
  name: string;
  title: string;
  intro: string;
  variants: { label: string; options: { label: string; image: string; quantities?: string[]; sizes?: string[] }[] };
  quantities: { label: string; options: string[]; free?: boolean };
  sizes: { label: string; options: string[] };
};

const prefersReduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Modulo preventivo a passi. Senza `product` è quello della home (3 passi);
 * con `product` diventa il modulo della pagina prodotto, a tutta larghezza e in 3 passi:
 * contatti, scelta del prodotto (tessere-immagine, quantità, misure), dettagli con logo e invio.
 */
export function Quote({ product }: { product?: ProductFormConfig }) {
  const steps = product ? PRODUCT_QUOTE_STEPS : QUOTE_STEPS;
  const labels = product ? quote.productSteps : quote.steps;
  const panes = product ? (["who", "product", "send"] as const) : (["who", "contact", "send"] as const);
  const last = steps.length - 1;

  const [v, setV] = useState<Values>({ ...EMPTY, ...(product ? { pagina: product.slug, prodotto: product.name } : {}) });
  const [logo, setLogo] = useState<File | null>(null);
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [leaving, setLeaving] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [delivered, setDelivered] = useState(true);
  const paneRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (product) return;
    const onPick = (e: Event) => setV((p) => ({ ...p, prodotto: String((e as CustomEvent).detail ?? "") }));
    window.addEventListener("rifipack:prodotto", onPick);
    return () => window.removeEventListener("rifipack:prodotto", onPick);
  }, [product]);

  const set = <K extends keyof Values>(k: K, val: Values[K]) => {
    setV((p) => ({ ...p, [k]: val }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  /** Quantità e misure del modello scelto. Se il modello non ne ha di proprie, valgono quelle della pagina. */
  const chosen = product?.variants.options.find((o) => o.label === v.variante);
  const profiled = !!product?.variants.options.some((o) => o.quantities || o.sizes);
  const lists = {
    quantities: { label: product?.quantities.label ?? "", options: chosen?.quantities ?? (profiled ? [] : product?.quantities.options ?? []) },
    sizes: { label: product?.sizes.label ?? "", options: chosen?.sizes ?? (profiled ? [] : product?.sizes.options ?? []) },
  };
  /** Il modulo originale può avere solo la quantità, solo le misure, entrambi o nessuno. Dipende anche dal modello. */
  const pageAsk = product ? formAsks(product) : { quantita: true, misure: true, variante: true };
  const ask = product ? formAsks(product, v.variante) : pageAsk;
  const showQty = pageAsk.quantita && (!v.variante || ask.quantita);
  const showMis = pageAsk.misure && (!v.variante || ask.misure);
  const chooseVariant = (label: string) => {
    const opt = product?.variants.options.find((o) => o.label === label);
    setV((p) => ({
      ...p,
      variante: label,
      quantita: opt?.quantities && p.quantita && !opt.quantities.includes(p.quantita) ? "" : p.quantita,
      misure: opt?.sizes && p.misure && !opt.sizes.includes(p.misure) ? "" : p.misure,
    }));
    if (errors.variante || errors.quantita || errors.misure) {
      setErrors((e) => ({ ...e, variante: undefined, quantita: undefined, misure: undefined }));
    }
  };

  const stepErrors = (n: number): QuoteErrors => {
    const fields = steps[n].filter((k) => (k === "quantita" ? ask.quantita : k === "misure" ? ask.misure : k === "variante" ? ask.variante : true));
    const errs = validateQuote(v, fields, ask);
    if (steps[n].includes("logo")) {
      const m = validateLogo(logo);
      if (m) errs.logo = m;
    }
    return errs;
  };

  const focusFirstInvalid = (errs: QuoteErrors) => {
    const first = steps[step].find((k) => errs[k]);
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

  const send = async () => {
    setStatus("sending");
    try {
      const { website, ...rest } = v;
      let res: Response;
      if (logo) {
        const fd = new FormData();
        Object.entries({ ...rest, website }).forEach(([k, val]) => fd.append(k, String(val ?? "")));
        fd.append("logo", logo);
        res = await fetch("/api/quote/", { method: "POST", body: fd });
      } else {
        res = await fetch("/api/quote/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(v) });
      }
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

  const next = async () => {
    const errs = stepErrors(step);
    setErrors(errs);
    if (Object.keys(errs).length) return focusFirstInvalid(errs);
    if (step < last) return go(step + 1);
    void send();
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

  const text = (k: "azienda" | "referente" | "citta" | "telefono" | "email", label: string, extra: Record<string, unknown>, cls = "") => (
    <div className={`${s.fld} ${cls}`}>
      <label htmlFor={`q-${k}`}>{label}</label>
      <input className={s.input} required {...extra} {...fieldProps(k)} value={v[k]} onChange={(e) => set(k, e.target.value)} />
      {err(k)}
    </div>
  );

  const select = (k: "quantita" | "misure", cfg: { label: string; options: string[] }) => (
    <div className={s.fld}>
      <label htmlFor={`q-${k}`}>{cfg.label}</label>
      <select className={`${s.input} ${s.select}`} required disabled={!cfg.options.length} {...fieldProps(k)} value={v[k] ?? ""} onChange={(e) => set(k, e.target.value)}>
        <option value="">{cfg.options.length ? "Scegli…" : "Prima scegli il prodotto"}</option>
        {cfg.options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      {err(k)}
    </div>
  );

  const picker = (cfg: ProductFormConfig["variants"]) => (
    <fieldset className={s.picker} aria-describedby={errors.variante ? "q-variante-err" : undefined}>
      <legend className={s.legend}>{cfg.label}</legend>
      <div className={s.tiles}>
        {cfg.options.map((o) => (
          <label key={o.label} className={s.tile}>
            <input
              type="radio" name="variante" value={o.label} required
              aria-invalid={errors.variante ? true : undefined}
              checked={v.variante === o.label} onChange={() => chooseVariant(o.label)}
            />
            <span className={s.tileIm}>
              <Image src={o.image} alt="" fill sizes="(max-width: 600px) 30vw, (max-width: 1100px) 22vw, 150px" quality={70} />
            </span>
            <span className={s.tileT}>{o.label}</span>
            <svg className={s.tick} viewBox="0 0 24 24" aria-hidden="true"><path d="M6 12.5l4 4 8-9" /></svg>
          </label>
        ))}
      </div>
      {err("variante")}
    </fieldset>
  );

  const logoField = (
    <div className={s.fld}>
      <label htmlFor="q-logo">Logo <small>(opzionale)</small></label>
      <input
        className={s.file} type="file" accept={LOGO_ACCEPT} {...fieldProps("logo")}
        aria-describedby={[errors.logo ? "q-logo-err" : "", "q-logo-help"].filter(Boolean).join(" ")}
        onChange={(e) => { setLogo(e.target.files?.[0] ?? null); if (errors.logo) setErrors((x) => ({ ...x, logo: undefined })); }}
      />
      <small id="q-logo-help" className={s.help}>PNG, JPG, SVG, PDF, AI o EPS, massimo 8 MB.</small>
      {err("logo")}
    </div>
  );

  const eyebrow: ReactNode = <p className={`mono ${s.eyebrow}`}>Preventivo</p>;
  const pane = panes[step];

  return (
    <section className={`${s.sec} sec`} id="preventivo" aria-labelledby="preventivo-h">
      <div className={`wrap ${s.in} ${product ? s.wide : ""}`}>
        <div className={s.head}>
          <div>
            {eyebrow}
            <h2 id="preventivo-h" className="h-section">{product ? product.title : quote.title}</h2>
            <p className={s.intro}>{product ? product.intro : quote.intro}</p>
          </div>
          <div className={s.phones}>
            <span>Tel. <a href={company.phone.href}>{company.phone.display}</a></span>
            <span>WhatsApp <a href={company.mobile.whatsapp} target="_blank" rel="noopener noreferrer">{company.mobile.display}</a></span>
            <span>Email <a href={`mailto:${company.email}`}>{company.email}</a></span>
          </div>
        </div>

        <form ref={formRef} className={s.form} onSubmit={onSubmit} noValidate data-reveal="block" aria-label="Richiesta di preventivo">
          {status !== "done" && (
            <ol className={`mono ${s.steps}`} aria-label="Avanzamento" style={{ gridTemplateColumns: `repeat(${labels.length}, 1fr)` }}>
              {labels.map((l, i) => (
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
              {pane === "who" && (
                <>
                  <h3 tabIndex={-1}>Chi sei</h3>
                  <div className={product ? s.cols6 : s.fields}>
                    {text("azienda", "Azienda", { type: "text", autoComplete: "organization" }, s.sp2)}
                    {text("referente", "Referente", { type: "text", autoComplete: "name" }, s.sp2)}
                    {text("citta", "Città", { type: "text", autoComplete: "address-level2" }, s.sp2)}
                    {product && text("telefono", "Telefono", { type: "tel", inputMode: "tel", autoComplete: "tel", placeholder: "Inserisci il tuo numero di telefono" }, s.sp3)}
                    {product && text("email", "Email", { type: "email", inputMode: "email", autoComplete: "email" }, s.sp3)}
                  </div>
                </>
              )}
              {pane === "contact" && !product && (
                <>
                  <h3 tabIndex={-1}>Come ti contattiamo</h3>
                  <div className={s.fields}>
                    {text("telefono", "Telefono", { type: "tel", inputMode: "tel", autoComplete: "tel", placeholder: "Inserisci il tuo numero di telefono" })}
                    {text("email", "Email", { type: "email", inputMode: "email", autoComplete: "email" })}
                  </div>
                </>
              )}
              {pane === "product" && product && (
                <>
                  <h3 tabIndex={-1}>Scegli il prodotto</h3>
                  <div className={s.fields}>
                    {product.variants.options.length > 0 && picker(product.variants)}
                    {product.quantities.free && (
                      <div className={s.fld}>
                        <label htmlFor="q-quantita">Quantità <small>(opzionale)</small></label>
                        <input className={s.input} placeholder="Inserisci la quantità" {...fieldProps("quantita")} value={v.quantita} onChange={(e) => set("quantita", e.target.value)} />
                        {err("quantita")}
                      </div>
                    )}
                    {(showQty || showMis) && (
                      <div className={showQty && showMis ? s.two : undefined}>
                        {showQty && select("quantita", lists.quantities)}
                        {showMis && select("misure", lists.sizes)}
                      </div>
                    )}
                  </div>
                </>
              )}
              {pane === "send" && (
                <>
                  <h3 tabIndex={-1}>{product ? "Ultimi dettagli" : "Di cosa hai bisogno"}</h3>
                  <div className={s.fields}>
                    {!product && v.prodotto ? (
                      <p className={s.pick}>
                        <span className="mono">Famiglia scelta</span> <b>{v.prodotto}</b>{" "}
                        <button type="button" onClick={() => set("prodotto", "")}>Rimuovi</button>
                      </p>
                    ) : null}
                    <div className={product ? s.pair : undefined}>
                      <div className={s.fld}>
                        <label htmlFor="q-messaggio">Messaggio <small>(opzionale)</small></label>
                        <textarea className={`${s.input} ${product ? s.tall : ""}`} placeholder={product ? "Finiture, scadenza, qualsiasi dettaglio utile" : "Prodotto, quantità, scadenza"} {...fieldProps("messaggio")} value={v.messaggio} onChange={(e) => set("messaggio", e.target.value)} />
                        {err("messaggio")}
                      </div>
                      {product && logoField}
                    </div>
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
                  {step === last ? (status === "sending" ? "Invio in corso" : "Invia richiesta") : "Avanti"} <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
