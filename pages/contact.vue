<template>
  <NuxtLayout name="contact-layout">
    <template #content>
      <div class="contact-form">
        <!-- <ClientOnly> -->
        <h1 class="title">Contact</h1>
        <UForm @submit="submit" :state="state">
          <UFormGroup label="Name" name="name">
            <UInput v-model="state.name" />
          </UFormGroup>
          <UFormGroup label="Email" name="email">
            <UInput v-model="state.email" />
          </UFormGroup>
          <UFormGroup name="textarea" label="Textarea">
            <UTextarea v-model="state.textarea" />
          </UFormGroup>
          <UButton type="submit" @click="submit"> Submit </UButton>
        </UForm>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  name: "",
  email: "",
  textarea: "",
});

function submit() {
  if (state.name === "" || state.email === "" || state.textarea === "") {
    return alert("Please fill all the fields");
  } else {
    console.log(state);
  }
}
</script>

<style lang="scss">
.contact-form {
  padding: 3rem;
  border-radius: 1rem;
  background-color: wheat;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  .title {
    text-align: center;
    text-transform: uppercase;
    margin: 1rem;
  }
}
</style>
import type { ClientOnly } from '#build/components';
