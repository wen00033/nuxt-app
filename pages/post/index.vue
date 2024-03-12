<template>
  <NuxtLayout name="default">
    <template #title> News </template>
    <template #content>
      <ContentList path="/post">
        <template #default="{ list }">
          <ul class="news-container">
            <li v-for="(link, i) in list" :key="i">
              <NuxtLink :to="link._path">
                <h2 class="menuTitle">
                  {{ link.title }}
                </h2>
              </NuxtLink>
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
