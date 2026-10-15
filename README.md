# Luka Picks（卢卡精选）

面向中国中小型犬的场景选品与周榜网站。品牌名 **Luka Picks**（非 PetPicks.cn），不锁品种；MVP 以场景排名（出行、掉毛护理、零食等）为主，后续接入品牌赞助与淘宝 / 京东联盟。内容背书来自狗狗 Luka（约 600 粉账号）。

## 技术栈

- Next.js（App Router）
- TypeScript
- Tailwind CSS

## 本地运行

```bash
cd luka-picks
npm install
npm run dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000)。

其他常用命令：

```bash
npm run build   # 生产构建
npm run start   # 启动生产服务
npm run lint    # ESLint
```

## 路由结构（Week 1）

| 路径 | 说明 |
|------|------|
| `/` | 首页 · 英雄区 + 本周场景榜卡片 |
| `/rank/starter` | **Live**：入门五件套（牵引 / 梳毛 / 零食 / 洗护 / 尿垫 · 真实品牌） |
| `/rank/travel`、`shedding-care`、`snacks` | 「即将上线」 |
| `/review/[slug]` | 单品评测占位（从榜单 CTA 进入） |
| `/sponsor` | 品牌合作 / 赞助（占位） |
| `/about` | 关于 Luka |

占位数据在 `src/data/rankings.ts`。

## 部署说明

尚未配置域名或 Vercel。需要 Steven 提供 GitHub 登录（`gh auth login`）后才能创建远程仓库并推送；部署到 Vercel 同样需要账号授权。本仓库当前仅为本地 git。

## License

Private · 内部项目
