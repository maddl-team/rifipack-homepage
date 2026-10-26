import Image from "next/image";
import Link from "next/link";
import type { CatalogEntry } from "@/content/catalog";
import { isInternal, productHref } from "@/content/products";
import s from "./RelatedProducts.module.css";

/** "Potrebbe interessarti anche…": card dei prodotti suggeriti. Link interno se la pagina esiste già nel nuovo sito. */
export function RelatedProducts({ title, items }: { title: string; items: CatalogEntry[] }) {
  return (
    <section className={`${s.sec} sec`} aria-labelledby="correlati-h" data-theme="light">
      <div className="wrap">
        <h2 id="correlati-h" className="h-section">{title}</h2>
        <ul className={s.grid}>
          {items.map((c) => {
            const href = productHref(c.slug);
            const body = (
              <>
                <span className={s.im}><Image src={c.thumb.src} alt="" width={c.thumb.w} height={c.thumb.h} loading="lazy" sizes="(max-width: 600px) 46vw, (max-width: 1100px) 31vw, 18vw" /></span>
                <span className={s.t}>{c.title}</span>
                <span className={s.go} aria-hidden="true">{isInternal(href) ? "→" : "↗"}</span>
              </>
            );
            return (
              <li key={c.slug} data-reveal="card">
                {isInternal(href)
                  ? <Link className={s.card} href={href}>{body}</Link>
                  : <a className={s.card} href={href} target="_blank" rel="noopener noreferrer">{body}<span className="sr-only"> (si apre in una nuova scheda)</span></a>}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
