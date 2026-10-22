import type { ReactNode } from "react";
import s from "./Button.module.css";

type Props = {
  href: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "md" | "sm";
  external?: boolean;
  arrow?: "→" | "↗";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

/** Pulsante-link. Un solo pulsante "primary" per vista (regola del design system). */
export function Button({ href, variant = "primary", size = "md", external, arrow, children, className, onClick }: Props) {
  const cls = [s.btn, s[variant], size === "sm" ? s.sm : "", className ?? ""].join(" ").trim();
  return (
    <a
      className={cls}
      href={href}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {arrow ? <span aria-hidden="true">{arrow}</span> : null}
    </a>
  );
}
