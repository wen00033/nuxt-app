<template>
  <NuxtLayout name="default">
    <template #title> Drinks </template>
    <template #content>
      <ul>
        <li v-for="drink in list">
          {{ console.log(drink) }}
          <h3>{{ drink.title }}</h3>
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
