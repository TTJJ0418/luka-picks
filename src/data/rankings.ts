export type RankProduct = {
  id: string;
  name: string;
  blurb: string;
  score: number;
  reviewSlug: string;
  badge?: string;
};

export type Ranking = {
  slug: string;
  title: string;
  shortTitle: string;
  emoji: string;
  blurb: string;
  intro: string;
  updatedLabel: string;
  live: boolean;
  products: RankProduct[];
};

export const rankings: Ranking[] = [
  {
    slug: "travel",
    title: "中小型犬出行必备",
    shortTitle: "出行必备",
    emoji: "🎒",
    blurb: "出门遛一遛、短途自驾、宠物友好咖啡馆——五样够用就好。",
    intro:
      "按「中小型犬日常出门」场景整理：轻、稳、好洗、不吓狗。分数为占位分，Day 3 会换成实测与链接。",
    updatedLabel: "本周更新 · 出行",
    live: true,
    products: [
      {
        id: "t1",
        name: "双扣胸背带（超轻网布）",
        blurb: "不易勒脖，穿脱快；适合 3–12kg。优先选可调肩带与反光条。",
        score: 9.2,
        reviewSlug: "light-harness",
        badge: "编辑首选",
      },
      {
        id: "t2",
        name: "可伸缩牵引绳（带刹车）",
        blurb: "城市人行道够用；注意刹车手感，避开过长、过沉的款。",
        score: 8.6,
        reviewSlug: "retractable-leash",
      },
      {
        id: "t3",
        name: "折叠硅胶水碗",
        blurb: "口袋级补水，洗完一甩就干。出门两小时以上几乎必备。",
        score: 8.9,
        reviewSlug: "fold-water-bowl",
        badge: "性价比",
      },
      {
        id: "t4",
        name: "透气外出包 / 双肩宠物包",
        blurb: "地铁、短途公交用；看重通风窗与底部承托，别只看颜值。",
        score: 8.4,
        reviewSlug: "pet-carrier-backpack",
      },
      {
        id: "t5",
        name: "拾便袋套装 + 腰挂",
        blurb: "小事不丢人：袋够厚、单手可抽，腰挂比塞口袋省心。",
        score: 8.1,
        reviewSlug: "poop-bag-kit",
      },
    ],
  },
  {
    slug: "shedding-care",
    title: "掉毛护理周榜",
    shortTitle: "掉毛护理",
    emoji: "🧹",
    blurb: "梳得动、吸得走、沙发还能坐——换季掉毛自救清单。",
    intro: "榜单筹备中，产品位将在下一轮补齐。",
    updatedLabel: "即将上线",
    live: false,
    products: [],
  },
  {
    slug: "snacks",
    title: "零食好物周榜",
    shortTitle: "零食好物",
    emoji: "🦴",
    blurb: "训练奖励、磨牙、低敏零食——少踩雷、好下手。",
    intro: "榜单筹备中，产品位将在下一轮补齐。",
    updatedLabel: "即将上线",
    live: false,
    products: [],
  },
];

export function getRanking(slug: string): Ranking | undefined {
  return rankings.find((r) => r.slug === slug);
}

export function getLiveRankings(): Ranking[] {
  return rankings;
}
