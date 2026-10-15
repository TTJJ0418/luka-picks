import Link from "next/link";
import type { Ranking } from "@/data/rankings";

export function RankingCard({ ranking }: { ranking: Ranking }) {
  return (
    <Link
      href={`/rank/${ranking.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-line bg-cream p-5 shadow-[0_1px_2px_rgba(28,25,23,0.04)] transition hover:-translate-y-0.5 hover:border-amber-200 hover:shadow-[0_8px_24px_rgba(154,52,18,0.08)]"
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-xl ring-1 ring-amber-100/80"
          aria-hidden
        >
          {ranking.emoji}
        </span>
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
            ranking.live
              ? "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-100"
              : "bg-stone-100/80 text-stone-500 ring-1 ring-stone-200/80"
          }`}
        >
          {ranking.live ? "本周可看" : "即将上线"}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-stone-900 group-hover:text-amber-950">
        {ranking.shortTitle}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
        {ranking.blurb}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber-900">
        {ranking.live ? "查看完整榜单" : "看看进度"}
        <span aria-hidden className="transition group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
