/**
 * Menu a tendina archiviato (liste in due colonne, senza raggruppamenti).
 * Non è montato: la testata viva è `../Header`.
 */
import { nav } from "@/content/site";
import { productPages } from "@/content/products";
import { sectorPages } from "@/content/sectors";
import { HeaderMenu, type Item } from "./HeaderMenu";

const items: Item[] = [
  {
    label: "Prodotti",
    children: productPages.map((p) => ({ label: p.name, href: `/${p.slug}/` })),
  },
  {
    label: "Settori",
    children: sectorPages.map((p) => ({ label: p.name, href: `/settori/${p.slug}/` })),
  },
  ...nav,
];

/** Testata: le voci con sottomenu arrivano dai registri delle pagine. */
export function Header() {
  return <HeaderMenu items={items} />;
}
