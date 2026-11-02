"use client";

import Image from "next/image";
import { useState } from "react";
import {
  projects,
  serviceLabels,
  workFilters,
  type ServiceId,
} from "@/lib/data";
import { cn } from "@/lib/cn";
import { AutoplayVideo } from "./autoplay-video";
import { ArrowUpRight } from "./icons";
import { SectionHeading, Serif } from "./ui";

// Bento rhythm on desktop: wide/narrow, then narrow/wide.
const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];

export function Work() {
  const [filter, setFilter] = useState<ServiceId | "all">("all");
  const visible =
    filter === "all" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          index="02"
          label="Бүтээл"
          title={
            <>
              Үр дүнгээрээ <Serif>ярьдаг</Serif> бүтээлүүд.
            </>
          }
        >
          Сүүлийн хоёр жилд 120 гаруй брэндтэй хамтран хийсэн ажлаас
          сонгосон төслүүд.
        </SectionHeading>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 md:mt-20">
          <div
            role="group"
            aria-label="Төрлөөр шүүх"
            className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-1 [scrollbar-width:none]"
          >
            {workFilters.map((f) => {
              const active = f.id === filter;
              return (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(f.id)}
                  className={cn(
                    "h-10 shrink-0 rounded-full px-5 text-sm transition-colors duration-300",
                    active
                      ? "bg-white text-black"
                      : "border border-line text-white/65 hover:border-white/30 hover:text-white",
                  )}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
          <p className="font-mono text-xs text-white/40" aria-live="polite">
            {String(visible.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")} төсөл
          </p>
        </div>

        <ul key={filter} className="mt-8 grid gap-4 md:grid-cols-12 md:gap-6">
          {visible.map((project, i) => {
            const lonely = i === visible.length - 1 && visible.length % 2 === 1;
            return (
              <li
                key={project.client}
                className={cn(
                  "group relative animate-rise overflow-hidden rounded-2xl md:rounded-3xl",
                  lonely ? "md:col-span-12" : spans[i % spans.length],
                )}
                style={{ animationDelay: `${Math.min(i, 5) * 70}ms` }}
              >
                {project.media.type === "video" ? (
                  <AutoplayVideo
                    src={project.media.src}
                    poster={project.media.poster}
                    alt={`${project.client} — ${project.title}`}
                    sizes="(min-width: 48rem) 60vw, 100vw"
                    className="aspect-[4/3] md:aspect-auto md:h-[clamp(22rem,38vw,34rem)]"
                    mediaClassName="transition-[scale] duration-1000 ease-out-expo group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface md:aspect-auto md:h-[clamp(22rem,38vw,34rem)]">
                    <Image
                      src={project.media.src}
                      alt={`${project.client} — ${project.title}`}
                      fill
                      sizes="(min-width: 48rem) 60vw, 100vw"
                      className="object-cover transition-[scale] duration-1000 ease-out-expo group-hover:scale-[1.04]"
                    />
                  </div>
                )}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/20 md:via-black/10" />

                <div className="absolute top-4 left-4 flex gap-1.5 md:top-6 md:left-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-black/45 px-3 py-1 text-xs text-white/85 backdrop-blur-md"
                    >
                      {serviceLabels[tag]}
                    </span>
                  ))}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
                  <p className="font-mono text-[11px] tracking-[0.16em] text-white/60 uppercase">
                    {project.client} · {project.year}
                  </p>
                  <h3 className="mt-2 text-xl leading-tight font-medium tracking-[-0.02em] text-balance md:text-[1.75rem]">
                    {project.title}
                  </h3>
                  <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                    <ArrowUpRight className="size-3.5" />
                    {project.result}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
