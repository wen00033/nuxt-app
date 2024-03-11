<template>
  <NuxtLayout name="default">
    <template #title> News </template>
    <template #content>
      <ContentNavigation v-slot="{ navigation }" :query="postQuery">
        <ul class="news-container" v-for="(post, i) in navigation" :key="i">
          <li v-for="(link, i) in post.children" :key="i">
            <NuxtLink :to="link._path">
              <h2 class="menuTitle">
                {{ link.title }}
              </h2>
            </NuxtLink>
          </li>
        </ul>
      </ContentNavigation>
      <!-- <ContentDoc /> -->
    </template>
  </NuxtLayout>
</template>

<script setup>
const postQuery = queryContent("post");
</script>
