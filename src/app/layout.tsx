import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://luka-picks.vercel.app";
const siteTitle = "Luka Picks · 卢卡精选";
const siteDescription =
  "面向中国中小型犬的场景选品与周榜：入门五件套、掉毛护理、出行、零食等。由狗狗 Luka 背书。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s · Luka Picks",
  },
  description: siteDescription,
  keywords: [
    "中小型犬",
    "小型犬",
    "宠物用品",
    "选品榜单",
    "掉毛护理",
    "入门五件套",
    "Luka Picks",
    "卢卡精选",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    locale: "zh_CN",
    siteName: siteTitle,
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationId = `${siteUrl}/#organization`;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": organizationId,
  name: siteTitle,
  url: siteUrl,
  description: siteDescription,
  inLanguage: "zh-CN",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteTitle,
  url: siteUrl,
  description: siteDescription,
  inLanguage: "zh-CN",
  publisher: { "@id": organizationId },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
        <Header />
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
