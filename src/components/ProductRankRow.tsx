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
    <li className="flex flex-col gap-4 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:gap-5 sm:p-5">
      <div className="flex items-center gap-4 sm:w-16 sm:shrink-0 sm:flex-col sm:gap-1">
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
          <h3 className="text-base font-semibold text-stone-900 sm:text-lg">
            {product.name}
          </h3>
          {product.badge ? (
            <span className="rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-900 ring-1 ring-amber-100">
              {product.badge}
            </span>
          ) : null}
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
          {product.blurb}
        </p>
      </div>

      <div className="flex shrink-0 gap-2 sm:flex-col sm:items-stretch">
        <Link
          href={`/review/${product.reviewSlug}`}
          className="inline-flex items-center justify-center rounded-full bg-amber-800 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700"
        >
          看评测
        </Link>
        <span className="inline-flex items-center justify-center rounded-full border border-dashed border-stone-300 px-4 py-2 text-sm text-stone-400">
          购买链接 · 待接
        </span>
      </div>
    </li>
  );
}
