import type { MetadataRoute } from "next";
import { rankings } from "@/data/rankings";
import { getReviewDetail } from "@/data/reviews";

const BASE = "https://luka-picks.vercel.app";

// Stable lastmod: new Date() made every URL look changed on every request,
// which teaches crawlers to ignore lastmod. Bump this when content changes.
const CONTENT_UPDATED = new Date("2026-11-01T00:00:00+08:00");

export default function sitemap(): MetadataRoute.Sitemap {
  // getLiveRankings() currently returns all rankings (homepage shows upcoming
  // cards too); filter live:true so only published rank pages enter the sitemap.
  const liveRankings = rankings.filter((r) => r.live);

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE}/about`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/sponsor`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const rankPages: MetadataRoute.Sitemap = liveRankings.map((r) => ({
    url: `${BASE}/rank/${r.slug}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Only include review routes that have a real entry in reviews.ts
  const reviewPages: MetadataRoute.Sitemap = liveRankings
    .flatMap((r) => r.products)
    .filter((p) => Boolean(getReviewDetail(p.reviewSlug).detail))
    .map((p) => ({
      url: `${BASE}/review/${p.reviewSlug}`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [...staticPages, ...rankPages, ...reviewPages];
}
