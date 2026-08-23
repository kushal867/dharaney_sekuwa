import { useState } from "react";
import MediaSlot from "./MediaSlot";
import { media } from "../data/media";

const levels = ["JUST LOOKING", "A LITTLE HUNGRY", "HUNGRY", "VERY HUNGRY", "I NEED SEKUWA NOW."];

export default function HungerSlider() {
  const [level, setLevel] = useState(0);
  const maxed = level === levels.length - 1;

  return (
    <section className="relative overflow-hidden bg-[var(--color-charcoal)] px-6 py-24 md:px-10">
      <div className="pointer-events-none absolute inset-0" style={{ opacity: 0.15 + level * 0.13 }}>
        <MediaSlot asset={media.hungerBg} />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(0deg, var(--color-charcoal) 10%, transparent 60%)" }}
      />

      <div className="relative mx-auto max-w-xl text-center">
        <p className="font-body text-xs font-semibold tracking-[0.2em] text-[var(--color-orange)]">
          HOW HUNGRY ARE YOU?
        </p>

        <h2
          className="font-display mt-6 text-[11vw] leading-none transition-colors md:text-6xl"
          style={{ color: maxed ? "var(--color-red)" : "var(--color-cream)" }}
        >
          {levels[level]}
        </h2>

        <input
          type="range"
          min={0}
          max={levels.length - 1}
          step={1}
          value={level}
          onChange={(e) => setLevel(Number(e.target.value))}
          className="hunger-slider mt-10 w-full"
          aria-label="How hungry are you?"
        />
        <div className="mt-2 flex justify-between font-body text-[10px] font-semibold tracking-[0.1em] text-[var(--color-cream)]/40">
          <span>NOT REALLY</span>
          <span>STARVING</span>
        </div>

        <div
          className="overflow-hidden transition-all duration-500"
          style={{ maxHeight: maxed ? 120 : 0, marginTop: maxed ? 24 : 0 }}
        >
          <p className="font-display text-2xl text-[var(--color-cream)]">OKAY. STOP SCROLLING.</p>
          <p className="font-hand mt-1 text-3xl text-[var(--color-red)]">Come eat.</p>
        </div>
      </div>

      <style>{`
        .hunger-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 6px;
          border-radius: 999px;
          background: rgba(244,234,217,0.2);
          outline: none;
        }
        .hunger-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 999px;
          background: var(--color-red);
          border: 3px solid var(--color-cream);
          cursor: pointer;
        }
        .hunger-slider::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 999px;
          background: var(--color-red);
          border: 3px solid var(--color-cream);
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}
