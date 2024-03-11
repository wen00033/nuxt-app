// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: "static",
  content: {
    dir: "content",
  },
  buildModules: ["@nuxt/content"],
  ssr: true,
  devtools: { enabled: true },
  modules: ["@vueuse/nuxt", "@nuxt/ui", "@nuxt/content"],
  colorMode: {
    preference: "light",
  },
});
