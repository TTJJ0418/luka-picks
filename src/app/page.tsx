import Link from "next/link";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { RankingCard } from "@/components/RankingCard";
import { getLiveRankings } from "@/data/rankings";

export default function HomePage() {
  const list = getLiveRankings();
  const featured = list.find((r) => r.live) ?? list[0];

  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl bg-cream px-6 py-10 shadow-[0_1px_2px_rgba(28,25,23,0.04)] ring-1 ring-line sm:px-10 sm:py-12">
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-amber-200/40 blur-2xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-20 left-10 h-40 w-40 rounded-full bg-orange-100/70 blur-2xl"
          aria-hidden
        />
        <p className="relative text-sm font-medium text-amber-800">
          卢卡精选 · 中小型犬场景指南
        </p>
        <h1 className="relative mt-3 max-w-xl text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl sm:leading-tight">
          少踩雷的周榜，
          <br className="hidden sm:block" />
          从 Luka 的日常场景里来
        </h1>
        <p className="relative mt-4 max-w-xl text-[15px] leading-relaxed text-stone-700">
          Luka Picks 面向中国中小型犬主人：不锁品种，先从入门五件套（牵引、梳毛、零食、洗护、尿垫）开始，再铺场景榜。
          先帮你挑得准，再谈赞助与联盟链接。
        </p>
        <div className="relative mt-7 flex flex-wrap gap-3">
          <Link
            href={`/rank/${featured.slug}`}
            className="rounded-full bg-amber-900 px-5 py-2.5 text-sm font-medium text-amber-50 shadow-sm hover:bg-amber-800"
          >
            看本周「{featured.shortTitle}」
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-amber-200/80 bg-white/80 px-5 py-2.5 text-sm font-medium text-amber-950 backdrop-blur hover:bg-white"
          >
            关于狗狗 Luka
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-stone-900">
              本周场景榜
            </h2>
            <p className="mt-1 text-sm text-stone-500">
              先场景、再单品。点进去看排名与短评。
            </p>
          </div>
          <p className="text-xs text-stone-400">入门 + 掉毛已上线 · 联盟链接待接</p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-3">
          {list.map((item) => (
            <li key={item.slug}>
              <RankingCard ranking={item} />
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-line bg-cream px-5 py-6 sm:px-7">
        <h2 className="text-base font-semibold text-stone-900">怎么用这份榜</h2>
        <ol className="mt-3 grid gap-3 text-sm leading-relaxed text-stone-600 sm:grid-cols-3">
          <li className="rounded-xl bg-stone-50 px-4 py-3">
            <span className="font-medium text-stone-800">1. 选场景</span>
            <p className="mt-1">出门、掉毛、零食——按你这周最头疼的事点进去。</p>
          </li>
          <li className="rounded-xl bg-stone-50 px-4 py-3">
            <span className="font-medium text-stone-800">2. 看短评</span>
            <p className="mt-1">每条只写中小型犬真正在意的点：重量、勒感、好不好洗。</p>
          </li>
          <li className="rounded-xl bg-stone-50 px-4 py-3">
            <span className="font-medium text-stone-800">3. 再下单</span>
            <p className="mt-1">购买链接稍后接入淘宝 / 京东；先当清单用也完全够。</p>
          </li>
        </ol>
      </section>

      <NewsletterSignup variant="home" />
    </div>
  );
}
