"use client";

import { useState } from "react";
import s from "./FaqList.module.css";

/** Domande frequenti della pagina prodotto: stesse righe filettate del resto della scheda. */
export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);

  return (
    <section className={`${s.sec} sec`} id="faq" aria-labelledby="faq-h" data-theme="light">
      <div className="wrap">
        <div className={s.head}>
          <p className={`mono ${s.eyebrow}`}>Domande</p>
          <h2 id="faq-h" className="h-section">Domande frequenti</h2>
        </div>
        <div className={s.list}>
          {items.map((item, i) => {
            const on = open === i;
            return (
              <div key={item.q} className={s.item} data-open={on || undefined} data-reveal="block">
                <h3>
                  <button
                    type="button"
                    aria-expanded={on}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(on ? -1 : i)}
                  >
                    <b className={`mono ${s.n}`}>{String(i + 1).padStart(2, "0")}</b>
                    <span className={s.q}>{item.q}</span>
                    <span className={s.mark} aria-hidden="true" />
                  </button>
                </h3>
                <div id={`faq-a-${i}`} role="region" hidden={!on}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
