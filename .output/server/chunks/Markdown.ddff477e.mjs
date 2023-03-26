import { v as vue_cjs_prod, c as useUnwrap } from './server.mjs';
import 'unenv/runtime/mock/proxy';
import './renderer.mjs';
import 'ufo';
import 'h3';
import './node-server.mjs';
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
import './rollup/_stream_commonjs-external.mjs';
import 'stream';
import 'unctx';
import 'property-information';
import 'cookie-es';
import 'moment';
import 'tsparticles';
import 'particles.vue3';

const Markdown = vue_cjs_prod.defineComponent({
  name: "Markdown",
  functional: true,
  props: {
    use: {
      type: [String, Function],
      default: "default"
    },
    unwrap: {
      type: [Boolean, String],
      default: false
    }
  },
  setup(props) {
    const { parent } = vue_cjs_prod.getCurrentInstance();
    const { between } = vue_cjs_prod.useSlots();
    const tags = vue_cjs_prod.computed(() => {
      if (typeof props.unwrap === "string") {
        return props.unwrap.split(" ");
      }
      return ["*"];
    });
    return {
      tags,
      between,
      parent
    };
  },
  render({ use, unwrap, between, tags, parent }) {
    var _a;
    try {
      const slot = typeof use === "string" ? (parent == null ? void 0 : parent.slots[use]) || ((_a = parent == null ? void 0 : parent.parent) == null ? void 0 : _a.slots[use]) : use;
      if (!slot) {
        return vue_cjs_prod.h("div");
      }
      if (!unwrap) {
        return [slot()];
      }
      const { flatUnwrap } = useUnwrap();
      const unwrapped = flatUnwrap(slot(), tags);
      if (between) {
        return unwrapped.flatMap((vnode, index) => index === 0 ? [vnode] : [between(), vnode]);
      }
      return unwrapped.reduce((acc, item) => {
        if (typeof item.children === "string") {
          if (typeof acc[acc.length - 1] === "string") {
            acc[acc.length - 1] += item.children;
          } else {
            acc.push(item.children);
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
    } catch (e) {
      return vue_cjs_prod.h("div");
    }
  }
});

export { Markdown as default };
//# sourceMappingURL=Markdown.ddff477e.mjs.map
