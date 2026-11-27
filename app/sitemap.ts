import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://YOUR-DOMAIN.example';
  return ['', '/contact', ...['bamboo-chair','bamboo-lounge','woven-stool','bamboo-daybed'].map(x=>`/products/${x}`)].map(path=>({url:`${base}${path}`,lastModified:new Date(),changeFrequency:'weekly',priority:path===''?1:.7}));
}
