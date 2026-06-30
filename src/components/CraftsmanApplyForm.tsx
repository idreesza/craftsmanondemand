"use client";

import { FormEvent, useState } from "react";
import { services } from "@/lib/services";

type Status = "idle" | "submitting" | "success" | "error";

export function CraftsmanApplyForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedTrades, setSelectedTrades] = useState<string[]>([]);

  function toggleTrade(slug: string) {
    setSelectedTrades((prev) =>
      prev.includes(slug) ? prev.filter((t) => t !== slug) : [...prev, slug]
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      fullName: formData.get("fullName"),
      businessName: formData.get("businessName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      zipcode: formData.get("zipcode"),
      trades: selectedTrades,
      yearsExperience: formData.get("yearsExperience") || undefined,
      portfolioUrl: formData.get("portfolioUrl"),
      notes: formData.get("notes"),
    };

    try {
      const res = await fetch("/api/craftsmen-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setErrorMessage(data?.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
      setSelectedTrades([]);
    } catch {
      setErrorMessage("Something went wrong. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-line bg-canvas-raised p-6">
        <p className="font-utility text-xs uppercase tracking-[0.16em] text-steel-deep">Application received</p>
        <h3 className="mt-2 font-display text-xl font-bold text-ink">You&apos;re on the early access list.</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          We&apos;re onboarding craftsmen in waves as we open up DFW zip codes and finish identity
          verification. We&apos;ll email you when it&apos;s your turn to set up a profile and
          portfolio.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="fullName" required autoComplete="name" />
        <Field label="Business name (optional)" name="businessName" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Zip code (where you work)" name="zipcode" required pattern="\d{5}" maxLength={5} />
        <Field label="Years of experience (optional)" name="yearsExperience" type="number" min={0} />
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-ink">Trades you offer</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {services.map((s) => (
            <label
              key={s.slug}
              className="flex items-center gap-2 rounded-sm border border-line px-3 py-2 text-sm text-ink-soft"
            >
              <input
                type="checkbox"
                checked={selectedTrades.includes(s.slug)}
                onChange={() => toggleTrade(s.slug)}
                className="h-4 w-4 accent-steel"
              />
              {s.name}
              {s.status === "coming-soon" && (
                <span className="font-utility text-[10px] uppercase tracking-wide text-brass">soon</span>
              )}
            </label>
          ))}
        </div>
        {selectedTrades.length === 0 && status === "error" && (
          <p className="mt-1 text-xs text-rust-deep">Pick at least one trade.</p>
        )}
      </fieldset>

      <Field
        label="Portfolio link (optional)"
        name="portfolioUrl"
        type="url"
        placeholder="Instagram, website, or photo album link"
      />

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-ink">
          Anything else we should know? (optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className="mt-1.5 w-full rounded-sm border border-line bg-canvas px-3 py-2.5 text-sm text-ink focus:border-steel"
        />
      </div>

      {status === "error" && errorMessage && (
        <p role="alert" className="rounded-sm border border-rust/40 bg-rust/10 px-3 py-2 text-sm text-rust-deep">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-sm bg-steel px-5 py-3 text-sm font-semibold text-canvas transition-colors hover:bg-steel-deep disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Apply for early access"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-sm border border-line bg-canvas px-3 py-2.5 text-sm text-ink focus:border-steel"
        {...rest}
      />
    </div>
  );
}
