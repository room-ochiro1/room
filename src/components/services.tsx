import Image from "next/image";
import { services } from "@/lib/data";
import { Chip, SectionHeading, Serif } from "./ui";

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          index="01"
          label="Үйлчилгээ"
          title={
            <>
              Брэндэд хэрэгтэй бүхнийг <Serif>нэг багаас.</Serif>
            </>
          }
        >
          Зураг авалтаас эхлээд рекламын тайлан хүртэл бүх шатыг хариуцаж,
          таны цаг, төсвийг хэмнэнэ.
        </SectionHeading>

        <ul className="mt-16 border-b border-line md:mt-24">
          {services.map((service) => (
            <li
              key={service.id}
              className="group reveal grid gap-6 border-t border-line py-10 md:py-14 lg:grid-cols-12 lg:gap-12"
            >
              <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
                <div className="flex items-start gap-5 md:gap-8">
                  <span className="pt-2 font-mono text-sm text-white/40 transition-colors group-hover:text-accent md:pt-3">
                    {service.index}
                  </span>
                  <div>
                    <h3 className="text-[clamp(1.85rem,3.6vw,3.25rem)] leading-[1.05] font-medium tracking-[-0.035em]">
                      {service.title}
                    </h3>
                    <dl className="mt-6 flex gap-10 text-sm md:mt-8">
                      <div>
                        <dt className="font-mono text-[11px] tracking-[0.16em] text-white/40 uppercase">
                          Үнэ
                        </dt>
                        <dd className="mt-1.5 text-white">
                          {service.price}
                          <span className="text-white/50">
                            {service.priceNote}
                          </span>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[11px] tracking-[0.16em] text-white/40 uppercase">
                          Хугацаа
                        </dt>
                        <dd className="mt-1.5 text-white">{service.timeline}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>

              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl lg:col-span-3 lg:col-start-10 lg:row-start-1 lg:aspect-[4/3]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 64rem) 22vw, 100vw"
                  className="object-cover transition-[scale,filter] duration-700 ease-out-expo group-hover:scale-105 lg:grayscale lg:group-hover:grayscale-0"
                />
              </div>

              <div className="lg:col-span-4 lg:col-start-6 lg:row-start-1">
                <p className="leading-relaxed text-pretty text-white/60">
                  {service.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {service.deliverables.map((item) => (
                    <li key={item}>
                      <Chip>{item}</Chip>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
