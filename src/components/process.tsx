import type { Dictionary } from "@/dictionaries";
import { processSteps } from "@/lib/data";
import { Label, labelStyle, SectionHeading } from "./ui";

// Days shown on the schedule; the ongoing last step runs off the edge.
const SCALE = 24;
const weeks = [0, 7, 14, 21];
const pct = (days: number) => `${(days / SCALE) * 100}%`;

// Each step starts once the previous one is done at its longest.
let cursor = 0;
const schedule = processSteps.map((step) => {
  const start = cursor;
  cursor += step.days ? step.days[1] : 0;
  return { ...step, start };
});

export function Process({ t }: { t: Dictionary["process"] }) {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading index="03" label={t.label} title={t.title} />

        <div
          aria-hidden
          className="mt-16 hidden border-b-2 border-ink pb-2 md:mt-24 lg:grid lg:grid-cols-12 lg:gap-12"
        >
          <Label className="col-span-5 text-ink/55">{t.stepColumn}</Label>
          <div className="relative col-span-7 h-4">
            {weeks.map((day) => (
              <span
                key={day}
                className={`${labelStyle} absolute top-0 border-l border-ink pl-1.5 text-ink/55`}
                style={{ left: pct(day) }}
              >
                {day === 0 ? t.start : t.day.replace("{n}", String(day))}
              </span>
            ))}
          </div>
        </div>

        <ol className="mt-16 border-t-2 border-ink md:mt-24 lg:mt-0 lg:border-t-0">
          {schedule.map((step) => {
            const copy = t.steps[step.id];
            return (
              <li
                key={step.id}
                className="reveal grid gap-5 border-b border-ink py-8 md:py-10 lg:grid-cols-12 lg:items-center lg:gap-12"
              >
                <div className="lg:col-span-5">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-ink/50">{step.step}</span>
                    <h3 className="headline text-[2.75rem] md:text-6xl">{copy.title}</h3>
                  </div>
                  <p className="mt-3 max-w-md text-lg leading-snug text-pretty text-ink/75">
                    {copy.description}
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <div aria-hidden className="relative h-10">
                    {weeks.map((day) => (
                      <span
                        key={day}
                        className="absolute inset-y-0 w-px bg-line"
                        style={{ left: pct(day) }}
                      />
                    ))}
                    {step.days ? (
                      <div
                        className="absolute inset-y-2 flex"
                        style={{ left: pct(step.start), width: pct(step.days[1]) }}
                      >
                        <span
                          className="bg-ink"
                          style={{ width: `${(step.days[0] / step.days[1]) * 100}%` }}
                        />
                        <span className="hatch flex-1 border border-l-0 border-ink text-ink/55" />
                      </div>
                    ) : (
                      <div
                        className="absolute inset-y-2 right-0 bg-signal [clip-path:polygon(0_0,calc(100%-1rem)_0,100%_50%,calc(100%-1rem)_100%,0_100%)]"
                        style={{ left: pct(step.start) }}
                      />
                    )}
                  </div>
                  <Label className="mt-2">
                    <span
                      className={step.days ? "block" : "block text-right"}
                      style={step.days ? { marginLeft: pct(step.start) } : undefined}
                    >
                      {copy.duration}
                    </span>
                  </Label>
                </div>
              </li>
            );
          })}
        </ol>

        <Label className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-ink/60">
          <span className="flex items-center gap-2">
            <span className="h-3 w-6 bg-ink" />
            {t.legend.shortest}
          </span>
          <span className="flex items-center gap-2">
            <span className="hatch h-3 w-6 border border-ink text-ink/55" />
            {t.legend.longest}
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-6 bg-signal" />
            {t.legend.ongoing}
          </span>
        </Label>
      </div>
    </section>
  );
}
