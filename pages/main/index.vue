<template>
  <NuxtLayout name="default">
    <template #title> Main </template>
    <template #content>
      <ContentList path="/main">
        <template #default="{ list }">
          <ul class="menu-item-container">
            <li class="menu-item" v-for="(main, i) in list" :key="i">
              {{ console.log(main.thumbnail) }}
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

        <template #not-found>
          <p class="pageTitle">Please add new in the list</p>
        </template>
      </ContentList>
    </template>
  </NuxtLayout>
</template>

<script setup>
const contentQuery = queryContent("main");
const list = await contentQuery.find();
</script>
