import { contact } from "@/lib/data";
import { ContactForm } from "./contact-form";
import { ArrowUpRight } from "./icons";
import { Eyebrow, Serif } from "./ui";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[40rem] bg-[radial-gradient(50%_60%_at_50%_100%,rgb(214_255_61/0.08),transparent)]"
      />
      <div className="shell">
        <div className="border-t border-line pt-6">
          <Eyebrow>
            <span className="text-accent">(08)</span>&nbsp;&nbsp;Холбоо барих
          </Eyebrow>
        </div>

        <div className="mt-10 grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 className="reveal text-[clamp(2.6rem,6.4vw,6rem)] leading-[0.95] font-medium tracking-[-0.05em] text-balance">
              Дараагийн төслөө <Serif>хамтдаа</Serif> эхлүүлье.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-white/60 md:text-lg">
              Маягтаа бөглөөд илгээгээрэй. 24 цагийн дотор холбогдож, 30 минутын
              үнэгүй зөвлөгөөний цаг товлоно.
            </p>

            <dl className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <dt className="font-mono text-[11px] tracking-[0.16em] text-white/40 uppercase">
                  И-мэйл
                </dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${contact.email}`}
                    className="group inline-flex items-center gap-2 text-2xl font-medium tracking-[-0.02em] md:text-3xl"
                  >
                    {contact.email}
                    <ArrowUpRight className="size-5 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] tracking-[0.16em] text-white/40 uppercase">
                  Утас
                </dt>
                <dd className="mt-2">
                  <a
                    href={contact.phoneHref}
                    className="text-2xl font-medium tracking-[-0.02em] md:text-3xl"
                  >
                    {contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] tracking-[0.16em] text-white/40 uppercase">
                  Студи
                </dt>
                <dd className="mt-2 max-w-xs leading-relaxed text-white/70">
                  {contact.address}
                  <span className="mt-1 block text-white/45">{contact.hours}</span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
