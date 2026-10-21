import type { Metadata } from "next";
import Link from "next/link";

const sponsorTitle = "品牌合作";
const sponsorDescription =
  "Luka Picks 品牌赞助说明：场景榜位、评测露出、后续简报提及。合作联系方式待 Steven 填写。";

export const metadata: Metadata = {
  title: sponsorTitle,
  description: sponsorDescription,
  alternates: { canonical: "/sponsor" },
  openGraph: {
    title: sponsorTitle,
    description: sponsorDescription,
    url: "/sponsor",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: sponsorTitle,
    description: sponsorDescription,
  },
};

const tiers = [
  {
    name: "体验档",
    tag: "示例报价",
    price: "示例 ¥800–1,200 / 月",
    points: [
      "场景榜单内 1 个标注赞助位（非编辑首选位）",
      "对应单品评测页底部赞助说明",
      "适合试水中小型犬品类的新品牌",
    ],
  },
  {
    name: "场景档",
    tag: "示例报价",
    price: "示例 ¥1,800–2,500 / 月",
    points: [
      "整周场景榜露出 + 首页卡片角标",
      "1 篇深度评测位（内容仍按 Luka 标准审）",
      "适合已有复购的牵引 / 洗护 / 零食品牌",
    ],
  },
  {
    name: "主理档",
    tag: "示例报价",
    price: "示例 ¥3,000+ / 月",
    points: [
      "月度主推场景合作（限量）",
      "评测 + 榜单 + 后续简报提及（newsletter 上线后）",
      "适合想长期绑定中小型犬内容的品牌方",
    ],
  },
];

export default function SponsorPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-sm font-medium text-amber-800">Brand sponsorship</p>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">
          品牌合作 / 赞助
        </h1>
        <p className="max-w-2xl text-[15px] leading-relaxed text-stone-600">
          Luka Picks（卢卡精选）做给中国中小型犬主人看的场景榜与评测。读者要的是「少踩雷」，
          不是硬广堆砌——所以赞助位有限，内容仍由我们把关。变现目标约 ¥3,000 /
          月，路径是品牌赞助 + 淘宝 / 京东联盟。
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-stone-200 bg-white p-5">
          <h2 className="font-semibold text-stone-900">适合谁</h2>
          <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm leading-relaxed text-stone-600">
            <li>牵引、胸背、出行包等中小型犬友好装备</li>
            <li>梳毛、洗护、尿垫等刚需消耗品</li>
            <li>训练零食、洁齿磨牙（配方清晰、可复购）</li>
            <li>愿意接受真实使用反馈、不要求「必吹」的品牌</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-5">
          <h2 className="font-semibold text-stone-900">赞助方能得到什么</h2>
          <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm leading-relaxed text-stone-600">
            <li>
              <span className="font-medium text-stone-800">榜单位：</span>
              场景排名页内的赞助标注位
            </li>
            <li>
              <span className="font-medium text-stone-800">评测位：</span>
              单品评测页露出与说明（可标注赞助）
            </li>
            <li>
              <span className="font-medium text-stone-800">简报提及：</span>
              newsletter 上线后的月度点名（规划中）
            </li>
            <li>
              <span className="font-medium text-stone-800">不做：</span>
              伪造测评结论、隐瞒赞助关系
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
          <h2 className="text-xl font-semibold text-stone-900">合作套餐</h2>
          <p className="text-xs text-stone-400">
            以下价格均为示例占位，非正式报价
          </p>
        </div>
        <ul className="grid gap-4 lg:grid-cols-3">
          {tiers.map((tier) => (
            <li
              key={tier.name}
              className="flex flex-col rounded-2xl border border-amber-100 bg-gradient-to-b from-amber-50/80 to-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-stone-900">
                  {tier.name}
                </h3>
                <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-amber-800 ring-1 ring-amber-100">
                  {tier.tag}
                </span>
              </div>
              <p className="mt-2 text-sm font-medium text-amber-900">
                {tier.price}
              </p>
              <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-stone-600">
                {tier.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-stone-200 bg-stone-50 px-6 py-8 sm:px-8">
        <h2 className="text-xl font-semibold text-stone-900">合作请联系</h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone-600">
          请直接联系 Steven（Luka Picks 主理）。本页不发送邮件、不收集表单——避免误触外发。
          邮箱请替换成真实联系方式后再对外发布。
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-stone-400">
              邮箱（占位）
            </p>
            <p className="mt-1 font-medium text-stone-800">
              your-email@example.com
            </p>
            <p className="mt-1 text-xs text-stone-400">
              联系方式待定 · Steven 填写后替换
            </p>
            <a
              href="mailto:your-email@example.com?subject=Luka%20Picks%20品牌合作咨询"
              className="mt-3 inline-flex rounded-full bg-amber-900 px-4 py-2 text-sm font-medium text-amber-50 hover:bg-amber-800"
            >
              打开邮件草稿（mailto 占位）
            </a>
          </div>

          <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-stone-400">
              留言草稿（不提交）
            </p>
            <form className="mt-2 space-y-2" action="#" method="get">
              <input
                type="text"
                name="brand"
                placeholder="品牌名称"
                disabled
                className="w-full rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-500"
              />
              <textarea
                name="note"
                rows={3}
                placeholder="合作意向简述（表单暂未接通，请改用邮件）"
                disabled
                className="w-full rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-500"
              />
              <button
                type="button"
                disabled
                className="rounded-full border border-stone-200 px-4 py-2 text-sm text-stone-400"
              >
                提交已关闭 · 请邮件联系
              </button>
            </form>
          </div>
        </div>
      </section>

      <Link href="/" className="inline-block text-sm text-amber-800 hover:underline">
        ← 返回首页
      </Link>
    </div>
  );
}
