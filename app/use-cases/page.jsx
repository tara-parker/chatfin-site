import RawHtml from '@/components/RawHtml';
import { loadContent } from '@/lib/content';

export const metadata = {
  title: 'Use Cases: Finance Workflow Deep Dives',
  description:
    'Close and controllership, procure-to-pay, order-to-cash, treasury, FP&A, tax and compliance. See how ChatFin AI agents run each finance workflow.',
};

export default function UseCasesPage() {
  const html = loadContent('usecases');
  return <RawHtml html={html} />;
}
