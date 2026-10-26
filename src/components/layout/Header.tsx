"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { company, nav } from "@/content/site";
import { Button } from "@/components/ui/Button";
import s from "./Header.module.css";

type NavItem = (typeof nav)[number];
function NavLink({ item, onClick }: { item: NavItem; onClick?: () => void }) {
  const external = "external" in item && item.external;
  if (!external && item.href.startsWith("/")) return <Link href={item.href} onClick={onClick}>{item.label}</Link>;
  return <a href={item.href} onClick={onClick} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{item.label}</a>;
}

/** Testata fissa: si nasconde scendendo, ricompare salendo o con il focus da tastiera. */
export function Header() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const last = useRef(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const down = y > last.current;
        if (Math.abs(y - last.current) > 6) setHidden(down && y > 200 && !open);
        last.current = y;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      ref={ref}
      className={`${s.hd} ${hidden ? s.off : ""}`}
      onFocusCapture={() => setHidden(false)}
    >
      <Link className={s.logo} href="/" aria-label="Rifipack Creative Packaging, vai alla home">
        <Image src="/img/logo.png" alt="" width={726} height={257} priority sizes="120px" />
      </Link>
      <nav className={s.nav} aria-label="Principale">
        {nav.map((n) => <NavLink key={n.label} item={n} />)}
      </nav>
      <div className={s.right}>
        <a className={s.tel} href={company.phone.href}>{company.phone.display}</a>
        <Button href="#preventivo" size="sm" className={s.cta}>Richiedi un preventivo</Button>
        <button
          type="button"
          className={s.menuBtn}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Chiudi il menu" : "Apri il menu"}</span>
          <i aria-hidden="true" />
        </button>
      </div>
      <div id="menu-mobile" className={`${s.panel} ${open ? s.panelOpen : ""}`} hidden={!open}>
        <nav aria-label="Principale (mobile)">
          {nav.map((n) => <NavLink key={n.label} item={n} onClick={() => setOpen(false)} />)}
          <a href={company.phone.href}>Chiama {company.phone.display}</a>
        </nav>
      </div>
    </header>
  );
}
