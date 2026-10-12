import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import { SITE } from "@/data/site";
import "./globals.css";

const cairo = Cairo({ subsets: ["arabic", "latin"], weight: ["400", "600", "700", "800", "900"], variable: "--font-cairo", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} | ${SITE.tagline}`, template: `%s | ${SITE.name}` },
  description:
    "وكالة تسويق رقمي متكاملة: تصميم مواقع، تطبيقات موبايل، UI/UX، هوية بصرية، إدارة سوشيال ميديا، إعلانات ممولة، SEO، تصوير ومونتاج.",
  openGraph: { type: "website", locale: "ar_EG", siteName: SITE.name },
};

export const viewport: Viewport = { themeColor: "#0b0b14" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
