export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "heitor.tech",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "My personal website that contains information about me, my résumé and my projects portfolio.",
      },
      { name: "format-detection", content: "telephone=no" },
      { name: "author", content: "Heitor Stael" },
      {
        name: "keywords",
        content:
          "HTML, CSS, JavaScript, Web Development, Developer, Landing Page, NuxtJS, VueJS, Vue, Heitor, Stael, Full Stack, heitor tech",
      },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#246eff" },
      { name: "og:title", content: "heitor.tech" },
      {
        name: "og:description",
        content:
          "My personal website that contains information about me, my résumé and my projects portfolio.",
      },
      { name: "og:type", content: "website" },
      { name: "og:image", content: "https://heitor.tech/img/og_default.png" },
      { name: "og:url", content: "https://heitor.tech" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/resets/normalize.css",
    "@/assets/css/resets/reset.css",
    "@/assets/css/resets/typography.css",
    "@/assets/css/fonts.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/fontawesome.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    "@nuxtjs/device",
  ],
  device: {
    defaultUserAgent:
      "Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Mobile Safari/537.36",
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // router config
  router: {},

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
