"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ProductPage } from "@/content/products/types";
import s from "./Gallery.module.css";

/**
 * Galleria "Realizzazioni": griglia di tessere con le prime N visibili e "Mostra tutte".
 * Le tessere extra restano nel DOM (nascoste), quindi i testi alternativi sono indicizzabili.
 * Un clic apre un lightbox con <dialog> nativo: Esc chiude, frecce sfogliano, il focus resta dentro.
 */
export function Gallery({ gallery }: { gallery: ProductPage["gallery"] }) {
  const { items, initial } = gallery;
  const [all, setAll] = useState(false);
  const [cur, setCur] = useState<number | null>(null);
  const dlg = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  const open = (i: number, el: HTMLElement) => {
    opener.current = el;
    setCur(i);
  };
  const close = useCallback(() => dlg.current?.close(), []);
  const step = useCallback((d: number) => setCur((c) => (c === null ? c : (c + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    const d = dlg.current;
    if (!d) return;
    if (cur !== null && !d.open) {
      d.showModal();
      document.documentElement.style.overflow = "hidden";
    }
  }, [cur]);

  const onClosed = () => {
    document.documentElement.style.overflow = "";
    setCur(null);
    opener.current?.focus();
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
  };

  const item = cur !== null ? items[cur] : null;
  const hiddenCount = items.length - initial;

  return (
    <>
      <ul className={s.grid}>
        {items.map((it, i) => (
          <li key={it.src} className={s.tile} hidden={!all && i >= initial}>
            <button type="button" className={s.hit} onClick={(e) => open(i, e.currentTarget)} aria-label={`Ingrandisci: ${it.alt}`}>
              <Image src={it.src} alt="" width={it.w} height={it.h} loading="lazy" sizes="(max-width: 600px) 46vw, (max-width: 1100px) 31vw, 22vw" />
            </button>
          </li>
        ))}
      </ul>

      {hiddenCount > 0 && (
        <div className={s.more}>
          <button type="button" className={s.moreBtn} aria-expanded={all} onClick={() => setAll((v) => !v)}>
            {all ? "Mostra meno" : `${gallery.moreLabel} (${items.length})`} <span aria-hidden="true">{all ? "↑" : "↓"}</span>
          </button>
        </div>
      )}

      <dialog ref={dlg} className={s.dlg} aria-label="Realizzazioni ingrandite" onClose={onClosed} onKeyDown={onKey}
        onClick={(e) => { if (e.target === dlg.current) close(); }} data-lenis-prevent>
        {item && (
          <div className={s.box}>
            <figure className={s.fig}>
              <Image src={item.src} alt={item.alt} width={item.w} height={item.h} sizes="90vw" quality={85} priority />
              <figcaption>
                <span className="mono">{(cur ?? 0) + 1} / {items.length}</span>
                <span>{item.alt}</span>
              </figcaption>
            </figure>
            <button type="button" className={`${s.ctl} ${s.prev}`} onClick={() => step(-1)} aria-label="Foto precedente"><span aria-hidden="true">←</span></button>
            <button type="button" className={`${s.ctl} ${s.next}`} onClick={() => step(1)} aria-label="Foto successiva"><span aria-hidden="true">→</span></button>
            <button type="button" className={`${s.ctl} ${s.x}`} onClick={close} aria-label="Chiudi"><span aria-hidden="true">×</span></button>
          </div>
        )}
      </dialog>
    </>
  );
}
