<template>
  <AppHeader />

  <main class="flex-1 flex flex-col p-4">
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router';
import AppHeader from '@/components/AppHeader.vue';
import { supabase } from '@/supabase';
import { useSessionStore } from '@/stores/session';

const sessionStore = useSessionStore();

supabase.auth.onAuthStateChange((event, session) => {
  sessionStore.$patch((state) => {
    state.user = session?.user;
  });
});
</script>
