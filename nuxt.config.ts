// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
      target: 'static',
  buildModules: [
    '@nuxt/image',
  ],
  modules: ['nuxt-icon'],
  plugins: [{ src: "@/plugins/aos.client.ts", ssr: false, mode: "client" }],
})
