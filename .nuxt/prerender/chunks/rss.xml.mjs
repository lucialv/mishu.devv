import { defineEventHandler, appendHeader } from 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/h3/dist/index.mjs';
import { Feed } from 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/feed/lib/feed.js';
import { s as serverQueryContent } from './nitro-prerenderer.mjs';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/ohmyfetch/dist/node.mjs';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/radix3/dist/index.mjs';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/unstorage/dist/drivers/fs.mjs';
import 'node:url';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/ipx/dist/index.mjs';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/remark-emoji/index.js';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/rehype-slug/index.js';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/remark-squeeze-paragraphs/index.js';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/rehype-external-links/index.js';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/remark-gfm/index.js';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/rehype-sort-attribute-values/index.js';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/rehype-sort-attributes/index.js';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/rehype-raw/index.js';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/js-yaml/dist/js-yaml.mjs';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/flat/index.js';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/unified/index.js';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/remark-parse/index.js';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/remark-rehype/index.js';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/unist-util-visit/index.js';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/stringify-entities/index.js';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/parse-entities/index.js';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/micromark-util-character/index.js';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/micromark-factory-space/index.js';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/micromark-factory-whitespace/index.js';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/micromark-core-commonmark/index.js';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/mdast-util-to-hast/index.js';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/detab/index.js';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/unist-builder/index.js';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/mdurl/index.js';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/unist-util-position/index.js';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/html-tags/index.js';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/slugify/slugify.js';
import 'file://C:/Users/adria/OneDrive/Documentos/Programaci%C3%B3n/Pagina%20web%20test/mishu.dev/node_modules/shiki-es/dist/shiki.node.mjs';

const parse = (json) => {
  const type = json["type"];
  const tag = json["tag"];
  const children = json["children"];
  let result = "";
  if (tag) {
    result += `<${tag}`;
    const props = json["props"];
    if (props) {
      for (const prop of Object.entries(props)) {
        const key = prop[0];
        const value = prop[1];
        if (key == "code")
          continue;
        result += " " + key + '="' + value + '"';
      }
    }
    result += ">";
  }
  if (type == "text")
    result += json["value"];
  if (children) {
    for (const child of children)
      result += parse(child);
  }
  if (tag)
    result += `</${tag}>`;
  return result.replaceAll("\r\n", "<br>").replaceAll("\n", "<br>");
};
const rss_xml = defineEventHandler(async (event) => {
  const visible = await serverQueryContent(event).where({ visibility: 1 }).find();
  const limited = await serverQueryContent(event).where({ visibility: 2 }).find();
  const posts = visible.concat(limited);
  const feed = new Feed({
    id: "rss",
    title: `Blog - ${process.env.title}`,
    description: process.env.description,
    link: `https://${process.env.domain}`,
    image: process.env.favicon,
    copyright: `Copyright ${new Date().getFullYear()} - ${process.env.title}`
  });
  for (const post of posts) {
    feed.addItem({
      title: post.title,
      id: `https://${process.env.domain}${post._path}`,
      link: `https://${process.env.domain}${post._path}`,
      image: post.image,
      description: post.description,
      published: new Date(post.created * 1e3),
      content: `
                <p>
                    <img alt="Cover image" src="${post.image}">
                </p>
                <p>You are viewing an article as a preview for RSS readers and it may be slightly different from the original article. <a href='https://${process.env.domain}${post._path}'>Click here</a> to see full article.</p> 
                ${parse(post.excerpt)}
                <p>For more articles, visit <a href="https://${process.env.domain}">${process.env.domain}</a> or subscribe this RSS channel - <a href="https://${process.env.domain}/rss.xml">${process.env.domain}/rss.xml</a>.</p>
            `,
      date: void 0
    });
  }
  appendHeader(event, "Content-Type", "application/xml");
  return feed.rss2();
});

export { rss_xml as default };
//# sourceMappingURL=rss.xml.mjs.map
