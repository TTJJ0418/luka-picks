import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "品牌合作",
};

export default function SponsorPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-stone-900">品牌合作 / 赞助</h1>
        <p className="mt-3 max-w-2xl leading-relaxed text-stone-600">
          Luka Picks 面向中国中小型犬主人做场景榜单与评测。商业化路径以品牌赞助 +
          淘宝 / 京东联盟为主，目标约 ¥3,000 / 月。本页为占位，暂不开放表单提交。
        </p>
      </div>

      <div className="rounded-2xl border border-amber-100 bg-amber-50/60 p-6">
        <h2 className="font-semibold text-amber-950">适合合作的方向</h2>
        <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-stone-700">
          <li>出行与出游装备</li>
          <li>掉毛护理与清洁</li>
          <li>零食与训练用品</li>
        </ul>
        <p className="mt-4 text-sm text-stone-500">
          联系方式与媒介资料将在后续版本补充。请勿在此页提交敏感信息。
        </p>
      </div>

      <Link href="/" className="inline-block text-sm text-amber-800 hover:underline">
        ← 返回首页
      </Link>
    </div>
  );
}
