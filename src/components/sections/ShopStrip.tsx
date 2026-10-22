import { links, shop } from "@/content/site";
import { Button } from "@/components/ui/Button";
import s from "./ShopStrip.module.css";

export function ShopStrip() {
  return (
    <section className={`wrap ${s.sec}`} aria-labelledby="shop-h">
      <div className={s.box} data-reveal="block">
        <div>
          <p className={`mono ${s.eyebrow}`}>{shop.eyebrow}</p>
          <h2 id="shop-h" className={s.h}>{shop.title}</h2>
          <p className={s.text}>{shop.text}</p>
        </div>
        <Button href={links.shop} variant="secondary" arrow="↗" external>{shop.cta}</Button>
      </div>
    </section>
  );
}
