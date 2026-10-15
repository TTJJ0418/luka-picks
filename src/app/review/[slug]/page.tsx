import Link from "next/link";
import { Suspense } from "react";
import { rankings } from "@/data/rankings";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const fromRanks = rankings.flatMap((r) =>
    r.products.map((p) => ({ slug: p.reviewSlug })),
  );
  const samples = [
    { slug: "sample-1" },
    { slug: "sample-2" },
    { slug: "sample-3" },
  ];
  const seen = new Set<string>();
  return [...fromRanks, ...samples].filter((p) => {
    if (seen.has(p.slug)) return false;
    seen.add(p.slug);
    return true;
  });
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const product = rankings
    .flatMap((r) => r.products)
    .find((p) => p.reviewSlug === slug);
  return { title: product ? `评测 · ${product.name}` : `评测 · ${slug}` };
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
  const product = rankings
    .flatMap((r) => r.products)
    .find((p) => p.reviewSlug === slug);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-amber-800">单品评测</p>
        <h1 className="mt-1 text-3xl font-bold text-stone-900">
          {product ? product.name : `评测占位：${slug}`}
        </h1>
        <p className="mt-2 max-w-2xl text-stone-600">
          {product
            ? product.blurb
            : "完整评测正文将在 Day 3+ 补充。"}
        </p>
      </div>

      <article className="rounded-2xl border border-dashed border-stone-200 bg-white p-6 text-stone-600">
        <h2 className="font-semibold text-stone-900">内容待补充</h2>
        <ul className="mt-3 list-inside list-disc space-y-1 text-sm">
          <li>适合哪些中小型犬场景</li>
          <li>Luka 实测感受（占位）</li>
          <li>价格带与替代选项</li>
        </ul>
      </article>

      <div className="flex flex-wrap gap-4 text-sm">
        <Link href="/rank/travel" className="text-amber-800 hover:underline">
          ← 回看出行榜
        </Link>
        <Link href="/" className="text-stone-500 hover:underline">
          首页
        </Link>
      </div>
    </div>
  );
}
