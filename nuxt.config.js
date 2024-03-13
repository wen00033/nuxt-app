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
});
