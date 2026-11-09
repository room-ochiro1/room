// Content shared by every language: ids, media, numbers and brand names.
// The wording lives in src/dictionaries. Brand names, numbers and quotes are
// placeholders — swap them for real ones before going live.

import type { StaticImageData } from "next/image";
import editPoster from "@/assets/posters/edit.png";
import productPoster from "@/assets/posters/product.png";
import studioPoster from "@/assets/posters/studio.png";
import tvcPoster from "@/assets/posters/tvc.png";

export function unsplash(id: string, width = 1600) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fm=jpg&fit=crop&w=${width}&q=80`;
}

export const navLinks = [
  { id: "services", href: "#services" },
  { id: "work", href: "#work" },
  { id: "process", href: "#process" },
  { id: "faq", href: "#faq" },
] as const;

export const contact = {
  phone: "+976 7700 1234",
  phoneHref: "tel:+97677001234",
  email: "hello@room.mn",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "Behance", href: "#" },
  ],
};

export const clients = [
  "Nomadic Coffee",
  "Altai Outdoor",
  "Steppe & Co.",
  "Orda Motors",
  "Saruul Skin",
  "Tenger Fitness",
  "UBX Tech",
  "Bloom Florist",
  "Khongor Kitchen",
  "Mazaalai Kids",
];

export type ServiceId = "video" | "photo" | "ads";

export const services: { id: ServiceId; index: string; image: string }[] = [
  { id: "video", index: "01", image: unsplash("1574717024653-61fd2cf4d44d", 1200) },
  { id: "photo", index: "02", image: unsplash("1471341971476-ae15ff5dd4ea", 1200) },
  { id: "ads", index: "03", image: unsplash("1551288049-bebda4e38f71", 1200) },
];

export const workFilters: (ServiceId | "all")[] = ["all", "video", "photo", "ads"];

export type ProjectId = "orda" | "steppe" | "saruul" | "nomadic" | "tenger" | "bloom";

export type ProjectMedia =
  | { type: "video"; src: string; poster: StaticImageData }
  | { type: "image"; src: string };

export const projects: {
  id: ProjectId;
  client: string;
  year: string;
  tags: ServiceId[];
  media: ProjectMedia;
}[] = [
  {
    id: "orda",
    client: "Orda Motors",
    year: "2026",
    tags: ["video", "ads"],
    media: { type: "video", src: "/videos/tvc.mp4", poster: tvcPoster },
  },
  {
    id: "steppe",
    client: "Steppe & Co.",
    year: "2026",
    tags: ["photo", "video"],
    media: { type: "video", src: "/videos/studio.mp4", poster: studioPoster },
  },
  {
    id: "saruul",
    client: "Saruul Skin",
    year: "2025",
    tags: ["photo", "ads"],
    media: { type: "video", src: "/videos/product.mp4", poster: productPoster },
  },
  {
    id: "nomadic",
    client: "Nomadic Coffee",
    year: "2025",
    tags: ["photo"],
    media: { type: "image", src: unsplash("1495474472287-4d71bcdd2085") },
  },
  {
    id: "tenger",
    client: "Tenger Fitness",
    year: "2025",
    tags: ["video", "ads"],
    media: { type: "video", src: "/videos/edit.mp4", poster: editPoster },
  },
  {
    id: "bloom",
    client: "Bloom Florist",
    year: "2025",
    tags: ["photo", "ads"],
    media: { type: "image", src: unsplash("1621155346337-1d19476ba7d6") },
  },
];

export type StepId = "discover" | "plan" | "produce" | "grow";

// `days` is [shortest, longest] in days and drives the schedule chart;
// null means the step keeps running.
export const processSteps: {
  id: StepId;
  step: string;
  days: [number, number] | null;
}[] = [
  { id: "discover", step: "01", days: [1, 2] },
  { id: "plan", step: "02", days: [2, 4] },
  { id: "produce", step: "03", days: [3, 14] },
  { id: "grow", step: "04", days: null },
];

export type StatId = "brands" | "videos" | "roas" | "views";

export const stats: { id: StatId; value: number; decimals: number; suffix: string }[] = [
  { id: "brands", value: 120, decimals: 0, suffix: "+" },
  { id: "videos", value: 850, decimals: 0, suffix: "+" },
  { id: "roas", value: 4.2, decimals: 1, suffix: "x" },
  { id: "views", value: 36, decimals: 0, suffix: "M+" },
];

export type ShotId = "studio" | "commercial" | "product" | "sound" | "location";

export const studioShots: { id: ShotId; photo: string }[] = [
  { id: "studio", photo: "1471341971476-ae15ff5dd4ea" },
  { id: "commercial", photo: "1485846234645-a62644f84728" },
  { id: "product", photo: "1520390138845-fd2d229dd553" },
  { id: "sound", photo: "1598488035139-bdbb2231ce04" },
  { id: "location", photo: "1542038784456-1ea8e935640e" },
];
