import Image from "next/image";
import { products } from "@/content/site";
import { QuoteCta } from "@/components/ui/QuoteCta";
import s from "./Products.module.css";

export function Products() {
  return (
    <section className={`${s.sec} sec`} id="prodotti" aria-labelledby="prodotti-h" data-theme="light">
      <div className="wrap">
        <p className={`mono ${s.eyebrow}`}>Prodotti</p>
        <h2 id="prodotti-h" className="h-section">{products.title}</h2>
        <ul className={s.grid}>
          {products.families.map((f) => (
            <li key={f.id} className={s.card} data-reveal="card">
              <div className={s.im}>
                {f.image ? (
                  <Image src={f.image} alt={f.imageAlt} width={1200} height={900} sizes="(max-width: 767px) 92vw, 44vw" />
                ) : (
                  <div className={s.ph} role="img" aria-label={f.imageAlt}><span className="mono">{f.title}</span></div>
                )}
              </div>
              <div className={s.bd}>
                <h3>{f.title}</h3>
                <p>{f.blurb}</p>
                <ul className={s.list}>
                  {f.products.map((p) => (
                    <li key={p.href}>
                      <a href={p.href}>{p.label}</a>
                    </li>
                  ))}
                </ul>
                <div className={s.actions}>
                  <QuoteCta family={f.title}>{products.cta}</QuoteCta>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className={s.more}>
          <a href={products.gadget.href}>{products.gadget.label}</a>
          <span aria-hidden="true"> · </span>
          <a href="https://catalog.on-catalogue.com/view/316666780/" target="_blank" rel="noopener noreferrer">
            {products.gadget.catalogLabel} <span aria-hidden="true">↗</span>
          </a>
        </p>
      </div>
    </section>
  );
}
