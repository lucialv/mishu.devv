// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../components.plugin").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/head/runtime/plugin").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/pages/runtime/router").default> &
  InjectionType<typeof import("../../node_modules/@nuxt/image-edge/dist/runtime/plugin").default> &
  InjectionType<typeof import("../../node_modules/@nuxt/content/dist/runtime/plugin").default> &
  InjectionType<typeof import("../../plugins/particles.vue3").default> &
  InjectionType<typeof import("../../plugins/scrollToTop").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
