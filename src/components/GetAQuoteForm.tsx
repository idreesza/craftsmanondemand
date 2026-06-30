"use client";

import { FormEvent, useState } from "react";
import { liveServices } from "@/lib/services";

type Status = "idle" | "submitting" | "success" | "error";

export function GetAQuoteForm({ defaultCategory }: { defaultCategory?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [ticketId, setTicketId] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      zipcode: formData.get("zipcode"),
      category: formData.get("category"),
      title: formData.get("title"),
      description: formData.get("description"),
      preferredDate: formData.get("preferredDate"),
      budgetMin: formData.get("budgetMin") || undefined,
      budgetMax: formData.get("budgetMax") || undefined,
      source: defaultCategory ? "service-page" : "get-a-quote-page",
    };

    try {
      const res = await fetch("/api/leads", {
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

      const data = await res.json();
      setTicketId(data.id);
      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("Something went wrong. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-line bg-canvas-raised p-6">
        <p className="font-utility text-xs uppercase tracking-[0.16em] text-rust">Ticket created</p>
        <h3 className="mt-2 font-display text-xl font-bold text-ink">Your job request is in.</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          We don&apos;t have craftsmen bidding live in your area yet — we&apos;re building out DFW
          coverage now. You&apos;re on the list, and we&apos;ll reach out the moment a verified
          craftsman in your category and zip code is ready to bid.
        </p>
        {ticketId && (
          <p className="mt-3 font-utility text-xs text-ink-soft">Reference: {ticketId}</p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="fullName" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" />
        <Field label="Zip code" name="zipcode" required pattern="\d{5}" maxLength={5} autoComplete="postal-code" />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-ink">
          Service category
        </label>
        <select
          id="category"
          name="category"
          required
          defaultValue={defaultCategory || ""}
          className="mt-1.5 w-full rounded-sm border border-line bg-canvas px-3 py-2.5 text-sm text-ink focus:border-steel"
        >
          <option value="" disabled>
            Choose a service
          </option>
          {liveServices.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <Field label="Job title" name="title" required placeholder="e.g. Patch drywall in hallway" />

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-ink">
          Describe the job
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={4}
          placeholder="What needs to be done, and anything a craftsman should know before bidding."
          className="mt-1.5 w-full rounded-sm border border-line bg-canvas px-3 py-2.5 text-sm text-ink focus:border-steel"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <Field label="Preferred date (optional)" name="preferredDate" placeholder="e.g. Next week" />
        <Field label="Budget min (optional)" name="budgetMin" type="number" min={0} />
        <Field label="Budget max (optional)" name="budgetMax" type="number" min={0} />
      </div>

      {status === "error" && errorMessage && (
        <p role="alert" className="rounded-sm border border-rust/40 bg-rust/10 px-3 py-2 text-sm text-rust-deep">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-sm bg-rust px-5 py-3 text-sm font-semibold text-canvas transition-colors hover:bg-rust-deep disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Request quotes"}
      </button>
      <p className="text-xs text-ink-soft">
        No payment required to post a job. You&apos;ll only pay a destination fee if a craftsman
        requests one before visiting in person.
      </p>
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
