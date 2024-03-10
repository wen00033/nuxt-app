<template>
  <Headers v-if="isLargeScreen" />
  <ArrowRight />
  <main>
    <h1 class="title">
      <slot name="title" />
    </h1>
    <slot name="content" />
  </main>
</template>

<script setup>
import Headers from "../components/Header.vue";
import { ArrowRight } from "lucide-vue-next";
import { useMediaQuery } from "@vueuse/core";
const isLargeScreen = useMediaQuery("(min-width: 768px)");
</script>

<style>
main {
  position: relative;
  flex-grow: 1;
  padding: 2rem;
}

.title {
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>
