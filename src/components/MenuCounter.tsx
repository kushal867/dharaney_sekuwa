import { useState } from "react";
import { menuItems } from "../data/menu";
import MediaSlot from "./MediaSlot";
import PaperCard from "./PaperCard";
import type { ModalMode } from "./ReservationModal";

interface ReceiptLine {
  id: string;
  name: string;
  price: number;
  qty: number;
}

export default function MenuCounter({ onOpenModal }: { onOpenModal: (mode: ModalMode) => void }) {
  const [active, setActive] = useState(0);
  const [receipt, setReceipt] = useState<ReceiptLine[]>([]);
  const item = menuItems[active];

  const addToTable = () => {
    setReceipt((prev) => {
      const existing = prev.find((l) => l.id === item.id);
      if (existing) {
        return prev.map((l) => (l.id === item.id ? { ...l, qty: l.qty + 1 } : l));
      }
      return [...prev, { id: item.id, name: `${item.category} SEKUWA`, price: item.price, qty: 1 }];
    });
  };

  const total = receipt.reduce((sum, l) => sum + l.price * l.qty, 0);

  return (
    <section id="menu" className="paper-grain relative bg-[var(--color-cream)] px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-5xl leading-[0.95] text-[var(--color-ink)] md:text-6xl">
          WHAT'S
          <br />
          ON THE <span className="text-[var(--color-red)]">SKEWER?</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr_260px] lg:gap-6">
          {/* menu strip */}
          <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col lg:gap-3 lg:overflow-visible">
            {menuItems.map((m, i) => {
              const isActive = i === active;
              return (
                <button
                  key={m.id}
                  data-cursor="ADD"
                  onClick={() => setActive(i)}
                  className="flex-shrink-0 text-left"
                  style={{ transform: `rotate(${isActive ? 0 : (i % 2 === 0 ? -1 : 1)}deg)` }}
                >
                  <PaperCard
                    torn
                    className={`flex min-w-[180px] items-center justify-between px-4 py-3 transition-shadow ${
                      isActive ? "shadow-[0_4px_18px_rgba(168,36,32,0.35)] ring-2 ring-[var(--color-red)]" : ""
                    }`}
                  >
                    <span className="font-body text-sm font-bold tracking-wide text-[var(--color-ink)]">
                      {m.index}&nbsp;&nbsp;{m.category} SEKUWA
                    </span>
                    {!isActive && <span className="font-hand text-lg text-[var(--color-red)]">→</span>}
                  </PaperCard>
                </button>
              );
            })}
          </div>

          {/* active dish */}
          <div>
            <div data-cursor="LOOK" className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl">
              <MediaSlot
                key={item.id}
                asset={{ src: item.image, kind: "image", label: `MENU — ${item.category} ${item.name}` }}
              />
              {item.bestSeller && (
                <div className="stamp-rotate absolute -right-2 -top-2 flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-[var(--color-red)] bg-[var(--color-cream)]">
                  <span className="font-display text-center text-[10px] leading-tight text-[var(--color-red)]">
                    BEST
                    <br />
                    SELLER
                  </span>
                </div>
              )}
            </div>

            <h3 className="font-display mt-5 text-3xl text-[var(--color-ink)]">
              {item.category} {item.name}
            </h3>
            <p className="font-body mt-2 max-w-md text-sm text-[var(--color-ink-dim)]">{item.description}</p>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              <span className="font-display text-2xl text-[var(--color-red)]">Rs. {item.price}</span>
              {!item.available && (
                <span className="font-body text-xs font-semibold tracking-wide text-[var(--color-ink-dim)]">
                  OFF THE GRILL TODAY
                </span>
              )}
              <button
                data-cursor="ADD"
                onClick={addToTable}
                disabled={!item.available}
                className="flex items-center gap-2 rounded-md bg-[var(--color-red)] px-5 py-2.5 font-body text-sm font-semibold text-[var(--color-cream)] transition-colors hover:bg-[var(--color-red-dark)] disabled:opacity-30"
              >
                ADD TO YOUR TABLE →
              </button>
            </div>
          </div>

          {/* receipt */}
          <div className="lg:pt-2">
            <PaperCard rotate={1.5} torn className="px-5 py-6 font-body">
              <p className="font-display text-center text-lg text-[var(--color-ink)]">YOUR TABLE</p>
              <p className="text-center text-[10px] tracking-[0.15em] text-[var(--color-ink-dim)]">
                #DharaneLovers
              </p>
              <div className="my-4 border-t border-dashed border-[var(--color-ink)]/30" />

              {receipt.length === 0 ? (
                <p className="font-hand text-center text-lg text-[var(--color-ink-dim)]">
                  nothing yet — pick something delicious
                </p>
              ) : (
                <div className="space-y-1.5">
                  {receipt.map((l) => (
                    <div key={l.id} className="flex justify-between text-sm text-[var(--color-ink)]">
                      <span>
                        {l.name} <span className="text-[var(--color-ink-dim)]">×{l.qty}</span>
                      </span>
                      <span>{l.price * l.qty}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="my-4 border-t border-dashed border-[var(--color-ink)]/30" />
              <div className="flex justify-between font-display text-lg text-[var(--color-ink)]">
                <span>TOTAL</span>
                <span>Rs. {total}</span>
              </div>

              {receipt.length > 0 && (
                <>
                  <p className="font-hand mt-4 text-center text-xl text-[var(--color-red)]">Thank You! ♥</p>
                  <button
                    data-cursor="COME IN"
                    onClick={() => onOpenModal("order")}
                    className="mt-4 w-full rounded-md bg-[var(--color-charcoal)] py-2.5 font-body text-sm font-semibold text-[var(--color-cream)]"
                  >
                    CHECKOUT →
                  </button>
                </>
              )}
            </PaperCard>
          </div>
        </div>
      </div>
    </section>
  );
}
