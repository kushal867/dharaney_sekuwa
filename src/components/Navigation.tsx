import { useState } from "react";
import { getLenis } from "../hooks/useSmoothScroll";
import type { ModalMode } from "./ReservationModal";

const links = [
  { label: "MENU", id: "menu" },
  { label: "STORY", id: "story" },
  { label: "EXPERIENCE", id: "experience" },
  { label: "VISIT", id: "location" },
];

export default function Navigation({ onOpenModal }: { onOpenModal: (mode: ModalMode) => void }) {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) getLenis()?.scrollTo(el, { duration: 1.3, offset: -20 });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-3 bg-[var(--color-charcoal)] px-4 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.25)] sm:px-5 sm:py-4 md:px-8">
        <button onClick={() => go("hero")} className="group flex flex-shrink-0 items-center gap-3.5 text-left sm:gap-4">
          <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[var(--color-red)] transition-transform group-hover:scale-125" />
          <span>
            <span className="font-display block text-base leading-[0.82] tracking-[0.02em] text-[var(--color-cream)] sm:text-lg">
              DHARANE
            </span>
            <span className="font-display block text-base leading-[0.82] tracking-[0.02em] text-[var(--color-red)] sm:text-lg">
              SEKUWA
            </span>
          </span>
        </button>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                data-cursor="LOOK"
                onClick={() => go(l.id)}
                className="font-body text-sm font-medium tracking-wide text-[var(--color-cream)]/85 transition-colors hover:text-[var(--color-orange)]"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex flex-shrink-0 items-center gap-2 sm:gap-3">
          <button
            data-cursor="COME IN"
            onClick={() => onOpenModal("order")}
            aria-label="Order now"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-red)] text-[var(--color-cream)] transition-colors hover:bg-[var(--color-red-dark)] sm:hidden"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 6h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <button
            data-cursor="COME IN"
            onClick={() => onOpenModal("order")}
            className="hidden items-center gap-2 rounded-md bg-[var(--color-red)] px-4 py-2 font-body text-sm font-semibold text-[var(--color-cream)] transition-colors hover:bg-[var(--color-red-dark)] sm:flex"
          >
            ORDER NOW
          </button>
          <button
            data-cursor="LOOK"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="flex h-9 w-9 flex-shrink-0 flex-col items-center justify-center gap-[5px]"
          >
            <span className={`h-[2px] w-5 bg-[var(--color-cream)] transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-[2px] w-5 bg-[var(--color-cream)] transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-[2px] w-5 bg-[var(--color-cream)] transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* fullscreen menu — feels like opening a physical restaurant menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-[var(--color-cream)] paper-grain transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="mx-auto flex w-full max-w-xl flex-col gap-1 px-6 sm:px-8">
          {links.map((l, i) => (
            <li key={l.id} className="border-b-2 border-dashed border-[var(--color-ink)]/20">
              <button
                data-cursor="LOOK"
                onClick={() => go(l.id)}
                className="group flex w-full items-baseline justify-between gap-3 py-4 text-left sm:py-5"
                style={{
                  transitionProperty: "transform, opacity",
                  transitionDuration: "0.5s",
                  transitionDelay: open ? `${i * 60}ms` : "0ms",
                  transform: open ? "translateX(0)" : "translateX(-16px)",
                  opacity: open ? 1 : 0,
                }}
              >
                <span className="font-display text-4xl tracking-wide text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-red)] sm:text-5xl md:text-6xl">
                  {l.label}
                </span>
                <span className="font-hand flex-shrink-0 text-2xl text-[var(--color-red)]">→</span>
              </button>
            </li>
          ))}
        </ul>
        <button
          data-cursor="COME IN"
          onClick={() => {
            setOpen(false);
            onOpenModal("order");
          }}
          className="mx-auto mt-8 rounded-md bg-[var(--color-red)] px-8 py-3 font-body font-semibold text-[var(--color-cream)] sm:mt-10"
        >
          ORDER NOW
        </button>
      </div>
    </>
  );
}
