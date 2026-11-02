import { clients } from "@/lib/data";
import { cn } from "@/lib/cn";
import { Eyebrow } from "./ui";

// Alternating type treatments so the plain names read like a logo wall.
const styles = [
  "font-sans font-semibold tracking-[-0.04em]",
  "font-serif italic text-[1.15em]",
  "font-mono uppercase tracking-[0.12em] text-[0.7em]",
];

export function ClientMarquee() {
  const row = [...clients, ...clients];
  return (
    <section
      aria-label="Хамтран ажилласан брэндүүд"
      className="mt-20 border-y border-line py-10 md:mt-28 md:py-14"
    >
      <div className="shell">
        <Eyebrow>Бидэнд итгэсэн брэндүүд</Eyebrow>
      </div>
      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <ul className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
          {row.map((name, i) => (
            <li
              key={i}
              aria-hidden={i >= clients.length}
              className={cn(
                "flex items-center px-7 text-2xl whitespace-nowrap text-white/40 transition-colors hover:text-white md:px-12 md:text-4xl",
                styles[i % styles.length],
              )}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
