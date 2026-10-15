import Link from "next/link";
import type { RankProduct } from "@/data/rankings";

export function ProductRankRow({
  product,
  rank,
}: {
  product: RankProduct;
  rank: number;
}) {
  return (
    <li className="flex flex-col gap-4 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm sm:flex-row sm:items-stretch sm:gap-5 sm:p-5">
      <div className="flex items-center gap-4 sm:w-[4.5rem] sm:shrink-0 sm:flex-col sm:justify-center sm:gap-1">
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
            rank === 1
              ? "bg-amber-800 text-white"
              : rank === 2
                ? "bg-amber-600 text-white"
                : rank === 3
                  ? "bg-amber-400 text-amber-950"
                  : "bg-stone-100 text-stone-700"
          }`}
        >
          {rank}
        </span>
        <span className="text-sm font-semibold tabular-nums text-amber-900 sm:text-base">
          {product.score.toFixed(1)}
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600">
            {product.category}
          </span>
          {product.badge ? (
            <span className="rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-900 ring-1 ring-amber-100">
              {product.badge}
            </span>
          ) : null}
          <span className="text-xs text-stone-400">{product.priceRange}</span>
        </div>
        <h3 className="mt-1.5 text-base font-semibold text-stone-900 sm:text-lg">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
          {product.blurb}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-stone-500">
          <span className="font-medium text-stone-700">为何上榜：</span>
          {product.whyRanked}
        </p>
      </div>

      <div className="flex shrink-0 flex-col gap-2 sm:w-36 sm:justify-center">
        <Link
          href={`/review/${product.reviewSlug}`}
          className="inline-flex items-center justify-center rounded-full bg-amber-800 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700"
        >
          看评测
        </Link>
        <a
          href={product.affiliateUrl}
          className="inline-flex items-center justify-center rounded-full border border-dashed border-amber-200 px-4 py-2 text-center text-xs leading-snug text-amber-800/80 hover:bg-amber-50"
          title="联盟链接占位，非真实跳转购买"
        >
          购买链接（占位）
        </a>
      </div>
    </li>
  );
}
