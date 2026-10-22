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
