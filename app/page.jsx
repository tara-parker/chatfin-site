import RawHtml from '@/components/RawHtml';
import { loadContent } from '@/lib/content';

export const metadata = {
  title: 'AI Super Agents for Finance & Accounting Teams',
  description:
    'ChatFin runs month-end close, reconciliation, AP/AR, FP&A and compliance with ERP-native AI agents.',
  // Self-canonical (default). Do NOT point canonical at chatfin.ai, or this
  // page would be treated as a duplicate and dropped, wiping out the backlinks.
};

export default function HomePage() {
  const html = loadContent('home');
  return <RawHtml html={html} />;
}
