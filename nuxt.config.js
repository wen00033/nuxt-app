// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@vueuse/nuxt", "@nuxt/ui", "@nuxt/content", "@nuxt/image"],
  colorMode: {
    preference: "light",
  },
  content: {
    dir: "content",
  },
  target: "static",
  image: {
    caisy: {},
    dir: "public/images",
    format: ["webp"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
});
