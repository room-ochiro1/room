"use client";

import { Fragment, useEffect, useState, useSyncExternalStore } from "react";
import type { Dictionary } from "@/dictionaries";
import { contact, navLinks } from "@/lib/data";
import { cn } from "@/lib/cn";
import { localePath, locales, type Locale } from "@/lib/i18n";
import { ArrowRight } from "./icons";
import { LocalTime } from "./local-time";
import { labelStyle, Wordmark } from "./ui";

function subscribeScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

function LanguageSwitch({ lang, label }: { lang: Locale; label: string }) {
  return (
    <nav aria-label={label} className={cn(labelStyle, "flex items-center gap-1.5")}>
      {locales.map((locale, i) => (
        <Fragment key={locale}>
          {i > 0 && (
            <span aria-hidden className="text-ink/30">
              /
            </span>
          )}
          <a
            href={localePath(locale)}
            hrefLang={locale}
            lang={locale}
            aria-current={locale === lang ? "page" : undefined}
            className={cn(
              "py-2",
              locale === lang
                ? "underline decoration-signal decoration-2 underline-offset-4"
                : "text-ink/45 transition-colors hover:text-ink",
            )}
          >
            {locale}
          </a>
        </Fragment>
      ))}
    </nav>
  );
}

export function SiteHeader({
  lang,
  t,
  nav,
}: {
  lang: Locale;
  t: Dictionary["header"];
  nav: Dictionary["nav"];
}) {
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > 24,
    () => false,
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const desktop = window.matchMedia("(min-width: 64rem)");
    const onResize = () => desktop.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      root.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
          scrolled || open
            ? "border-ink bg-paper/92 backdrop-blur-md"
            : "border-transparent",
        )}
      >
        <div className="shell flex h-14 items-center justify-between gap-6 md:h-16">
          <a href="#top" onClick={() => setOpen(false)} aria-label={t.home}>
            <Wordmark className="text-[2.1rem]" />
          </a>

          <nav aria-label={t.mainNav} className="hidden lg:block">
            <ul className="flex items-center gap-8 text-[15px] font-medium">
              {navLinks.map((link, i) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="decoration-signal decoration-2 underline-offset-[6px] hover:underline"
                  >
                    <sup className="mr-1 font-mono text-[10px] text-ink/45">
                      0{i + 1}
                    </sup>
                    {nav[link.id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4 md:gap-5">
            <p className={cn(labelStyle, "hidden text-ink/60 xl:block")}>
              {t.clock} <LocalTime />
            </p>
            <LanguageSwitch lang={lang} label={t.language} />
            <a
              href="#contact"
              className="group hidden h-10 items-center gap-3 bg-ink px-4 text-sm font-semibold text-paper transition-colors hover:bg-signal hover:text-ink sm:inline-flex"
            >
              {t.cta}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className={cn(labelStyle, "h-10 min-w-16 border border-ink px-3 lg:hidden")}
            >
              {open ? t.close : t.menu}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        inert={!open}
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-paper pt-20 transition-[opacity,visibility] duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav aria-label={t.mobileNav} className="shell flex-1">
          <ol className="border-t-2 border-ink">
            {navLinks.map((link, i) => (
              <li key={link.id} className="border-b border-ink">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "headline flex items-baseline justify-between py-4 text-[3.25rem] transition-[translate,opacity] duration-500 ease-out-expo",
                    open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                  )}
                  style={{ transitionDelay: open ? `${60 + i * 45}ms` : "0ms" }}
                >
                  {nav[link.id]}
                  <span className="font-mono text-xs font-medium text-ink/45">
                    0{i + 1}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="shell space-y-6 pb-8">
          <div className="space-y-1">
            <a href={`mailto:${contact.email}`} className="block text-lg font-semibold">
              {contact.email}
            </a>
            <a href={contact.phoneHref} className="block text-ink/70">
              {contact.phone}
            </a>
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex h-14 w-full items-center justify-between bg-ink px-5 font-semibold text-paper"
          >
            {t.cta}
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </>
  );
}
