import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { MobileBar } from "@/components/layout/MobileBar";
import { Footer } from "@/components/layout/Footer";
import { Quote } from "@/components/sections/Quote";
import { ShopStrip } from "@/components/sections/ShopStrip";
import { MotionRoot } from "@/components/motion/MotionRoot";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { company, SITE_URL } from "@/content/site";
import type { Article } from "@/lib/wp/types";
import { ArticleBody } from "./ArticleBody";
import { PostCard } from "./PostCard";
import { TableOfContents } from "./TableOfContents";
import s from "./Article.module.css";

export function ArticleView({ article, related }: { article: Article; related: Article[] }) {
  const category = article.categories[0];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.modified,
    image: article.image?.src,
    author: { "@type": "Organization", name: article.author.name },
    publisher: { "@type": "Organization", name: company.legalName },
    mainEntityOfPage: `${SITE_URL}/blog/${article.slug}/`,
  };

  return (
    <>
      <a className="skip" href="#contenuto">Salta al contenuto</a>
      <Header />
      <main id="contenuto">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
          <header className={s.hero}>
            <div className="wrap">
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Blog", href: "/blog/" },
                  ...(category ? [{ label: category.name, href: `/blog/categoria/${category.slug}/` }] : []),
                  { label: article.title },
                ]}
              />
              {category && <p className={`mono ${s.eyebrow}`}>{category.name}</p>}
              <h1 className={s.h1}>{article.title}</h1>
              <p className={`mono ${s.date}`}>
                <time dateTime={article.date}>{article.dateLabel}</time>
              </p>
            </div>
          </header>

          <article className={s.sheet}>
            <div className={`wrap ${s.layout}`}>
              <div className={s.read}>
                {article.image && (
                  <figure className={s.frame}>
                    <div className={s.frameInner}>
                      <Image
                        src={article.image.src}
                        alt={article.image.alt}
                        fill
                        priority
                        sizes="(min-width: 1100px) 760px, 100vw"
                      />
                    </div>
                  </figure>
                )}
                <div className={s.tocMobile}>
                  <TableOfContents headings={article.headings} />
                </div>
                <ArticleBody html={article.html} />
                <aside className={s.author} aria-label="Autore">
                  {article.author.avatar ? (
                    <Image src={article.author.avatar} alt="" width={72} height={72} className={s.avatar} />
                  ) : (
                    <span className={s.mark} aria-hidden="true">{article.author.name.slice(0, 1)}</span>
                  )}
                  <div>
                    <p className="mono">L&apos;autore</p>
                    <p className={s.authorName}>{article.author.name}</p>
                    <p>{article.author.description}</p>
                  </div>
                </aside>
              </div>
              <div className={s.aside}>
                <TableOfContents headings={article.headings} />
              </div>
            </div>
          </article>

          {related.length > 0 && (
            <section className={s.related} aria-labelledby="correlati-h">
              <div className="wrap">
                <h2 id="correlati-h" className="h-section">Altri articoli</h2>
                <div className={s.relatedGrid}>
                  {related.map((post) => <PostCard key={post.id} post={post} />)}
                </div>
              </div>
            </section>
          )}
        <Quote />
        <ShopStrip />
      </main>
      <Footer />
      <MobileBar />
      <MotionRoot />
    </>
  );
}
