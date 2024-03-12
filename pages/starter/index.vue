<template>
  <NuxtLayout name="default">
    <template #title> starter </template>
    <template #content>
      <ContentList path="/starter">
        <template #default="{ list }">
          <ul class="menu-item-container">
            <li class="menu-item" v-for="(starter, i) in list" :key="i">
              <img class="menu-image" :src="starter.thumbnail" alt="starter" />
              <div>
                <p class="MenuTitle">{{ starter.title }}</p>
                <h3>
                  <em>{{ starter.description }}</em>
                </h3>
              </div>
              <p class="pageTitle">${{ starter.price }}</p>
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
