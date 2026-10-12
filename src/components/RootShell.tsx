import { IBM_Plex_Sans_Arabic, Readex_Pro } from "next/font/google";
import { DIR, type Locale } from "@/i18n/config";
import Header from "./Header";
import Footer from "./Footer";
import RevealObserver from "./RevealObserver";
import { THEME_SCRIPT } from "./themeScript";
import "../app/globals.css";

const readex = Readex_Pro({ subsets: ["arabic", "latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-readex", display: "swap", preload: false });
const plex = IBM_Plex_Sans_Arabic({ subsets: ["arabic", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-plex", display: "swap", preload: false });

/** The <html> document shared by the Arabic and English root layouts. */
export default function RootShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={locale} dir={DIR[locale]} className={`${readex.variable} ${plex.variable}`} data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body>
        <Header locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
        <RevealObserver />
      </body>
    </html>
  );
}
