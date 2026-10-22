import { why } from "@/content/site";
import { Button } from "@/components/ui/Button";
import s from "./Why.module.css";

export function Why() {
  return (
    <section className={`${s.sec} sec`} id="perche" aria-labelledby="perche-h">
      <div className="wrap">
        <h2 id="perche-h" className="h-section">{why.title}</h2>
        <ol className={s.grid}>
          {why.items.map((it) => (
            <li key={it.n} className={s.item}>
              <b className="mono">{it.n}</b>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </li>
          ))}
        </ol>
        <div className={s.cta}>
          <Button href="#preventivo" variant="secondary" arrow="→">{why.cta}</Button>
        </div>
      </div>
    </section>
  );
}
