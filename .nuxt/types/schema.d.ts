import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["image"]?: typeof import("@nuxt/image-edge").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
  }
  interface RuntimeConfig {
     env: {
        title: string,

        domain: string,

        header: string,

        api: any,

        backup_config: any,

        favicon: string,
    },

    app: {
        baseURL: string,

        buildAssetsDir: string,

        cdnURL: string,
    },

    content: {
        cacheVersion: number,

        cacheIntegerity: string,

        transformers: Array<string>,

        base: string,

        watch: boolean,

        sources: Array<string>,

        ignores: Array<string>,

        locales: Array<any>,

        defaultLocale: any,

        highlight: {
             theme: {
                   default: string,

                   dark: string,
             },
        },

        markdown: {
             tags: {
                   p: string,

                   a: string,

                   blockquote: string,

                   "code-inline": string,

                   code: string,

                   em: string,

                   h1: string,

                   h2: string,

                   h3: string,

                   h4: string,

                   h5: string,

                   h6: string,

                   hr: string,

                   img: string,

                   ul: string,

                   ol: string,

                   li: string,

                   strong: string,

                   table: string,

                   thead: string,

                   tbody: string,

                   td: string,

                   th: string,

                   tr: string,
             },

             rehypePlugins: Array<any>,

             remarkPlugins: Array<any>,
        },

        yaml: any,

        csv: any,

        navigation: {
             fields: Array<any>,
        },

        documentDriven: boolean,

        mdc: boolean,

        toc: {
             depth: number,

             searchDepth: number,
        },
    },

    ipx: {
        dir: string,

        domains: Array<any>,

        sharp: any,

        alias: any,
    },
  }
  interface PublicRuntimeConfig {
     env: {
        title: string,

        domain: string,

        header: string,

        api: any,

        backup_config: any,

        favicon: string,
    },

    content: {
        base: string,

        tags: {
             p: string,

             a: string,

             blockquote: string,

             "code-inline": string,

             code: string,

             em: string,

             h1: string,

             h2: string,

             h3: string,

             h4: string,

             h5: string,

             h6: string,

             hr: string,

             img: string,

             ul: string,

             ol: string,

             li: string,

             strong: string,

             table: string,

             thead: string,

             tbody: string,

             td: string,

             th: string,

             tr: string,
        },

        highlight: {
             theme: {
                   default: string,

                   dark: string,
             },
        },

        wsUrl: string,
    },
  }
}