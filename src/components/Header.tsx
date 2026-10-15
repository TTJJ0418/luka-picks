import Link from "next/link";

const nav = [
  { href: "/", label: "首页" },
  { href: "/rank/starter", label: "场景榜单" },
  { href: "/sponsor", label: "品牌合作" },
  { href: "/about", label: "关于 Luka" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6 sm:py-4">
        <Link href="/" className="group min-w-0 shrink">
          <span className="block text-lg font-bold tracking-tight text-amber-950 group-hover:text-amber-800 sm:text-xl">
            Luka Picks
          </span>
          <span className="block truncate text-xs text-stone-500 sm:text-sm">
            卢卡精选 · 中小型犬场景指南
          </span>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-1 text-sm font-medium text-stone-700 sm:gap-1.5">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-2.5 py-1.5 transition hover:bg-amber-50 hover:text-amber-950 sm:px-3"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
