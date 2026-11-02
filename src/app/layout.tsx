import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "room — Креатив маркетингийн агентлаг",
  description:
    "Видео продакшн & эдит, мэргэжлийн зураг авалт, landing page хөгжүүлэлт, Facebook · TikTok · Google реклам — бүгдийг нэг багаас.",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="mn"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="grain flex min-h-full flex-col">{children}</body>
    </html>
  );
}
