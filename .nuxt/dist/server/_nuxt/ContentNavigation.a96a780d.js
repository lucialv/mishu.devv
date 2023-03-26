import { w as withContentBase, u as useHead, j as jsonStringify, a as useCookie, v as vue_cjs_prod, b as useAsyncData } from "../server.mjs";
import "destr";
import { hash } from "ohash";
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
import "@vue/server-renderer";
import "scule";
import "property-information";
import "html-tags";
import "cookie-es";
import "moment";
import "tsparticles";
import "particles.vue3";
const fetchContentNavigation = (queryBuilder) => {
  const params = queryBuilder == null ? void 0 : queryBuilder.params();
  const apiPath = withContentBase(params ? `/navigation/${hash(params)}` : "/navigation");
  {
    useHead({
      link: [
        { rel: "prefetch", href: apiPath }
      ]
    });
  }
  return $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: {
      _params: jsonStringify(params || {}),
      previewToken: useCookie("previewToken").value
    }
  });
};
const ContentNavigation = vue_cjs_prod.defineComponent({
  props: {
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  async setup(props) {
    const {
      query
    } = vue_cjs_prod.toRefs(props);
    const { data, refresh } = await useAsyncData(`content-navigation-${hash(query.value)}`, () => fetchContentNavigation(query.value), "$S4kfQoJwUW");
    return {
      data,
      refresh
    };
  },
  render(ctx) {
    var _a;
    const slots = vue_cjs_prod.useSlots();
    const {
      query,
      data,
      refresh
    } = ctx;
    const emptyNode = (slot, data2) => vue_cjs_prod.h("pre", null, JSON.stringify({ message: "You should use slots with <ContentNavigation>", slot, data: data2 }, null, 2));
    if ((slots == null ? void 0 : slots.empty) && (!data || !(data == null ? void 0 : data.length))) {
      return ((_a = slots == null ? void 0 : slots.empty) == null ? void 0 : _a.call(slots, { query, ...this.$attrs })) || emptyNode("empty", { query, data });
    }
    return (slots == null ? void 0 : slots.default) ? slots.default({ navigation: data, refresh, ...this.$attrs }) : emptyNode("default", data);
  }
});
export {
  ContentNavigation as default
};
