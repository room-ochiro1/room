import showreelPoster from "@/assets/posters/showreel.png";
import { AutoplayVideo } from "./autoplay-video";
import { Star } from "./icons";
import { Timecode } from "./timecode";
import { ButtonLink, Serif } from "./ui";

const serviceTags = ["Видео эдит", "Зураг авалт", "Landing page", "Реклам"];

export function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(50%_60%_at_50%_0%,rgb(214_255_61/0.10),transparent)]"
      />

      <div className="shell">
        <p className="inline-flex animate-rise items-center gap-2.5 rounded-full border border-line bg-white/[0.03] py-1.5 pr-3.5 pl-3 font-mono text-[11px] tracking-[0.16em] text-white/70 uppercase">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          12-р сарын захиалга нээлттэй
        </p>

        <div className="mt-8 grid gap-10 md:mt-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <h1 className="text-[clamp(2.6rem,12.5vw,4.5rem)] leading-[0.92] font-medium tracking-[-0.055em] sm:text-[clamp(4.5rem,9.2vw,9.25rem)] lg:col-span-8">
            <span className="block animate-rise [animation-delay:80ms]">
              Санаанаас
            </span>
            <span className="block animate-rise [animation-delay:180ms]">
              <Serif>үр дүн</Serif> хүртэл.
            </span>
          </h1>

          <div className="animate-rise [animation-delay:300ms] lg:col-span-4 lg:pb-3">
            <p className="max-w-md text-base leading-relaxed text-pretty text-white/60 md:text-lg">
              <span className="text-white">room</span> бол видео эдит, зураг
              авалт, landing page, дижитал рекламыг нэг дор шийддэг креатив
              маркетингийн баг. Бид брэндийг тань харагдуулж, борлуулалтыг
              тань өсгөнө.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#contact">Төсөл эхлүүлэх</ButtonLink>
              <ButtonLink href="#work" variant="ghost">
                Бүтээл үзэх
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="relative mt-12 animate-rise [animation-delay:420ms] md:mt-16">
          <AutoplayVideo
            src="/videos/showreel.mp4"
            poster={showreelPoster}
            alt="room студийн showreel — кино камер, эдитийн дэлгэц"
            sizes="(min-width: 90rem) 84rem, 100vw"
            preload
            className="aspect-[4/5] rounded-2xl sm:aspect-video md:rounded-[2rem] lg:aspect-[21/9]"
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/70 via-transparent to-black/30 md:rounded-[2rem]" />

          <div className="absolute top-4 left-4 flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase md:top-7 md:left-8">
            <span className="size-2 animate-blink rounded-full bg-red-500" />
            Rec
          </div>
          <div className="absolute top-4 right-4 font-mono text-[11px] tracking-[0.16em] text-white/70 uppercase md:top-7 md:right-8">
            4K · 25fps
          </div>

          <div className="absolute inset-x-4 bottom-4 flex flex-col gap-3 md:inset-x-8 md:bottom-7 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-2xl font-medium tracking-[-0.03em] md:text-4xl">
                Showreel <Serif>’26</Serif>
              </p>
              <p className="mt-1 text-sm text-white/60">
                Видео · Зураг · Вэб · Реклам
              </p>
            </div>
            <p className="font-mono text-sm text-white/80 md:text-base">
              <Timecode />
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-6 md:mt-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex text-accent">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="size-4" />
              ))}
            </div>
            <p className="text-sm text-white/60">
              <span className="text-white">4.9/5</span> · 120+ брэндийн үнэлгээ
            </p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {serviceTags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line px-3.5 py-1.5 text-[13px] text-white/60"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
