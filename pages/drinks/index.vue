<template>
  <NuxtLayout name="default">
    <template #title> Drinks </template>
    <template #content>
      <ContentList path="/drinks">
        <template #default="{ list }">
          <ul class="menu-item-container">
            <li class="menu-item" v-for="(drinks, i) in list" :key="i">
              <img class="menu-image" :src="drinks.thumbnail" alt="drinks" />
              <div>
                <p class="MenuTitle">{{ drinks.title }}</p>
                <h3>
                  <em>{{ drinks.description }}</em>
                </h3>
              </div>
              <p class="pageTitle">${{ drinks.price }}</p>
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
