import Image from "next/image";
import type { ProductPage } from "@/content/products/types";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import s from "./ProductHero.module.css";

/**
 * Apertura di ogni pagina prodotto: testo a sinistra, pannello kraft a destra che esce dal bordo
 * (stesso linguaggio della home) con il prodotto in primo piano e l'ingresso "unboxing".
 */
export function ProductHero({ page }: { page: ProductPage }) {
  const { hero } = page;
  return (
    <section className={s.hero} id="top" aria-labelledby="prodotto-h">
      <div className={s.copy}>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Prodotti", href: "/#prodotti" }, { label: page.name }]} />
        <p className={`mono ${s.eyebrow}`}>{hero.eyebrow}</p>
        <h1 id="prodotto-h" className={s.h1}>{hero.h1}</h1>
        <p className={s.lead}>{hero.lead}</p>
        <ul className={s.usps}>
          {hero.usps.map((u) => (
            <li key={u.title}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span><b>{u.title}:</b> {u.text}</span>
            </li>
          ))}
        </ul>
        <div className={s.acts}>
          <Button href="#preventivo" arrow="→">Richiedi un preventivo</Button>
          <Button href="#realizzazioni" variant="secondary">Vedi le realizzazioni</Button>
        </div>
      </div>

      <figure className={s.stage}>
        <Image
          className={s.img}
          src={hero.image.src}
          alt={hero.image.alt}
          width={hero.image.w}
          height={hero.image.h}
          preload
          fetchPriority="high"
          quality={80}
          sizes="(max-width: 900px) 90vw, 40vw"
        />
        {hero.caption ? <figcaption className={`mono ${s.cap}`}>{hero.caption}</figcaption> : null}
        <i className={`${s.flap} ${s.flapL}`} aria-hidden="true" />
        <i className={`${s.flap} ${s.flapR}`} aria-hidden="true" />
      </figure>
    </section>
  );
}
