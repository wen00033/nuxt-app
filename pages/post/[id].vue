<template>
  <NuxtLayout name="default">
    <!-- <template #title>title</template> -->
    <template #content>
      <ContentDoc v-slot="{ doc }">
        <p class="pageTitle">{{ doc.title }}</p>
        <p>
          Post Date: <strong>{{ doc.date.slice(0, 10) }}</strong>
        </p>
        <div class="blog-container scrollable">
          <img class="blog-img" :src="doc.thumbnail" alt="image" />
          <p class="blog-paragraph">
            <ContentRenderer :value="doc"></ContentRenderer>
          </p>
        </div>
      </ContentDoc>
    </template>
    <p>Post ID: {{ route.params.id }}</p>
  </NuxtLayout>
</template>

<script setup>
const route = useRoute();
</script>
