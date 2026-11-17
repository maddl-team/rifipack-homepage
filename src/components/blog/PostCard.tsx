import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/wp/types";
import s from "./PostCard.module.css";

export function PostCard({ post, priority = false }: { post: Article; priority?: boolean }) {
  const category = post.categories[0]?.name;
  return (
    <article className={s.card} data-reveal="card">
      <Link href={`/blog/${post.slug}/`}>
        <div className={s.media}>
          {post.image ? (
            <Image
              src={post.image.src}
              alt={post.image.alt}
              fill
              sizes="(min-width: 1100px) 30vw, (min-width: 700px) 46vw, 100vw"
              priority={priority}
            />
          ) : (
            <span className={s.mark} aria-hidden="true">R</span>
          )}
        </div>
        <div className={s.body}>
          <p className={`mono ${s.meta}`}>
            {category ? `${category} · ` : ""}
            <time dateTime={post.date}>{post.dateLabel}</time>
          </p>
          <h2>{post.title}</h2>
          <p className={s.excerpt}>{post.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}
