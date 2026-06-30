import { StampBadge } from "./StampBadge";

const steps = [
  { label: "Job posted", done: true },
  { label: "3 bids in", done: true },
  { label: "Destination fee paid · $50", done: true },
  { label: "Alice R. selected — Verified", done: true, active: true },
  { label: "Job complete", done: false },
];

export function JobTicketHero() {
  return (
    <div className="relative mx-auto w-full max-w-md rotate-[1.2deg] rounded-sm bg-canvas-raised p-6 shadow-[0_18px_40px_-12px_rgba(33,32,28,0.25)] sm:p-7">
      <StampBadge
        label="Verified"
        sublabel="Background Check"
        className="absolute -right-4 -top-5 bg-canvas-raised shadow-md sm:-right-6"
      />

      <div className="flex items-baseline justify-between border-b border-dashed border-line pb-3">
        <span className="font-utility text-[11px] uppercase tracking-[0.18em] text-ink-soft">
          Job Ticket
        </span>
        <span className="font-utility text-sm text-ink-soft">#00142</span>
      </div>

      <h3 className="mt-3 font-display text-xl font-bold leading-snug text-ink">
        Drywall patch + faucet repair
      </h3>
      <p className="mt-1 font-utility text-xs uppercase tracking-[0.1em] text-ink-soft">
        Plano, TX 75024
      </p>

      <ul className="mt-5 space-y-2.5">
        {steps.map((step) => (
          <li key={step.label} className="flex items-center gap-3 text-sm">
            <span
              className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border ${
                step.done ? "border-steel bg-steel" : "border-line bg-transparent"
              }`}
            >
              {step.done && <span className="h-1.5 w-1.5 rounded-full bg-canvas" />}
            </span>
            <span className={step.active ? "font-semibold text-ink" : "text-ink-soft"}>
              {step.label}
            </span>
          </li>
        ))}
      </ul>

      <div className="ticket-perforation mt-6 h-px w-full" />

      <dl className="mt-5 space-y-1.5 font-utility text-sm">
        <div className="flex justify-between">
          <dt className="text-ink-soft">Quoted price</dt>
          <dd className="text-ink">$150.00</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-ink-soft">Destination fee (paid)</dt>
          <dd className="text-ink">$50.00</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-ink-soft">Platform fee</dt>
          <dd className="text-ink">−$5.00</dd>
        </div>
        <div className="mt-1 flex justify-between border-t border-line pt-1.5 font-semibold">
          <dt className="text-ink">Alice receives</dt>
          <dd className="text-rust">$195.00</dd>
        </div>
      </dl>
    </div>
  );
}
