import Image from "next/image";
import type { Dictionary } from "@/dictionaries";
import { services } from "@/lib/data";
import { Label, SectionHeading } from "./ui";

export function Services({ t }: { t: Dictionary["services"] }) {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading index="01" label={t.label} title={t.title} />

        <ol className="mt-16 border-b border-ink md:mt-24">
          {services.map((service) => {
            const item = t.items[service.id];
            return (
              <li
                key={service.id}
                className="group reveal grid gap-x-12 gap-y-6 border-t border-ink py-8 md:py-12 lg:grid-cols-12"
              >
                {/* Menu line: title, dotted leader, turnaround */}
                <div className="lg:col-span-12">
                  <div className="flex items-baseline gap-4 md:gap-6">
                    <span className="font-mono text-sm text-ink/50">{service.index}</span>
                    <h3 className="headline text-[clamp(2.5rem,4.5vw,4.25rem)] transition-colors duration-300 group-hover:text-signal">
                      {item.title}
                    </h3>
                    <span
                      aria-hidden
                      className="hidden min-w-12 flex-1 border-b-[3px] border-dotted border-ink/35 lg:block"
                    />
                    <p className="headline hidden shrink-0 text-[clamp(2rem,3vw,2.75rem)] whitespace-nowrap lg:block">
                      {item.timeline}
                    </p>
                  </div>
                  <Label className="mt-3 text-ink/60 lg:hidden">{item.timeline}</Label>
                </div>

                <div className="relative aspect-[3/2] overflow-hidden bg-ink lg:col-span-4 lg:aspect-[16/10]">
                  <Image
                    src={service.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 64rem) 30vw, 100vw"
                    className="object-cover transition-[scale] duration-700 ease-out-expo group-hover:scale-105"
                  />
                </div>

                <ul className="grid content-start gap-x-6 border-t border-ink/25 text-[15px] sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
                  {item.deliverables.map((deliverable) => (
                    <li key={deliverable} className="border-b border-ink/25 py-2">
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
