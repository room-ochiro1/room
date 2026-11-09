// Mongolian is the main language and lives at the bare paths ("/");
// every other locale gets a prefix ("/en").
export const locales = ["mn", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "mn";

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const localePath = (locale: Locale) =>
  locale === defaultLocale ? "/" : `/${locale}`;
