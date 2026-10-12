import { UI } from "@/i18n/ui";
import { DESCRIPTIONS, pageMeta } from "@/i18n/meta";
import View from "@/views/Brand";

export const metadata = pageMeta("en", "/brand/", UI.en.brand.crumb, DESCRIPTIONS.brand.en);

export default function Page() {
  return <View locale="en" />;
}
