import { testimonials } from "@/lib/data";
import { Star } from "./icons";
import { SectionHeading, Serif } from "./ui";

function initials(name: string) {
  return name
    .replace(/\./g, "")
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          index="06"
          label="Сэтгэгдэл"
          title={
            <>
              Харилцагчид маань <Serif>юу</Serif> гэж хэлдэг вэ.
            </>
          }
        />

        <ul className="mt-16 grid gap-4 md:mt-24 md:grid-cols-2">
          {testimonials.map((t) => (
            <li key={t.name} className="reveal">
              <figure className="flex h-full flex-col rounded-3xl border border-line bg-white/[0.02] p-6 md:p-10">
                <div className="flex gap-0.5 text-accent" aria-label="5 одтой үнэлгээ">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="size-3.5" />
                  ))}
                </div>
                <blockquote className="mt-6 text-lg leading-snug tracking-[-0.01em] text-pretty md:text-[1.4rem]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-4 pt-10">
                  <span className="flex size-12 items-center justify-center rounded-full bg-white/[0.07] font-medium text-white/85">
                    {initials(t.name)}
                  </span>
                  <span>
                    <span className="block font-medium">{t.name}</span>
                    <span className="block text-sm text-white/50">
                      {t.role}, {t.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
