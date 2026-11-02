"use client";

import { useEffect, useRef } from "react";

const FPS = 25;
const pad = (n: number) => String(n).padStart(2, "0");

// SMPTE-style running timecode for the showreel overlay.
export function Timecode() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const frames = Math.floor(((now - start) / 1000) * FPS);
      const f = frames % FPS;
      const s = Math.floor(frames / FPS) % 60;
      const m = Math.floor(frames / (FPS * 60)) % 60;
      const h = Math.floor(frames / (FPS * 3600));
      el.textContent = `${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <span ref={ref} className="tabular-nums">
      00:00:00:00
    </span>
  );
}
