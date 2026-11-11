import type { MetadataRoute } from "next";
import { socialLinks } from "@/lib/content";

/**
 * Crawler policy for a public portfolio:
 * - Allow general search engines (*)
 * - Allow AI *search/discovery* bots (citations / user fetches)
 * - Disallow model-*training* bots (GPTBot, Google-Extended)
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "GPTBot",
        disallow: ["/"],
      },
      {
        userAgent: "Google-Extended",
        disallow: ["/"],
      },
      {
        userAgent: "OAI-SearchBot",
        allow: ["/"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: ["/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: ["/"],
      },
      {
        userAgent: "ClaudeBot",
        allow: ["/"],
      },
      {
        userAgent: "*",
        allow: ["/"],
      },
    ],
    sitemap: `${socialLinks.website}/sitemap.xml`,
  };
}
