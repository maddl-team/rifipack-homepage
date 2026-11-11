/**
 * Template settore archiviato (prima del redesign).
 * Non è montato su nessuna route.
 */
// @ts-nocheck
import Image from "next/image";
import type { SectorPage } from "@/content/sectors/types";
import { Header } from "@/components/layout/Header";
import { MobileBar } from "@/components/layout/MobileBar";
import { Footer } from "@/components/layout/Footer";
import { Quote } from "@/components/sections/Quote";
import { ShopStrip } from "@/components/sections/ShopStrip";
import { MotionRoot } from "@/components/motion/MotionRoot";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FaqList } from "@/components/product/FaqList";
import s from "./SectorPage.module.css";

/** Template di ogni pagina settore. Il contenuto arriva dall'oggetto SectorPage. */
export function SectorPageView({ page }: { page: SectorPage }) {
  return (
    <>
      <a className="skip" href="#contenuto">Salta al contenuto</a>
      <Header />
      <main id="contenuto">
        <section className={s.hero} id="top" aria-labelledby="settore-h">
          <div className={s.copy}>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Settori" }, { label: page.name }]} />
            <p className={`mono ${s.eyebrow}`}>{page.hero.eyebrow}</p>
            <h1 id="settore-h" className={s.h1}>{page.hero.h1}</h1>
            <p className={s.lead}>{page.hero.lead}</p>
            <div className={s.acts}>
              <Button href="#preventivo" arrow="→">Richiedi un preventivo</Button>
              <Button href="#soluzioni" variant="secondary">Vedi le soluzioni</Button>
            </div>
          </div>
          <figure className={s.stage}>
            <Image
              className={s.img}
              src={page.hero.image.src}
              alt={page.hero.image.alt}
              width={page.hero.image.w}
              height={page.hero.image.h}
              preload
              fetchPriority="high"
              quality={80}
              sizes="(max-width: 900px) 90vw, 40vw"
            />
            {page.hero.caption ? <figcaption className={`mono ${s.cap}`}>{page.hero.caption}</figcaption> : null}
            <i className={`${s.flap} ${s.flapL}`} aria-hidden="true" />
            <i className={`${s.flap} ${s.flapR}`} aria-hidden="true" />
          </figure>
        </section>

        <section className={`${s.benefits} sec`} aria-labelledby="vantaggi-h" data-theme="light">
          <div className="wrap">
            <div className={s.head}>
              <div>
                <p className={`mono ${s.kicker}`}>{page.benefits.eyebrow}</p>
                <h2 id="vantaggi-h" className="h-section">{page.benefits.title}</h2>
              </div>
              <p className={s.intro}>{page.benefits.intro}</p>
            </div>
            <ol className={s.grid}>
              {page.benefits.items.map((it, i) => (
                <li key={it.title} className={s.benefit} data-reveal="block">
                  <b className="mono">{String(i + 1).padStart(2, "0")}</b>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={`${s.process} sec`} aria-labelledby="processo-h">
          <div className="wrap">
            <div className={s.head}>
              <div>
                <p className={`mono ${s.kicker}`}>{page.process.eyebrow}</p>
                <h2 id="processo-h" className="h-section">{page.process.title}</h2>
              </div>
              <p className={s.intro}>{page.process.intro}</p>
            </div>
            <ol className={s.steps}>
              {page.process.steps.map((step, i) => (
                <li key={step.title} className={s.step} data-reveal="block">
                  <b className={`mono ${s.n}`}>{String(i + 1).padStart(2, "0")}</b>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={`${s.materials} sec`} aria-labelledby="materiali-h" data-theme="light">
          <div className="wrap">
            <div className={s.mat}>
              <figure className={s.shot}>
                <Image
                  src={page.materials.image.src}
                  alt={page.materials.image.alt}
                  width={page.materials.image.w}
                  height={page.materials.image.h}
                  sizes="(max-width: 900px) 90vw, 42vw"
                />
              </figure>
              <div>
                <p className={`mono ${s.kicker}`}>{page.materials.eyebrow}</p>
                <h2 id="materiali-h" className="h-section">{page.materials.title}</h2>
                <p className={s.intro}>{page.materials.intro}</p>
                <ul className={s.mats}>
                  {page.materials.items.map((it) => (
                    <li key={it.title}>
                      <h3>{it.title}</h3>
                      <p>{it.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={`${s.solutions} sec`} id="soluzioni" aria-labelledby="soluzioni-h">
          <div className="wrap">
            <div className={s.head}>
              <div>
                <p className={`mono ${s.kicker}`}>{page.solutions.eyebrow}</p>
                <h2 id="soluzioni-h" className="h-section">{page.solutions.title}</h2>
              </div>
              <p className={s.intro}>{page.solutions.intro}</p>
            </div>
            <ul className={s.cards}>
              {page.solutions.items.map((it) => (
                <li key={it.title} className={s.card} data-reveal="card">
                  <span className={s.frame}>
                    <Image src={it.image.src} alt={it.image.alt} width={it.image.w} height={it.image.h} sizes="(max-width: 700px) 90vw, 40vw" />
                  </span>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={`${s.finishes} sec`} aria-labelledby="finiture-h" data-theme="light">
          <div className="wrap">
            <div className={s.head}>
              <div>
                <p className={`mono ${s.kicker}`}>{page.finishes.eyebrow}</p>
                <h2 id="finiture-h" className="h-section">{page.finishes.title}</h2>
              </div>
              <p className={s.intro}>{page.finishes.intro}</p>
            </div>
            <dl className={s.rows}>
              {page.finishes.items.map((it) => (
                <div key={it.title} className={s.row} data-reveal="block">
                  <dt>{it.title}</dt>
                  <dd>{it.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {page.faqs.length ? <FaqList items={page.faqs} /> : null}
        <Quote />
        <ShopStrip />
      </main>
      <Footer />
      <MobileBar />
      <MotionRoot />
    </>
  );
}
