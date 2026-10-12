import { UI } from "@/i18n/ui";
import { DESCRIPTIONS, pageMeta } from "@/i18n/meta";
import View from "@/views/Services";

export const metadata = pageMeta("ar", "/services/", UI.ar.nav.services, DESCRIPTIONS.services.ar);

export default function Page() {
  return <View locale="ar" />;
}
