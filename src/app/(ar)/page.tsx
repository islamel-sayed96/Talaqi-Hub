import { DESCRIPTIONS, pageMeta } from "@/i18n/meta";
import View from "@/views/Home";

export const metadata = pageMeta("ar", "/", null, DESCRIPTIONS.home.ar);

export default function Page() {
  return <View locale="ar" />;
}
