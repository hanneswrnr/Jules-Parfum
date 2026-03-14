import type { MetadataRoute } from "next";

const BASE_URL = "https://julesparfum.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-03-14"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/produkte`,
      lastModified: new Date("2026-03-14"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ueber`,
      lastModified: new Date("2026-03-14"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/kontakt`,
      lastModified: new Date("2026-03-14"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/impressum`,
      lastModified: new Date("2026-03-14"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/datenschutz`,
      lastModified: new Date("2026-03-14"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
