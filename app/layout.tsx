import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LenisRoot } from "./components/LenisRoot";
import { SplashBackground } from "./components/SplashBackground";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QASCADE",
  description:
    "Qascade builds digital products that drive revenue — web apps, SaaS, e-commerce, MVP, AI, and DevSecOps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full bg-black antialiased`}
    >
      <body className="relative flex min-h-dvh flex-col bg-black font-sans text-zinc-100 antialiased">
        <SplashBackground />
        <LenisRoot>
          <div className="relative z-10 flex min-h-dvh flex-1 flex-col isolate">
            {children}
          </div>
        </LenisRoot>
      </body>
    </html>
  );
}
