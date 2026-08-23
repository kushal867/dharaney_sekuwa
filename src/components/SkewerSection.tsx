import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MediaSlot from "./MediaSlot";
import PaperCard from "./PaperCard";
import { media } from "../data/media";

gsap.registerPlugin(ScrollTrigger);

// The signature interaction, reskinned around a physical object: scroll
// scrubs a real close-up video of a skewer of sekuwa, pieces separating,
// until one lands on a plate. No fake slicing — the motion lives in the
// footage; scroll only drives its playback position.
export default function SkewerSection() {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const plateRef = useRef<HTMLDivElement>(null);
  const durationRef = useRef(0);
  const [progressPct, setProgressPct] = useState(0);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onMeta = () => (durationRef.current = v.duration || 0);
    v.addEventListener("loadedmetadata", onMeta);
    return () => v.removeEventListener("loadedmetadata", onMeta);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(plateRef.current, { opacity: 0, y: 24, rotate: 6 });

      ScrollTrigger.create({
        trigger: rootRef.current,
        start: "top top",
        end: "+=160%",
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const p = self.progress;
          setProgressPct(Math.round(p * 100));
          const v = videoRef.current;
          if (v && durationRef.current) v.currentTime = p * durationRef.current;
          gsap.to(plateRef.current, {
            opacity: p > 0.75 ? (p - 0.75) / 0.25 : 0,
            y: p > 0.75 ? 0 : 24,
            rotate: p > 0.75 ? -3 : 6,
            duration: 0.1,
            overwrite: true,
          });
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="paper-grain relative h-[100svh] w-full overflow-hidden bg-[var(--color-cream)] pt-16">
      <div className="mx-auto flex h-full max-w-6xl flex-col justify-center gap-8 px-6 md:px-10">
        <div className="max-w-md">
          <h2 className="font-display text-5xl leading-[0.9] text-[var(--color-ink)] md:text-6xl">
            STRAIGHT
            <br />
            FROM
            <br />
            THE <span className="text-[var(--color-red)]">GRILL</span>
          </h2>
          <p className="font-body mt-4 max-w-xs text-sm text-[var(--color-ink-dim)]">
            Every piece is marinated with our secret blend and grilled to perfection.
          </p>
          <div className="mt-5 flex items-center gap-3 text-[var(--color-red)]">
            <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
              <rect x="1" y="1" width="18" height="28" rx="9" stroke="currentColor" strokeWidth="2" />
              <circle cx="10" cy="9" r="2" fill="currentColor" />
            </svg>
            <span className="font-hand text-2xl">Scroll &amp; explore →</span>
          </div>
        </div>

        <div className="torn-edge relative h-[38vh] w-full overflow-hidden md:h-[42vh]">
          <MediaSlot ref={videoRef} asset={media.skewer} muted />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "linear-gradient(0deg, rgba(36,31,27,0.35) 0%, transparent 30%)" }}
          />
          <span className="font-body absolute bottom-3 left-4 text-[10px] font-semibold tracking-[0.15em] text-[var(--color-cream)]/80">
            {String(progressPct).padStart(3, "0")}%
          </span>
        </div>
      </div>

      <div ref={plateRef} className="absolute bottom-8 right-6 z-10 md:bottom-10 md:right-14">
        <PaperCard className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-[var(--color-charcoal)]/10 md:h-28 md:w-28">
          <span className="font-hand text-center text-lg leading-tight text-[var(--color-ink)]">
            fresh off
            <br />
            the fire
          </span>
        </PaperCard>
      </div>
    </div>
  );
}
