<template>
  <div class="wrapper">
    <NuxtPage />
  </div>
</template>

<script>
/* import { Vueform } from "@vueform/nuxt"; */
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
  transition: all ease 0.3s;
}

a:hover {
  color: #f00;
  font-weight: bold;
}

body {
  font-family: sans-serif;
}

.wrapper {
  transition: all ease-out 0.2s;
  height: 100vh;
  background-color: pink;
  display: flex;
}
</style>
