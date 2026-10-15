import Link from "next/link";

const weeklyRankings = [
  {
    slug: "travel",
    title: "出行 / 出游装备",
    blurb: "背包、牵引、便携水碗等中小型犬友好清单",
  },
  {
    slug: "shedding-care",
    title: "掉毛护理",
    blurb: "梳毛、吸尘器、防毛喷雾等实用组合",
  },
  {
    slug: "snacks",
    title: "零食选品",
    blurb: "训练奖励、磨牙、低敏零食周榜",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-gradient-to-br from-amber-100 via-orange-50 to-stone-50 px-6 py-10 shadow-sm ring-1 ring-amber-100/80">
        <p className="text-sm font-medium text-amber-800">Week 1 · MVP 脚手架</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Luka Picks
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone-700">
          面向中国中小型犬的场景选品与周榜。先做场景排名（出行、掉毛护理、零食等），
          后续接入品牌赞助与淘宝 / 京东联盟。由狗狗 Luka（约 600 粉账号）背书。
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/rank/travel"
            className="rounded-full bg-amber-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-amber-700"
          >
            查看本周榜单
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-amber-200 bg-white px-5 py-2.5 text-sm font-medium text-amber-900 hover:bg-amber-50"
          >
            认识 Luka
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold text-stone-900">本周场景榜</h2>
          <p className="text-sm text-stone-500">占位内容 · Day 2 将填充真实数据</p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-3">
          {weeklyRankings.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/rank/${item.slug}`}
                className="block h-full rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-amber-200 hover:shadow-md"
              >
                <h3 className="font-semibold text-stone-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {item.blurb}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-amber-800">
                  进入榜单 →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
