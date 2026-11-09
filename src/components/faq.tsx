import type { Dictionary } from "@/dictionaries";
import { SectionHeading } from "./ui";

export function Faq({ t }: { t: Dictionary["faq"] }) {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading index="06" label={t.label} title={t.title} />

        <div className="mt-16 md:mt-24 lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="border-b-2 border-ink lg:col-span-8 lg:col-start-5">
            {t.items.map((item, i) => (
              <details
                key={item.q}
                name="faq"
                className="group border-t border-ink first:border-t-2"
              >
                <summary className="grid cursor-pointer grid-cols-[2.25rem_1fr_auto] items-baseline gap-3 py-5 md:grid-cols-[3rem_1fr_auto] md:py-7">
                  <span className="font-mono text-xs text-ink/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl leading-snug font-semibold text-balance transition-colors group-hover:text-signal md:text-2xl">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className="relative flex size-4 items-center justify-center self-center"
                  >
                    <span className="absolute h-0.5 w-full bg-ink" />
                    <span className="absolute h-full w-0.5 bg-ink transition-transform duration-300 group-open:scale-y-0" />
                  </span>
                </summary>
                <p className="max-w-2xl pr-8 pb-7 pl-[calc(2.25rem+0.75rem)] text-lg leading-relaxed text-pretty text-ink/70 md:pl-[calc(3rem+0.75rem)]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
