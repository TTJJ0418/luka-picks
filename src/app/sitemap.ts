import type { MetadataRoute } from "next";
import { rankings } from "@/data/rankings";
import { getReviewDetail } from "@/data/reviews";

const BASE = "https://luka-picks.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  // getLiveRankings() currently returns all rankings (homepage shows upcoming
  // cards too); filter live:true so only published rank pages enter the sitemap.
  const liveRankings = rankings.filter((r) => r.live);

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/sponsor`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const rankPages: MetadataRoute.Sitemap = liveRankings.map((r) => ({
    url: `${BASE}/rank/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Only include review routes that have a real entry in reviews.ts
  const reviewPages: MetadataRoute.Sitemap = liveRankings
    .flatMap((r) => r.products)
    .filter((p) => Boolean(getReviewDetail(p.reviewSlug).detail))
    .map((p) => ({
      url: `${BASE}/review/${p.reviewSlug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [...staticPages, ...rankPages, ...reviewPages];
}
