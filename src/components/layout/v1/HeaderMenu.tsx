"use client";

/**
 * Menu a tendina archiviato. Non è montato: la testata viva è `../HeaderMenu`.
 */

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { company } from "@/content/site";
import { Button } from "@/components/ui/Button";
import s from "./Header.module.css";

export type Simple = { label: string; href: string; external?: boolean };
export type Item = { label: string; href?: string; external?: boolean; children?: Simple[] };

function NavLink({ item, onClick, current }: { item: Simple; onClick?: () => void; current?: boolean }) {
  if (!item.external && item.href.startsWith("/")) {
    return (
      <Link href={item.href} onClick={onClick} aria-current={current ? "page" : undefined}>
        {item.label}
      </Link>
    );
  }
  return (
    <a href={item.href} onClick={onClick} {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {item.label}
    </a>
  );
}

function DesktopMenu({ item, open, onOpen, onClose }: { item: Item; open: boolean; onOpen: () => void; onClose: () => void }) {
  const path = usePathname();
  const panelId = useId();
  const wrap = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);
  const here = item.children?.some((c) => c.href === path) ?? false;

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!wrap.current?.contains(e.target as Node)) onClose();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        btn.current?.focus();
      }
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!item.children) {
    return item.href ? <NavLink item={{ label: item.label, href: item.href, external: item.external }} /> : null;
  }
  const children = item.children;

  return (
    <div
      ref={wrap}
      className={s.dropWrap}
      data-open={open || undefined}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        ref={btn}
        type="button"
        className={s.dropBtn}
        aria-expanded={open}
        aria-controls={panelId}
        aria-current={here ? "true" : undefined}
        onClick={() => (open ? onClose() : onOpen())}
      >
        {item.label}
      </button>
      <div id={panelId} className={s.drop} hidden={!open}>
        <ul>
          {children.map((c) => (
            <li key={c.href}>
              <Link href={c.href} onClick={onClose} aria-current={path === c.href ? "page" : undefined}>
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MobileMenu({ item, open, onToggle, onNavigate }: { item: Item; open: boolean; onToggle: () => void; onNavigate: () => void }) {
  const path = usePathname();
  const panelId = useId();
  if (!item.children) {
    return item.href ? <NavLink item={{ label: item.label, href: item.href, external: item.external }} onClick={onNavigate} /> : null;
  }
  const children = item.children;
  return (
    <div className={s.acc}>
      <button type="button" className={s.accBtn} aria-expanded={open} aria-controls={panelId} onClick={onToggle}>
        {item.label}
      </button>
      <ul id={panelId} className={s.sub} hidden={!open}>
        {children.map((c) => (
          <li key={c.href}>
            <Link href={c.href} onClick={onNavigate} aria-current={path === c.href ? "page" : undefined}>
              {c.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Testata fissa: si nasconde scendendo, ricompare salendo o con il focus da tastiera. */
export function HeaderMenu({ items }: { items: Item[] }) {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState<string | null>(null);
  const last = useRef(0);
  const ref = useRef<HTMLElement>(null);
  const path = usePathname();

  useEffect(() => {
    setMenu(null);
    setOpen(false);
    setMobileMenu(null);
  }, [path]);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const down = y > last.current;
        if (Math.abs(y - last.current) > 6) {
          setHidden(down && y > 200 && !open);
          if (down) setMenu(null);
        }
        last.current = y;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header ref={ref} className={`${s.hd} ${hidden ? s.off : ""}`} onFocusCapture={() => setHidden(false)}>
      <Link className={s.logo} href="/" aria-label="Rifipack Creative Packaging, vai alla home">
        <Image src="/img/logo.png" alt="" width={726} height={257} priority sizes="120px" />
      </Link>
      <nav className={s.nav} aria-label="Principale">
        {items.map((n) => (
          <DesktopMenu key={n.label} item={n} open={menu === n.label} onOpen={() => setMenu(n.label)} onClose={() => setMenu(null)} />
        ))}
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
          {items.map((n) => (
            <MobileMenu
              key={n.label}
              item={n}
              open={mobileMenu === n.label}
              onToggle={() => setMobileMenu((v) => (v === n.label ? null : n.label))}
              onNavigate={() => setOpen(false)}
            />
          ))}
          <a href={company.phone.href}>Chiama {company.phone.display}</a>
        </nav>
      </div>
    </header>
  );
}
