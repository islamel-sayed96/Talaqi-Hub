import type { Locale } from "./config";
import { UI } from "./ui";
import { CONTENT } from "@/data/content";
import { formatPrice } from "@/data/site";

/** Announcement-bar text with the current offer prices filled in. */
export function topbarText(locale: Locale, key: "text" | "short") {
  const [web, meta] = CONTENT[locale].offers;
  return UI[locale].topbar[key].replace("{web}", formatPrice(web.price, locale)).replace("{meta}", formatPrice(meta.price, locale));
}
