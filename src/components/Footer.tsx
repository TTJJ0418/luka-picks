import Link from "next/link";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-amber-100 bg-stone-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8">
        <NewsletterSignup variant="footer" />
        <div className="flex flex-col gap-3 text-sm text-stone-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Luka Picks · 面向中国中小型犬的场景选品与榜单</p>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-amber-800">
              关于
            </Link>
            <Link href="/sponsor" className="hover:text-amber-800">
              赞助合作
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
