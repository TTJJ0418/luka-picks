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

export const metadata: Metadata = {
  title: {
    default: "Luka Picks · 卢卡精选",
    template: "%s · Luka Picks",
  },
  description:
    "面向中国中小型犬的场景选品与周榜：出行、掉毛护理、零食等。由狗狗 Luka 背书。",
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
        <Header />
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
