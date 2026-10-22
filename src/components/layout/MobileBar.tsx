"use client";

import { useEffect, useState } from "react";
import { company } from "@/content/site";
import { Button } from "@/components/ui/Button";
import s from "./MobileBar.module.css";

/** Barra fissa con le azioni principali, solo mobile, dopo l'hero. */
export function MobileBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const io = new IntersectionObserver(
      ([e]) => setShow(!e.isIntersecting && e.boundingClientRect.top < 0),
      { rootMargin: "0px 0px -20% 0px", threshold: 0 },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`${s.bar} ${show ? s.show : ""}`} role="region" aria-label="Azioni rapide" inert={!show}>
      <Button href={company.phone.href} variant="outline">Chiama</Button>
      <Button href={company.mobile.whatsapp} variant="secondary" external>WhatsApp</Button>
      <Button href="#preventivo">Preventivo</Button>
    </div>
  );
}
