import { defineEventHandler, appendHeader } from 'h3';

const robots_txt = defineEventHandler((event) => {
  appendHeader(event, "Content-Type", "text/plain");
  return `User-agent: *
Sitemap: https://${process.env.domain}/sitemap.xml`;
});

export { robots_txt as default };
//# sourceMappingURL=robots.txt.mjs.map
