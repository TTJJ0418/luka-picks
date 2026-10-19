import Link from "next/link";
import { Suspense } from "react";
import { AffiliateButtons } from "@/components/AffiliateButtons";
import { getRankingByReviewSlug, rankings } from "@/data/rankings";
import { getReviewDetail } from "@/data/reviews";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const fromRanks = rankings.flatMap((r) =>
    r.products.map((p) => ({ slug: p.reviewSlug })),
  );
  const seen = new Set<string>();
  return fromRanks.filter((p) => {
    if (seen.has(p.slug)) return false;
    seen.add(p.slug);
    return true;
  });
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const { product, detail } = getReviewDetail(slug);
  return {
    title: product ? `评测 · ${product.name}` : `评测 · ${slug}`,
    description: product ? (detail?.lead ?? product.blurb).slice(0, 120) : undefined,
    alternates: { canonical: `/review/${slug}` },
  };
}

export default function ReviewPage({ params }: { params: Params }) {
  return (
    <Suspense fallback={<p className="text-stone-500">加载评测…</p>}>
      <ReviewContent params={params} />
    </Suspense>
  );
}

async function ReviewContent({ params }: { params: Params }) {
  const { slug } = await params;
  const { product, detail } = getReviewDetail(slug);
  const parent = getRankingByReviewSlug(slug);
  const backHref = parent ? `/rank/${parent.slug}` : "/rank/starter";
  const backLabel = parent ? `← 回${parent.shortTitle}` : "← 回入门五件套";

  if (!product) {
    return (
      <div className="space-y-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-stone-900">还没有这篇评测</h1>
        <p className="text-stone-600">slug「{slug}」暂未收录。</p>
        <Link
          href="/rank/starter"
          className="inline-block text-sm text-amber-800 hover:underline"
        >
          ← 回看入门五件套
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header className="space-y-3 border-b border-stone-200 pb-6">
        <p className="text-sm text-amber-800">
          单品评测 · {product.category}
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">
          {product.name}
        </h1>
        <p className="text-sm text-stone-500">{product.priceRange}</p>
        <p className="max-w-2xl text-[15px] leading-relaxed text-stone-600">
          {detail?.lead ?? product.blurb}
        </p>
      </header>

      {detail ? (
        <div className="space-y-6">
          {detail.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-semibold text-stone-900">
                {section.heading}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {section.body}
              </p>
            </section>
          ))}
          <section className="rounded-2xl bg-amber-50/70 px-5 py-4 ring-1 ring-amber-100">
            <h2 className="text-sm font-semibold text-amber-950">小提示</h2>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-stone-700">
              {detail.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </section>
        </div>
      ) : (
        <article className="rounded-2xl border border-dashed border-stone-200 bg-white p-6 text-stone-600">
          <h2 className="font-semibold text-stone-900">评测正文待补充</h2>
          <p className="mt-2 text-sm leading-relaxed">{product.blurb}</p>
          <p className="mt-3 text-xs text-stone-500">
            为何上榜：{product.whyRanked}
          </p>
        </article>
      )}

      <div className="flex flex-col gap-3 border-t border-stone-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs text-stone-400">
            购买入口为联盟占位（example.com/PLACEHOLDER-*），非真实追踪链接
          </p>
          <div className="mt-2">
            <AffiliateButtons product={product} size="md" />
          </div>
        </div>
        <Link
          href={backHref}
          className="text-sm text-amber-800 hover:underline"
        >
          {backLabel}
        </Link>
      </div>
    </div>
  );
}
