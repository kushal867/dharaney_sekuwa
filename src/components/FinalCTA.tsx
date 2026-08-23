import { restaurant } from "../data/restaurant";
import type { ModalMode } from "./ReservationModal";

export default function FinalCTA({ onOpenModal }: { onOpenModal: (mode: ModalMode) => void }) {
  return (
    <section className="paper-grain relative flex min-h-[70svh] flex-col items-center justify-center bg-[var(--color-cream)] px-6 py-24 text-center">
      <p className="font-hand text-2xl text-[var(--color-red)]">the fire's already going</p>
      <h2 className="font-display mt-2 text-[13vw] leading-[0.9] text-[var(--color-ink)] md:text-7xl">
        SEKUWA
      </h2>
      <h2 className="font-display text-[13vw] leading-[0.9] text-[var(--color-red)] md:text-7xl">
        IS WAITING.
      </h2>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <button
          data-cursor="COME IN"
          onClick={() => onOpenModal("reserve")}
          className="rounded-md bg-[var(--color-red)] px-6 py-3 font-body text-sm font-semibold text-[var(--color-cream)] transition-colors hover:bg-[var(--color-red-dark)]"
        >
          VISIT US →
        </button>
        <button
          data-cursor="COME IN"
          onClick={() => onOpenModal("order")}
          className="rounded-md border-2 border-[var(--color-ink)]/25 px-6 py-3 font-body text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]"
        >
          ORDER →
        </button>
        <a
          data-cursor="COME IN"
          href={`tel:${restaurant.location.phone.replace(/[^+\d]/g, "")}`}
          className="rounded-md border-2 border-[var(--color-ink)]/25 px-6 py-3 font-body text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]"
        >
          CALL →
        </a>
      </div>

      <p className="font-body mt-12 text-xs font-semibold tracking-[0.15em] text-[var(--color-ink-dim)]">
        {restaurant.name} · {restaurant.area}, {restaurant.region}
      </p>
    </section>
  );
}
