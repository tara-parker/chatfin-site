// Site-wide strip beneath each page footer. Carries deep backlinks to ChatFin
// article pages. Deliberately carries NO ChatFin address/phone/NAP and no ChatFin
// copyright: those read as an ownership claim. ChatFin's own social profiles are
// labelled as ChatFin's, not as this site's.
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
          <span style={{ color: '#5c6b63' }}>ChatFin on the web: </span>
          {SOCIAL.map(([t, href], i) => (
            <span key={href}>
              {i > 0 && <span style={{ color: '#33403a' }}> &middot; </span>}
              <a href={href} target="_blank" rel="noopener" style={link}>{t}</a>
            </span>
          ))}
        </p>

        <p style={{ margin: '18px 0 0', color: '#5c6b63' }}>
          &copy; 2026 Tara Parker &middot;{' '}
          <a href="https://x.com/TaraParker94392" target="_blank" rel="noopener" style={muted}>
            @TaraParker94392
          </a>
        </p>
      </div>
    </div>
  );
}
