<template>
  <Headers />
  <main>
    <h1 class="title">
      <slot name="title" />
    </h1>
    <slot name="content" />
  </main>
</template>

<script setup>
import Headers from "../components/Header.vue";
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
