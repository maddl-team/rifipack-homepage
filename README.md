# Rifipack: homepage

Next.js 16 (App Router) · React 19 · TypeScript · GSAP + ScrollTrigger · Lenis · CSS Modules.

## Avvio
```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

## Dove si cambia cosa
- `src/content/site.ts`: tutti i testi, i prodotti, i contatti e i link (unica sorgente dei contenuti).
- `scripts/tokens.json` poi `node scripts/gen-tokens.mjs`: design token (genera `src/styles/tokens.css`, non modificarlo a mano).
- `src/components/sections/`: le sezioni; `src/components/motion/MotionRoot.tsx`: scroll fluido e scena "Apri".
- `src/app/api/quote/route.ts`: endpoint del modulo. **È ancora una prova**: valida e risponde ma non invia email.

## Da fare prima della pubblicazione
1. Collegare Resend al modulo (variabili in `.env.example`, da impostare su Vercel).
2. Verificare i dati segnalati come fittizi in `PLACEHOLDER_FACTS` (quantità minime, tempi).
3. Verificare l'URL della privacy (`links.privacy`): non è stato trovato sul sito, è ipotizzato.
4. Confermare con Rifipack l'uso delle foto dei clienti (Caleffi, Equestrian Roma, ecc.) e inserire i loghi cliente.
5. Misurare Lighthouse/INP sul deploy Vercel con rete reale.

## Controlli
```bash
npm run typecheck
npm run qa:axe          # con il sito avviato su :3000 (modifica l'URL nello script se serve)
npm run qa:lighthouse
```

## Aggiungere una pagina prodotto

Le pagine prodotto usano un unico template (`src/components/product/ProductPageView.tsx`) pilotato dai contenuti.
La prima, **shopper-in-carta-lusso**, è il modello di riferimento.

1. Copia `src/content/products/shopper-lusso.ts` in `src/content/products/<nome>.ts` e cambia `slug`
   (identico allo slug WordPress, così gli URL non cambiano), testi SEO, hero, sezioni, varianti/quantità/misure del form.
2. Metti le foto in `public/img/prodotti/<nome>/` (webp) e, se vuoi la galleria, crea `<nome>.gallery.ts`
   (elenco `{src, alt, w, h}`; l'alt descrive il prodotto, non il nome del file).
3. Registra la pagina in `src/content/products/index.ts` (array `productPages`).
   Il route `app/[slug]/page.tsx`, la sitemap, i breadcrumb, il JSON-LD e i link dalla home
   (`productHref`) la raccolgono da soli. Finché una pagina non è registrata, i link puntano
   ancora a `https://www.rifipack.it/<slug>/`.
4. `npm run build` e controlla `qa:axe` / `qa:lighthouse`.

`trailingSlash: true` è attivo di proposito: mantiene gli URL identici al sito WordPress attuale.
Il form preventivo (`/api/quote/`) è ancora di prova: valida i dati ma non invia nulla finché non si collega Resend.

### Modulo preventivo di pagina prodotto

Tre passi a tutta larghezza: **Chi sei** (azienda, referente, città, telefono, email), **Prodotto** (tessere-immagine,
quantità, misure), **Invio** (messaggio, logo opzionale, consenso).
Le tessere vengono da `form.variants.options` (`{ label, image }`) nel file contenuti della pagina:
immagini webp 400×500 su fondo bianco in `public/img/prodotti/<nome>/varianti/`.
