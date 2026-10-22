"use client";

import type { ReactNode } from "react";
import { Button } from "./Button";

/** Porta al modulo e gli comunica la famiglia scelta (precompila il campo). */
export function QuoteCta({ family, children, variant = "outline" }: { family: string; children: ReactNode; variant?: "primary" | "secondary" | "outline" }) {
  return (
    <Button
      href="#preventivo"
      variant={variant}
      size="sm"
      arrow="→"
      onClick={() => window.dispatchEvent(new CustomEvent("rifipack:prodotto", { detail: family }))}
    >
      {children}
    </Button>
  );
}
