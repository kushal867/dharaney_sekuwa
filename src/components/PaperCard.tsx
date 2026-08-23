import type { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  rotate?: number;
  pinned?: boolean;
  torn?: boolean;
}

// The recurring physical object of this design: a cream paper card, very
// slightly rotated, sometimes pinned, sometimes torn at the edges.
export default function PaperCard({ children, className = "", rotate = 0, pinned, torn, style, ...rest }: Props) {
  return (
    <div
      className={`relative bg-[var(--color-paper)] shadow-[0_14px_30px_rgba(36,31,27,0.18)] ${torn ? "torn-edge" : ""} ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
      {...rest}
    >
      {pinned && <div className="pin-dot" />}
      {children}
    </div>
  );
}
