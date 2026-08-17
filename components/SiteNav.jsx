'use client';

import { useState } from 'react';

// Prefix local assets with the base path so they resolve on subpath hosts
// (e.g. GitHub Pages project sites) as well as root domains.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Internal links use plain <a> (full-page navigation) on purpose: each page is a
// self-contained document with its own <style>/<script>, so a clean load per page
// loads cleaner than SPA transitions (no cross-page style bleed or script re-runs).

// External ChatFin destinations. Every one of these is a crawlable backlink.
const PRODUCTS = [
  ['Reconciliation AI', 'https://chatfin.ai/products/#reconciliation-ai', 'Auto-match transactions and clear exceptions'],
  ['Document AI', 'https://chatfin.ai/products/#document-ai', 'Extract and validate data from any document'],
  ['Compliance AI', 'https://chatfin.ai/products/#compliance-ai', 'Continuous policy and audit checks'],
  ['Analytics AI', 'https://chatfin.ai/products/#analytics-ai', 'Forecasts and variance commentary, nightly'],
  ['Automation AI', 'https://chatfin.ai/products/#automation-ai', 'Run finance workflows end to end'],
];

const USECASES = [
  ['Close & Controllership', 'https://chatfin.ai/use-cases/#close-controllership'],
  ['Procure to Pay', 'https://chatfin.ai/use-cases/#procure-to-pay'],
  ['Order to Cash', 'https://chatfin.ai/use-cases/#order-to-cash'],
  ['Inventory & Logistics', 'https://chatfin.ai/use-cases/#inventory-logistics'],
  ['Treasury & FP&A', 'https://chatfin.ai/use-cases/#treasury-fpa'],
  ['Expense & Audit', 'https://chatfin.ai/use-cases/#expense-audit'],
  ['Tax & Compliance', 'https://chatfin.ai/use-cases/#tax-compliance'],
  ['Reporting & Analytics', 'https://chatfin.ai/use-cases/#reporting-analytics'],
];

const PARTNERS = [
  ['Solutions for partners', 'https://chatfin.ai/solution-for-partners/'],
  ['Become a tech partner', 'https://chatfin.ai/become-a-tech-partner/'],
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="cfnav">
      <div className="cfnav-inner">
        <a href="/" className="cfnav-logo" aria-label="ChatFin home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${BASE}/chatfin-logo.png`} alt="ChatFin" width={150} height={40} />
        </a>

        <button
          className="cfnav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <nav className={`cfnav-menu${open ? ' is-open' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>

            <li className="cfnav-has-dd">
              <a href="/products">Products <i className="cfnav-caret" /></a>
              <div className="cfnav-dd cfnav-dd-wide">
                {PRODUCTS.map(([t, href, sub]) => (
                  <a key={href} href={href} target="_blank" rel="noopener">
                    <strong>{t}</strong>
                    <span>{sub}</span>
                  </a>
                ))}
                <a className="cfnav-dd-cta" href="https://chatfin.ai/#demo-form" target="_blank" rel="noopener">
                  See these agents run in your ERP →
                </a>
              </div>
            </li>

            <li className="cfnav-has-dd">
              <a href="/use-cases">Use cases <i className="cfnav-caret" /></a>
              <div className="cfnav-dd cfnav-dd-cols">
                {USECASES.map(([t, href]) => (
                  <a key={href} href={href} target="_blank" rel="noopener">{t}</a>
                ))}
              </div>
            </li>

            <li className="cfnav-has-dd">
              <span className="cfnav-dd-top">Partners <i className="cfnav-caret" /></span>
              <div className="cfnav-dd">
                {PARTNERS.map(([t, href]) => (
                  <a key={href} href={href} target="_blank" rel="noopener">{t}</a>
                ))}
              </div>
            </li>

            <li className="cfnav-cta-li">
              <a className="cfnav-cta" href="https://chatfin.ai/#demo-form" target="_blank" rel="noopener">
                Book a demo
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
