import localFont from "next/font/local";

export const display = localFont({
  src: [
    { path: "../../public/fonts/archivo-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/archivo-latin-800-normal.woff2", weight: "800", style: "normal" },
    { path: "../../public/fonts/archivo-latin-900-normal.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["Arial Narrow", "system-ui", "sans-serif"],
});

export const sans = localFont({
  src: [
    { path: "../../public/fonts/work-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/work-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/work-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/work-sans-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const mono = localFont({
  src: [{ path: "../../public/fonts/jetbrains-mono-latin-500-normal.woff2", weight: "500", style: "normal" }],
  variable: "--font-mono",
  display: "swap",
  preload: false,
  fallback: ["ui-monospace", "monospace"],
});
