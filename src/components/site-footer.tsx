import { contact, navLinks, services } from "@/lib/data";
import { Eyebrow } from "./ui";

export function SiteFooter() {
  return (
    <footer className="overflow-hidden border-t border-line pt-16 pb-8 md:pt-24">
      <div className="shell">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="max-w-xs text-xl leading-snug font-medium tracking-[-0.02em] text-balance">
              Видео, зураг, вэб, реклам — брэндийн өсөлтөд хэрэгтэй бүхэн нэг{" "}
              <span className="text-accent">өрөөнд.</span>
            </p>
          </div>

          <nav aria-label="Үйлчилгээ" className="lg:col-span-2 lg:col-start-6">
            <Eyebrow>Үйлчилгээ</Eyebrow>
            <ul className="mt-5 space-y-3 text-white/70">
              {services.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="transition-colors hover:text-white">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Хуудас" className="lg:col-span-2">
            <Eyebrow>Цэс</Eyebrow>
            <ul className="mt-5 space-y-3 text-white/70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <Eyebrow>Сошиал</Eyebrow>
            <ul className="mt-5 flex flex-wrap gap-2">
              {contact.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="inline-flex rounded-full border border-line px-3.5 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-1 text-sm text-white/55">
              <a href={`mailto:${contact.email}`} className="block hover:text-white">
                {contact.email}
              </a>
              <a href={contact.phoneHref} className="block hover:text-white">
                {contact.phone}
              </a>
            </div>
          </div>
        </div>

        <p
          aria-hidden
          className="mt-20 text-center text-[35vw] leading-[0.78] font-semibold tracking-[-0.08em] select-none md:mt-28 min-[90rem]:text-[33rem]"
        >
          room<span className="text-accent">.</span>
        </p>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© 2026 room creative agency. Бүх эрх хуулиар хамгаалагдсан.</p>
          <p>Улаанбаатар, Монгол</p>
          <a href="#top" className="transition-colors hover:text-white">
            Дээш буцах ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
