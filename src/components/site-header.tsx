"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { contact, navLinks } from "@/lib/data";
import { cn } from "@/lib/cn";
import { ArrowUpRight } from "./icons";

function subscribeScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

export function SiteHeader() {
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
          "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500",
          scrolled || open
            ? "border-line bg-black/75 backdrop-blur-xl"
            : "border-transparent",
        )}
      >
        <div className="shell flex h-16 items-center justify-between md:h-20">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="text-[1.65rem] font-semibold tracking-[-0.07em]"
            aria-label="room — нүүр хуудас"
          >
            room<span className="text-accent">.</span>
          </a>

          <nav aria-label="Үндсэн цэс" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-full px-4 py-2 text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="group hidden h-10 items-center gap-1.5 rounded-full bg-white px-5 text-sm font-medium text-black transition-colors hover:bg-accent sm:inline-flex"
            >
              Төсөл эхлүүлэх
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="relative flex size-10 items-center justify-center rounded-full border border-white/15 lg:hidden"
            >
              <span className="sr-only">{open ? "Цэс хаах" : "Цэс нээх"}</span>
              <span
                aria-hidden
                className={cn(
                  "absolute h-px w-4 bg-white transition-transform duration-300",
                  open ? "rotate-45" : "-translate-y-[3px]",
                )}
              />
              <span
                aria-hidden
                className={cn(
                  "absolute h-px w-4 bg-white transition-transform duration-300",
                  open ? "-rotate-45" : "translate-y-[3px]",
                )}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        inert={!open}
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-black pt-24 transition-[opacity,visibility] duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav aria-label="Гар утасны цэс" className="shell flex-1">
          <ol className="border-t border-line">
            {navLinks.map((link, i) => (
              <li key={link.href} className="border-b border-line">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-baseline justify-between py-5 text-[2rem] font-medium tracking-[-0.04em] transition-[translate,opacity] duration-500 ease-out-expo",
                    open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                  )}
                  style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
                >
                  {link.label}
                  <span className="font-mono text-xs text-white/40">
                    0{i + 1}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="shell space-y-6 pb-10">
          <div className="space-y-1 text-white/60">
            <a href={`mailto:${contact.email}`} className="block text-lg text-white">
              {contact.email}
            </a>
            <a href={contact.phoneHref} className="block">
              {contact.phone}
            </a>
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-white font-medium text-black"
          >
            Төсөл эхлүүлэх
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </>
  );
}
