import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { blogPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/dfw",
    "/how-it-works",
    "/services",
    "/get-a-quote",
    "/craftsmen/apply",
    "/blog",
    "/terms",
    "/privacy",
  ].map((route) => ({
    url: `${site.domain}${route}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${site.domain}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${site.domain}/blog/${p.slug}`,
    lastModified: new Date(p.datePublished),
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
