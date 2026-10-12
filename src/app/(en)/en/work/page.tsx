import { UI } from "@/i18n/ui";
import { DESCRIPTIONS, pageMeta } from "@/i18n/meta";
import View from "@/views/Work";

export const metadata = pageMeta("en", "/work/", UI.en.nav.work, DESCRIPTIONS.work.en);

export default function Page() {
  return <View locale="en" />;
}
