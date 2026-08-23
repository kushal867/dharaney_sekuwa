// Honest stand-in for missing real media. Never a fake stock photo —
// just a plain, textured slate naming exactly what belongs here and where
// to put it. Disappears the moment the real file exists at that path.

export default function AssetPlaceholder({
  label,
  path,
  className = "",
}: {
  label: string;
  path: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-[var(--color-charcoal)] ${className}`}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(244,234,217,0.04) 0 1px, transparent 1px 20px)",
        }}
      />
      <div className="pointer-events-none absolute inset-5 border border-[var(--color-cream)]/15" />

      <div className="relative z-10 max-w-[85%] text-center">
        <p className="font-body text-[10px] font-semibold tracking-[0.18em] text-[var(--color-orange)]">
          PHOTO COMING SOON
        </p>
        <p className="font-display mt-2 text-lg tracking-wide text-[var(--color-cream)]/85">{label}</p>
        <p className="font-body mt-2 text-[10px] tracking-[0.02em] text-[var(--color-cream)]/40">{path}</p>
      </div>
    </div>
  );
}
