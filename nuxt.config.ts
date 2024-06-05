// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  css: ['~/assets/css/main.scss'],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  modules: [
    "@element-plus/nuxt",
    ["@nuxtjs/google-fonts", {
      families: {
        Roboto: [100, 400, 500, 700]
      }
    }]
  ],
  ssr: true,
  target: 'server',
})