export const dynamic = 'force-static';

const BASE = 'https://chatfin-finance-ai.pages.dev';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
