import { UI } from "@/i18n/ui";
import { DESCRIPTIONS, pageMeta } from "@/i18n/meta";
import View from "@/views/Packages";

export const metadata = pageMeta("en", "/packages/", UI.en.nav.packages, DESCRIPTIONS.packages.en);

export default function Page() {
  return <View locale="en" />;
}
