import { UI } from "@/i18n/ui";
import { DESCRIPTIONS, pageMeta } from "@/i18n/meta";
import View from "@/views/Brand";

export const metadata = pageMeta("ar", "/brand/", UI.ar.brand.crumb, DESCRIPTIONS.brand.ar);

export default function Page() {
  return <View locale="ar" />;
}
