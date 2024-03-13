<template>
  <!-- <ClientOnly> -->
  <Headers v-if="isLargeScreen" />
  <MobileHeadersVue
    @toggle-close="toggleClose"
    :class="toggle ? 'slideIn' : 'slideOut'"
    v-else
  />
  <!-- </ClientOnly> -->
  <div class="toggle" @click="toggleSidebar" v-if="!isLargeScreen">
    <ArrowRightFromLine v-if="!toggle" />
    <ArrowLeftToLine v-if="toggle" />
  </div>
  <swiper v-if="!isLargeScreen" class="myswiper">
    <swiper-slide> <NuxtPage /></swiper-slide>
    <swiper-slide> <videoVue /></swiper-slide>
  </swiper>
  <NuxtPage v-else />
</template>

<script setup>
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ArrowRightFromLine, ArrowLeftToLine } from "lucide-vue-next";
import { ref } from "vue";
import videoVue from "./components/video.vue";
import Headers from "./components/Header.vue";
import MobileHeadersVue from "./components/MobileHeaders.vue";
const isLargeScreen = useMediaQuery("(min-width: 568px)");
const toggle = ref(false);
function toggleSidebar() {
  toggle.value = !toggle.value;
}
function toggleClose() {
  toggle.value = false;
}
</script>

<style lang="scss">
@import "./styles/style.scss";
</style>
