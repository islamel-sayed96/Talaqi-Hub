import { UI } from "@/i18n/ui";
import { DESCRIPTIONS, pageMeta } from "@/i18n/meta";
import View from "@/views/Work";

export const metadata = pageMeta("ar", "/work/", UI.ar.nav.work, DESCRIPTIONS.work.ar);

export default function Page() {
  return <View locale="ar" />;
}
