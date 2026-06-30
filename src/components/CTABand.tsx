import Link from "next/link";
import { Container } from "./Container";

export function CTABand({
  heading,
  body,
  primary,
  secondary,
}: {
  heading: string;
  body: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="bg-canvas-deep py-16">
      <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-bold text-ink-on-deep sm:text-3xl">{heading}</h2>
          <p className="mt-2 text-ink-on-deep-soft">{body}</p>
        </div>
        <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href={primary.href}
            className="rounded-sm bg-rust px-5 py-3 text-center text-sm font-semibold text-canvas transition-colors hover:bg-rust-deep"
          >
            {primary.label}
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="rounded-sm border border-ink-on-deep-soft px-5 py-3 text-center text-sm font-semibold text-ink-on-deep transition-colors hover:border-ink-on-deep"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
