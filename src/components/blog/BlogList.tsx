import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { MobileBar } from "@/components/layout/MobileBar";
import { Footer } from "@/components/layout/Footer";
import { Quote } from "@/components/sections/Quote";
import { ShopStrip } from "@/components/sections/ShopStrip";
import { MotionRoot } from "@/components/motion/MotionRoot";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import type { Article } from "@/lib/wp/types";
import { PostCard } from "./PostCard";
import s from "./BlogList.module.css";

export type BlogCategoryLink = { name: string; slug: string; count: number };

type Props = {
  eyebrow: string;
  title: string;
  lead: string;
  posts: Article[];
  page: number;
  totalPages: number;
  basePath: string;
  categories: BlogCategoryLink[];
  activeCategory?: string;
  crumb: string;
  unavailable?: boolean;
};

function pageHref(base: string, page: number) {
  return page <= 1 ? base : `${base}?page=${page}`;
}

export function BlogList({
  eyebrow,
  title,
  lead,
  posts,
  page,
  totalPages,
  basePath,
  categories,
  activeCategory,
  crumb,
  unavailable,
}: Props) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <>
      <a className="skip" href="#contenuto">Salta al contenuto</a>
      <Header />
      <main id="contenuto">
          <section className={s.hero} aria-labelledby="blog-h">
            <div className="wrap">
              <Breadcrumb
                items={activeCategory
                  ? [{ label: "Home", href: "/" }, { label: "Blog", href: "/blog/" }, { label: crumb }]
                  : [{ label: "Home", href: "/" }, { label: "Blog" }]}
              />
              <p className={`mono ${s.eyebrow}`}>{eyebrow}</p>
              <h1 id="blog-h" className={s.h1}>{title}</h1>
              <p className={s.lead}>{lead}</p>
              {categories.length > 0 && (
                <ul className={s.cats} aria-label="Categorie">
                  <li>
                    <Link href="/blog/" aria-current={activeCategory ? undefined : "page"}>Tutti</Link>
                  </li>
                  {categories.map((category) => (
                    <li key={category.slug}>
                      <Link href={`/blog/categoria/${category.slug}/`} aria-current={category.slug === activeCategory ? "page" : undefined}>
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
          <section className={`wrap ${s.list}`} aria-label="Articoli">
            {posts.length > 0 ? (
              <div className={s.grid}>
                {posts.map((post, index) => <PostCard key={post.id} post={post} priority={index < 2} />)}
              </div>
            ) : (
              <p className={s.empty}>
                {unavailable ? "Gli articoli non sono disponibili in questo momento." : "Non ci sono articoli da mostrare."}
              </p>
            )}
            {totalPages > 1 && (
              <nav className={s.pages} aria-label="Pagine del blog">
                {page > 1 ? <Link href={pageHref(basePath, page - 1)} rel="prev">Precedente</Link> : <span aria-hidden="true" />}
                <ol>
                  {pages.map((n) => (
                    <li key={n}>
                      <Link href={pageHref(basePath, n)} aria-current={n === page ? "page" : undefined}>{n}</Link>
                    </li>
                  ))}
                </ol>
                {page < totalPages ? <Link href={pageHref(basePath, page + 1)} rel="next">Successiva</Link> : <span aria-hidden="true" />}
              </nav>
            )}
          </section>
        <Quote />
        <ShopStrip />
      </main>
      <Footer />
      <MobileBar />
      <MotionRoot />
    </>
  );
}
