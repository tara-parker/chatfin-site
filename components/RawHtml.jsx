'use client';

import { useEffect, useRef } from 'react';

/**
 * Renders a raw ChatFin page body (markup + inline <style> + inline <script>).
 *
 * The markup is emitted during SSR via dangerouslySetInnerHTML, so all content,
 * links and backlinks are present in the server-rendered HTML and fully crawlable.
 *
 * Scripts arrive retyped as "text/cf-script" (see lib/content.js) so the browser
 * does NOT run them at parse time. On mount we run them exactly once by cloning each
 * into a real <script> node. The body is wrapped in an IIFE so its top-level
 * const/let/function declarations are function-scoped, otherwise re-running the same
 * page after an SPA navigation would throw "Identifier 'io' has already been declared".
 */
export default function RawHtml({ html }) {
  const ref = useRef(null);
  const ran = useRef(false);

  useEffect(() => {
    const root = ref.current;
    if (!root || ran.current) return; // guard against React Strict Mode double-invoke
    ran.current = true;

    root.querySelectorAll('script[type="text/cf-script"]').forEach((old) => {
      const s = document.createElement('script');
      // Copy attributes except the neutralizing type, so it runs as a classic script.
      for (const attr of old.attributes) {
        if (attr.name === 'type') continue;
        s.setAttribute(attr.name, attr.value);
      }
      s.textContent = '(function(){\n' + old.textContent + '\n})();';
      old.replaceWith(s);
    });
  }, []);

  return <div ref={ref} suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />;
}
