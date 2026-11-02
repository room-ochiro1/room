import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ArrowUpRight } from "./icons";

export function Serif({ children }: { children: ReactNode }) {
  return (
    <em className="font-serif text-[1.08em] font-normal italic tracking-[-0.02em]">
      {children}
    </em>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.2em] text-white/50",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  index,
  label,
  title,
  children,
}: {
  index: string;
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="grid gap-6 border-t border-line pt-6 lg:grid-cols-12 lg:gap-12">
      <Eyebrow className="lg:col-span-3">
        <span className="text-accent">({index})</span>&nbsp;&nbsp;{label}
      </Eyebrow>
      <div className="lg:col-span-9">
        <h2 className="reveal max-w-4xl text-[clamp(2.1rem,5.4vw,4.75rem)] leading-[1.02] font-medium tracking-[-0.04em] text-balance">
          {title}
        </h2>
        {children && (
          <div className="reveal mt-6 max-w-xl text-base leading-relaxed text-pretty text-white/60 md:text-lg">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

const buttonBase =
  "group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-colors duration-300";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "dark";
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        buttonBase,
        variant === "primary" && "bg-white text-black hover:bg-accent",
        variant === "ghost" &&
          "border border-white/15 text-white hover:border-white/40 hover:bg-white/5",
        variant === "dark" && "bg-black text-white hover:bg-black/80",
        className,
      )}
    >
      {children}
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

export function Chip({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/12 px-3 py-1 text-[13px] text-white/70",
        className,
      )}
    >
      {children}
    </span>
  );
}
