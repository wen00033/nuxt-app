<template>
  <Headers v-if="isLargeScreen" />
  <MobileHeadersVue
    @close-navigation="closeToggle"
    class="slideIn"
    v-if="toggle && !isLargeScreen"
  />

  <div class="toggle" @click="toggleSidebar" v-if="!isLargeScreen">
    <ArrowRightFromLine v-if="!toggle" />
    <ArrowLeftToLine v-if="toggle" />
  </div>
  <NuxtPage />
</template>

<script setup>
import { ArrowRightFromLine, ArrowLeftToLine } from "lucide-vue-next";
import Headers from "./components/Header.vue";
import MobileHeadersVue from "./components/MobileHeaders.vue";
const isLargeScreen = useMediaQuery("(min-width: 568px)");
import { ref } from "vue";
const toggle = ref(false);

function closeToggle() {
  toggle.value = false;
}
function toggleSidebar() {
  toggle.value = !toggle.value;
}
</script>

<style lang="scss">
@import "./styles/style.scss";
</style>
