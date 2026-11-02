import { processSteps } from "@/lib/data";
import { Check } from "./icons";
import { SectionHeading, Serif } from "./ui";

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          index="03"
          label="Үйл явц"
          title={
            <>
              Тодорхой дөрвөн алхам, <Serif>гэнэтийн</Serif> зүйлгүй.
            </>
          }
        >
          Эхний уулзалтаас эхлээд рекламын тайлан хүртэл та аль шатанд
          байгаагаа үргэлж мэдэж байна.
        </SectionHeading>

        <ol className="mt-16 grid gap-4 md:mt-24 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li
              key={step.step}
              className="group reveal flex min-h-[23rem] flex-col rounded-3xl border border-line bg-white/[0.02] p-6 transition-colors duration-500 hover:bg-white/[0.05] md:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-full border border-line font-mono text-xs text-accent transition-colors duration-500 group-hover:border-accent/50">
                  {step.step}
                </span>
                <span className="font-mono text-[11px] tracking-[0.16em] text-white/45 uppercase">
                  {step.duration}
                </span>
              </div>
              <h3 className="mt-auto pt-14 text-2xl font-medium tracking-[-0.03em] md:text-[1.75rem]">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-pretty text-white/60">
                {step.description}
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-line pt-6 text-sm text-white/75">
                {step.points.map((point) => (
                  <li key={point} className="flex items-center gap-2.5">
                    <Check className="size-4 shrink-0 text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
