import Link from "next/link";

const nav = [
  { href: "/", label: "首页" },
  { href: "/rank/starter", label: "场景榜单" },
  { href: "/sponsor", label: "品牌合作" },
  { href: "/about", label: "关于 Luka" },
];

export function Header() {
  return (
    <header className="border-b border-amber-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="text-xl font-bold tracking-tight text-amber-900 group-hover:text-amber-700">
            Luka Picks
          </span>
          <span className="hidden text-sm text-stone-500 sm:inline">
            卢卡精选 · 中小型犬场景指南
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-stone-700">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 transition hover:bg-amber-50 hover:text-amber-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
