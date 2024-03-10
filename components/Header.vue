<template>
  <header class="header">
    <nav>
      <ul class="navigation">
        <li v-for="(el, i) in navigation" :key="i">
          <a :href="el.link">
            {{ el.name }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
const navigation = ref([
  { name: "Home", link: "/" },
  { name: "News", link: "/post" },
  { name: "Starter", link: "/starter" },
  { name: "Main", link: "/main" },
  { name: "Contact", link: "/contact" },
]);
</script>

<style lang="scss">
header {
  background-color: #333;
  color: white;
  padding: 2rem;
  ul {
    display: flex;
    flex-direction: column;
    padding-inline: 10%;
    justify-items: center;
    padding: 2rem;
    gap: 2rem;
    li {
      transition: all ease-out 500ms;
      font-size: 1.5rem;
      text-transform: uppercase;
      &:hover {
        color: #f00;
        transform: scale(1.2);
      }
    }
  }
}
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
</style>
