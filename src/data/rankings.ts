export type RankProduct = {
  id: string;
  category: string;
  name: string;
  blurb: string;
  whyRanked: string;
  score: number;
  priceRange: string;
  reviewSlug: string;
  /**
   * Taobao / Tmall affiliate (or product) URL.
   * Replace PLACEHOLDER values with real union links when Steven has IDs.
   */
  taobaoUrl: string;
  /**
   * JD affiliate (or product) URL.
   * Replace PLACEHOLDER values with real union links when Steven has IDs.
   */
  jdUrl: string;
  badge?: string;
  /** Internal notes only (source quality, caveats). NEVER render on public pages. */
  devNotes?: string;
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

/** Marked placeholders — NOT live tracking links. Swap per product later. */
export function placeholderTaobao(productId: string): string {
  return `https://example.com/PLACEHOLDER-taobao?id=${productId}`;
}

export function placeholderJd(productId: string): string {
  return `https://example.com/PLACEHOLDER-jd?id=${productId}`;
}

export const rankings: Ranking[] = [
  {
    slug: "starter",
    title: "小型犬新手入门五件套",
    shortTitle: "入门五件套",
    emoji: "🏡",
    blurb:
      "牵引、梳毛、洁齿零食、洗护、尿垫——按中小型犬新手场景整理，价格都标出来。",
    intro:
      "刚接小狗回家，不用一口气买很多。这里按「出门 → 打理 → 零食 → 洗澡 → 在家」整理了 5 个品类、各挑一款大家常提到的品牌，并附上平价或稳妥备选。内容为选购角度的整理与对比，评分是整理者的主观参考；价格为近期电商常见区间，会浮动，以下单页为准。",
    updatedLabel: "本周主推 · 入门",
    live: true,
    products: [
      {
        id: "s1",
        category: "牵引 / 胸背",
        name: "拉夫威尔 Ruffwear 嗨轻胸背带（XXS / XS 小码）",
        blurb:
          "按小型犬出门场景整理：嗨轻偏轻量、背心式，穿着不压脖子。豆瓣小型犬反馈里提到 XXS 码穿着不容易扭转，选码前请按最粗胸围量。优点是做工和轻量感，缺点是价格不低。预算有限的话，可以先看福莱希 Flexi 伸缩牵引绳（约 ¥70–100）——注意它是牵引绳不是胸背，需要另配胸背；人多车多的地方建议收短使用。",
        whyRanked:
          "牵引类里知名度高、小码选择明确；常见价约 ¥374–426。",
        score: 9.0,
        priceRange: "约 ¥374–426",
        reviewSlug: "ruffwear-hi-light",
        taobaoUrl: placeholderTaobao("s1-ruffwear-hi-light"),
        jdUrl: placeholderJd("s1-ruffwear-hi-light"),
        badge: "有平价备选",
        devNotes:
          "来源：豆瓣小型犬反馈（XXS 不扭转）。价格区间来自 Steven 提供，上线前复核当天价。Flexi 备选 ¥70–100 需单独复核。",
      },
      {
        id: "s2",
        category: "梳毛",
        name: "小佩 Petkit 罗马柱针梳",
        blurb:
          "针梳上手简单，带一键脱毛，梳完清理比较省事，常见价约 ¥59，在小佩的众测里排名靠前。优点是便宜、好清理；缺点是毛量大、容易打结的狗要先开结，针梳不一定够用。想再省一点，可以看憨憨乐园双面梳（约 ¥21.5）。",
        whyRanked:
          "国内宠物品牌、价格友好，适合初次买梳子的新手；常见价约 ¥59。",
        score: 8.8,
        priceRange: "约 ¥59",
        reviewSlug: "petkit-roman-comb",
        taobaoUrl: placeholderTaobao("s2-petkit-roman-comb"),
        jdUrl: placeholderJd("s2-petkit-roman-comb"),
        badge: "入门好上手",
        devNotes:
          "来源：小佩众测排名（品牌自家渠道，注意偏向性）。憨憨乐园双面梳 ~¥21.5 为备选，需复核。",
      },
      {
        id: "s3",
        category: "洁齿零食",
        name: "疯狂小狗 洁齿甜甜圈 / 绕奶骨",
        blurb:
          "做奖励或磨牙零食都常见，约 ¥12 / 根，试错成本低。注意：洁齿零食只能减缓牙菌斑，不能替代刷牙；小型犬需盯喂，按体型选大小，别当正餐。",
        whyRanked:
          "价格低、渠道多、小包装好分着给；常见约 ¥12 / 根。",
        score: 8.5,
        priceRange: "约 ¥12 / 根",
        reviewSlug: "crazy-dog-dental-donut",
        taobaoUrl: placeholderTaobao("s3-crazy-dog-dental"),
        jdUrl: placeholderJd("s3-crazy-dog-dental"),
        badge: "需盯喂",
        devNotes:
          "SOURCE QUALITY: LOW（价格与口碑依据较弱，未找到独立评测）。公开页已保留「不能替代刷牙 / 需盯喂」提示，勿删。上线前建议换更可靠来源或复核。",
      },
      {
        id: "s4",
        category: "洗护",
        name: "KONOKO 可诺可 杀菌除螨沐浴露",
        blurb:
          "价格友好，约 ¥24.9，适合想先试一瓶的新手。优点是便宜、好入手；缺点是功能向配方，皮肤容易敏感的狗建议先小范围试用，有皮肤问题以兽医建议为准。想选更稳妥的，可以看狮王艾宠（约 ¥68）。",
        whyRanked:
          "价格低、品类明确；常见价约 ¥24.9，另有狮王艾宠作稳妥备选。",
        score: 8.3,
        priceRange: "约 ¥24.9",
        reviewSlug: "konoko-shampoo",
        taobaoUrl: placeholderTaobao("s4-konoko"),
        jdUrl: placeholderJd("s4-konoko"),
        badge: "有稳妥备选",
        devNotes:
          "价格来自 Steven 提供；KONOKO 知名度一般，已配狮王艾宠（~¥68）作备选。上线前复核。",
      },
      {
        id: "s5",
        category: "尿垫",
        name: "好命家 HONEYCARE 魔法漏斗尿垫 M 码 40 片",
        blurb:
          "尿垫里认知度高的牌子，M 码对小型犬够用，常见价约 ¥30.9 / 40 片。优点是吸得快、不容易反渗；缺点是爱刨垫子的狗可能撕。遇到爱刨的，可以看厚吸主义款。",
        whyRanked:
          "消耗品，复购方便；常见约 ¥30.9 / 40 片，具体每片价格以当天活动为准。",
        score: 8.1,
        priceRange: "约 ¥30.9 / 40片",
        reviewSlug: "honeycare-funnel-pad-m",
        taobaoUrl: placeholderTaobao("s5-honeycare-funnel-m"),
        jdUrl: placeholderJd("s5-honeycare-funnel-m"),
        badge: "有加厚备选",
        devNotes:
          "价格 ¥30.9/40片 ≈ ¥0.77/片，与任务里写的 ~¥1.2/片 不一致，公开页未写每片价，待 Steven 确认规格。「厚吸主义」具体型号待核实。",
      },
    ],
  },
  {
    slug: "shedding-care",
    title: "中小型犬掉毛护理",
    shortTitle: "掉毛护理",
    emoji: "🧹",
    blurb: "梳得动、吸得走、沙发还能坐——换季掉毛自救清单。",
    intro:
      "按「狗身上梳 + 家里清」两条线排的。换季两周最管用。分数为主观分，价位为淘宝 / 京东常见区间；购买链仍为联盟占位。",
    updatedLabel: "本周可看 · 掉毛",
    live: true,
    products: [
      {
        id: "d1",
        category: "祛毛梳",
        name: "富美内特 FURminator 小型犬祛毛梳",
        blurb:
          "掉毛季常被提到的祛底绒梳。使用时顺着毛轻轻过，别硬刮皮肤；按体重选小号 / 小型犬款。",
        whyRanked:
          "经典祛底绒，京东 / 天猫有售；小型犬款常见约 ¥150–220。",
        score: 9.2,
        priceRange: "约 ¥150–220",
        reviewSlug: "furminator-small",
        taobaoUrl: placeholderTaobao("d1-furminator"),
        jdUrl: placeholderJd("d1-furminator"),
        badge: "梳毛主力",
      },
      {
        id: "d2",
        category: "吸毛理毛",
        name: "来旺兄弟 无线吸毛理毛机",
        blurb:
          "边梳边吸，浮毛不容易乱飞，换季可以拿来收尾。选带梳毛头的套装，滤网记得常清。",
        whyRanked:
          "淘宝常见宠物无线吸毛梳，来旺兄弟品牌；约 ¥120–160 档。",
        score: 8.8,
        priceRange: "约 ¥120–160",
        reviewSlug: "lw-bros-vacuum-comb",
        taobaoUrl: placeholderTaobao("d2-lw-bros"),
        jdUrl: placeholderJd("d2-lw-bros"),
        badge: "少飞毛",
      },
      {
        id: "d3",
        category: "钉耙梳",
        name: "亚禾 双排钉耙梳（中小型犬适用）",
        blurb:
          "预算有限时，可以先用钉耙梳开结、带走浮毛。动作放轻，狗狗刚开始不适应的话，配点零食慢慢来。",
        whyRanked:
          "京东高评平价梳，常作 FURminator 平替入门；约 ¥20–50。",
        score: 8.3,
        priceRange: "约 ¥20–50",
        reviewSlug: "yahe-rake-comb",
        taobaoUrl: placeholderTaobao("d3-yahe"),
        jdUrl: placeholderJd("d3-yahe"),
        badge: "性价比",
      },
      {
        id: "d4",
        category: "洗澡手套",
        name: "派乐特 宠物洗澡搓澡手套",
        blurb:
          "洗澡时戴着手套搓，顺手把松毛带下来。比硬刷温柔，中小型犬冲澡不容易吓到。洗完再梳一遍更干净。",
        whyRanked:
          "京东洗澡手套常客品牌派乐特；约 ¥15–35。",
        score: 8.1,
        priceRange: "约 ¥15–35",
        reviewSlug: "pailote-bath-glove",
        taobaoUrl: placeholderTaobao("d4-pailote"),
        jdUrl: placeholderJd("d4-pailote"),
      },
      {
        id: "d5",
        category: "家居除毛",
        name: "欢宠网 宠物毛发清理刮毛刷 / 粘毛器",
        blurb:
          "狗梳完，沙发和床还得清。刮毛刷 + 粘毛滚筒轮着用，出门前衣服滚一下，同事不会先看见狗毛。",
        whyRanked:
          "欢宠网等宠物清洁刷在淘宝 / 京东常见；约 ¥15–50。",
        score: 8.4,
        priceRange: "约 ¥15–50",
        reviewSlug: "hipidog-lint-brush",
        taobaoUrl: placeholderTaobao("d5-hipidog"),
        jdUrl: placeholderJd("d5-hipidog"),
        badge: "沙发救星",
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

export function getRankingByReviewSlug(slug: string): Ranking | undefined {
  return rankings.find((r) => r.products.some((p) => p.reviewSlug === slug));
}
