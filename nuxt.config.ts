// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  components: [
    { path: './components/atoms/' },
    { path: './components/molecules/' },
    { path: './components/organisms/' }
  ],
  css: [
    '~/assets/scss/common/reset.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: '@use "~/assets/scss/main.scss" as *;'
        }
      }
    }
  }
})
