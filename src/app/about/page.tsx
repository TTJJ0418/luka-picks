import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://luka-picks.vercel.app";
const aboutTitle = "关于 Luka";
const aboutDescription =
  "Luka 是一只中小型犬，背后账号约 600 位关注者。Luka Picks（卢卡精选）以 Luka 的日常场景为切口，整理面向中国中小型犬的选品与周榜。";
const aboutUrl = `${siteUrl}/about`;

export const metadata: Metadata = {
  title: aboutTitle,
  description: aboutDescription,
  alternates: { canonical: "/about" },
  openGraph: {
    title: aboutTitle,
    description: aboutDescription,
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: aboutTitle,
    description: aboutDescription,
  },
};

const aboutJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: aboutTitle,
    description: aboutDescription,
    url: aboutUrl,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "首页", item: siteUrl },
      { "@type": "ListItem", position: 2, name: aboutTitle, item: aboutUrl },
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div>
        <h1 className="text-3xl font-bold text-stone-900">关于 Luka</h1>
        <p className="mt-3 max-w-2xl leading-relaxed text-stone-600">
          Luka 是一只中小型犬，背后账号约 600 位关注者。Luka Picks（卢卡精选）以 Luka
          的日常场景为切口，整理面向中国中小型犬（不锁品种）的选品与周榜——先做内容与信任，再谈变现。
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-stone-200 bg-white p-5">
          <h2 className="font-semibold text-stone-900">我们做什么</h2>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            场景排名优先：出行、掉毛护理、零食等。评测页补充细节，帮助铲屎官快速决策。
          </p>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-5">
          <h2 className="font-semibold text-stone-900">我们不做</h2>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            不做品种锁定站点（不是某单一犬种站），也不走 PetPicks.cn 品牌名。
          </p>
        </div>
      </div>

      <Link href="/" className="inline-block text-sm text-amber-800 hover:underline">
        ← 返回首页
      </Link>
    </div>
  );
}
