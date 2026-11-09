import type { Dictionary } from "@/dictionaries";
import { contact } from "@/lib/data";
import { ContactForm } from "./contact-form";
import { Label, labelStyle } from "./ui";

export function Contact({
  t,
  form,
  serviceCopy,
}: {
  t: Dictionary["contact"];
  form: Dictionary["form"];
  serviceCopy: Dictionary["services"]["items"];
}) {
  return (
    <section id="contact" className="bg-signal py-24 text-ink md:py-32">
      <div className="shell">
        <Label className="flex justify-between border-t-2 border-ink pt-3">
          <span>{t.label}</span>
          <span>07 / 07</span>
        </Label>

        <h2 className="reveal headline mt-8 text-[clamp(3.5rem,10vw,10rem)] md:mt-12">
          {t.title}
        </h2>

        <div className="mt-14 grid gap-14 md:mt-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <dl className="border-t border-ink">
              <div className="border-b border-ink py-4">
                <dt className={labelStyle}>{t.email}</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-2xl font-semibold underline decoration-2 underline-offset-4 hover:decoration-paper md:text-3xl"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div className="border-b border-ink py-4">
                <dt className={labelStyle}>{t.phone}</dt>
                <dd className="mt-1">
                  <a
                    href={contact.phoneHref}
                    className="text-2xl font-semibold md:text-3xl"
                  >
                    {contact.phone}
                  </a>
                </dd>
              </div>
              <div className="py-4">
                <dt className={labelStyle}>{t.studio}</dt>
                <dd className="mt-1 max-w-xs leading-snug">
                  {t.address}
                  <span className="mt-1 block">{t.hours}</span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-8">
            <ContactForm t={form} serviceCopy={serviceCopy} />
          </div>
        </div>
      </div>
    </section>
  );
}
