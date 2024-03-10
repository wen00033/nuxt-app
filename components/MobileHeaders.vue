<template>
  <header class="Mobile-header">
    <nav>
      <ul class="navigation">
        <li
          @click="$emit('close-navigation')"
          v-for="(el, i) in navigation"
          :key="i"
        >
          <a :href="el.link">
            {{ el.name }}
          </a>
        </li>
        <UAccordion :items="accordion" variant="link" color="white" size="xs">
          <template #menu>
            <!-- <ul class=""> -->
            <li
              @click="$emit('close-navigation')"
              class="menu-link"
              v-for="(el, i) in menuNav"
              :key="i"
            >
              <a :href="el.link">
                {{ el.name }}
              </a>
            </li>
            <!-- </ul> -->
          </template>
        </UAccordion>
      </ul>
    </nav>
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
    align-items: center;
    padding: 2rem;
    gap: 2rem;
    li {
      transition: all ease-out 500ms;
      font-size: 1.5rem;
      text-transform: uppercase;
      a {
        font-size: 1.5rem;
      }
      &:hover {
        color: #f00;
        transform: scale(1.2);
      }
    }
  }
}

.Mobile-header {
  position: fixed;
  z-index: 2;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  span {
    transition: all ease-out 500ms;
    font-size: 1.5rem;
    &:hover {
      color: #f00;
      transform: scale(1.2);
    }
  }
}
.menu-link {
  text-align: center;
  margin-block: 1.5rem;
}
</style>
