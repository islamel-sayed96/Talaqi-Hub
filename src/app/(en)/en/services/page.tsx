import { UI } from "@/i18n/ui";
import { DESCRIPTIONS, pageMeta } from "@/i18n/meta";
import View from "@/views/Services";

export const metadata = pageMeta("en", "/services/", UI.en.nav.services, DESCRIPTIONS.services.en);

export default function Page() {
  return <View locale="en" />;
}
