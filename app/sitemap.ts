import type { MetadataRoute } from "next";
import { products } from "./data/products";

const siteUrl = "https://magicocamillo.com";

const staticRoutes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/chi-sono", priority: 0.8, changeFrequency: "monthly" },
  { path: "/spettacoli", priority: 0.9, changeFrequency: "monthly" },
  { path: "/spettacoli/family-hotel", priority: 0.7, changeFrequency: "monthly" },
  { path: "/spettacoli/feste-eventi", priority: 0.7, changeFrequency: "monthly" },
  { path: "/spettacoli/teatri-comuni", priority: 0.7, changeFrequency: "monthly" },
  { path: "/boutique", priority: 0.8, changeFrequency: "weekly" },
  { path: "/boutique/il-suono-delle-cose", priority: 0.6, changeFrequency: "monthly" },
  { path: "/boutique/kit-magia", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contatti", priority: 0.7, changeFrequency: "yearly" },
  { path: "/richiedi-preventivo", priority: 0.8, changeFrequency: "yearly" },
  { path: "/galleria-foto", priority: 0.6, changeFrequency: "monthly" },
  { path: "/video", priority: 0.6, changeFrequency: "monthly" },
  { path: "/calendario-eventi", priority: 0.5, changeFrequency: "weekly" },
  { path: "/recensioni", priority: 0.7, changeFrequency: "monthly" },
  { path: "/intervista-alessandra-sartori", priority: 0.4, changeFrequency: "yearly" },
  { path: "/capanno-magico", priority: 0.4, changeFrequency: "yearly" },
];

const dedicatedProductRoutes = new Set(["il-suono-delle-cose", "kit-magia"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const productEntries: MetadataRoute.Sitemap = products
    .filter((product) => !dedicatedProductRoutes.has(product.id))
    .map((product) => ({
      url: `${siteUrl}/boutique/${product.id}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  return [...staticEntries, ...productEntries];
}
