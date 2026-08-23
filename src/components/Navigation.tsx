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
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-[var(--color-charcoal)] px-5 py-4 md:px-8">
        <button onClick={() => go("hero")} className="text-left">
          <span className="font-display block text-lg leading-[0.85] tracking-wide text-[var(--color-cream)]">
            DHARANE
          </span>
          <span className="font-display block text-lg leading-[0.85] tracking-wide text-[var(--color-cream)]">
            SEKUWA
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

        <div className="flex items-center gap-3">
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
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
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
        <ul className="mx-auto flex w-full max-w-xl flex-col gap-1 px-8">
          {links.map((l, i) => (
            <li key={l.id} className="border-b-2 border-dashed border-[var(--color-ink)]/20">
              <button
                data-cursor="LOOK"
                onClick={() => go(l.id)}
                className="group flex w-full items-baseline justify-between py-5 text-left"
                style={{
                  transitionProperty: "transform, opacity",
                  transitionDuration: "0.5s",
                  transitionDelay: open ? `${i * 60}ms` : "0ms",
                  transform: open ? "translateX(0)" : "translateX(-16px)",
                  opacity: open ? 1 : 0,
                }}
              >
                <span className="font-display text-5xl tracking-wide text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-red)] md:text-6xl">
                  {l.label}
                </span>
                <span className="font-hand text-2xl text-[var(--color-red)]">→</span>
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
          className="mx-auto mt-10 rounded-md bg-[var(--color-red)] px-8 py-3 font-body font-semibold text-[var(--color-cream)]"
        >
          ORDER NOW
        </button>
      </div>
    </>
  );
}
