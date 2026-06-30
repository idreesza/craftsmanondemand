export function StampBadge({
  label,
  sublabel,
  tone = "rust",
  className = "",
}: {
  label: string;
  sublabel?: string;
  tone?: "rust" | "steel";
  className?: string;
}) {
  const toneClasses =
    tone === "rust"
      ? "border-rust text-rust"
      : "border-steel text-steel-deep";

  return (
    <div
      aria-hidden={false}
      className={`stamp-rotate inline-flex select-none flex-col items-center justify-center rounded-full border-[3px] px-3 py-2 text-center leading-none ${toneClasses} ${className}`}
      style={{ borderStyle: "double" }}
    >
      <span className="font-display text-[11px] font-bold uppercase tracking-[0.18em]">
        {label}
      </span>
      {sublabel ? (
        <span className="mt-0.5 font-utility text-[9px] uppercase tracking-[0.14em] opacity-80">
          {sublabel}
        </span>
      ) : null}
    </div>
  );
}
