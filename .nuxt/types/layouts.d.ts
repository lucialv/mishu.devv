import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/adria/OneDrive/Documentos/Programación/Pagina web test/mishu.dev/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}