import { defineEventHandler, appendHeader } from 'h3';
import { Feed } from 'feed';
import { s as serverQueryContent } from './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'ohmyfetch';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'fs';
import 'pathe';
import 'url';
import 'node:url';
import 'ipx';
import 'defu';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'js-yaml';
import 'flat';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'unist-util-visit';
import 'stringify-entities';
import 'parse-entities';
import 'micromark-util-character';
import 'micromark-factory-space';
import 'micromark-factory-whitespace';
import 'micromark-core-commonmark';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'unist-util-position';
import 'html-tags';
import 'slugify';
import 'shiki-es';

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
