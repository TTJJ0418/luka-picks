export type RankProduct = {
  id: string;
  category: string;
  name: string;
  blurb: string;
  whyRanked: string;
  score: number;
  priceRange: string;
  reviewSlug: string;
  /** Placeholder until real Taobao/JD affiliate is wired */
  affiliateUrl: string;
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

/** Affiliate placeholder — replace with real Taobao/JD union links later */
export const AFFILIATE_PLACEHOLDER =
  "https://example.com/affiliate-placeholder";

export const rankings: Ranking[] = [
  {
    slug: "starter",
    title: "中小型犬入门五件套",
    shortTitle: "入门五件套",
    emoji: "🏡",
    blurb:
      "牵引、梳毛、零食、洗护、尿垫——家里刚养中小型犬，先把这五样备齐。",
    intro:
      "按「新手刚需」排的：都是淘宝 / 京东上真实在卖、中小型犬主人常回购的款。分数是 Luka 视角的主观分，价格为近期电商常见区间，购买链接暂为联盟占位。",
    updatedLabel: "本周主推 · 入门",
    live: true,
    products: [
      {
        id: "s1",
        category: "牵引",
        name: "Puppytie 自动收紧背心式胸背带",
        blurb:
          "我们家 Luka 出门就靠这件：前冲一下会收紧，但不勒脖子。中小型犬选对码（按最粗胸围），夏天网眼款透气，晚上反光条也安心。",
        whyRanked:
          "中小型犬防挣脱口碑稳，工字/背心结构比项圈友好；常见价约 ¥120–150。",
        score: 9.3,
        priceRange: "约 ¥120–150",
        reviewSlug: "puppytie-harness",
        affiliateUrl: AFFILIATE_PLACEHOLDER,
        badge: "出门第一件",
      },
      {
        id: "s2",
        category: "梳毛",
        name: "富美内特 FURminator 小型犬祛毛梳",
        blurb:
          "换季掉毛那两周，梳完地板能扫出一小团——但总比粘满沙发强。选小号 / 小型犬长毛或短毛对应款，别硬刮，顺着毛轻轻过就行。",
        whyRanked:
          "京东 / 天猫有售的经典祛底绒梳，按体重选码；小型犬款常见约 ¥150–220。",
        score: 9.0,
        priceRange: "约 ¥150–220",
        reviewSlug: "furminator-small",
        affiliateUrl: AFFILIATE_PLACEHOLDER,
        badge: "掉毛救星",
      },
      {
        id: "s3",
        category: "零食",
        name: "宝路 Pedigree 中小型犬绿茶洁齿棒",
        blurb:
          "训练只给半根就够了，Luka 闻着就来劲。绿茶味不太腻，当磨牙 + 奖励两用；别当正餐，一天分几次更省心。",
        whyRanked:
          "宝路洁齿棒是中小型犬训练奖励常客，单包 75g 装好分装；常见约 ¥15–40（按包装）。",
        score: 8.7,
        priceRange: "约 ¥15–40",
        reviewSlug: "pedigree-dental-stick",
        affiliateUrl: AFFILIATE_PLACEHOLDER,
        badge: "训练奖励",
      },
      {
        id: "s4",
        category: "洗护",
        name: "逸诺 enoug SOS 狗狗沐浴露 530ml",
        blurb:
          "洗澡我怕刺激眼睛，这瓶全犬通用冲完味道淡一点就行。稀释着用更省，洗完用旧毛巾揉干，别对着脸猛冲。",
        whyRanked:
          "逸诺 SOS 系列在京东常见，抑菌除臭定位清晰；530ml 全犬款大约 ¥35–50。",
        score: 8.5,
        priceRange: "约 ¥35–50",
        reviewSlug: "enoug-sos-shampoo",
        affiliateUrl: AFFILIATE_PLACEHOLDER,
      },
      {
        id: "s5",
        category: "尿垫",
        name: "HONEYCARE 好命家 宠物尿垫 M码 45×60cm",
        blurb:
          "定点训练那阵子一天换好几片，吸得快、底不渗才敢铺客厅。M 码对中小型犬刚好；便宜片可以备，但漏了更烦。",
        whyRanked:
          "好命家 / HONEYCARE 是京东尿垫高评常客，50 片装常见约 ¥30–45。",
        score: 8.8,
        priceRange: "约 ¥30–45 / 50片",
        reviewSlug: "honeycare-pad-m",
        affiliateUrl: AFFILIATE_PLACEHOLDER,
        badge: "消耗品之王",
      },
    ],
  },
  {
    slug: "travel",
    title: "中小型犬出行必备",
    shortTitle: "出行必备",
    emoji: "🎒",
    blurb: "出门遛一遛、短途自驾、宠物友好咖啡馆——清单下一轮补真货。",
    intro: "场景榜筹备中；先看「入门五件套」里的胸背带等刚需。",
    updatedLabel: "即将上线",
    live: false,
    products: [],
  },
  {
    slug: "shedding-care",
    title: "掉毛护理周榜",
    shortTitle: "掉毛护理",
    emoji: "🧹",
    blurb: "梳得动、吸得走、沙发还能坐——换季掉毛自救清单。",
    intro: "榜单筹备中；入门五件套里已有 FURminator 梳毛位。",
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
    intro: "榜单筹备中；入门五件套里已有宝路洁齿棒。",
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

export function getProductByReviewSlug(slug: string): RankProduct | undefined {
  return rankings.flatMap((r) => r.products).find((p) => p.reviewSlug === slug);
}
