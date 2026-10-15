import Link from "next/link";
import { Suspense } from "react";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return [{ slug: "sample-1" }, { slug: "sample-2" }, { slug: "sample-3" }];
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  return { title: `评测 · ${slug}` };
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

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-amber-800">单品评测</p>
        <h1 className="mt-1 text-3xl font-bold text-stone-900">
          评测占位：{slug}
        </h1>
        <p className="mt-2 max-w-2xl text-stone-600">
          路由：
          <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">
            /review/{slug}
          </code>
          。后续将包含适用体型、场景要点、优缺点与购买入口（淘宝 / 京东联盟）。
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

      <Link href="/" className="inline-block text-sm text-amber-800 hover:underline">
        ← 返回首页
      </Link>
    </div>
  );
}
