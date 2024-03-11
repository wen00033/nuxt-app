<template>
  <NuxtLayout name="contact">
    <template #content>
      <div class="contact-form">
        <h1 class="pageTitle">Contact</h1>
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
