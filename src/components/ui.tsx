import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ArrowRight } from "./icons";

// Sections are numbered like pages of a printed brief.
const SECTION_COUNT = "07";

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline font-display leading-none font-black tracking-[-0.03em] lowercase",
        className,
      )}
    >
      room
      <span
        aria-hidden
        className="ml-[0.05em] inline-block size-[0.2em] rounded-full bg-signal"
      />
    </span>
  );
}

export const labelStyle =
  "font-mono text-[11px] font-medium tracking-[0.14em] uppercase";

export function Label({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={cn(labelStyle, className)}>{children}</p>;
}

export function SectionHeading({
  index,
  label,
  title,
  children,
  dark = false,
}: {
  index: string;
  label: string;
  title: ReactNode;
  children?: ReactNode;
  dark?: boolean;
}) {
  return (
    <header className={cn("border-t-2 pt-3", dark ? "border-paper" : "border-ink")}>
      <Label
        className={cn(
          "flex justify-between",
          dark ? "text-paper/60" : "text-ink/60",
        )}
      >
        <span>{label}</span>
        <span>
          {index} / {SECTION_COUNT}
        </span>
      </Label>
      <div className="mt-8 grid gap-8 md:mt-12 lg:grid-cols-12 lg:items-end lg:gap-12">
        <h2 className="reveal headline text-[clamp(3rem,7vw,7rem)] text-balance lg:col-span-9">
          {title}
        </h2>
        {children && (
          <div
            className={cn(
              "reveal max-w-md text-lg leading-snug text-pretty lg:col-span-3 lg:pb-2",
              dark ? "text-paper/70" : "text-ink/70",
            )}
          >
            {children}
          </div>
        )}
      </div>
    </header>
  );
}

const buttonBase =
  "group inline-flex h-12 items-center justify-between gap-6 px-5 text-[15px] font-semibold transition-colors duration-200";

export function ButtonLink({
  href,
  children,
  variant = "solid",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "paper";
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        buttonBase,
        variant === "solid" && "bg-ink text-paper hover:bg-signal hover:text-ink",
        variant === "outline" &&
          "border border-ink text-ink hover:bg-ink hover:text-paper",
        variant === "paper" && "bg-paper text-ink hover:bg-ink hover:text-paper",
        className,
      )}
    >
      {children}
      <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  );
}
