import type { RankProduct } from "@/data/rankings";
import { getProductByReviewSlug } from "@/data/rankings";

export type ReviewDetail = {
  slug: string;
  lead: string;
  sections: { heading: string; body: string }[];
  tips: string[];
};

/**
 * 长评为「选购角度整理」，不代表 Luka 已实测。
 * 等 Luka 真实使用后，再改写成第一人称。
 */
const reviews: Record<string, ReviewDetail> = {
  "ruffwear-hi-light": {
    slug: "ruffwear-hi-light",
    lead:
      "给小型犬挑胸背，最怕穿不稳、转圈、勒腋下。这里按选购角度，把拉夫威尔 Ruffwear 嗨轻（XXS / XS 小码）整理成一页，方便你对着自家狗狗量一量再决定。",
    sections: [
      {
        heading: "适合谁",
        body:
          "体型偏小、想要轻量背心式胸背的小型犬。豆瓣小型犬反馈里提到 XXS 码穿着不容易扭转，但每只狗体型不同，请以实测胸围为准。",
      },
      {
        heading: "选码怎么做",
        body:
          "让狗狗站直，用软尺量最粗的一圈胸围，对照官方尺码表选；介于两码之间时，先看店家的尺码说明。穿好后以能伸进两根手指为宜，别勒到腋下。",
      },
      {
        heading: "价格与备选",
        body:
          "常见价约 ¥374–426，属于预算偏高的一档。预算有限可以先看福莱希 Flexi 伸缩牵引绳（约 ¥70–100）：它是牵引绳，不是胸背，需要另配胸背；人多车多的地方建议收短使用。",
      },
    ],
    tips: [
      "价格会浮动，以下单页为准",
      "新胸背先在家里穿一会儿，再出门",
      "联盟购买链接稍后接入，本页暂为占位",
    ],
  },
  "petkit-roman-comb": {
    slug: "petkit-roman-comb",
    lead:
      "小佩 Petkit 罗马柱针梳，常见价约 ¥59，带一键脱毛。这里按新手选购角度整理优缺点。",
    sections: [
      {
        heading: "适合谁",
        body:
          "毛量中等、想要日常顺毛的小型犬，以及初次买梳子的新手。",
      },
      {
        heading: "要留意",
        body:
          "毛量大、容易打结的狗，建议先用开结梳处理，针梳不一定够用。预算更紧可以看憨憨乐园双面梳（约 ¥21.5）。",
      },
    ],
    tips: ["梳毛动作放轻", "价格以下单页为准", "联盟链接稍后接入"],
  },
  "crazy-dog-dental-donut": {
    slug: "crazy-dog-dental-donut",
    lead:
      "疯狂小狗洁齿甜甜圈 / 绕奶骨，常见约 ¥12 / 根。先说清楚：洁齿零食只能减缓牙菌斑，不能替代刷牙。",
    sections: [
      {
        heading: "怎么用更稳",
        body:
          "按体型选大小，小型犬需盯喂，避免咬块吞咽；不要当正餐，也别一次给太多。",
      },
    ],
    tips: ["不能替代刷牙", "小型犬需盯喂", "联盟链接稍后接入"],
  },
  "konoko-shampoo": {
    slug: "konoko-shampoo",
    lead:
      "KONOKO 可诺可 杀菌除螨沐浴露，常见约 ¥24.9。更稳妥的备选可以看狮王艾宠（约 ¥68）。",
    sections: [
      {
        heading: "要留意",
        body:
          "功能向配方，皮肤容易敏感的狗建议先小范围试用；有皮肤问题以兽医建议为准。冲洗干净，别让泡沫进眼睛。",
      },
    ],
    tips: ["先小范围试用", "价格以下单页为准", "联盟链接稍后接入"],
  },
  "honeycare-funnel-pad-m": {
    slug: "honeycare-funnel-pad-m",
    lead:
      "好命家 HONEYCARE 魔法漏斗尿垫 M 码 40 片，常见约 ¥30.9。爱刨垫子的狗可以看厚吸主义款。",
    sections: [
      {
        heading: "选购角度",
        body:
          "M 码对小型犬够用；尿垫是消耗品，复购方便。爱撕、爱刨的狗要注意避免误食碎片。",
      },
    ],
    tips: ["价格以下单页为准", "联盟链接稍后接入"],
  },
};

export function getReviewDetail(slug: string): {
  product?: RankProduct;
  detail?: ReviewDetail;
} {
  return {
    product: getProductByReviewSlug(slug),
    detail: reviews[slug],
  };
}
