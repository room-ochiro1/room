import type { Dictionary } from "@/dictionaries";
import { Label, SectionHeading } from "./ui";

export function Testimonials({ t }: { t: Dictionary["testimonials"] }) {
  const [lead, ...rest] = t.items;

  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading index="05" label={t.label} title={t.title} />

        <figure className="reveal mt-16 grid gap-2 md:mt-24 lg:grid-cols-12 lg:gap-12">
          <span
            aria-hidden
            className="headline h-[0.5em] text-[9rem] leading-[0.9] text-signal lg:col-span-2 lg:h-auto lg:text-right lg:text-[12rem]"
          >
            “
          </span>
          <div className="lg:col-span-10">
            <blockquote className="text-[clamp(1.75rem,3.5vw,3.25rem)] leading-[1.1] font-medium tracking-[-0.015em] text-pretty">
              {lead.quote}
            </blockquote>
            <figcaption className="mt-8 border-t border-ink pt-3">
              <Label>
                {lead.name}{" "}
                <span className="text-ink/55">
                  — {lead.role}, {lead.company}
                </span>
              </Label>
            </figcaption>
          </div>
        </figure>

        <ul className="mt-20 grid gap-12 md:mt-28 md:grid-cols-2 md:gap-0 lg:ml-[calc(2/12*100%)] lg:pl-6">
          {rest.map((item) => (
            <li
              key={item.name}
              className="reveal border-t border-ink pt-5 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
            >
              <figure className="flex h-full flex-col">
                <blockquote className="text-lg leading-snug text-pretty">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-auto pt-8">
                  <Label>{item.name}</Label>
                  <Label className="mt-1 text-ink/55">
                    {item.role}, {item.company}
                  </Label>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
