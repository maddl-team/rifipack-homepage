"use client";

import { useEffect } from "react";

/**
 * Unico punto che carica il movimento. Gira solo nel browser, dopo l'idratazione.
 * GSAP, ScrollTrigger e Lenis arrivano con import() dinamico: la pagina è già leggibile prima.
 * Con prefers-reduced-motion non parte nulla: restano gli stati finali.
 */
export function MotionRoot() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }, { default: Lenis }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("lenis"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      /* Scroll fluido: solo mouse/trackpad, il touch resta nativo. */
      const lenis = new Lenis({ lerp: 0.12, smoothWheel: true, anchors: { offset: -(96 + 16) } });
      lenis.on("scroll", ScrollTrigger.update);
      const tick = (t: number) => lenis.raf(t * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      const mm = gsap.matchMedia();
      mm.add({ desk: "(min-width: 900px)", mob: "(max-width: 899px)" }, (ctx) => {
        const conditions = ctx.conditions as { desk: boolean; mob: boolean };

        /* Comparsa a gruppi, una volta sola. */
        const reveal = (sel: string, y: number, start: string) => {
          const items = gsap.utils.toArray<HTMLElement>(sel);
          if (!items.length) return;
          gsap.set(items, { y, opacity: 0 });
          ScrollTrigger.batch(items, {
            start,
            once: true,
            onEnter: (b) => gsap.to(b, { y: 0, opacity: 1, duration: 0.7, ease: "expo.out", stagger: 0.1, overwrite: true }),
          });
        };
        reveal("[data-reveal='card']", 40, "top 88%");
        reveal("[data-reveal='block']", 32, "top 90%");

        const scene = document.querySelector<HTMLElement>("[data-scene]");
        if (!scene) return;

        if (conditions.mob) reveal("[data-layer]", 32, "top 90%");

        if (conditions.desk) {
          const layers = Array.from(scene.querySelectorAll<HTMLElement>("[data-layer]"));
          const imgs = layers.map((l) => l.querySelector("img") as HTMLElement);
          const rail = Array.from(scene.querySelectorAll<HTMLElement>("[data-moment]"));
          const texts = Array.from(scene.querySelectorAll<HTMLElement>("[data-live-text]"));
          const count = scene.querySelector<HTMLElement>("[data-count]");
          const prog = scene.querySelector<HTMLElement>("[data-prog]");
          const fl = scene.querySelector<HTMLElement>("[data-flap='l']");
          const fr = scene.querySelector<HTMLElement>("[data-flap='r']");
          const names = rail.map((r) => r.querySelector("span")?.textContent ?? "");
          if (layers.length !== 4 || !fl || !fr || !prog) return;

          const setStep = (i: number) => {
            if (scene.dataset.step === String(i)) return;
            scene.dataset.step = String(i);
            rail.forEach((li, k) => li.setAttribute("data-on", String(k === i)));
            texts.forEach((p, k) => p.setAttribute("data-on", String(k === i)));
            if (count) count.textContent = `0${i + 1} / 04 · ${names[i]}`;
          };

          scene.dataset.live = "true";
          setStep(0);
          gsap.set(layers[1], { clipPath: "inset(100% 0% 0% 0%)" });
          gsap.set(layers[2], { clipPath: "inset(0% 0% 0% 100%)" });
          gsap.set(layers[3], { clipPath: "inset(0% 100% 0% 0%)" });
          gsap.set(imgs.slice(1), { scale: 1.25 });

          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: scene, start: "top top", end: "+=3000", pin: true, scrub: 0.6,
              anticipatePin: 1, invalidateOnRefresh: true,
              onUpdate: (st) => {
                const p = st.progress;
                setStep(p < 0.27 ? 0 : p < 0.54 ? 1 : p < 0.8 ? 2 : 3);
                gsap.set(prog, { scaleX: p });
              },
            },
          });
          tl.fromTo(imgs[0], { scale: 1.2 }, { scale: 1, duration: 2, ease: "power2.out" }, 0)
            .to(fl, { xPercent: -101, duration: 1.2, ease: "power2.inOut" }, 0)
            .to(fr, { xPercent: 101, duration: 1.2, ease: "power2.inOut" }, 0)
            .to(layers[1], { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power3.inOut" }, 2.4)
            .to(imgs[1], { scale: 1, duration: 1.6 }, 2.4)
            .to(layers[2], { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power3.inOut" }, 4.6)
            .to(imgs[2], { scale: 1, duration: 1.6 }, 4.6)
            .to(layers[3], { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power3.inOut" }, 6.6)
            .to(imgs[3], { scale: 1, duration: 1.6 }, 6.6)
            .to({}, { duration: 1 }, 8.2);

          return () => {
            delete scene.dataset.live;
            delete scene.dataset.step;
            gsap.set(prog, { scaleX: 0 });
          };
        }
      });

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      document.fonts?.ready.then(refresh);

      cleanup = () => {
        window.removeEventListener("load", refresh);
        mm.revert();
        gsap.ticker.remove(tick);
        lenis.destroy();
      };
    })();

    return () => { cancelled = true; cleanup?.(); };
  }, []);

  return null;
}
