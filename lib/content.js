import fs from 'node:fs';
import path from 'node:path';

// Read a raw ChatFin page body from /content at request/build time (server only).
//
// The page bodies contain inline <script> blocks. Because they are shipped inside
// the server-rendered document, the browser would execute them natively at parse
// time, and then RawHtml would execute them a second time, redeclaring globals
// like `const io` and crashing. To make execution deterministic on BOTH initial
// load and client-side (SPA) navigation, we neutralize the executable scripts here
// by retyping them to "text/cf-script" (which the browser ignores). RawHtml then
// runs them exactly once on the client. The application/ld+json block keeps its
// type so it stays valid, crawlable structured data.
export function loadContent(name) {
  const file = path.join(process.cwd(), 'content', `${name}.html`);
  const raw = fs.readFileSync(file, 'utf8');
  return raw.replaceAll('<script>', '<script type="text/cf-script">');
}
