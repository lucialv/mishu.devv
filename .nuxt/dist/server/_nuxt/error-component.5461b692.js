import { ssrRenderAttrs, ssrInterpolate } from "@vue/server-renderer";
import { _ as _export_sfc, v as vue_cjs_prod } from "../server.mjs";
import "@vue/compiler-dom";
import "@vue/runtime-dom";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@vue/devtools-api";
import "destr";
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
  props: ["error"],
  layout: "error",
  data() {
    return {
      mappings: {
        404: "Page not found.",
        503: "Service is temporarily unavailable.",
        504: "API server is unreachable."
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<main${ssrRenderAttrs(_attrs)}><div class="center"><h1 class="title">${ssrInterpolate($props.error.statusCode)}</h1><h2 class="h3 text-muted">${ssrInterpolate($data.mappings[$props.error.statusCode] || $props.error.message)}</h2></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const error = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  error as default
};
