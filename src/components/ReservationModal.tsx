import { useState } from "react";
import PaperCard from "./PaperCard";

export type ModalMode = "order" | "reserve" | null;

export default function ReservationModal({ mode, onClose }: { mode: ModalMode; onClose: () => void }) {
  const [guests, setGuests] = useState(2);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ date: "", time: "", name: "", phone: "" });

  if (!mode) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const close = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm({ date: "", time: "", name: "", phone: "" });
      setGuests(2);
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 px-6" onClick={close}>
      <PaperCard
        rotate={0}
        className="relative w-full max-w-md px-8 py-9 md:px-10 md:py-10"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <button
          data-cursor="LOOK"
          onClick={close}
          className="font-body absolute right-6 top-6 text-sm font-semibold text-[var(--color-ink-dim)] hover:text-[var(--color-red)]"
        >
          CLOSE
        </button>

        {submitted ? (
          <div className="py-10 text-center">
            <p className="font-display text-3xl text-[var(--color-ink)]">Your table is waiting.</p>
            <p className="font-hand mt-3 text-2xl text-[var(--color-red)]">See you by the fire ♥</p>
            <p className="font-body mt-4 text-[10px] font-semibold tracking-[0.15em] text-[var(--color-ink-dim)]">
              FRONTEND PROTOTYPE — NO REAL RESERVATION WAS MADE
            </p>
          </div>
        ) : (
          <form onSubmit={submit}>
            <p className="font-body text-[10px] font-bold tracking-[0.15em] text-[var(--color-red)]">
              {mode === "order" ? "ORDER NOW" : "RESERVE A TABLE"}
            </p>
            <h3 className="font-display mb-7 mt-1 text-3xl text-[var(--color-ink)]">
              {mode === "order" ? "Get your sekuwa" : "Come by the fire"}
            </h3>

            <label className="mb-5 block">
              <span className="font-body mb-2 block text-[10px] font-bold tracking-[0.12em] text-[var(--color-ink-dim)]">
                HOW MANY PEOPLE?
              </span>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setGuests((g) => Math.max(1, g - 1))}
                  className="h-9 w-9 rounded-full border-2 border-[var(--color-ink)]/20 font-display text-lg text-[var(--color-ink)] hover:border-[var(--color-red)]"
                >
                  −
                </button>
                <span className="font-display w-8 text-center text-xl text-[var(--color-ink)]">{guests}</span>
                <button
                  type="button"
                  onClick={() => setGuests((g) => Math.min(20, g + 1))}
                  className="h-9 w-9 rounded-full border-2 border-[var(--color-ink)]/20 font-display text-lg text-[var(--color-ink)] hover:border-[var(--color-red)]"
                >
                  +
                </button>
              </div>
            </label>

            <div className="mb-5 grid grid-cols-2 gap-4">
              <label className="block">
                <span className="font-body mb-2 block text-[10px] font-bold tracking-[0.12em] text-[var(--color-ink-dim)]">
                  DATE
                </span>
                <input
                  required
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full rounded-md border-2 border-[var(--color-ink)]/15 bg-transparent px-3 py-2 font-body text-sm text-[var(--color-ink)] outline-none focus:border-[var(--color-red)]"
                />
              </label>
              <label className="block">
                <span className="font-body mb-2 block text-[10px] font-bold tracking-[0.12em] text-[var(--color-ink-dim)]">
                  TIME
                </span>
                <input
                  required
                  type="time"
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className="w-full rounded-md border-2 border-[var(--color-ink)]/15 bg-transparent px-3 py-2 font-body text-sm text-[var(--color-ink)] outline-none focus:border-[var(--color-red)]"
                />
              </label>
            </div>

            <label className="mb-5 block">
              <span className="font-body mb-2 block text-[10px] font-bold tracking-[0.12em] text-[var(--color-ink-dim)]">
                NAME
              </span>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full rounded-md border-2 border-[var(--color-ink)]/15 bg-transparent px-3 py-2 font-body text-sm text-[var(--color-ink)] outline-none placeholder:text-[var(--color-ink)]/30 focus:border-[var(--color-red)]"
              />
            </label>

            <label className="mb-7 block">
              <span className="font-body mb-2 block text-[10px] font-bold tracking-[0.12em] text-[var(--color-ink-dim)]">
                PHONE
              </span>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="98XXXXXXXX"
                className="w-full rounded-md border-2 border-[var(--color-ink)]/15 bg-transparent px-3 py-2 font-body text-sm text-[var(--color-ink)] outline-none placeholder:text-[var(--color-ink)]/30 focus:border-[var(--color-red)]"
              />
            </label>

            <button
              data-cursor="COME IN"
              type="submit"
              className="w-full rounded-md bg-[var(--color-red)] py-3 font-body text-sm font-semibold text-[var(--color-cream)] transition-colors hover:bg-[var(--color-red-dark)]"
            >
              {mode === "order" ? "PLACE ORDER" : "RESERVE TABLE"}
            </button>
          </form>
        )}
      </PaperCard>
    </div>
  );
}
