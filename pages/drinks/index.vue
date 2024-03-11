<template>
  <NuxtLayout name="default">
    <template #title> Drinks </template>
    <template #content>
      <ul class="menu-item-container">
        <li class="menu-item" v-for="drink in list">
          {{ console.log(drink) }}
          <img class="menu-image" :src="drink.thumbnail" alt="drink" />
          <div>
            <p class="MenuTitle">{{ drink.title }}</p>
            <h3>
              <em>{{ drink.description }}</em>
            </h3>
          </div>
          <p class="pageTitle">${{ drink.price }}</p>
        </li>
      </ul>
    </template>
  </NuxtLayout>
</template>

<script setup>
const contentQuery = queryContent("drinks");
const list = await contentQuery.find();
// const { data } = await useAsyncData("home", () =>
//   queryContent("drinks").findOne()
// );
// const contentQuery = queryContent("drinks");
console.log(list);
</script>
