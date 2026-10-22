import Image from "next/image";
import { hero } from "@/content/site";
import { Button } from "@/components/ui/Button";
import s from "./Hero.module.css";

function Lines({ ink }: { ink?: boolean }) {
  return (
    <>
      {hero.lines.map((line, i) => (
        <span key={line} className={s.ln}>
          <b className={i === hero.accentLine ? (ink ? s.accentInk : s.accent) : undefined}>{line}</b>
        </span>
      ))}
    </>
  );
}

/**
 * Prima scena: pannello kraft a tutta altezza che esce dal bordo destro, titolo gigante che lo
 * attraversa. Il titolo è disegnato due volte con la stessa geometria: chiaro sul teal, scuro
 * sul kraft (copia decorativa dentro il pannello, nascosta alle tecnologie assistive).
 */
export function Hero() {
  return (
    <section className={s.hero} id="top" aria-labelledby="hero-h">
      <div className={s.titleLayer}>
        <h1 id="hero-h" className={s.h1}>
          <Lines />
        </h1>
      </div>

      <div className={s.foot}>
        <p className={s.sub}>{hero.sub}</p>
        <div className={s.acts}>
          <Button href="#preventivo" arrow="→">{hero.primaryCta}</Button>
          <Button href="#prodotti" variant="secondary">{hero.secondaryCta}</Button>
        </div>
      </div>

      <div className={s.stage}>
        <div className={`${s.titleLayer} ${s.ink}`} aria-hidden="true">
          <div className={s.h1}>
            <Lines ink />
          </div>
        </div>
        <Image
          className={s.bag}
          src="/img/shopper-cut.webp"
          alt={hero.imageAlt}
          width={626}
          height={514}
          preload
          fetchPriority="high"
          quality={82}
          sizes="(max-width: 900px) 80vw, 35vw"
        />
        <i className={`${s.flap} ${s.flapL}`} aria-hidden="true" />
        <i className={`${s.flap} ${s.flapR}`} aria-hidden="true" />
      </div>

      <a className={`mono ${s.hint}`} href="#apri" aria-label="Scorri alla scena successiva">
        <i aria-hidden="true" />
        Scorri
      </a>
    </section>
  );
}
