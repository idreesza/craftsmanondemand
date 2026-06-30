import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { blogPosts, getPostBySlug } from "@/lib/blog";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
  };

  const faqJsonLd =
    post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  return (
    <article className="py-14 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <Container className="max-w-2xl">
        <Link href="/blog" className="font-utility text-xs uppercase tracking-wide text-steel-deep hover:text-rust">
          ← All guides
        </Link>

        <p className="mt-4 font-utility text-xs text-ink-soft">
          {post.readTime} ·{" "}
          {new Date(post.datePublished).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <h1 className="mt-2 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
          {post.title}
        </h1>

        <div className="mt-6 rounded-sm border-l-4 border-rust bg-canvas-raised p-4 text-sm leading-relaxed text-ink">
          <strong className="font-display">TL;DR — </strong>
          {post.tldr}
        </div>

        <div className="prose-content mt-8 space-y-8">
          {post.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-xl font-bold text-ink">{section.heading}</h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="mt-3 leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="mt-3 space-y-2">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-ink-soft">
                      <span className="text-rust">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {post.faqs.length > 0 && (
          <div className="mt-10 border-t border-line pt-8">
            <h2 className="font-display text-xl font-bold text-ink">FAQ</h2>
            <div className="mt-4 space-y-5">
              {post.faqs.map((f) => (
                <div key={f.question}>
                  <h3 className="font-semibold text-ink">{f.question}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 rounded-sm border border-line bg-canvas-raised p-5">
          <p className="text-sm text-ink-soft">
            Have a job like this? Post it and compare bids from verified craftsmen.
          </p>
          <Link
            href="/get-a-quote"
            className="mt-3 inline-flex rounded-sm bg-rust px-4 py-2.5 text-sm font-semibold text-canvas hover:bg-rust-deep"
          >
            Get a Quote
          </Link>
        </div>
      </Container>
    </article>
  );
}
