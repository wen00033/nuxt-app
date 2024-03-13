<template>
  <main class="homepage" v-if="isLargeScreen">
    <h1 class="pageTitle">
      <slot name="title" />
    </h1>
    <slot name="content" />
  </main>

  <swiper v-else class="myswiper">
    <swiper-slide>
      <main class="homepage">
        <h1 class="pageTitle">
          <slot name="title" />
        </h1>
        <slot name="content" /></main
    ></swiper-slide>
    <swiper-slide> <slot name="video" /></swiper-slide>
  </swiper>
  <slot v-if="isLargeScreen" name="video" />
</template>

<script setup>
const isLargeScreen = useMediaQuery("(min-width: 568px)");
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/vue";
</script>
