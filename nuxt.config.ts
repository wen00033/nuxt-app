// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: ["@vueuse/nuxt", "@nuxt/ui", "@nuxt/content"],
  colorMode: {
    preference: "light",
  },
});
