import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/contact/'].map((path) => ({ url: `${siteUrl}${path}` }));
}
