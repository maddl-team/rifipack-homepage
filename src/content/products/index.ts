import { SITE_URL } from "../site";
import { catalog } from "../catalog";
import type { ProductPage } from "./types";
import { shopperLusso } from "./shopper-lusso";
import { busteEconomiche } from "./buste-economiche";
import { shopperBio } from "./shopper-bio";
import { borseTessuto } from "./borse-tessuto";
import { packagingAlimentare } from "./packaging-alimentare";
import { sacchettiAlluminio } from "./sacchetti-alluminio";
import { scatoleRegalo } from "./scatole-regalo";

/**
 * Registro delle pagine prodotto del nuovo sito. Per aggiungerne una:
 * 1. crea src/content/products/<nome>.ts (copia shopper-lusso.ts),
 * 2. aggiungila qui sotto. Rotta, SEO, sitemap e link interni si aggiornano da soli.
 */
export const productPages: ProductPage[] = [shopperLusso, busteEconomiche, shopperBio, borseTessuto, packagingAlimentare, sacchettiAlluminio, scatoleRegalo];

const bySlug = new Map(productPages.map((p) => [p.slug, p]));
export const getProduct = (slug: string) => bySlug.get(slug);

/** Link a un prodotto: interno se la pagina esiste nel nuovo sito, altrimenti alla pagina attuale. */
export function productHref(slug: string): string {
  return bySlug.has(slug) ? `/${slug}/` : `${SITE_URL}/${slug}/`;
}
export const isInternal = (href: string) => href.startsWith("/");

/** Risolve un URL assoluto di rifipack.it nel link giusto (usato dai dati di site.ts). */
export function resolveSiteLink(url: string): string {
  if (!url.startsWith(SITE_URL)) return url;
  const slug = url.slice(SITE_URL.length).replace(/^\/|\/$/g, "");
  return slug && bySlug.has(slug) ? `/${slug}/` : url;
}

export function relatedFor(page: ProductPage) {
  const wanted = page.related ?? catalog.map((c) => c.slug);
  return wanted
    .filter((s) => s !== page.slug)
    .map((s) => catalog.find((c) => c.slug === s))
    .filter((c): c is NonNullable<typeof c> => !!c);
}
