export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'heitor.tech',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Heitors personal website." },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'author', content: 'Heitor Stael' },
      { name: 'keywords', content: 'HTML, CSS, JavaScript, Web Development, Developer, Landing Page, NuxtJS, VueJS, Vue, Heitor, Stael, Full Stack, heitor tech' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/resets/normalize.css',
    '@/assets/css/resets/reset.css',
    '@/assets/css/resets/typography.css',
    '@/assets/css/fonts.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // router config
  router: {
    middleware: 'mobile'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel:{
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    }
  }
}
