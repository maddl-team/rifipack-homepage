import type { Img } from "./products/types";

/**
 * Elenco dei prodotti del sito (le 11 pagine prodotto principali di rifipack.it).
 * Serve ai suggeriti "Potrebbe interessarti anche": quando una pagina viene creata nel nuovo sito
 * il link diventa interno da solo (vedi products/index.ts), altrimenti punta alla pagina attuale.
 */
export type CatalogEntry = { slug: string; title: string; thumb: Omit<Img, "alt"> };

const t = (slug: string) => ({ src: `/img/prodotti/thumbs/${slug}.webp`, w: 720, h: 720 });

export const catalog: CatalogEntry[] = [
  { slug: "shopper-in-carta-lusso", title: "Shopper in carta lusso personalizzate", thumb: t("shopper-in-carta-lusso") },
  { slug: "buste-economiche-in-carta", title: "Buste in carta economiche personalizzate", thumb: t("buste-economiche-in-carta") },
  { slug: "shopper-in-plastica-bio", title: "Shopper bio e sacchetti in plastica riciclata", thumb: t("shopper-in-plastica-bio") },
  { slug: "shopping-bag-in-tessuto-personalizzate", title: "Shopping bag in tessuto personalizzate", thumb: t("shopping-bag-in-tessuto-personalizzate") },
  { slug: "packaging-alimentare-personalizzato", title: "Packaging alimentare personalizzato", thumb: t("packaging-alimentare-personalizzato") },
  { slug: "gadget-personalizzati", title: "Gadget e altri prodotti personalizzati", thumb: t("gadget-personalizzati") },
  { slug: "buste-e-scatole-e-commerce-personalizzate", title: "Buste e scatole e-commerce personalizzate", thumb: t("buste-e-scatole-e-commerce-personalizzate") },
  { slug: "etichette-in-tessuto", title: "Etichette in stoffa personalizzate", thumb: t("etichette-in-tessuto") },
  { slug: "cartellini-personalizzati", title: "Cartellini personalizzati", thumb: t("cartellini-personalizzati") },
  { slug: "nastro-adesivo-personalizzati", title: "Nastro con logo e scotch personalizzato", thumb: t("nastro-adesivo-personalizzati") },
  { slug: "carta-regalo-personalizzata", title: "Carta regalo e imballaggio", thumb: t("carta-regalo-personalizzata") },
];
