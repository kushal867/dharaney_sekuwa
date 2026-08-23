import MediaSlot from "./MediaSlot";
import { media } from "../data/media";
import { restaurant } from "../data/restaurant";

export default function StorySection() {
  return (
    <section id="story" className="paper-grain relative bg-[var(--color-cream)] px-6 py-24 md:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[320px_1fr] lg:gap-10">
        <div>
          <div className="flex items-center gap-2 text-[var(--color-red)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8Z" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="10" r="2.5" fill="currentColor" />
            </svg>
            <svg width="90" height="14" viewBox="0 0 90 14" fill="none">
              <path d="M2 7 Q 25 -4, 45 7 T 88 7" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </div>
          <h2 className="font-display mt-3 text-5xl leading-[0.92] text-[var(--color-ink)] md:text-6xl">
            DHARAN
            <br />
            TO
            <br />
            <span className="text-[var(--color-red)]">LALITPUR</span>
          </h2>
          <p className="font-hand mt-4 text-2xl text-[var(--color-red)]">
            Same flavour. New memories.
          </p>
          <button
            data-cursor="LOOK"
            className="mt-6 rounded-md border-2 border-[var(--color-ink)]/25 px-5 py-2.5 font-body text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]"
          >
            OUR STORY →
          </button>

          <div className="mt-8 space-y-5">
            {restaurant.story.map((s) => (
              <div key={s.heading}>
                <p className="font-body text-[10px] font-bold tracking-[0.15em] text-[var(--color-ink-dim)]">
                  {s.heading}
                </p>
                <p className="font-body mt-1 text-sm text-[var(--color-ink-dim)]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* people collage */}
        <div>
          <h3 className="font-display text-2xl text-[var(--color-ink)]">THE HANDS BEHIND THE GRILL</h3>
          <p className="font-body mt-1 max-w-sm text-sm text-[var(--color-ink-dim)]">
            Passion, tradition and years of experience. That's what you taste in every bite.
          </p>
          <p className="font-hand mt-1 text-lg text-[var(--color-red)]">— Dharane Sekuwa</p>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <div data-cursor="LOOK" className="col-span-2 aspect-[4/5] overflow-hidden rounded-xl">
              <MediaSlot asset={media.chef} />
            </div>
            <div className="flex flex-col gap-3">
              <div data-cursor="LOOK" className="aspect-square overflow-hidden rounded-xl">
                <MediaSlot asset={media.hands} />
              </div>
              <div data-cursor="LOOK" className="aspect-square overflow-hidden rounded-xl">
                <MediaSlot asset={media.serving} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
