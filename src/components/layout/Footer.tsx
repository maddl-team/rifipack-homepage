import Image from "next/image";
import { company, links, social } from "@/content/site";
import s from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={s.ft}>
      <div className={`wrap ${s.grid}`}>
        <div>
          <Image src="/img/logo.png" alt="Rifipack Creative Packaging" width={726} height={257} sizes="140px" className={s.logo} />
          <p className={s.payoff}>{company.payoff}</p>
        </div>
        <div>
          <h2 className={`mono ${s.h}`}>Contatti</h2>
          <ul className={s.list}>
            <li><a href={company.phone.href}>{company.phone.display}</a></li>
            <li><a href={company.mobile.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp {company.mobile.display}</a></li>
            <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
          </ul>
          <address className={s.addr}>
            {company.legalName}<br />
            {company.address.street}<br />
            {company.address.zip} {company.address.city} ({company.address.province})<br />
            P.IVA {company.vat}
          </address>
        </div>
        <div>
          <h2 className={`mono ${s.h}`}>Seguici</h2>
          <ul className={s.list}>
            {social.map((x) => (
              <li key={x.label}><a href={x.href} target="_blank" rel="noopener noreferrer">{x.label}</a></li>
            ))}
          </ul>
          <ul className={`${s.list} ${s.legal}`}>
            <li><a href={links.blog} target="_blank" rel="noopener noreferrer">Blog</a></li>
            <li><a href={links.privacy} target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <p className={`wrap ${s.credit}`}>© {new Date().getFullYear()} {company.legalName}. Sito realizzato da MADDL Agency.</p>
    </footer>
  );
}
