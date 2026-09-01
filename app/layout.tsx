import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LenisRoot } from "./components/LenisRoot";
import { LanguageProvider } from "../lib/i18n/LanguageProvider";
import { SplashBackground } from "./components/SplashBackground";
import { Starfield } from "./components/Starfield";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL != null &&
  process.env.NEXT_PUBLIC_SITE_URL.length > 0
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#140a18",
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "QASCADE",
    template: "%s · Qascade",
  },
  description:
    "Qascade tworzy produkty cyfrowe, które generują przychód — aplikacje webowe, SaaS, e-commerce, MVP, AI i DevSecOps.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Qascade",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} h-full bg-black antialiased`}
    >
      <body className="relative flex min-h-dvh flex-col bg-black pb-[env(safe-area-inset-bottom,0px)] font-sans text-zinc-100 antialiased">
        <SplashBackground />
        <div
          className="site-ambient-wrap pointer-events-none fixed inset-0 z-[1] overflow-hidden"
          aria-hidden
        >
          <div className="site-ambient-aurora" />
        </div>
        <Starfield />
        <LanguageProvider>
          <LenisRoot>
            <div
              data-page-shell
              className="relative z-10 flex min-h-dvh flex-1 flex-col isolate"
            >
              {children}
            </div>
          </LenisRoot>
        </LanguageProvider>
      </body>
    </html>
  );
}
