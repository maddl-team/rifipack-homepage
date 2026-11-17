import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

/** Aggiorna le pagine del blog quando WordPress pubblica un articolo. Richiede REVALIDATE_SECRET. */
async function handle(req: NextRequest) {
  const url = new URL(req.url);
  const secret = url.searchParams.get("secret") || req.headers.get("x-revalidate-secret");
  if (!secret || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  let slug = url.searchParams.get("slug");
  let categorySlug = url.searchParams.get("categorySlug");
  if (req.method === "POST") {
    try {
      const body = await req.json();
      if (typeof body.slug === "string") slug = body.slug;
      if (typeof body.categorySlug === "string") categorySlug = body.categorySlug;
    } catch {
      /* i parametri possono arrivare solo dalla query */
    }
  }

  const paths = ["/blog"];
  revalidatePath("/blog");
  if (slug) {
    revalidatePath(`/blog/${slug}`);
    paths.push(`/blog/${slug}`);
  }
  if (categorySlug) {
    revalidatePath(`/blog/categoria/${categorySlug}`);
    paths.push(`/blog/categoria/${categorySlug}`);
  }
  return NextResponse.json({ revalidated: true, paths });
}

export function GET(req: NextRequest) {
  return handle(req);
}

export function POST(req: NextRequest) {
  return handle(req);
}
