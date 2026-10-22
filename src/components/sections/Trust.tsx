import { company, links, trust, PLACEHOLDER_FACTS } from "@/content/site";
import { Button } from "@/components/ui/Button";
import s from "./Trust.module.css";

/** Valori fittizi: marcati in pagina finché non vengono verificati. */
function Fictional() {
  return <span className={`mono ${s.tag}`}>fittizio, da verificare</span>;
}

export function Trust() {
  const rows: { k: string; v: React.ReactNode }[] = [
    { k: "Ragione sociale", v: company.legalName },
    { k: "Partita IVA", v: company.vat },
    { k: "Sede", v: `${company.address.street}, ${company.address.zip} ${company.address.city} (${company.address.province})` },
    { k: "Telefono", v: <a href={company.phone.href}>{company.phone.display}</a> },
    { k: "Email", v: <a href={`mailto:${company.email}`}>{company.email}</a> },
    { k: "Acquisti pubblici", v: "Iscritta al MEPA, il Mercato Elettronico della Pubblica Amministrazione" },
    { k: "Quantità minima", v: <>{PLACEHOLDER_FACTS.moq} <Fictional /></> },
    { k: "Preventivo", v: <>Entro {PLACEHOLDER_FACTS.quoteTime} <Fictional /></> },
    { k: "Consegna", v: <>{PLACEHOLDER_FACTS.deliveryTime} <Fictional /></> },
  ];
  return (
    <section className={`${s.sec} sec`} id="dati" aria-labelledby="dati-h" data-theme="light">
      <div className="wrap">
        <div className={s.head}>
          <h2 id="dati-h" className="h-section">{trust.title}</h2>
          <Button href={links.portfolio} variant="outline" arrow="↗" external>{trust.portfolioCta}</Button>
        </div>
        <dl className={s.sheet} data-reveal="block">
          {rows.map((r) => (
            <div key={r.k} className={s.row}>
              <dt className="mono">{r.k}</dt>
              <dd>{r.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
