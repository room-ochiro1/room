import { plans } from "@/lib/data";
import { cn } from "@/lib/cn";
import { ArrowRight, Check } from "./icons";
import { ButtonLink, SectionHeading, Serif } from "./ui";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          index="05"
          label="Багц"
          title={
            <>
              Ил тод үнэ, <Serif>сар бүрийн</Serif> багц.
            </>
          }
        >
          Тогтмол контент, реклам хэрэгтэй брэндэд зориулсан сарын багцууд.
          Бүх үнэд НӨАТ багтсан.
        </SectionHeading>

        <div className="mt-16 grid gap-4 md:mt-24 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "reveal relative flex flex-col rounded-3xl p-6 md:p-9",
                plan.featured
                  ? "bg-white text-black"
                  : "border border-line bg-white/[0.02]",
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium tracking-[-0.02em]">{plan.name}</h3>
                {plan.featured && (
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-black">
                    Хамгийн их сонгогддог
                  </span>
                )}
              </div>
              <p
                className={cn(
                  "mt-3 min-h-12 text-sm leading-relaxed text-pretty",
                  plan.featured ? "text-black/60" : "text-white/55",
                )}
              >
                {plan.description}
              </p>
              <p className="mt-8 flex items-baseline gap-1">
                <span className="text-[clamp(2.25rem,4vw,3.25rem)] leading-none font-medium tracking-[-0.045em]">
                  {plan.price}
                </span>
                <span className={plan.featured ? "text-black/50" : "text-white/45"}>
                  {plan.period}
                </span>
              </p>
              <ul
                className={cn(
                  "mt-8 flex-1 space-y-3.5 border-t pt-8 text-[15px]",
                  plan.featured ? "border-black/10" : "border-line",
                )}
              >
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Check
                      className={cn(
                        "mt-0.5 size-4 shrink-0",
                        plan.featured ? "text-black" : "text-accent",
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#contact"
                variant={plan.featured ? "dark" : "ghost"}
                className="mt-10 w-full"
              >
                {plan.name} багц сонгох
              </ButtonLink>
            </article>
          ))}
        </div>

        <div className="reveal mt-4 flex flex-col gap-6 rounded-3xl border border-line p-6 md:flex-row md:items-center md:justify-between md:p-9">
          <div>
            <h3 className="text-xl font-medium tracking-[-0.02em]">Нэг удаагийн төсөл үү?</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/55">
              Видео 350,000₮-с · Зураг авалт 250,000₮-с · Landing page
              1,200,000₮-с. Үнийн саналыг 24 цагт илгээнэ.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-accent"
          >
            Үнийн санал авах
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
