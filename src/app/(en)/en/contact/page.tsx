import { UI } from "@/i18n/ui";
import { DESCRIPTIONS, pageMeta } from "@/i18n/meta";
import View from "@/views/Contact";

export const metadata = pageMeta("en", "/contact/", UI.en.nav.contact, DESCRIPTIONS.contact.en);

export default function Page() {
  return <View locale="en" />;
}
