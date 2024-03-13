<template>
  <ClientOnly>
    <MobileHeadersVue
      @toggle-close="toggleClose"
      :class="toggle ? 'slideIn' : 'slideOut'"
      v-if="!isLargeScreen"
    />
    <Headers v-else />
  </ClientOnly>
  <div class="toggle" @click="toggleSidebar" v-if="!isLargeScreen">
    <ArrowRightFromLine v-if="!toggle" />
    <ArrowLeftToLine v-if="toggle" />
  </div>
  <NuxtPage />
</template>
<style lang="scss">
@import "./styles/style.scss";
</style>

<script setup>
import { ArrowRightFromLine, ArrowLeftToLine } from "lucide-vue-next";
import { ref, onMounted } from "vue";
import Headers from "./components/Header.vue";
import MobileHeadersVue from "./components/MobileHeaders.vue";
const isLargeScreen = useMediaQuery("(min-width: 568px)");

// onMounted(() => {
//   isLargeScreen.value = useMediaQuery("(min-width: 568px)");
// });

const toggle = ref(false);
function toggleSidebar() {
  toggle.value = !toggle.value;
}
function toggleClose() {
  toggle.value = false;
}
</script>
