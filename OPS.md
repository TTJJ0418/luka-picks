# Luka Picks 运营手册（Week 1）

给 Steven / 未来的自己：怎么改内容、换联盟链接、上线前要注意什么。  
**语言：中英夹杂，以能执行为准。**

---

## 1. 项目一览

| 项 | 值 |
|----|-----|
| 路径 | `/workspace/luka-picks` |
| 栈 | Next.js App Router + TypeScript + Tailwind |
| 本地跑 | `npm install && npm run dev` → http://localhost:3000 |
| 构建 | `npm run build` 必须通过再提交 |
| Git | GitHub `TTJJ0418/luka-picks`；`main` push 自动部署 Vercel |

**已上线榜单（live）**

- `/rank/starter` — 入门五件套  
- `/rank/shedding-care` — 掉毛护理  

**筹备中**

- `/rank/travel`、`/rank/snacks`

---

## 2. 如何加一个产品

编辑 `src/data/rankings.ts`，在对应 `ranking.products` 数组里追加：

```ts
{
  id: "d6",                    // 榜内唯一
  category: "类别中文",
  name: "品牌 + 具体型号（真实在售）",
  blurb: "Luka 口吻 1–2 句",
  whyRanked: "为何上榜 + 大致价位",
  score: 8.0,                  // 主观分
  priceRange: "约 ¥xx–xx",
  reviewSlug: "url-safe-slug", // 对应 /review/[slug]
  taobaoUrl: placeholderTaobao("d6-xxx"),
  jdUrl: placeholderJd("d6-xxx"),
  badge: "可选角标",
}
```

可选：在 `src/data/reviews.ts` 为该 `reviewSlug` 写一篇更长的评测。  
保存后 `npm run build`，再 `git commit`。

**原则**

- 用淘宝 / 京东真实品牌与型号，不编造品牌。  
- 联盟链接在拿到 ID 前继续用 `placeholderTaobao` / `placeholderJd`。

---

## 3. 如何加一个榜单（ranking）

仍在 `src/data/rankings.ts` 的 `rankings` 数组增加一项：

1. `slug`（URL：`/rank/your-slug`）  
2. `live: true` 才会在卡片上显示「本周可看」并渲染产品列表  
3. `products` 至少 5 条再标 live（体验更好）  
4. 首页通过 `getLiveRankings()` 自动展示；卡片顺序 = 数组顺序  

`generateStaticParams` 会读整个 `rankings`，一般不用改路由文件。

---

## 4. 如何替换联盟链接（Taobao / JD）

每个产品有：

- `taobaoUrl`  
- `jdUrl`  

占位形态：`https://example.com/PLACEHOLDER-taobao?id=...`

**换成真实联盟链时**：直接改该产品的两个字段字符串即可；UI（「淘宝看看」「京东看看」）读的就是这两个字段（见 `src/components/AffiliateButtons.tsx`）。

不要用未标注的假追踪链；占位必须带 `PLACEHOLDER` 字样，避免误以为已结算。

---

## 5. 赞助页联系邮箱

文件：`src/app/sponsor/page.tsx`  

把占位 `your-email@example.com`（页面展示 + `mailto:`）换成 Steven 真实商务邮箱后再对外分享 `/sponsor`。

表单是 **disabled 桩**，不会外发；合作走邮件，不要接不明第三方表单。

---

## 6. Newsletter / Resend 下一步

- UI：首页 + 页脚 `NewsletterSignup`  
- API：`POST /api/newsletter` — **当前不存库、不调 Resend、不发信**  

要真正收订阅：

1. Steven 注册 Resend（或同类），拿到 API Key  
2. 用环境变量（如 `RESEND_API_KEY`）注入，**不要**把 Key 写进仓库  
3. 改 `src/app/api/newsletter/route.ts`：校验邮箱 → 写入 Audience / 发确认信  
4. 更新 README 与本手册，去掉「即将开通」话术  

**Guardrail：在 Steven 明确说「可以发」之前，不要接真发送，也不要群发。**

---

## 7. 部署阻塞项（需 Steven）

| 步骤 | 状态 | 谁做 |
|------|------|------|
| GitHub repo + push | ✅ 已完成 | — |
| Vercel Git 连接（main 自动部署） | ✅ 已完成 · https://luka-picks.vercel.app | — |
| 自定义域名购买 / DNS | 未做 | Steven 决定与付费 |
| 真实淘宝联盟 / 京东联盟 ID | 未做 | Steven 申请后填入数据 |
| 赞助联系邮箱 | 占位 | Steven 填写 |
| Resend | 未接 | Steven 配置 |

日常 SEO/文案可 push `main` 自动上线。**买域名、接付费服务、发 newsletter、赞助 outreach、换真实联盟链之前必须先问 Steven。**

---

## 8. Guardrails（必问 Steven）

在做下面任何事前，先问 Steven：

- 发送 newsletter / 营销邮件  
- 赞助 outreach（冷邮件、私信品牌）  
- 任何付费（域名、Vercel 超免费额、广告）  
- 把占位联盟链换成「看起来像真的」但未授权的链接  
- 以 Luka / Steven 名义公开发帖（小红书草稿除外：草稿可写，**发布由 Steven 自己点**）

---

## 9. 日常 / 周更节奏（意图）

**每天（轻量，15–30 分钟）**

- 看一条用户反馈或竞品笔记  
- 微调 1 条产品文案或修错别字  
- 不强制上新

**每周（主节奏）**

1. 更新或巩固 1 个场景榜（换序 / 换 1–2 个 SKU）  
2. 补 1 篇 `/review/[slug]` 长评（可选）  
3. 准备 1 篇小红书草稿 → `content/` → Steven 自审发布  
4. `npm run build` + 本地 commit  
5. （有 remote 后）push + 预览部署  

**月度**

- 看赞助页咨询是否有回复  
- 复盘是否接近 ¥3,000 / 月目标（赞助 + 联盟）  
- 清理过期价位描述

---

## 10. 常用文件地图

```
src/data/rankings.ts      # 榜单 + 产品 + 联盟占位
src/data/reviews.ts       # 长评正文
src/components/           # Header / Footer / 卡片 / 联盟按钮 / 订阅
src/app/rank/[slug]/     # 榜单页
src/app/review/[slug]/   # 评测页
src/app/sponsor/          # 赞助
src/app/api/newsletter/   # 订阅桩
content/xiaohongshu-*.md  # 小红书草稿
OPS.md                    # 本手册
README.md                 # 如何本地跑
```

---

## 11. Week 1 完成后检查

- [x] 站点脚手架 + 中文 UI  
- [x] 入门五件套 live  
- [x] 掉毛护理 live  
- [x] 联盟字段 + 赞助页 + 订阅 UI 桩  
- [x] 小红书 Week1 草稿  
- [x] 本运营手册  
- [ ] GitHub remote / push  
- [ ] Vercel 部署  
- [ ] 域名  
- [ ] 真实联盟链接  
- [ ] 真实联系邮箱  
- [ ] Resend 真发送  

---

## 12. 产品 `devNotes`（内部，不上公开页）

`RankProduct.devNotes` 只放来源质量 / 待复核事项，**不要渲染到页面**。当前重点：

- 疯狂小狗洁齿甜甜圈：来源质量 LOW，上线前复核；公开页「不能替代刷牙 / 需盯喂」提示必须保留。
- 好命家魔法漏斗：¥30.9 / 40 片 ≈ ¥0.77 / 片，与口头 ~¥1.2 / 片不一致，待确认规格；「厚吸主义」型号待核实。
- 所有价格来自整理时的常见区间，发布前复核当天价。
- 内容口径：整理 / 对比 / 选购角度，**未实测前不得写成「Luka 实测」**。
