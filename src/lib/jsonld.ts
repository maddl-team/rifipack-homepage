import { SITE_URL, company, social, products } from "@/content/site";

/** Dati strutturati della homepage: Organization + ItemList delle famiglie di prodotto. */
export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: company.legalName,
        alternateName: `Rifipack ${company.payoff}`,
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/img/logo.png`,
        email: company.email,
        telephone: [company.phone.e164, "+393247946947"],
        vatID: `IT${company.vat}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: company.address.street,
          postalCode: company.address.zip,
          addressLocality: company.address.city,
          addressRegion: company.address.province,
          addressCountry: company.address.country,
        },
        sameAs: social.map((s) => s.href),
      },
      {
        "@type": "ItemList",
        name: products.title,
        itemListElement: products.families.map((f, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: f.title,
        })),
      },
    ],
  };
}

/** Dati strutturati di una pagina prodotto: briciole di pane + prodotto (senza prezzo: si vende su preventivo). */
export function productJsonLd(page: import("@/content/products/types").ProductPage) {
  const url = `${SITE_URL}/${page.slug}/`;
  const abs = (p: string) => `${SITE_URL}${p}`;
  const graph: object[] = [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Prodotti", item: `${SITE_URL}/#prodotti` },
          { "@type": "ListItem", position: 3, name: page.name, item: url },
        ],
      },
      {
        "@type": "Product",
        "@id": `${url}#product`,
        name: page.name,
        description: page.seo.description,
        url,
        category: page.family,
        image: [page.hero.image.src, ...page.gallery.items.slice(0, 5).map((i) => i.src)].map(abs),
        brand: { "@type": "Brand", name: "Rifipack" },
        manufacturer: { "@id": `${SITE_URL}/#organization` },
      },
    ];
  if (page.faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

/** Dati strutturati di una pagina settore: percorso e domande frequenti. */
export function sectorJsonLd(page: import("@/content/sectors/types").SectorPage) {
  const url = `${SITE_URL}/settori/${page.slug}/`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: page.name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}
