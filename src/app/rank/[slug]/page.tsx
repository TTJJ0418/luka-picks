import Link from "next/link";
import { Suspense } from "react";
import { ProductRankRow } from "@/components/ProductRankRow";
import { getRanking, rankings } from "@/data/rankings";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return rankings.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const ranking = getRanking(slug);
  if (!ranking) return { title: "榜单未找到" };
  const title = ranking.live
    ? `${ranking.title}榜`
    : `${ranking.shortTitle} · 即将上线`;
  const description = ranking.blurb;
  const url = `/rank/${ranking.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default function RankPage({ params }: { params: Params }) {
  return (
    <Suspense fallback={<p className="text-stone-500">加载榜单…</p>}>
      <RankContent params={params} />
    </Suspense>
  );
}

async function RankContent({ params }: { params: Params }) {
  const { slug } = await params;
  const ranking = getRanking(slug);

  if (!ranking) {
    return (
      <div className="space-y-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-stone-900">没有这个榜单</h1>
        <p className="text-stone-600">slug「{slug}」还不存在，或已下线。</p>
        <Link href="/" className="inline-block text-sm text-amber-800 hover:underline">
          ← 回首页看看本周榜
        </Link>
      </div>
    );
  }

  if (!ranking.live) {
    return (
      <div className="space-y-6">
        <div className="rounded-3xl border border-dashed border-amber-200 bg-amber-50/50 px-6 py-10 text-center">
          <span className="text-3xl" aria-hidden>
            {ranking.emoji}
          </span>
          <h1 className="mt-3 text-2xl font-bold text-stone-900">
            {ranking.title}
          </h1>
          <p className="mx-auto mt-2 max-w-md text-stone-600">{ranking.blurb}</p>
          <p className="mt-4 inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-medium text-amber-900 ring-1 ring-amber-100">
            即将上线 · 先看入门五件套
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/rank/starter" className="font-medium text-amber-800 hover:underline">
            去看入门五件套 →
          </Link>
          <Link href="/" className="text-stone-500 hover:underline">
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  const siteUrl = "https://luka-picks.vercel.app";
  const pageUrl = `${siteUrl}/rank/${ranking.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: ranking.title,
      description: ranking.blurb,
      url: pageUrl,
      numberOfItems: ranking.products.length,
      itemListElement: ranking.products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        url: `${siteUrl}/review/${product.reviewSlug}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "首页", item: siteUrl },
        { "@type": "ListItem", position: 2, name: ranking.title, item: pageUrl },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <header className="space-y-3 border-b border-stone-200 pb-6">
        <div className="flex flex-wrap items-center gap-2 text-sm text-amber-800">
          <Link href="/" className="hover:underline">
            首页
          </Link>
          <span className="text-stone-300">/</span>
          <span>场景榜单</span>
          <span className="ml-auto rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-800 ring-1 ring-emerald-100">
            {ranking.updatedLabel}
          </span>
        </div>
        <div className="flex items-start gap-3">
          <span
            className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-2xl ring-1 ring-amber-100"
            aria-hidden
          >
            {ranking.emoji}
          </span>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-stone-900">
              {ranking.title}
            </h1>
            <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-stone-600">
              {ranking.intro}
            </p>
          </div>
        </div>
      </header>

      <ol className="space-y-3">
        {ranking.products.map((product, index) => (
          <ProductRankRow
            key={product.id}
            product={product}
            rank={index + 1}
          />
        ))}
      </ol>

      <p className="rounded-xl bg-stone-50 px-4 py-3 text-xs leading-relaxed text-stone-500">
        声明：品牌与价位来自淘宝 / 京东常见在售款，分数为主观排序。「淘宝看看 / 京东看看」指向 example.com/PLACEHOLDER-* 占位，拿到真实联盟 ID 后只需改 src/data/rankings.ts。
      </p>

      <Link href="/" className="inline-block text-sm text-amber-800 hover:underline">
        ← 返回首页
      </Link>
    </div>
  );
}
