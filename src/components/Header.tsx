"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "./Container";
import { primaryNav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-lg font-bold tracking-tight text-ink">
          {site.shortName}
          <span className="ml-1 hidden font-utility text-xs font-normal uppercase tracking-[0.2em] text-rust sm:inline">
            DFW
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/craftsmen/apply"
            className="rounded-sm border border-steel px-4 py-2 text-sm font-semibold text-steel-deep transition-colors hover:bg-steel hover:text-canvas"
          >
            Apply as a Craftsman
          </Link>
          <Link
            href="/get-a-quote"
            className="rounded-sm bg-rust px-4 py-2 text-sm font-semibold text-canvas transition-colors hover:bg-rust-deep"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-sm border border-line text-ink md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="font-utility text-sm">{open ? "✕" : "☰"}</span>
        </button>
      </Container>

      {open && (
        <div className="border-t border-line bg-canvas md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-2.5 text-sm font-medium text-ink-soft hover:bg-canvas-raised hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-line pt-3">
              <Link
                href="/craftsmen/apply"
                onClick={() => setOpen(false)}
                className="rounded-sm border border-steel px-4 py-2.5 text-center text-sm font-semibold text-steel-deep"
              >
                Apply as a Craftsman
              </Link>
              <Link
                href="/get-a-quote"
                onClick={() => setOpen(false)}
                className="rounded-sm bg-rust px-4 py-2.5 text-center text-sm font-semibold text-canvas"
              >
                Get a Quote
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
