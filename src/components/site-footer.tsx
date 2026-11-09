import type { Dictionary } from "@/dictionaries";
import { contact, navLinks } from "@/lib/data";
import { LocalTime } from "./local-time";
import { Label, labelStyle, Wordmark } from "./ui";

export function SiteFooter({
  t,
  nav,
}: {
  t: Dictionary["footer"];
  nav: Dictionary["nav"];
}) {
  const [tagline, taglineMark] = t.tagline;

  return (
    <footer className="bg-ink pt-16 pb-8 text-paper md:pt-24">
      <div className="shell">
        <p className="headline text-[clamp(3.5rem,16.5vw,16rem)] leading-[0.9]">
          {tagline}
          <span className="text-signal">{taglineMark}</span>
        </p>
        <div className="mt-16 flex flex-col gap-6 border-t border-paper/25 pt-8 text-paper/80 md:flex-row md:justify-between">
          <nav aria-label={t.pages}>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="hover:text-signal">
                    {nav[link.id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ul aria-label={t.social} className="flex flex-wrap gap-x-6 gap-y-2">
            {contact.socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} className="hover:text-signal">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-paper/25 pt-6 md:flex-row md:items-center md:justify-between">
          <Wordmark className="text-3xl" />
          <Label className="text-paper/50">© 2026 room creative agency</Label>
          <Label className="text-paper/50">
            {t.city} · <LocalTime />
          </Label>
          <a href="#top" className={`${labelStyle} hover:text-signal`}>
            {t.top}
          </a>
        </div>
      </div>
    </footer>
  );
}
