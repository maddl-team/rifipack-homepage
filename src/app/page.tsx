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

export default function Home() {
  return (
    <>
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
