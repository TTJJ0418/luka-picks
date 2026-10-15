import Link from "next/link";
import { Suspense } from "react";

type Params = Promise<{ slug: string }>;

const titles: Record<string, string> = {
  travel: "出行 / 出游装备",
  "shedding-care": "掉毛护理",
  snacks: "零食选品",
};

export async function generateStaticParams() {
  return [
    { slug: "travel" },
    { slug: "shedding-care" },
    { slug: "snacks" },
  ];
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const title = titles[slug] ?? slug;
  return { title: `${title}榜` };
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
  const title = titles[slug] ?? slug;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-amber-800">场景榜单</p>
        <h1 className="mt-1 text-3xl font-bold text-stone-900">{title}</h1>
        <p className="mt-2 text-stone-600">
          路由：
          <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">
            /rank/{slug}
          </code>
          。本页为 Week 1 占位，后续将展示产品排名、要点与联盟链接。
        </p>
      </div>

      <ol className="space-y-3">
        {[1, 2, 3].map((n) => (
          <li
            key={n}
            className="flex items-start gap-4 rounded-2xl border border-dashed border-stone-200 bg-white p-4"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-900">
              {n}
            </span>
            <div>
              <p className="font-medium text-stone-800">待定产品 #{n}</p>
              <p className="mt-1 text-sm text-stone-500">
                Day 2+ 将填入评测摘要与{" "}
                <Link
                  href={`/review/sample-${n}`}
                  className="text-amber-800 underline"
                >
                  /review/sample-{n}
                </Link>
              </p>
            </div>
          </li>
        ))}
      </ol>

      <Link href="/" className="inline-block text-sm text-amber-800 hover:underline">
        ← 返回首页
      </Link>
    </div>
  );
}
