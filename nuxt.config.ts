// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@nuxtjs/tailwindcss', ['@nuxtjs/google-fonts', {
    families: {
      Roboto: true
    }
  }], "@nuxt/content"]
})