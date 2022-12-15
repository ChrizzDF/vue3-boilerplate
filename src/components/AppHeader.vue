<template>
  <header class="h-14 flex items-center justify-between px-4 border-b">
    <template v-if="sessionStore.isLoggedIn">
      <span>Logged in as {{ sessionStore.user.email }}</span>
      <button class="border rounded px-2 h-8" @click="sessionStore.signOut">
        Log out
      </button>
    </template>
    <template v-else> Not logged in </template>
  </header>
</template>

<script setup>
import { useSessionStore } from '@/stores/session';

const sessionStore = useSessionStore();
</script>
