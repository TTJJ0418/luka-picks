import Link from "next/link";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-cream/80">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 sm:px-6">
        <NewsletterSignup variant="footer" />
        <div className="flex flex-col gap-3 border-t border-line/70 pt-6 text-sm text-stone-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Luka Picks · 面向中国中小型犬的场景选品与榜单</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/rank/shedding-care" className="hover:text-amber-900">
              掉毛护理
            </Link>
            <Link href="/about" className="hover:text-amber-900">
              关于
            </Link>
            <Link href="/sponsor" className="hover:text-amber-900">
              赞助合作
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
