<template>
  <NuxtLayout name="homepage">
    <template #title> Home</template>
    <template #content>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sit
        ex repellendus vitae, ducimus maxime eius excepturi ullam veritatis
        animi, perferendis doloremque impedit illo, aliquid nemo cum unde
        nesciunt possimus!
      </p>
    </template>
    <template #video>
      <video autoplay loop muted>
        <source
          src="/pexels-roman-odintsov-6093202 (2160p).mp4"
          type="video/mp4"
        />
      </video>
    </template>
  </NuxtLayout>
</template>
