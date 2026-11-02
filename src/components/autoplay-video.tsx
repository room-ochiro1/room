"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

// Muted looping clip that only plays while on screen. The poster is a
// next/image underneath, so there is never an empty black box while loading.
export function AutoplayVideo({
  src,
  poster,
  alt,
  sizes,
  preload = false,
  className,
  mediaClassName,
}: {
  src: string;
  poster: StaticImageData;
  alt: string;
  sizes: string;
  preload?: boolean;
  className?: string;
  mediaClassName?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    video.muted = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.2 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={cn("relative overflow-hidden bg-surface", className)}>
      <Image
        src={poster}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        placeholder="blur"
        className={cn("object-cover", mediaClassName)}
      />
      <video
        ref={ref}
        src={src}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden
        onPlaying={() => setPlaying(true)}
        className={cn(
          "absolute inset-0 size-full object-cover transition-opacity duration-700",
          playing ? "opacity-100" : "opacity-0",
          mediaClassName,
        )}
      />
    </div>
  );
}
