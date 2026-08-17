import './globals.css';
import SiteNav from '@/components/SiteNav';
import Attribution from '@/components/Attribution';

// NOTE: set this to your actual deploy origin (e.g. https://cf-website.pages.dev)
// so canonicals/OG resolve to THIS site, never to chatfin.ai, or the backlinks
// would be consolidated away.
export const metadata = {
  metadataBase: new URL('https://chatfin-finance-ai.pages.dev'),
  title: {
    default: 'ChatFin: AI Super Agents for Finance and Accounting',
    template: '%s | ChatFin',
  },
  description:
    'AI agents for finance and accounting teams. Controllership, FP&A, AP, AR, Tax and Treasury operations with native ERP integrations.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
