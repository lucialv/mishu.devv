import { e as useRuntimeConfig, f as useRoute, v as vue_cjs_prod, b as useAsyncData, q as queryContent, g as _sfc_main$9, h as __nuxt_component_4, i as __nuxt_component_2$1, k as _sfc_main$7, l as __nuxt_component_5 } from './server.mjs';
import moment from 'moment';
import { s as serverRenderer } from './renderer.mjs';
import 'unenv/runtime/mock/proxy';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'destr';
import 'h3';
import 'defu';
import 'scule';
import 'property-information';
import 'html-tags';
import 'ohash';
import 'cookie-es';
import 'tsparticles';
import 'particles.vue3';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'fs';
import 'pathe';
import 'url';
import 'node:url';
import 'ipx';
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
import 'slugify';
import 'shiki-es';
import './rollup/_stream_commonjs-external.mjs';
import 'stream';

const _sfc_main = {
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const route = useRoute();
    const { data } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(async () => useAsyncData(
      "Content",
      async () => await queryContent().where({ _path: route.fullPath }).findOne(),
      "$gY3tvhwF9l"
    )), __temp = await __temp, __restore(), __temp);
    const selected = data.value;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
      const _component_Title = vue_cjs_prod.resolveComponent("Title");
      const _component_Meta = vue_cjs_prod.resolveComponent("Meta");
      const _component_Link = vue_cjs_prod.resolveComponent("Link");
      const _component_Navbar = _sfc_main$9;
      const _component_nuxt_img = __nuxt_component_4;
      const _component_ContentDoc = __nuxt_component_2$1;
      const _component_Toc = _sfc_main$7;
      const _component_Footer = __nuxt_component_5;
      _push(`<main${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "mt-5" }, _attrs))}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_Title, null, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${serverRenderer.exports.ssrInterpolate((_a2 = vue_cjs_prod.unref(selected)) == null ? void 0 : _a2.title)} - ${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(config).env.title)}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString((_b2 = vue_cjs_prod.unref(selected)) == null ? void 0 : _b2.title) + " - " + vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(config).env.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_Meta, {
        name: "description",
        content: (_a = vue_cjs_prod.unref(selected)) == null ? void 0 : _a.description
      }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_Meta, {
        name: "keywords",
        content: (_b = vue_cjs_prod.unref(selected)) == null ? void 0 : _b.keywords
      }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_Meta, {
        property: "og:title",
        content: (_c = vue_cjs_prod.unref(selected)) == null ? void 0 : _c.title
      }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_Meta, {
        property: "og:description",
        content: (_d = vue_cjs_prod.unref(selected)) == null ? void 0 : _d.description
      }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_Meta, {
        property: "og:image",
        content: (_e = vue_cjs_prod.unref(selected)) == null ? void 0 : _e.image
      }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_Meta, {
        property: "og:image:width",
        content: "2400"
      }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_Meta, {
        property: "og:image:height",
        content: "1100"
      }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_Meta, {
        property: "og:type",
        content: "article"
      }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_Meta, {
        name: "twitter:title",
        content: (_f = vue_cjs_prod.unref(selected)) == null ? void 0 : _f.title
      }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_Meta, {
        name: "twitter:description",
        content: (_g = vue_cjs_prod.unref(selected)) == null ? void 0 : _g.description
      }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_Meta, {
        name: "twitter:image",
        content: (_h = vue_cjs_prod.unref(selected)) == null ? void 0 : _h.image
      }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_Meta, {
        name: "twitter:card",
        content: "summary_large_image"
      }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_Link, {
        rel: "canonical",
        href: `https://${vue_cjs_prod.unref(config).env.domain}${vue_cjs_prod.unref(route).fullPath}`
      }, null, _parent));
      _push(`<div class="container my-5 article-content"><h1 class="text-center my-5 article-title-page">${serverRenderer.exports.ssrInterpolate((_i = vue_cjs_prod.unref(selected)) == null ? void 0 : _i.title)}</h1>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_Navbar, {
        pages: [
          {
            name: "Blog",
            url: "/"
          },
          {
            name: (_j = vue_cjs_prod.unref(selected)) == null ? void 0 : _j.title,
            active: true
          }
        ]
      }, null, _parent));
      _push(`<div class="article-tags mt-2"><!--[-->`);
      serverRenderer.exports.ssrRenderList((_k = vue_cjs_prod.unref(selected)) == null ? void 0 : _k.tags, (tag, i) => {
        _push(`<span class="badge bg-custom float-start">${serverRenderer.exports.ssrInterpolate(tag)}</span>`);
      });
      _push(`<!--]--><span class="float-end">${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(moment).unix((_l = vue_cjs_prod.unref(selected)) == null ? void 0 : _l.created).format("DD MMMM YYYY HH:mm"))}</span></div><br><div class="row mt-2"><div class="col-sm-12 col-lg-9">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_img, {
        format: "webp",
        loading: "lazy",
        alt: "Cover image",
        class: "rounded w-100",
        src: (_m = vue_cjs_prod.unref(selected)) == null ? void 0 : _m.image
      }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_ContentDoc, {
        path: vue_cjs_prod.unref(route).fullPath,
        tag: "article",
        class: "px-2"
      }, null, _parent));
      _push(`</div>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_Toc, {
        links: (_p = (_o = (_n = vue_cjs_prod.unref(selected)) == null ? void 0 : _n.body) == null ? void 0 : _o.toc) == null ? void 0 : _p.links,
        class: "col-sm-12 col-lg-3 d-none d-lg-inline"
      }, null, _parent));
      _push(`</div></div>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_.b82a4b02.mjs.map
