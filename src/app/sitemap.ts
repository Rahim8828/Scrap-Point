import type { MetadataRoute } from "next";
import { COMPANY, SERVICES, CITIES } from "@/lib/constants";

const baseUrl = COMPANY.website;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/industries`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/scrap-categories`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/request-inspection`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const cityPages: MetadataRoute.Sitemap = CITIES.map((c) => ({
    url: `${baseUrl}/locations/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...servicePages, ...cityPages];
}
