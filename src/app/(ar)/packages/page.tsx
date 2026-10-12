import { UI } from "@/i18n/ui";
import { DESCRIPTIONS, pageMeta } from "@/i18n/meta";
import View from "@/views/Packages";

export const metadata = pageMeta("ar", "/packages/", UI.ar.nav.packages, DESCRIPTIONS.packages.ar);

export default function Page() {
  return <View locale="ar" />;
}
