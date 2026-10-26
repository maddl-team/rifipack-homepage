import type { ProductPage } from "@/content/products/types";
import { Gallery } from "./Gallery";
import s from "./GallerySection.module.css";

/** Sezione "Realizzazioni": titolo, introduzione e galleria (tema chiaro, tessere bianche su kraft). */
export function GallerySection({ gallery }: { gallery: ProductPage["gallery"] }) {
  return (
    <section className={`${s.sec} sec`} id="realizzazioni" aria-labelledby="realizzazioni-h" data-theme="light">
      <div className="wrap">
        <div className={s.head}>
          <div>
            <p className={`mono ${s.eyebrow}`}>{gallery.eyebrow}</p>
            <h2 id="realizzazioni-h" className="h-section">{gallery.title}</h2>
          </div>
          <p className={s.intro}>{gallery.intro}</p>
        </div>
        <Gallery gallery={gallery} />
      </div>
    </section>
  );
}
