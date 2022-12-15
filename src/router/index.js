import { createRouter, createWebHistory } from 'vue-router';
import { useSessionStore } from '@/stores/session';
import HomeView from '../views/HomeView.vue';
import SignInView from '../views/SignInView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignInView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const { isLoggedIn } = useSessionStore();

  const requiresAuth = to.matched.some((record) => record.meta?.requiresAuth);

  if (requiresAuth && !isLoggedIn) {
    next({ name: 'sign-in' });
  } else if (!requiresAuth && isLoggedIn) {
    next('/');
  } else {
    next();
  }
});

export default router;
