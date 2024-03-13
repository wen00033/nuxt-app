<template>
  <NuxtLayout name="homepage">
    <template #title>Best Italian Food in town!</template>
    <template #content>
      <div>
        <img src="/logo.svg" alt="svg" />
      </div>
      <div class="homepage-content">
        <div>
          <p>Monday - Friday: 07:00 - 22:00</p>
          <p>Saturday: 11:00 - 24:00</p>
          <p>Sunday: Closed</p>
        </div>
        <div>
          <p>Address: 1234 Main Street, New York, NY 10001</p>
          <p>Phone: +1 123 456 7890</p>
          <p>Email:benji@gmail.com</p>
        </div>
      </div>
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
