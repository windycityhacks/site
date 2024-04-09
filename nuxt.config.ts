// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', 'nuxt-fathom'],
  fonts: {
    families: [
      {
        name: 'Bouquet',
        provider: 'none',
      },
      {
        name: 'Besley',
        provider: 'bunny',
      }
    ]
  },
  devtools: { enabled: true },
  fathom: {
    siteId: 'ZRUJMEPU'
  }
})
