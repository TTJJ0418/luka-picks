import type { RankProduct } from "@/data/rankings";
import { getProductByReviewSlug } from "@/data/rankings";

export type ReviewDetail = {
  slug: string;
  lead: string;
  sections: { heading: string; body: string }[];
  tips: string[];
};

const reviews: Record<string, ReviewDetail> = {
  "puppytie-harness": {
    slug: "puppytie-harness",
    lead:
      "Luka 第一次穿胸背会原地扭成麻花，但穿对码之后出门就顺了。我们选的是 Puppytie 自动收紧背心式——中小型犬防挣脱里很常见的一款。",
    sections: [
      {
        heading: "适合谁",
        body:
          "大约 10 斤上下、容易爆冲或会往后挣项圈的中小型犬。气管敏感的更别用纯项圈硬拽。按最粗胸围量，毛厚的可以略放一码再调紧。",
      },
      {
        heading: "我们家怎么用",
        body:
          "出门前先让 Luka 闻一下，从头部套进再扣腰腹。前冲时带子会收一点，人不用死拽。回家检查腋下有没有红印，有就放松半格。",
      },
      {
        heading: "价格与坑",
        body:
          "常见大约 ¥120–150。别只看颜色：扣具要稳、反光要有、肩带别勒腋。假货多，认准官方旗舰或大店。",
      },
    ],
    tips: [
      "量胸围时让狗站直，软尺贴最粗一圈",
      "新带子第一次出门走短距离适应",
      "联盟购买链接稍后接入，本页暂为占位",
    ],
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
