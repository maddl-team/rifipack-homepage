import type { Metadata, Viewport } from "next";
import { display, sans, mono } from "./fonts";
import { SITE_URL, seo } from "@/content/site";
import "@/styles/tokens.css";
import "@/styles/base.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: seo.title,
  description: seo.description,
  openGraph: { type: "website", locale: "it_IT", siteName: "Rifipack" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#00262C",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
