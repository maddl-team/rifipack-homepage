import { nav, products } from "@/content/site";
import { productPages } from "@/content/products";
import { sectorPages } from "@/content/sectors";
import { HeaderMenu, type Group, type Item } from "./HeaderMenu";

type Named = { slug: string; name: string };

function columns(pages: readonly Named[], defs: { label: string; slugs: string[] }[], href: (slug: string) => string): Group[] {
  const used = new Set<string>();
  const groups = defs.map((def) => ({
    label: def.label,
    links: def.slugs.map((slug) => {
      used.add(slug);
      const page = pages.find((p) => p.slug === slug);
      if (!page) throw new Error(`Voce di menu senza pagina: ${slug}`);
      return { label: page.name, href: href(slug) };
    }),
  }));
  const rest = pages.filter((p) => !used.has(p.slug));
  if (rest.length) {
    groups.push({ label: "Altro", links: rest.map((p) => ({ label: p.name, href: href(p.slug) })) });
  }
  return groups;
}

const [shopping, packaging, shipping, labels] = products.families;

const items: Item[] = [
  {
    label: "Prodotti",
    groups: columns(
      productPages,
      [
        {
          label: shopping.title,
          slugs: ["shopper-in-carta-lusso", "buste-economiche-in-carta", "shopper-in-plastica-bio", "shopping-bag-in-tessuto-personalizzate"],
        },
        {
          label: packaging.title,
          slugs: ["packaging-alimentare-personalizzato", "sacchetti-alluminio-alimenti", "scatole-regalo-lusso", "carta-regalo-personalizzata"],
        },
        {
          label: shipping.title,
          slugs: ["buste-e-scatole-e-commerce-personalizzate", "nastro-adesivo-personalizzati"],
        },
        {
          label: labels.title,
          slugs: ["etichette-in-tessuto", "etichette-adesive", "nastri-raso", "cartellini-personalizzati"],
        },
        { label: "Gadget", slugs: ["gadget-personalizzati"] },
      ],
      (slug) => `/${slug}/`,
    ),
  },
  {
    label: "Settori",
    groups: columns(
      sectorPages,
      [
        {
          label: "Lusso e moda",
          slugs: ["packaging-lusso-e-retail-premium", "packaging-cosmetici-personalizzato", "packaging-gioielli-personalizzato", "packaging-abbigliamento-moda-personalizzato"],
        },
        {
          label: "Cibo e bevande",
          slugs: ["packaging-vino-personalizzato", "packaging-alimentare-e-ristorazione", "packaging-pizza-e-asporto", "packaging-pasticceria-e-dolciario"],
        },
        {
          label: "Negozi e distribuzione",
          slugs: ["packaging-ecommerce", "packaging-retail-e-grande-distribuzione", "packaging-farmacia-e-parafarmacia"],
        },
        {
          label: "Regali e occasioni",
          slugs: ["corporate-gifting-welcome-kit", "packaging-eventi-e-bomboniere", "packaging-per-fioristi"],
        },
      ],
      (slug) => `/settori/${slug}/`,
    ),
  },
  ...nav,
];

/** Testata viva. La versione precedente, a liste semplici, è in `./v1`. */
export function Header() {
  return <HeaderMenu items={items} />;
}
