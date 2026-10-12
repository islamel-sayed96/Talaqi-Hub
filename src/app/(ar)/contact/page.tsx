import { UI } from "@/i18n/ui";
import { DESCRIPTIONS, pageMeta } from "@/i18n/meta";
import View from "@/views/Contact";

export const metadata = pageMeta("ar", "/contact/", UI.ar.nav.contact, DESCRIPTIONS.contact.ar);

export default function Page() {
  return <View locale="ar" />;
}
