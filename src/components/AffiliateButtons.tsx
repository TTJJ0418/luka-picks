import type { RankProduct } from "@/data/rankings";

type Size = "sm" | "md";

export function AffiliateButtons({
  product,
  size = "sm",
}: {
  product: Pick<RankProduct, "taobaoUrl" | "jdUrl" | "name">;
  size?: Size;
}) {
  const pad = size === "md" ? "px-4 py-2 text-sm" : "px-3 py-1.5 text-xs";

  return (
    <div className="flex flex-wrap gap-2">
      <a
        href={product.taobaoUrl}
        className={`inline-flex items-center justify-center rounded-full border border-dashed border-orange-200 bg-orange-50/80 font-medium text-orange-900 hover:bg-orange-50 ${pad}`}
        title="淘宝联盟占位链接 · 非真实追踪"
        rel="noopener noreferrer"
      >
        淘宝看看
      </a>
      <a
        href={product.jdUrl}
        className={`inline-flex items-center justify-center rounded-full border border-dashed border-red-200 bg-red-50/70 font-medium text-red-900 hover:bg-red-50 ${pad}`}
        title="京东联盟占位链接 · 非真实追踪"
        rel="noopener noreferrer"
      >
        京东看看
      </a>
    </div>
  );
}
