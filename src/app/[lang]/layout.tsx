import type { Metadata, Viewport } from "next";
import { Caveat, Golos_Text, IBM_Plex_Mono, Roboto_Flex } from "next/font/google";
import { notFound } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { isLocale, locales } from "@/lib/i18n";
import "../globals.css";

// Every family needs cyrillic-ext for the Mongolian Ө and Ү — and has to
// actually draw them; check new fonts before swapping (Sofia Sans, Alumni Sans
// and Wix Madefor fall back for Ү).
const golos = Golos_Text({
  variable: "--font-golos",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
});

// Display face, squeezed with the width axis (see --font-display in globals.css).
const flex = Roboto_Flex({
  variable: "--font-flex",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  axes: ["wdth"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500"],
});

// Only used for a few handwritten notes, so it doesn't need preloading.
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  preload: false,
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return getDictionary(lang).meta;
}

export const viewport: Viewport = {
  themeColor: "#ece7dd",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      data-scroll-behavior="smooth"
      className={`${golos.variable} ${flex.variable} ${plexMono.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="grain flex min-h-full flex-col">{children}</body>
    </html>
  );
}
