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
| `/sponsor` | 品牌合作 / 赞助 |
| `POST /api/newsletter` | 订阅**占位**接口（不发信、不存库） |
| `/about` | 关于 Luka |

占位数据在 `src/data/rankings.ts`（每品含 `taobaoUrl` / `jdUrl` 联盟占位，替换即可上线）。品牌合作见 `/sponsor`。

## 邮件简报（Newsletter）

首页与页脚有「预约订阅」表单，请求 `POST /api/newsletter`。

- **当前为占位**：不调用 Resend、不持久化邮箱、不发送任何邮件。
- 提交成功时前端会提示「即将开通」。
- 之后若要真正收集名单，需 Steven 配置 Resend（或其它供应商）API Key，再改 `src/app/api/newsletter/route.ts`。

小红书运营草稿见 `content/xiaohongshu-week1.md`（仅供人工复制发布，未代发）。

## 部署说明

尚未配置域名或 Vercel。需要 Steven 提供 GitHub 登录（`gh auth login`）后才能创建远程仓库并推送；部署到 Vercel 同样需要账号授权。本仓库当前仅为本地 git。

## License

Private · 内部项目
