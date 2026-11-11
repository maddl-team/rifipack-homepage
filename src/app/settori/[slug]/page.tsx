import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/content/site";
import { getSector, sectorPages } from "@/content/sectors";
import { sectorJsonLd } from "@/lib/jsonld";
import { SectorPageView } from "@/components/sector/SectorPageView";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return sectorPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getSector((await params).slug);
  if (!page) return {};
  const url = `/settori/${page.slug}/`;
  const image = `${SITE_URL}${page.hero.image.src}`;
  return {
    title: page.seo.title,
    description: page.seo.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "it_IT",
      url,
      siteName: "Rifipack",
      title: page.seo.title,
      description: page.seo.description,
      images: [{ url: image, width: page.hero.image.w, height: page.hero.image.h, alt: page.hero.image.alt }],
    },
    twitter: { card: "summary_large_image", title: page.seo.title, description: page.seo.description, images: [image] },
  };
}

export default async function SectorRoute({ params }: Props) {
  const page = getSector((await params).slug);
  if (!page) notFound();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sectorJsonLd(page)) }} />
      <SectorPageView page={page} />
    </>
  );
}
