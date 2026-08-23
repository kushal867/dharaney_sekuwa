import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [moved, setMoved] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    document.documentElement.classList.add("cursor-ready");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let lx = mx;
    let ly = my;
    let hasMoved = false;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      }
      const target = (e.target as HTMLElement)?.closest("[data-cursor]") as HTMLElement | null;
      setLabel(target?.getAttribute("data-cursor") || "");
      if (!hasMoved) {
        hasMoved = true;
        setMoved(true);
      }
    };

    let raf = 0;
    const loop = () => {
      lx += (mx - lx) * 0.22;
      ly += (my - ly) * 0.22;
      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${lx}px, ${ly}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("cursor-ready");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-[var(--color-red)] transition-opacity duration-200 ${
          moved ? "opacity-100" : "opacity-0"
        }`}
        style={{ willChange: "transform" }}
      />
      {label && (
        <div
          ref={labelRef}
          className="pointer-events-none fixed left-0 top-0 z-[100] flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-charcoal)] shadow-[0_4px_10px_rgba(0,0,0,0.35)]"
          style={{ willChange: "transform" }}
        >
          <span className="font-display text-[10px] tracking-[0.08em] text-[var(--color-cream)]">
            {label}
          </span>
        </div>
      )}
    </>
  );
}
