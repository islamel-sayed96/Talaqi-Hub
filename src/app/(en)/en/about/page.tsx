import { UI } from "@/i18n/ui";
import { DESCRIPTIONS, pageMeta } from "@/i18n/meta";
import View from "@/views/About";

export const metadata = pageMeta("en", "/about/", UI.en.nav.about, DESCRIPTIONS.about.en);

export default function Page() {
  return <View locale="en" />;
}
