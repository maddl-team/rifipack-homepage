import type { ReactNode } from "react";
import s from "./SpecList.module.css";

export type SpecItem = { title: string; paragraphs: string[] };

/** Elenco di blocchi descrittivi numerati (un H2 per blocco): materiali, stampa, design, ordine. */
export function SpecList({ items, children }: { items: SpecItem[]; children?: ReactNode }) {
  return (
    <section className={`${s.sec} sec`} aria-label="Dettagli del prodotto">
      <div className="wrap">
        <ol className={s.list}>
          {items.map((it, i) => (
            <li key={it.title} className={s.row} data-reveal="block">
              <b className={`mono ${s.n}`}>{String(i + 1).padStart(2, "0")}</b>
              <h2 className={s.h}>{it.title}</h2>
              <div className={s.txt}>
                {it.paragraphs.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
              </div>
            </li>
          ))}
        </ol>
        {children ? <div className={s.cta}>{children}</div> : null}
      </div>
    </section>
  );
}
