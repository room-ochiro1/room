import Image from "next/image";
import type { Dictionary } from "@/dictionaries";
import { stats, studioShots, unsplash } from "@/lib/data";
import { CountUp } from "./count-up";
import { Arrow, Loop } from "./scribbles";
import { Label, SectionHeading } from "./ui";

// The frame circled in grease pencil on the contact sheet.
const PICK = 1;
const FIRST_FRAME = 14;

export function WhyUs({ t }: { t: Dictionary["why"] }) {
  return (
    <section id="why" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading index="04" label={t.label} title={t.title} />

        <dl className="mt-16 grid grid-cols-2 gap-px border-y-2 border-ink bg-ink md:mt-24 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col-reverse justify-end bg-paper px-4 py-6 md:px-6 lg:py-9"
            >
              <dt className="mt-3 font-mono text-[11px] font-medium tracking-[0.12em] text-ink/60 uppercase">
                {t.stats[stat.id]}
              </dt>
              <dd className="headline text-[clamp(3.25rem,7.4vw,7rem)] leading-[0.8]">
                <CountUp value={stat.value} decimals={stat.decimals} />
                <span className="text-signal">{stat.suffix}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Contact sheet of the studio */}
      <div className="mt-20 bg-ink text-paper md:mt-28">
        <div aria-hidden className="sprockets h-4" />
        <ul className="flex snap-x snap-mandatory scroll-px-5 gap-3 overflow-x-auto px-5 pt-3 pb-9 [scrollbar-width:none] sm:scroll-px-8 sm:px-8 lg:snap-none lg:px-12 min-[90rem]:px-[calc((100vw_-_90rem)/2_+_3rem)]">
          {studioShots.map((shot, i) => {
            const frame = FIRST_FRAME + i;
            const caption = t.shots[shot.id];
            return (
              <li
                key={shot.id}
                className="w-[78vw] shrink-0 snap-start sm:w-[46vw] lg:w-[30vw] min-[90rem]:w-[27rem]"
              >
                <figure>
                  <p
                    aria-hidden
                    className="flex justify-between pb-1.5 font-mono text-[10px] tracking-[0.2em] text-signal"
                  >
                    <span>▸ {frame}</span>
                    <span>{frame}A</span>
                  </p>
                  <div className="relative">
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={unsplash(shot.photo, 1000)}
                        alt={caption}
                        fill
                        sizes="(min-width: 64rem) 30vw, (min-width: 40rem) 46vw, 78vw"
                        className="object-cover"
                      />
                    </div>
                    {i === PICK && (
                      <Loop className="scribble scribble-scroll pointer-events-none absolute -top-3 -left-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)] overflow-visible text-signal" />
                    )}
                  </div>
                  <figcaption className="mt-3 flex items-start justify-between gap-4">
                    <Label className="text-paper/60">{caption}</Label>
                    {i === PICK && (
                      <span className="-mt-1 flex shrink-0 items-start gap-1 font-hand text-2xl leading-none text-signal">
                        <Arrow className="scribble scribble-scroll h-8 w-10 -scale-y-100 rotate-[-20deg]" />
                        {t.pick}
                      </span>
                    )}
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
        <div aria-hidden className="sprockets h-4" />
      </div>
    </section>
  );
}
