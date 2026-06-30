import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { blogPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Guides on home repair costs, permits, and hiring craftsmen in the ${site.region}.`,
};

export default function BlogIndexPage() {
  return (
    <section className="py-14 sm:py-16">
      <Container className="max-w-3xl">
        <p className="font-utility text-xs font-semibold uppercase tracking-[0.18em] text-rust">
          Blog
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
          Guides for DFW homeowners
        </h1>

        <div className="mt-10 space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-sm border border-line bg-canvas-raised p-6 transition-colors hover:border-steel"
            >
              <p className="font-utility text-xs text-ink-soft">
                {post.readTime} · {new Date(post.datePublished).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <h2 className="mt-2 font-display text-xl font-bold text-ink">{post.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{post.description}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
