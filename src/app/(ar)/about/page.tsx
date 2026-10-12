import { UI } from "@/i18n/ui";
import { DESCRIPTIONS, pageMeta } from "@/i18n/meta";
import View from "@/views/About";

export const metadata = pageMeta("ar", "/about/", UI.ar.nav.about, DESCRIPTIONS.about.ar);

export default function Page() {
  return <View locale="ar" />;
}
