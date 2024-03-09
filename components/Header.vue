<template>
  <header>
    <nav>
      <ul>
        <li v-for="(el, i) in navigation" :key="i">
          {{ el }}
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
const navigation = ref(["Home", "About", "Contact"]);
</script>

<style lang="scss">
header {
  background-color: #333;
  color: white;
  padding: 2rem;
  ul {
    display: flex;
    padding-inline: 10%;
    justify-content: flex-end;
    flex-direction: row;
    gap: 1rem;
    li {
      font-size: 2rem;
      text-transform: uppercase;
    }
  }
}
</style>
