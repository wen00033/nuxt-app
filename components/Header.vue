<template>
  <header class="header">
    <nav>
      <ul class="navigation">
        <li v-for="(el, i) in navigation" :key="i">
          <NuxtLink :to="el.link">
            {{ el.name }}
          </NuxtLink>
        </li>
        <UAccordion :items="accordion" variant="link" color="white" size="xs">
          <template #menu>
            <li class="menu-link" v-for="(el, i) in menuNav" :key="i">
              <NuxtLink :to="el.link">
                {{ el.name }}
              </NuxtLink>
            </li>
          </template>
        </UAccordion>
      </ul>
    </nav>
    <img class="fork" src="/fork.svg" alt="fork" />
  </header>
</template>

<script setup>
import { ref } from "vue";
const navigation = ref([
  { name: "Home", link: "/" },
  { name: "News", link: "/post" },
  { name: "Contact", link: "/contact" },
]);
const menuNav = ref([
  { name: "Starter", link: "/starter" },
  { name: "Main", link: "/main" },
  { name: "Drinks", link: "/drinks" },
]);
const accordion = [
  {
    label: "Menu",
    icon: "chevron-bottom",
    defaultOpen: false,
    slot: "menu",
  },
];
</script>
