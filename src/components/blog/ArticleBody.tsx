"use client";

import { useRouter } from "next/navigation";
import s from "./Article.module.css";

/** Corpo dell'articolo. I link interni passano dal router, gli esterni restano normali. */
export function ArticleBody({ html }: { html: string }) {
  const router = useRouter();
  return (
    <div
      className={s.prose}
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
        const anchor = (event.target as HTMLElement).closest("a");
        if (!anchor) return;
        const href = anchor.getAttribute("href");
        if (!href || href.startsWith("#") || anchor.getAttribute("target") === "_blank" || /^https?:/i.test(href)) return;
        event.preventDefault();
        router.push(href);
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
