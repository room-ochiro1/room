import { faqs } from "@/lib/data";
import { Plus } from "./icons";
import { SectionHeading, Serif } from "./ui";

export function Faq() {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          index="07"
          label="Түгээмэл асуулт"
          title={
            <>
              Асуулт байна уу? <Serif>Хариулт</Serif> энд.
            </>
          }
        />

        <div className="mt-16 md:mt-24 lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="border-b border-line lg:col-span-9 lg:col-start-4">
            {faqs.map((item, i) => (
              <details
                key={item.q}
                name="faq"
                open={i === 0}
                className="group border-t border-line"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 text-lg font-medium tracking-[-0.01em] transition-colors hover:text-white/80 md:py-8 md:text-2xl">
                  {item.q}
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line transition-[rotate,background-color,color] duration-500 group-open:rotate-45 group-open:bg-white group-open:text-black">
                    <Plus className="size-4" />
                  </span>
                </summary>
                <p className="max-w-2xl pb-8 leading-relaxed text-pretty text-white/60 md:text-lg">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
