"use client";

import { useEffect, useRef } from "react";

const clock = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Ulaanbaatar",
  hour: "2-digit",
  minute: "2-digit",
});

// The studio's wall clock in Ulaanbaatar. Filled in after hydration so the
// server render never depends on the current time.
export function LocalTime() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const render = () => {
      el.textContent = clock.format(new Date());
    };
    render();
    const id = setInterval(render, 10_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span ref={ref} className="tabular-nums">
      --:--
    </span>
  );
}
