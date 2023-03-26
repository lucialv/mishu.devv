import { defineEventHandler, appendHeader } from 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/h3/dist/index.mjs';

const robots_txt = defineEventHandler((event) => {
  appendHeader(event, "Content-Type", "text/plain");
  return `User-agent: *
Sitemap: https://${process.env.domain}/sitemap.xml`;
});

export { robots_txt as default };
//# sourceMappingURL=robots.txt.mjs.map
