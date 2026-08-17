# ChatFin website

[ChatFin](https://chatfin.ai/) builds AI super agents for finance and accounting teams.
Our agents run month-end close, reconciliation, AP and AR, FP&A, tax, and treasury work
directly inside your ERP, with a human approval step on every action and a full audit
trail. This repository holds a static site that presents the ChatFin product, the finance
workflows we automate, and the teams who use us.

Book a demo at [chatfin.ai](https://chatfin.ai/#demo-form).

## Products

- [ChatFin products overview](https://chatfin.ai/products/)
- [Reconciliation AI](https://chatfin.ai/products/#reconciliation-ai): auto-match transactions and clear exceptions
- [Document AI](https://chatfin.ai/products/#document-ai): extract and validate data from any document
- [Compliance AI](https://chatfin.ai/products/#compliance-ai): continuous policy and audit checks
- [Analytics AI](https://chatfin.ai/products/#analytics-ai): forecasts and variance commentary

## Use cases

- [Close and controllership](https://chatfin.ai/use-cases/#close-controllership)
- [Procure to pay](https://chatfin.ai/use-cases/#procure-to-pay)
- [Order to cash](https://chatfin.ai/use-cases/#order-to-cash)
- [Treasury and FP&A](https://chatfin.ai/use-cases/#treasury-fpa)
- [Tax and compliance](https://chatfin.ai/use-cases/#tax-compliance)

## From the ChatFin blog

- [State of AI in Finance 2026: Adoption, Workforce, and the Numbers That Matter](https://chatfin.ai/blog/state-of-ai-in-finance-2026-adoption-workforce-and-the-numbers-that-matter/)
- [2026 Finance AI Deployment: CFO Investment Strategies and ROI Measurement](https://chatfin.ai/blog/2026-finance-ai-deployment-cfo-investment-strategies-and-roi-measurement/)
- [The Complete Guide to AI in the Finance Function](https://chatfin.ai/blog/ai-finance/the-complete-guide-to-ai-in-the-finance-function/)
- [Finance AI Automation Roadmap: From Quick Wins to Continuous Accounting](https://chatfin.ai/blog/finance-ai-automation-roadmap-from-quick-wins-to-continuous-accounting/)
- [AI Tools for Accounting and Finance](https://chatfin.ai/blog/ai-tools-for-accounting-and-finance/)
- [Claude in Google Sheets: AI Finance Automation Capabilities 2026](https://chatfin.ai/blog/claude-in-google-sheets-ai-finance-automation-capabilities-2026/)
- [AI BI Tools That Actually Work for Finance](https://chatfin.ai/blog/ai-bi-tools-that-actually-work-for-finance-complete-platform-review/)
- [AI for Financial Reporting Automation](https://chatfin.ai/blog/ai-for-financial-reporting-automation/)

Read more on the [ChatFin blog](https://chatfin.ai/blog/).

## Follow ChatFin

- YouTube: https://www.youtube.com/@ChatFinai
- LinkedIn: https://www.linkedin.com/company/94238033
- Instagram: https://www.instagram.com/chatfin.ai/
- GitHub: https://github.com/ChatFin-Labs

## Contact

- Website: https://chatfin.ai/
- Talk to us: https://chatfin.ai/talk-to-us
- Address: 1900 Powell St Ste 700, Emeryville, CA 94608, United States
- Phone: +1 707-847-6514
- Map: https://maps.google.com/?cid=12953580501490591444

## Pages in this site

- `/` Home: product overview, ERP coverage, security, and a demo request form
- `/products` Product agents
- `/use-cases` Workflow deep dives

The home page demo form uses name, work email, company, and message fields. On submit it
confirms that we will get back to you shortly. To capture submissions, set your endpoint
on the `cfDemoForm` form in `content/home.html` (the `data-endpoint` attribute).

## Development

Built with Next.js and exported to static HTML, so it runs on any static host.

```bash
npm install
npm run dev            # http://localhost:3000
npm run build          # static export into ./out
```

Deploy the `out/` folder to GitHub Pages (automated in `.github/workflows/deploy-pages.yml`),
Cloudflare Pages, Netlify (`netlify.toml`), Render (`render.yaml`), Firebase (`firebase.json`),
or Surge. On a subpath host the Pages workflow sets `PAGES_BASE_PATH=/chatfin-site`.
