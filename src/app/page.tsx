import type { Metadata } from "next";
import { seo } from "@/content/site";
import { homeJsonLd } from "@/lib/jsonld";
import { Header } from "@/components/layout/Header";
import { MobileBar } from "@/components/layout/MobileBar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ApriScene } from "@/components/sections/ApriScene";
import { Products } from "@/components/sections/Products";
import { Why } from "@/components/sections/Why";
import { Trust } from "@/components/sections/Trust";
import { Quote } from "@/components/sections/Quote";
import { ShopStrip } from "@/components/sections/ShopStrip";
import { MotionRoot } from "@/components/motion/MotionRoot";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "it_IT", url: "/", siteName: "Rifipack", title: seo.title, description: seo.description },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd()) }} />
      <a className="skip" href="#contenuto">Salta al contenuto</a>
      <Header />
      <main id="contenuto">
        <Hero />
        <ApriScene />
        <Products />
        <Why />
        <Trust />
        <Quote />
        <ShopStrip />
      </main>
      <Footer />
      <MobileBar />
      <MotionRoot />
    </>
  );
}
