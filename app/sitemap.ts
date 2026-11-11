import type { MetadataRoute } from "next";
import { socialLinks } from "@/lib/content";

/** Canonical public URLs only — single-page portfolio. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: socialLinks.website,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
