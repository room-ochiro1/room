"use client";

import { useEffect, useRef } from "react";

// Renders the final number on the server; once hydrated, numbers that are
// still below the fold reset to zero and count up when scrolled into view.
export function CountUp({
  value,
  decimals = 0,
}: {
  value: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const render = (n: number) => {
      el.textContent = n.toFixed(decimals);
    };
    let raf = 0;
    let armed = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          if (!armed) {
            armed = true;
            render(0);
          }
          return;
        }
        observer.disconnect();
        if (!armed) return;

        const start = performance.now();
        const duration = 1800;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          render(value * (1 - Math.pow(1 - t, 4)));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, decimals]);

  return (
    <span ref={ref} className="tabular-nums">
      {value.toFixed(decimals)}
    </span>
  );
}
