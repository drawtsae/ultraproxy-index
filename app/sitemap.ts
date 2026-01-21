import type { MetadataRoute } from "next";
import { locales } from "@/common/constant";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://netproxy.io";

const localePaths = [
  "",
  "/cookie-policy",
  "/privacy-policy",
  "/refund-service",
  "/term-service",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap(({ code }) =>
    localePaths.map((path) => ({
      url: `${baseUrl}/${code}${path}`,
      lastModified,
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.5,
    }))
  );
}
