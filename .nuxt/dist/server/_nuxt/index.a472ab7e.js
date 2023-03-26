import { v as vue_cjs_prod, e as useRuntimeConfig, b as useAsyncData, q as queryContent, m as __nuxt_component_0, n as __nuxt_component_1, o as __nuxt_component_2, p as _sfc_main$1, h as __nuxt_component_4, l as __nuxt_component_5 } from "../server.mjs";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "@vue/server-renderer";
import "@vue/compiler-dom";
import "@vue/runtime-dom";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@vue/devtools-api";
import "h3";
import "defu";
import "scule";
import "property-information";
import "html-tags";
import "ohash";
import "cookie-es";
import "moment";
import "tsparticles";
import "particles.vue3";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const obj = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => import("./config.b8827bf5.js")), __temp = await __temp, __restore(), __temp);
    const config = useRuntimeConfig();
    const { data } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useAsyncData(
      () => queryContent().where({ visibility: 1 }).find(),
      "$PslAyef5YX"
    )), __temp = await __temp, __restore(), __temp);
    const posts = data.value;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Title = vue_cjs_prod.resolveComponent("Title");
      const _component_Link = vue_cjs_prod.resolveComponent("Link");
      const _component_Header = __nuxt_component_0;
      const _component_Articles = __nuxt_component_1;
      const _component_Status = __nuxt_component_2;
      const _component_Quotes = _sfc_main$1;
      const _component_nuxt_img = __nuxt_component_4;
      const _component_Footer = __nuxt_component_5;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Title, null, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(vue_cjs_prod.unref(config).env.title)} dev`);
          } else {
            return [
              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(config).env.title) + " dev", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Link, {
        rel: "canonical",
        href: `https://${vue_cjs_prod.unref(config).env.domain}`
      }, null, _parent));
      _push(ssrRenderComponent(_component_Header, { settings: vue_cjs_prod.unref(obj) }, null, _parent));
      _push(`<div class="container mb-3"><div class="row"><div class="col-lg-8 px-3">`);
      if (vue_cjs_prod.unref(posts) && vue_cjs_prod.unref(posts).length > 0) {
        _push(ssrRenderComponent(_component_Articles, { articles: vue_cjs_prod.unref(posts) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-lg-4 px-4"><aside>`);
      if (vue_cjs_prod.unref(obj).discord) {
        _push(ssrRenderComponent(_component_Status, {
          discord: vue_cjs_prod.unref(obj).discord,
          favicon: vue_cjs_prod.unref(config).env.favicon
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<hr>`);
      if (vue_cjs_prod.unref(obj).quotes && vue_cjs_prod.unref(obj).quotes.length > 0) {
        _push(ssrRenderComponent(_component_Quotes, {
          quotes: vue_cjs_prod.unref(obj).quotes,
          class: "mt-4"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<br><hr>`);
      if ((_a = vue_cjs_prod.unref(obj).github) == null ? void 0 : _a.widget_url) {
        _push(ssrRenderComponent(_component_nuxt_img, {
          format: "webp",
          loading: "lazy",
          src: vue_cjs_prod.unref(obj).github.widget_url,
          alt: "Github stats",
          class: "p-0 m-0 w-100"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<hr>`);
      if ((_b = vue_cjs_prod.unref(obj).githuba) == null ? void 0 : _b.stats_url) {
        _push(ssrRenderComponent(_component_nuxt_img, {
          format: "webp",
          loading: "lazy",
          src: vue_cjs_prod.unref(obj).githuba.stats_url,
          alt: "Github stats",
          class: "p-0 m-0 w-100"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<hr><a href="https://ko-fi.com/mishhuu">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        format: "webp",
        loading: "lazy",
        src: "https://cdn.discordapp.com/attachments/1077731148060438741/1089623351359717466/ELs9r2a.png",
        alt: "Buy me a coffee",
        width: "auto",
        height: "auto",
        class: "p-0 m-0 w-100",
        style: { "border-radius": "20px" }
      }, null, _parent));
      _push(`</a><hr></aside></div></div></div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
