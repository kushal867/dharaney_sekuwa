import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

export function getLenis() {
  return lenisInstance;
}

export function useSmoothScroll() {
  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;

    const lenis = new Lenis({
      duration: isCoarse ? 0.9 : 1.15,
      smoothWheel: true,
      touchMultiplier: isCoarse ? 1.6 : 1,
    });
    lenisInstance = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
}
