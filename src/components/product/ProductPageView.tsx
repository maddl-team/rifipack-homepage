import type { ProductPage } from "@/content/products/types";
import { relatedFor } from "@/content/products";
import { Header } from "@/components/layout/Header";
import { MobileBar } from "@/components/layout/MobileBar";
import { Footer } from "@/components/layout/Footer";
import { Quote } from "@/components/sections/Quote";
import { ShopStrip } from "@/components/sections/ShopStrip";
import { MotionRoot } from "@/components/motion/MotionRoot";
import { Button } from "@/components/ui/Button";
import { ProductHero } from "./ProductHero";
import { GallerySection } from "./GallerySection";
import { SpecList } from "./SpecList";
import { RelatedProducts } from "./RelatedProducts";

/**
 * Template di ogni pagina prodotto. Ordine: hero, realizzazioni, dettagli, preventivo, suggeriti, shop.
 * Tutto il contenuto arriva dall'oggetto ProductPage: la pagina nuova non richiede codice.
 */
export function ProductPageView({ page }: { page: ProductPage }) {
  return (
    <>
      <a className="skip" href="#contenuto">Salta al contenuto</a>
      <Header />
      <main id="contenuto">
        <ProductHero page={page} />
        <GallerySection gallery={page.gallery} />
        <SpecList items={page.sections}>
          <Button href="#preventivo" arrow="→">{page.sectionsCta}</Button>
        </SpecList>
        <Quote product={{ slug: page.slug, name: page.name, ...page.form }} />
        <RelatedProducts title="Potrebbe interessarti anche…" items={relatedFor(page)} />
        <ShopStrip />
      </main>
      <Footer />
      <MobileBar />
      <MotionRoot />
    </>
  );
}
