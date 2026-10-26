import Link from "next/link";
import s from "./Breadcrumb.module.css";

export type Crumb = { label: string; href?: string };

/** Briciole di pane: l'ultima voce è la pagina corrente. */
export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Percorso" className={s.nav}>
      <ol className={`mono ${s.list}`}>
        {items.map((c, i) => (
          <li key={c.label}>
            {c.href && i < items.length - 1 ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
