import type { SVGProps } from "react";

// Grease-pencil marks drawn over the layout. Every path uses pathLength=1 so
// globals.css can draw it in with the --undrawn property; add `scribble` plus
// one of `scribble-load`, `scribble-scroll` or `scribble-toggle`.
type ScribbleProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function Underline(props: ScribbleProps) {
  return (
    <svg viewBox="0 0 300 26" strokeWidth={4} {...base} {...props}>
      <path pathLength={1} d="M3 15C58 8 136 5 196 7c48 2 84 6 101 3" />
      <path pathLength={1} d="M24 21c64-6 150-8 238-4" />
    </svg>
  );
}

export function Loop(props: ScribbleProps) {
  return (
    <svg
      viewBox="0 0 300 100"
      preserveAspectRatio="none"
      strokeWidth={3}
      {...base}
      {...props}
    >
      <path
        pathLength={1}
        d="M46 20C110 4 240 2 282 30c24 18 10 52-68 62-64 8-154 4-188-16C-2 58 14 26 92 14c38-6 98-6 132-2"
      />
    </svg>
  );
}

export function Arrow(props: ScribbleProps) {
  return (
    <svg viewBox="0 0 100 70" strokeWidth={3} {...base} {...props}>
      <path pathLength={1} d="M6 6c8 32 38 54 82 52" />
      <path pathLength={1} d="M74 46l15 12-17 9" />
    </svg>
  );
}

export function Cross(props: ScribbleProps) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={2.5} {...base} {...props}>
      <path pathLength={1} d="M5 5.5c4 4 9.5 9.5 14 14" />
      <path pathLength={1} d="M18.5 4.5c-4.5 5.5-9 9.5-13 14.5" />
    </svg>
  );
}
