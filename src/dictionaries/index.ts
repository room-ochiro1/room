import type { Locale } from "@/lib/i18n";
import { en } from "./en";
import { mn, type Dictionary } from "./mn";

const dictionaries: Record<Locale, Dictionary> = { mn, en };

export const getDictionary = (locale: Locale) => dictionaries[locale];

export type { Dictionary };
