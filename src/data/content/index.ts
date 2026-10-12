import type { Locale } from "@/i18n/config";
import { ar } from "./ar";
import { en } from "./en";
import type { Content } from "./types";

export const CONTENT: Record<Locale, Content> = { ar, en };
export * from "./types";
