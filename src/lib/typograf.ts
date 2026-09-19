import Typograf from "typograf";

type Locale = "ru";

const LOCALE_MAP: Record<Locale, string[]> = {
  ru: ["ru", "en-US"],
};

const cache = new Map<Locale, Typograf>();

export function getTypograf(locale: Locale = "ru"): Typograf {
  let tp = cache.get(locale);

  if (!tp) {
    tp = new Typograf({ locale: LOCALE_MAP[locale] });
    cache.set(locale, tp);
  }

  return tp;
}