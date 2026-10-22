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
