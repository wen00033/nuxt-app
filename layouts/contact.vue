<template>
  <main class="contact-page">
    <slot name="content" />
  </main>
</template>

<script setup></script>

<style>
.contact-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  flex-grow: 1;
  padding: 2rem;
}
</style>
