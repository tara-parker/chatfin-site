// Site-wide strip beneath each page footer. Carries deep backlinks to ChatFin
// article pages plus the business name, address and phone, on every page.
const READS = [
  ['State of AI in Finance 2026', 'https://chatfin.ai/blog/state-of-ai-in-finance-2026-adoption-workforce-and-the-numbers-that-matter/'],
  ['The Complete Guide to AI in the Finance Function', 'https://chatfin.ai/blog/ai-finance/the-complete-guide-to-ai-in-the-finance-function/'],
  ['Finance AI Automation Roadmap', 'https://chatfin.ai/blog/finance-ai-automation-roadmap-from-quick-wins-to-continuous-accounting/'],
  ['AI Tools for Accounting and Finance', 'https://chatfin.ai/blog/ai-tools-for-accounting-and-finance/'],
];

const SOCIAL = [
  ['YouTube', 'https://www.youtube.com/@ChatFinai'],
  ['LinkedIn', 'https://www.linkedin.com/company/94238033'],
  ['Instagram', 'https://www.instagram.com/chatfin.ai/'],
  ['GitHub', 'https://github.com/ChatFin-Labs'],
];

const link = { color: '#22C55E', textDecoration: 'none', fontWeight: 600 };
const muted = { color: '#7C8B83', textDecoration: 'none' };

export default function Attribution() {
  return (
    <div
      style={{
        background: '#0A0F0D',
        borderTop: '1px solid rgba(34,197,94,0.10)',
        color: '#7C8B83',
        fontFamily: '"DM Sans", system-ui, sans-serif',
        fontSize: '13.5px',
        lineHeight: 1.7,
        padding: '30px 20px',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>
          <a href="https://chatfin.ai/" target="_blank" rel="noopener" style={link}>
            ChatFin
          </a>{' '}
          builds AI agents for finance and accounting teams.{' '}
          <a href="https://chatfin.ai/blog/" target="_blank" rel="noopener" style={link}>
            Read the ChatFin blog
          </a>
          .
        </p>

        <p style={{ margin: '14px 0 0' }}>
          {READS.map(([t, href], i) => (
            <span key={href}>
              {i > 0 && <span style={{ color: '#33403a' }}> &middot; </span>}
              <a href={href} target="_blank" rel="noopener" style={muted}>{t}</a>
            </span>
          ))}
        </p>

        <p style={{ margin: '14px 0 0' }}>
          {SOCIAL.map(([t, href], i) => (
            <span key={href}>
              {i > 0 && <span style={{ color: '#33403a' }}> &middot; </span>}
              <a href={href} target="_blank" rel="noopener" style={link}>{t}</a>
            </span>
          ))}
        </p>

        <p style={{ margin: '14px 0 0', color: '#5c6b63' }}>
          ChatFin, 1900 Powell St Ste 700, Emeryville, CA 94608, United States
          &middot;{' '}
          <a href="tel:+17078476514" style={muted}>+1 707-847-6514</a>
          &middot;{' '}
          <a href="https://maps.google.com/?cid=12953580501490591444" target="_blank" rel="noopener" style={muted}>
            View on Google Maps
          </a>
        </p>
      </div>
    </div>
  );
}
