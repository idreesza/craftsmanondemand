import Link from "next/link";
import { Container } from "./Container";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas-deep text-ink-on-deep">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-display text-lg font-bold text-ink-on-deep">{site.shortName}</div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-on-deep-soft">
            A portfolio-first marketplace connecting {site.region} homeowners with verified
            independent craftsmen.
          </p>
        </div>

        <div>
          <div className="font-utility text-xs font-semibold uppercase tracking-[0.16em] text-ink-on-deep-soft">
            Services
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-ink-on-deep-soft hover:text-ink-on-deep">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-brass hover:text-ink-on-deep">
                View all services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-utility text-xs font-semibold uppercase tracking-[0.16em] text-ink-on-deep-soft">
            Company
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/dfw" className="text-ink-on-deep-soft hover:text-ink-on-deep">
                DFW Service Area
              </Link>
            </li>
            <li>
              <Link href="/how-it-works" className="text-ink-on-deep-soft hover:text-ink-on-deep">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-ink-on-deep-soft hover:text-ink-on-deep">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/craftsmen/apply" className="text-ink-on-deep-soft hover:text-ink-on-deep">
                Apply as a Craftsman
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-utility text-xs font-semibold uppercase tracking-[0.16em] text-ink-on-deep-soft">
            Legal
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/terms" className="text-ink-on-deep-soft hover:text-ink-on-deep">
                Terms (draft)
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-ink-on-deep-soft hover:text-ink-on-deep">
                Privacy (draft)
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${site.supportEmail}`}
                className="text-ink-on-deep-soft hover:text-ink-on-deep"
              >
                {site.supportEmail}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-line-deep">
        <Container className="flex flex-col gap-2 py-6 text-xs text-ink-on-deep-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="max-w-2xl">
            Craftsmen on {site.shortName} are independent contractors, not employees of{" "}
            {site.shortName}. Licensed-trade categories are gated until license verification is
            live — see our{" "}
            <Link href="/blog/permits-for-handyman-work-in-texas" className="underline hover:text-ink-on-deep">
              guide to permits and licensing in Texas
            </Link>
            .
          </p>
        </Container>
      </div>
    </footer>
  );
}
