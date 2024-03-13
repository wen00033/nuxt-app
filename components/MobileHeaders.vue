<template>
  <header class="Mobile-header">
    <nav>
      <ul class="navigation">
        <li v-for="(el, i) in navigation" :key="i">
          <NuxtLink @click="$emit('toggle-close')" :to="el.link">
            {{ el.name }}
          </NuxtLink>
        </li>
        <UAccordion :items="accordion" variant="link" color="white" size="xs">
          <template #menu>
            <!-- <ul class=""> -->
            <li class="menu-link" v-for="(el, i) in menuNav" :key="i">
              <NuxtLink @click="$emit('toggle-close')" :to="el.link">
                {{ el.name }}
              </NuxtLink>
            </li>
            <!-- </ul> -->
          </template>
        </UAccordion>
      </ul>
    </nav>
    <img class="spice" src="/spice.svg" alt="spice" />
    <img class="pepper" src="/pepper.svg" alt="pepper" />
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
//   { name: "Starter", link: "/starter" },
// { name: "Main", link: "/main" },
</script>
