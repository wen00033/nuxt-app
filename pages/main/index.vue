<template>
  <NuxtLayout name="default">
    <template #title> Main </template>
    <template #content>
      <ul class="menu-item-container">
        <li class="menu-item" v-for="main in list">
          <img class="menu-image" :src="main.thumbnail" alt="main" />
          <div>
            <p class="MenuTitle">{{ main.title }}</p>
            <h3>
              <em>{{ main.description }}</em>
            </h3>
          </div>
          <p class="pageTitle">${{ main.price }}</p>
        </li>
      </ul>
    </template>
  </NuxtLayout>
</template>

<script setup>
const contentQuery = queryContent("main");
const list = await contentQuery.find();
// const { data } = await useAsyncData("home", () =>
//   queryContent("drinks").findOne()
// );
// const contentQuery = queryContent("drinks");
console.log(list);
</script>
