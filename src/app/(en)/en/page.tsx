import { DESCRIPTIONS, pageMeta } from "@/i18n/meta";
import View from "@/views/Home";

export const metadata = pageMeta("en", "/", null, DESCRIPTIONS.home.en);

export default function Page() {
  return <View locale="en" />;
}
