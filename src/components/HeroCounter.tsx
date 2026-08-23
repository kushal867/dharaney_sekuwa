import MediaSlot from "./MediaSlot";
import PaperCard from "./PaperCard";
import { media } from "../data/media";
import { restaurant } from "../data/restaurant";
import { getLenis } from "../hooks/useSmoothScroll";

export default function HeroCounter() {
  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) getLenis()?.scrollTo(el, { duration: 1.3, offset: -20 });
  };

  return (
    <section id="hero" className="relative h-[100svh] w-full overflow-hidden bg-[var(--color-charcoal)] pt-16">
      <MediaSlot asset={media.heroCounter} />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(100deg, rgba(36,31,27,0.75) 0%, rgba(36,31,27,0.25) 45%, rgba(36,31,27,0.05) 70%)" }}
      />

      {/* the ticket, pinned to the counter */}
      <div className="absolute left-5 top-24 z-10 w-[86%] max-w-sm md:left-12 md:top-28">
        <PaperCard rotate={-1.5} pinned className="px-7 py-8">
          <h1 className="font-display text-4xl leading-[0.9] text-[var(--color-ink)] md:text-5xl">
            DHARANE
          </h1>
          <h1 className="font-display text-4xl leading-[0.9] text-[var(--color-red)] md:text-5xl">
            SEKUWA
          </h1>
          <p className="font-body mt-3 text-xs font-semibold tracking-[0.15em] text-[var(--color-ink-dim)]">
            {restaurant.area}, {restaurant.region}
          </p>

          <p className="font-hand mt-5 text-2xl text-[var(--color-red)]">{restaurant.tagline}</p>
          <p className="font-body mt-1 text-xs font-semibold tracking-[0.1em] text-[var(--color-ink-dim)]">
            FIRE &nbsp;•&nbsp; FLAVOUR &nbsp;•&nbsp; MEMORIES
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              data-cursor="LOOK"
              onClick={() => go("menu")}
              className="flex items-center gap-2 rounded-md bg-[var(--color-red)] px-5 py-2.5 font-body text-sm font-semibold text-[var(--color-cream)] transition-colors hover:bg-[var(--color-red-dark)]"
            >
              SEE THE MENU →
            </button>
            <button
              data-cursor="LOOK"
              onClick={() => go("location")}
              className="rounded-md border-2 border-[var(--color-ink)]/25 px-5 py-2.5 font-body text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]"
            >
              FIND US
            </button>
          </div>
        </PaperCard>
      </div>

      {/* stamp */}
      <div className="stamp-rotate absolute right-6 top-24 z-10 hidden h-28 w-28 items-center justify-center rounded-full border-2 border-dashed border-[var(--color-cream)]/70 text-center sm:flex md:right-12 md:top-28">
        <span className="font-display text-[10px] leading-tight text-[var(--color-cream)]">
          MADE
          <br />
          OVER
          <br />
          CHARCOAL
        </span>
      </div>

      {/* open-today ticket */}
      <div className="absolute bottom-8 right-5 z-10 md:right-12">
        <PaperCard rotate={1} className="px-4 py-3">
          <p className="font-body text-[10px] font-bold tracking-[0.12em] text-[var(--color-ink-dim)]">
            OPEN TODAY
          </p>
          <p className="font-display text-base text-[var(--color-ink)]">{restaurant.openToday}</p>
        </PaperCard>
      </div>
    </section>
  );
}
