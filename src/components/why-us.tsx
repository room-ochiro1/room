import Image from "next/image";
import { reasons, stats, unsplash } from "@/lib/data";
import { CountUp } from "./count-up";
import { SectionHeading, Serif } from "./ui";

const studio = [
  { id: "1471341971476-ae15ff5dd4ea", caption: "Гэрэлтүүлэгтэй студи" },
  { id: "1485846234645-a62644f84728", caption: "Сурталчилгааны зураг авалт" },
  { id: "1520390138845-fd2d229dd553", caption: "Бүтээгдэхүүний зураг" },
  { id: "1598488035139-bdbb2231ce04", caption: "Дуу & эдитийн өрөө" },
  { id: "1542038784456-1ea8e935640e", caption: "Гадаа зураг авалт" },
];

export function WhyUs() {
  return (
    <section id="why" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          index="04"
          label="Яагаад room"
          title={
            <>
              Гоё контент биш — <Serif>өсөлт</Serif> бүтээдэг.
            </>
          }
        />

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line md:mt-24 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse bg-black p-5 sm:p-8 md:p-10">
              <dt className="mt-3 text-sm text-white/50 md:text-base">{stat.label}</dt>
              <dd className="text-[clamp(2.5rem,6vw,5.5rem)] leading-none font-medium tracking-[-0.05em]">
                <CountUp
                  value={stat.value}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 md:mt-24 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <li key={reason.title} className="reveal">
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <h3 className="mt-4 text-xl font-medium tracking-[-0.02em] md:text-2xl">
                {reason.title}
              </h3>
              <p className="mt-3 leading-relaxed text-pretty text-white/60">
                {reason.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-20 md:mt-28">
        <ul className="flex snap-x snap-mandatory scroll-px-5 gap-4 sm:scroll-px-8 lg:snap-none overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:px-8 md:gap-6 lg:px-12 min-[90rem]:px-[calc((100vw_-_90rem)/2_+_3rem)]">
          {studio.map((shot, i) => (
            <li
              key={shot.id}
              className="w-[78vw] shrink-0 snap-start sm:w-[46vw] lg:w-[30vw] min-[90rem]:w-[26rem]"
            >
              <figure>
                <div
                  className={
                    i % 2 === 0
                      ? "relative aspect-[4/5] overflow-hidden rounded-2xl"
                      : "relative aspect-[4/5] overflow-hidden rounded-2xl md:mt-16"
                  }
                >
                  <Image
                    src={unsplash(shot.id, 1000)}
                    alt={shot.caption}
                    fill
                    sizes="(min-width: 64rem) 30vw, (min-width: 40rem) 46vw, 78vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 flex justify-between font-mono text-[11px] tracking-[0.16em] text-white/45 uppercase">
                  <span>{shot.caption}</span>
                  <span>0{i + 1}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
