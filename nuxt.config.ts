// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/scss/global.scss'],

  app: {
    head: {
      title: 'heitor.tech',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      meta: [
        { name: 'description', content: "Heitor Stael's personal website that contains his social media and portfolio." },
        { name: "author", content: "Heitor Stael" },
        {
          name: "keywords",
          content: "HTML, CSS, JavaScript, Web Development, Developer, NuxtJS, VueJS, Vue, Heitor, Stael, Full Stack, heitor tech, Laravel, portfolio",
        },
        { name: "theme-color", content: "#101010" },
      ]
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_colors.scss" as *;'
        }
      }
    }
  },

  modules: ['nuxt-feather-icons']
})