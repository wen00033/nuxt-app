<template>
  <main>
    <h1 class="pageTitle">
      <slot name="title" />
    </h1>
    <slot name="content" />
  </main>
  <slot v-if="isLargeScreen" name="video" />
</template>

<script setup>
const isLargeScreen = useMediaQuery("(min-width: 568px)");
</script>
