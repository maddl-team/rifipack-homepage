"use client";

import { useEffect, useState } from "react";
import s from "./TableOfContents.module.css";
import type { Heading } from "@/lib/wp/types";

/** Indice dell'articolo. Segue la sezione visibile e scorre fino al titolo. */
export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [active, setActive] = useState(headings[0]?.id ?? "");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const line = 140;
      let current = headings[0]?.id ?? "";
      for (const heading of headings) {
        const node = document.getElementById(heading.id);
        if (node && node.getBoundingClientRect().top <= line) current = heading.id;
      }
      setActive(current);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <nav className={s.toc} aria-label="Indice dell'articolo">
      <p className="mono">Indice</p>
      <ol>
        {headings.map((heading) => (
          <li key={heading.id} data-level={heading.level}>
            <a
              href={`#${heading.id}`}
              data-current={heading.id === active || undefined}
              onClick={(event) => {
                const target = document.getElementById(heading.id);
                if (!target) return;
                event.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
                history.replaceState(null, "", `#${heading.id}`);
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
