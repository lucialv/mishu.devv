import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/adria/OneDrive/Documentos/Programación/Pagina web test/mishu.dev/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}