import showreelPoster from "@/assets/posters/showreel.png";
import type { Dictionary } from "@/dictionaries";
import { cn } from "@/lib/cn";
import type { Locale } from "@/lib/i18n";
import { AutoplayVideo } from "./autoplay-video";
import { Underline } from "./scribbles";
import { Timecode } from "./timecode";
import { ButtonLink, Label } from "./ui";

// The headline is sized to fill the measure, so the size depends on the
// wording. The Mongolian lines get shorter towards the bottom, which leaves
// room to tuck the intro in on the right; the English ones don't.
const layouts: Record<Locale, { headline: string; intro: string }> = {
  mn: {
    headline: "text-[15.2vw] sm:text-[15.6vw] min-[90rem]:text-[14rem]",
    intro: "xl:absolute xl:right-0 xl:bottom-[0.4rem] xl:mt-0 xl:w-[26%] xl:grid-cols-1 xl:gap-6",
  },
  en: {
    headline: "text-[15.5vw] min-[90rem]:text-[14rem]",
    intro: "",
  },
};

// Camera viewfinder corner marks over the showreel.
const corners = [
  "top-3 left-3 border-t-2 border-l-2 md:top-5 md:left-5",
  "top-3 right-3 border-t-2 border-r-2 md:top-5 md:right-5",
  "right-3 bottom-3 border-r-2 border-b-2 md:right-5 md:bottom-5",
];

export function Hero({ lang, t }: { lang: Locale; t: Dictionary["hero"] }) {
  const [lead, rest] = t.headline;
  const [beforeMark, afterMark] = rest.split(t.mark);
  const layout = layouts[lang];

  return (
    <section id="top" className="pt-20 md:pt-28">
      <div className="shell">
        <Label className="flex animate-rise items-center gap-2 border-b border-ink pb-2.5">
          <span className="size-2 rounded-full bg-signal" />
          {t.status}
        </Label>

        <div className="relative mt-5 md:mt-7">
          <h1 className={cn("headline leading-[0.82]", layout.headline)}>
            <span className="block animate-rise [animation-delay:60ms]">{lead}</span>
            <span className="block animate-rise [animation-delay:140ms]">
              {beforeMark}
              <span className="relative inline-block">
                {t.mark}
                <Underline className="scribble scribble-load absolute -bottom-[0.12em] left-[-3%] w-[106%] text-signal [--delay:0.7s]" />
              </span>
              {afterMark}
            </span>
          </h1>

          <div
            className={cn(
              "mt-10 grid animate-rise gap-6 border-t border-ink pt-5 [animation-delay:260ms] md:grid-cols-2 md:gap-12",
              layout.intro,
            )}
          >
            <p className="max-w-xl text-xl leading-snug text-pretty">{t.intro}</p>
            <div className="flex flex-col gap-2">
              <ButtonLink href="#contact">{t.primary}</ButtonLink>
              <ButtonLink href="#work" variant="outline">
                {t.secondary}
              </ButtonLink>
            </div>
          </div>
        </div>

        <figure className="mt-12 animate-rise [animation-delay:380ms] md:mt-16">
          <div className="relative">
            <AutoplayVideo
              src="/videos/showreel.mp4"
              poster={showreelPoster}
              alt={t.videoAlt}
              sizes="(min-width: 90rem) 84rem, 100vw"
              preload
              className="aspect-[4/5] sm:aspect-video lg:aspect-[2.25/1]"
            />

            {corners.map((corner) => (
              <span
                key={corner}
                aria-hidden
                className={`pointer-events-none absolute size-6 border-paper/80 md:size-9 ${corner}`}
              />
            ))}
            <span
              aria-hidden
              className="pointer-events-none absolute top-1/2 left-1/2 size-5 -translate-1/2 before:absolute before:top-1/2 before:h-px before:w-full before:bg-paper/70 after:absolute after:left-1/2 after:h-full after:w-px after:bg-paper/70"
            />

            <Label className="absolute top-5 left-6 flex items-center gap-2 text-paper md:top-8 md:left-9">
              <span className="size-2 animate-blink rounded-full bg-signal" />
              Rec
            </Label>
            <Label className="absolute top-5 right-6 text-paper/80 md:top-8 md:right-9">
              4K · 25fps
            </Label>

            {/* Clapperboard slate */}
            <dl className="absolute bottom-3 left-3 border border-ink bg-paper font-mono text-[10px] tracking-[0.12em] text-ink uppercase md:bottom-5 md:left-5 md:text-[11px]">
              <div className="flex items-baseline justify-between gap-10 border-b border-ink px-3 py-2">
                <dt className="text-ink/55">Prod.</dt>
                <dd className="font-display text-2xl leading-none font-black tracking-normal normal-case md:text-3xl">
                  room
                </dd>
              </div>
              <div className="grid grid-cols-3 border-b border-ink">
                <div className="border-r border-ink px-3 py-1.5">
                  <dt className="text-ink/55">Scene</dt>
                  <dd className="mt-0.5 text-sm md:text-base">01</dd>
                </div>
                <div className="border-r border-ink px-3 py-1.5">
                  <dt className="text-ink/55">Take</dt>
                  <dd className="mt-0.5 text-sm md:text-base">26</dd>
                </div>
                <div className="px-3 py-1.5">
                  <dt className="text-ink/55">Roll</dt>
                  <dd className="mt-0.5 text-sm md:text-base">A</dd>
                </div>
              </div>
              <div className="flex items-baseline justify-between gap-4 px-3 py-2">
                <dt className="text-ink/55">TC</dt>
                <dd className="text-sm md:text-base">
                  <Timecode />
                </dd>
              </div>
            </dl>
          </div>
        </figure>
      </div>
    </section>
  );
}
