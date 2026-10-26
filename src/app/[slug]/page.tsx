import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/content/site";
import { getProduct, productPages } from "@/content/products";
import { productJsonLd } from "@/lib/jsonld";
import { ProductPageView } from "@/components/product/ProductPageView";

type Props = { params: Promise<{ slug: string }> };

/** Solo le pagine registrate esistono: qualsiasi altro percorso è un 404. */
export const dynamicParams = false;
export function generateStaticParams() {
  return productPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getProduct((await params).slug);
  if (!page) return {};
  const url = `/${page.slug}/`;
  const image = `${SITE_URL}${page.hero.image.src}`;
  return {
    title: page.seo.title,
    description: page.seo.description,
    alternates: { canonical: url },
    openGraph: { type: "website", locale: "it_IT", url, siteName: "Rifipack", title: page.seo.title, description: page.seo.description, images: [{ url: image, width: page.hero.image.w, height: page.hero.image.h, alt: page.hero.image.alt }] },
    twitter: { card: "summary_large_image", title: page.seo.title, description: page.seo.description, images: [image] },
  };
}

export default async function ProductPageRoute({ params }: Props) {
  const page = getProduct((await params).slug);
  if (!page) notFound();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd(page)) }} />
      <ProductPageView page={page} />
    </>
  );
}
