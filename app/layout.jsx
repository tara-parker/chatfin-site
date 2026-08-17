import './globals.css';
import SiteNav from '@/components/SiteNav';
import Attribution from '@/components/Attribution';

// NOTE: set this to your actual deploy origin (e.g. https://cf-website.pages.dev)
// so canonicals/OG resolve to THIS site, never to chatfin.ai, or the backlinks
// would be consolidated away.
// Attribution is Tara Parker throughout. ChatFin is referenced as the subject of
// the content, never as the owner/publisher of this site — no ChatFin Organization
// node, no ChatFin copyright, no ChatFin NAP. See components/Attribution.jsx.
const AUTHOR = 'Tara Parker';
const AUTHOR_X = 'https://x.com/TaraParker94392';

export const metadata = {
  metadataBase: new URL('https://chatfin-finance-ai.pages.dev'),
  title: {
    default: 'AI Super Agents for Finance and Accounting',
    template: `%s | ${AUTHOR}`,
  },
  description:
    'AI agents for finance and accounting teams. Controllership, FP&A, AP, AR, Tax and Treasury operations with native ERP integrations.',
  authors: [{ name: AUTHOR, url: AUTHOR_X }],
  creator: AUTHOR,
  publisher: AUTHOR,
  twitter: {
    card: 'summary_large_image',
    creator: '@TaraParker94392',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="DC.creator" content={AUTHOR} />
        <meta name="DC.publisher" content={AUTHOR} />
        <meta name="DC.rights" content={`© 2026 ${AUTHOR}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: AUTHOR,
              url: AUTHOR_X,
              sameAs: [AUTHOR_X],
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=Cormorant+Garamond:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteNav />
        {children}
        <Attribution />
      </body>
    </html>
  );
}
