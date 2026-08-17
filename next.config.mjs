/** @type {import('next').NextConfig} */

// basePath is only needed when the site is served from a subpath, e.g. GitHub
// Pages project sites at tara-parker.github.io/chatfin-website. The Pages workflow
// sets PAGES_BASE_PATH=/chatfin-website. On root domains (Cloudflare Pages, Netlify,
// Render, Firebase, Surge) it stays empty.
const basePath = process.env.PAGES_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  // Fully static HTML export so every backlink is present in the shipped files and
  // the site can be hosted on any static host (GitHub Pages, Cloudflare Pages,
  // Netlify, Render, Firebase, Surge) without a Node server.
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
