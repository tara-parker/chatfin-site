import RawHtml from '@/components/RawHtml';
import { loadContent } from '@/lib/content';

export const metadata = {
  title: 'Products: Finance AI Agents',
  description:
    'Reconciliation AI, Document AI, Compliance AI, Analytics AI and Automation AI. ERP-native finance agents from ChatFin. Explore the full product suite.',
};

export default function ProductsPage() {
  const html = loadContent('products');
  return <RawHtml html={html} />;
}
