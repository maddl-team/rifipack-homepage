import Image from "next/image";
import { scene } from "@/content/site";
import { Button } from "@/components/ui/Button";
import s from "./ApriScene.module.css";

/**
 * Markup statico completo: senza JavaScript, su mobile e con movimento ridotto
 * si legge come quattro blocchi. Da 900px il hook di movimento lo trasforma
 * in scena fissata (data-live="true").
 */
export function ApriScene() {
  return (
    <section className={`wrap ${s.scene}`} id="apri" aria-labelledby="apri-h" data-scene>
      <div className={s.in}>
        <div className={s.stage} data-scene-stage>
          {scene.moments.map((m, i) => (
            <figure className={s.layer} key={m.name} data-layer>
              <Image src={m.image} alt={m.alt} width={1000} height={1000} sizes="(max-width: 900px) 46vw, 600px" loading={i === 0 ? "eager" : "lazy"} />
            </figure>
          ))}
          <div className={`${s.flap} ${s.flapL}`} aria-hidden="true" data-flap="l" />
          <div className={`${s.flap} ${s.flapR}`} aria-hidden="true" data-flap="r" />
          <span className={`mono ${s.count}`} aria-hidden="true" data-count>01 / 04 · {scene.moments[0].name}</span>
          <div className={s.prog} aria-hidden="true"><i data-prog /></div>
        </div>
        <div className={s.text}>
          <h2 id="apri-h" className="h-section">{scene.title}</h2>
          <ol className={s.rail}>
            {scene.moments.map((m) => (
              <li key={m.name} data-moment>
                <b>{m.n}</b>
                <span>{m.name}</span>
                <em>{m.text}</em>
              </li>
            ))}
          </ol>
          <div className={s.live} aria-hidden="true">
            {scene.moments.map((m) => (
              <p key={m.name} data-live-text>{m.text}</p>
            ))}
          </div>
          <Button href="#preventivo" arrow="→" className={s.go}>{scene.cta}</Button>
        </div>
      </div>
    </section>
  );
}
