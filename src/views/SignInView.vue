<template>
  <form @submit.prevent="signIn(form)" class="flex flex-col gap-3">
    <label class="border p-3 rounded-lg flex justify-between">
      <span class="font-medium">Email</span>
      <input v-model="form.email" type="email" class="focus:outline-none" />
    </label>

    <label class="border p-3 rounded-lg flex justify-between">
      <span class="font-medium">Password</span>
      <input
        v-model="form.password"
        type="password"
        class="focus:outline-none"
      />
    </label>
    <button
      class="border border-green-300 text-green-700 font-medium bg-green-50 px-3 h-12 rounded-lg"
      type="submit"
    >
      Login
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useSessionStore } from '@/stores/session';

const { signIn } = useSessionStore();

const form = ref({
  email: '',
  password: '',
});
</script>
