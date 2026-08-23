import { useState } from "react";
import MediaSlot from "./MediaSlot";
import PaperCard from "./PaperCard";
import { media } from "../data/media";
import { restaurant } from "../data/restaurant";

const photos = [media.char, media.smoke, media.flavour];

export default function FireSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="relative bg-[var(--color-charcoal)] px-6 py-24 md:px-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(ellipse at 20% 20%, rgba(217,114,47,0.25), transparent 55%)" }}
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-5xl leading-[0.92] text-[var(--color-cream)] md:text-6xl">
              MADE
              <br />
              OVER <span className="text-[var(--color-red)]">FIRE.</span>
            </h2>
            <p className="font-body mt-4 max-w-xs text-sm text-[var(--color-cream)]/60">
              Charcoal. Heat. Time.
              <br />
              That's the secret.
            </p>
          </div>
          <button
            data-cursor="LOOK"
            className="rounded-md border-2 border-[var(--color-cream)]/30 px-5 py-2.5 font-body text-sm font-semibold text-[var(--color-cream)] transition-colors hover:border-[var(--color-orange)] hover:text-[var(--color-orange)]"
          >
            SEE THE PROCESS →
          </button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {restaurant.fireDetails.map((d, i) => {
            const isOpen = expanded === i;
            return (
              <button key={d.label} onClick={() => setExpanded(isOpen ? null : i)} className="text-left">
                <PaperCard torn rotate={i % 2 === 0 ? -1 : 1} className="overflow-hidden">
                  <div className="relative aspect-[5/4] w-full">
                    <MediaSlot asset={photos[i]} />
                  </div>
                  <div className="flex items-center justify-between px-4 py-3">
                    <span className="font-display text-lg text-[var(--color-ink)]">{d.label}</span>
                    <span
                      className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-red)] font-display text-sm text-[var(--color-cream)] transition-transform"
                      style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                    >
                      +
                    </span>
                  </div>
                  <div
                    className="overflow-hidden px-4 transition-all duration-300"
                    style={{ maxHeight: isOpen ? 80 : 0, paddingBottom: isOpen ? 16 : 0 }}
                  >
                    <p className="font-body text-sm text-[var(--color-ink-dim)]">{d.body}</p>
                  </div>
                </PaperCard>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
