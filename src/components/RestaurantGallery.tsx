import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MediaSlot from "./MediaSlot";
import { galleryMedia } from "../data/media";

gsap.registerPlugin(ScrollTrigger);

export default function RestaurantGallery() {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const scrollAmount = track.scrollWidth - window.innerWidth;
      gsap.to(track, {
        x: -Math.max(scrollAmount, 0),
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: () => `+=${scrollAmount}`,
          scrub: 0.6,
          pin: true,
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={rootRef} className="relative h-[100svh] overflow-hidden bg-[var(--color-charcoal)] pt-16">
      <div className="absolute left-6 top-20 z-20 md:left-10">
        <h2 className="font-display text-3xl text-[var(--color-cream)] md:text-4xl">THE RESTAURANT</h2>
        <p className="font-hand text-lg text-[var(--color-orange)]">come take a look around</p>
      </div>
      <div ref={trackRef} className="flex h-full items-center gap-5 px-[8vw] will-change-transform">
        {galleryMedia.map((g, i) => (
          <div
            key={g.caption}
            data-cursor="LOOK"
            className="relative h-[58vh] w-[46vw] flex-shrink-0 overflow-hidden rounded-2xl md:w-[24vw]"
            style={{ transform: i % 2 === 1 ? "translateY(-3%) rotate(-1deg)" : "translateY(3%) rotate(1deg)" }}
          >
            <MediaSlot asset={g} />
            <div className="font-hand absolute -bottom-1 left-4 rounded-t-md bg-[var(--color-cream)] px-3 py-1 text-lg text-[var(--color-ink)] shadow-[0_-4px_10px_rgba(0,0,0,0.2)]">
              {g.caption}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
