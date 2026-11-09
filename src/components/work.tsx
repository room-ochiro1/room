"use client";

import Image from "next/image";
import { useState } from "react";
import type { Dictionary } from "@/dictionaries";
import { projects, workFilters, type ServiceId } from "@/lib/data";
import { cn } from "@/lib/cn";
import { AutoplayVideo } from "./autoplay-video";
import { Label, SectionHeading } from "./ui";

// Magazine rhythm on desktop: a big frame, a smaller one dropped lower,
// then the same thing mirrored.
const slots = [
  { cell: "md:col-span-7", media: "md:aspect-[4/3]" },
  { cell: "md:col-span-4 md:col-start-9 md:mt-40", media: "md:aspect-[4/5]" },
  { cell: "md:col-span-5 md:col-start-2", media: "md:aspect-[4/5]" },
  { cell: "md:col-span-6 md:col-start-7 md:mt-28", media: "md:aspect-[3/2]" },
];

const pad = (n: number) => String(n).padStart(2, "0");

const countFor = (id: ServiceId | "all") =>
  id === "all" ? projects.length : projects.filter((p) => p.tags.includes(id)).length;

export function Work({ t }: { t: Dictionary["work"] }) {
  const [filter, setFilter] = useState<ServiceId | "all">("all");
  const visible =
    filter === "all" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="work" className="bg-ink py-24 text-paper md:py-32">
      <div className="shell">
        <SectionHeading dark index="02" label={t.label} title={t.title} />

        <div
          role="group"
          aria-label={t.filterLabel}
          className="mt-16 flex flex-wrap gap-x-7 gap-y-2 border-b border-paper/20 pb-5 md:mt-24 md:gap-x-10"
        >
          {workFilters.map((id) => {
            const active = id === filter;
            return (
              <button
                key={id}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(id)}
                className={cn(
                  "headline text-[2.1rem] transition-colors duration-200 md:text-5xl",
                  active ? "text-paper" : "text-paper/35 hover:text-paper/75",
                )}
              >
                <span
                  className={cn(
                    active &&
                      "underline decoration-signal decoration-[3px] underline-offset-[0.12em]",
                  )}
                >
                  {t.filters[id]}
                </span>
                <sup className="ml-1 font-mono text-xs font-medium tracking-normal text-signal">
                  {pad(countFor(id))}
                </sup>
              </button>
            );
          })}
        </div>
        <p className="sr-only" aria-live="polite">
          {t.count.replace("{n}", String(visible.length))}
        </p>

        <ul
          key={filter}
          className="mt-12 grid items-start gap-x-6 gap-y-16 md:mt-16 md:grid-cols-12 md:gap-y-24"
        >
          {visible.map((project, i) => {
            const slot = slots[i % slots.length];
            const copy = t.projects[project.id];
            const alt = `${project.client} — ${copy.title}`;
            return (
              <li
                key={project.id}
                className={cn("group animate-rise", slot.cell)}
                style={{ animationDelay: `${Math.min(i, 5) * 70}ms` }}
              >
                {project.media.type === "video" ? (
                  <AutoplayVideo
                    src={project.media.src}
                    poster={project.media.poster}
                    alt={alt}
                    sizes="(min-width: 48rem) 58vw, 100vw"
                    className={cn("aspect-[4/3]", slot.media)}
                    mediaClassName="transition-[scale] duration-1000 ease-out-expo group-hover:scale-[1.04]"
                  />
                ) : (
                  <div
                    className={cn(
                      "relative aspect-[4/3] overflow-hidden bg-paper/5",
                      slot.media,
                    )}
                  >
                    <Image
                      src={project.media.src}
                      alt={alt}
                      fill
                      sizes="(min-width: 48rem) 58vw, 100vw"
                      className="object-cover transition-[scale] duration-1000 ease-out-expo group-hover:scale-[1.04]"
                    />
                  </div>
                )}

                <div className="mt-4 flex gap-4 border-t border-paper/25 pt-3">
                  <span className="font-mono text-xs text-paper/45">{pad(i + 1)}</span>
                  <div className="min-w-0">
                    <Label className="text-paper/55">
                      {project.client} · {project.year}
                    </Label>
                    <h3 className="mt-2 text-xl leading-tight font-semibold text-balance md:text-2xl">
                      {copy.title}
                    </h3>
                    <p className="headline mt-3 text-3xl text-signal md:text-4xl">
                      {copy.result}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
