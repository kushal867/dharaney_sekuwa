import { useState } from "react";
import { restaurant } from "../data/restaurant";
import PaperCard from "./PaperCard";

export default function LocationSection() {
  const [showDirections, setShowDirections] = useState(false);

  return (
    <section id="location" className="paper-grain relative bg-[var(--color-cream)] px-6 py-24 md:px-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-5xl leading-[0.95] text-[var(--color-ink)] md:text-6xl">
          COME FIND <span className="text-[var(--color-red)]">US.</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <PaperCard torn rotate={-1} className="px-6 py-6">
            <p className="font-body text-[10px] font-bold tracking-[0.15em] text-[var(--color-ink-dim)]">ADDRESS</p>
            <p className="font-display mt-2 text-xl text-[var(--color-ink)]">{restaurant.name}</p>
            <p className="font-body text-sm text-[var(--color-ink-dim)]">{restaurant.location.address}</p>
          </PaperCard>

          <PaperCard torn rotate={0.5} className="px-6 py-6">
            <p className="font-body text-[10px] font-bold tracking-[0.15em] text-[var(--color-ink-dim)]">HOURS</p>
            {restaurant.location.hours.map((h) => (
              <div key={h.day} className="mt-2 flex justify-between font-body text-sm text-[var(--color-ink)]">
                <span>{h.day}</span>
                <span className="text-[var(--color-ink-dim)]">{h.time}</span>
              </div>
            ))}
          </PaperCard>

          <PaperCard torn rotate={1.5} className="px-6 py-6">
            <p className="font-body text-[10px] font-bold tracking-[0.15em] text-[var(--color-ink-dim)]">CONTACT</p>
            <p className="font-display mt-2 text-xl text-[var(--color-ink)]">{restaurant.location.phone}</p>
            <button
              data-cursor="COME IN"
              onClick={() => setShowDirections(true)}
              className="mt-4 flex items-center gap-2 rounded-md bg-[var(--color-red)] px-4 py-2 font-body text-sm font-semibold text-[var(--color-cream)] transition-colors hover:bg-[var(--color-red-dark)]"
            >
              GET DIRECTIONS →
            </button>
          </PaperCard>
        </div>
      </div>

      {showDirections && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 px-6" onClick={() => setShowDirections(false)}>
          <PaperCard rotate={0} className="max-w-sm px-8 py-8 text-center" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            <p className="font-body text-[10px] font-bold tracking-[0.15em] text-[var(--color-red)]">DUMMY PROTOTYPE</p>
            <p className="font-body mt-3 text-sm text-[var(--color-ink-dim)]">
              This is a frontend-only demo — directions aren't wired to a real map yet. Replace this with
              a live maps link once the real address is confirmed.
            </p>
            <button
              onClick={() => setShowDirections(false)}
              className="font-body mt-6 text-sm font-semibold text-[var(--color-ink)] underline"
            >
              CLOSE
            </button>
          </PaperCard>
        </div>
      )}
    </section>
  );
}
