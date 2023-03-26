// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,

  nitro: {
    preset: "cloudflare-pages",
    prerender: {
      routes: ["/sitemap.xml", "/robots.txt", "/rss.xml"],
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: process.env.html_lang,
      },
      title: process.env.title,
      meta: [
        {
          charset: "utf-8",
        },
        {
          "http-equiv": "X-UA-Compatible",
          content: "IE=edge",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content: process.env.description,
        },
        {
          hid: "robots",
          name: "robots",
          content: "index,follow",
        },
        {
          hid: "theme-color",
          name: "theme-color",
          content: "#5672fc",
        },
        {
          hid: "og:title",
          name: "og:title",
          property: "og:title",
          content: process.env.title,
        },
        {
          hid: "og:description",
          name: "og:description",
          property: "og:description",
          content: process.env.description,
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          property: "og:site_name",
          content: process.env.title,
        },
        {
          hid: "og:image",
          name: "og:image",
          property: "og:image",
          content: process.env.favicon,
        },
        {
          hid: "og:type",
          name: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "og:url",
          name: "og:url",
          property: "og:url",
          content: `https://${process.env.domain}`,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: process.env.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: process.env.description,
        },
        {
          hid: "twitter:site",
          name: "twitter:site",
          content: process.env.title,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: process.env.favicon,
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary",
        },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0/js/bootstrap.min.js",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0/css/bootstrap.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: process.env.favicon,
        },
        {
          rel: "apple-touch-icon",
          href: process.env.favicon,
        },
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: process.env.title,
          href: `https://${process.env.domain}/rss.xml`,
        },
      ],
      noscript: [
        {
          children: "Javascript is required",
        },
      ],
    },
  },

  css: ["~/assets/css/general.css", "highlight.js/styles/github-dark.css"],

  build: {
    transpile: ["@popperjs"],
  },

  plugins: [
    {
      src: "~/plugins/particles.vue3.ts",
      ssr: false,
    },
    {
      src: "~/plugins/scrollToTop.ts",
      ssr: false,
    },
  ],

  modules: ["@nuxt/content", "@nuxt/image-edge"],

  content: {
    documentDriven: true,
    mdc: true,
    toc: {
      depth: 3,
      searchDepth: 3,
    },
    highlight: {
      theme: {
        default: "github-light",
        dark: "github-dark",
      },
    },
  },
});
