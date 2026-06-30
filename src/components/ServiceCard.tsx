import Link from "next/link";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  const isLive = service.status === "live";

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col justify-between rounded-sm border border-line bg-canvas-raised p-5 transition-colors hover:border-steel"
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-base font-bold text-ink">{service.name}</h3>
          {!isLive && (
            <span className="flex-shrink-0 rounded-sm bg-brass/20 px-2 py-0.5 font-utility text-[10px] font-semibold uppercase tracking-wide text-brass">
              Coming soon
            </span>
          )}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{service.shortDescription}</p>
      </div>
      <span className="mt-4 inline-flex items-center gap-1 font-utility text-xs font-semibold uppercase tracking-wide text-steel-deep group-hover:text-rust">
        {isLive ? "Request a quote" : "Learn more"}
        <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
