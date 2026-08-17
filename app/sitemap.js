export const dynamic = 'force-static';

const BASE = 'https://chatfin-finance-ai.pages.dev';

export default function sitemap() {
  return ['', '/products', '/use-cases'].map((p) => ({
    url: `${BASE}${p}`,
    changeFrequency: 'weekly',
    priority: p === '' ? 1 : 0.8,
  }));
}
