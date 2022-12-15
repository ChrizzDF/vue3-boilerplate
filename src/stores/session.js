import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { supabase } from '@/supabase';
import { useRouter } from 'vue-router';

export const useSessionStore = defineStore('session', () => {
  const router = useRouter();

  const isLoading = ref(false);
  const user = ref(null);
  const isLoggedIn = computed(() => !!user?.value);

  const signIn = async ({ email, password }) => {
    try {
      isLoading.value = true;
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      router.push({ name: 'home' });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      isLoading.value = false;
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;

    router.push({ name: 'sign-in' });
  };

  return { user, isLoggedIn, signIn, signOut, isLoading };
});
