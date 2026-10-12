export const LOCALES = ["ar", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "ar";

export const DIR: Record<Locale, "rtl" | "ltr"> = { ar: "rtl", en: "ltr" };

/** Arabic lives at the site root, English under /en. */
export const localePath = (locale: Locale, path: string) => (locale === DEFAULT_LOCALE ? path : `/en${path}`);

/** Strip the locale prefix from a pathname: "/en/about/" -> "/about/". */
export const stripLocale = (pathname: string) => pathname.replace(/^\/en(?=\/|$)/, "") || "/";

export const localeFromPath = (pathname: string): Locale => (/^\/en(\/|$)/.test(pathname) ? "en" : "ar");
