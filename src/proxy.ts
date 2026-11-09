import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/lib/i18n";

// Bare paths ("/") are served in the default language by rewriting them to
// its route; "/mn/..." redirects back to the bare path so each page has one
// URL. Other locales ("/en/...") pass through untouched.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segment = pathname.split("/")[1];

  if (segment === defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url);
  }
  if (isLocale(segment)) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals and anything that looks like a file (videos, favicon).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
