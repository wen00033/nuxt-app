<template>
  <main>
    <h1 class="pageTitle">
      <slot name="title" />
    </h1>
    <slot name="content" />
  </main>
</template>

<style>
main {
  position: relative;
  flex-grow: 1;
  padding: 2rem;
}

.title {
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>
