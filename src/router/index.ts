import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
// @ts-expect-error we don't have type declarations for the views
import HomePage from '@/views/HomePage.vue'

// Definición de rutas
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    // @ts-expect-error we don't have type declarations for the views
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/forgot-password',
    // @ts-expect-error we don't have type declarations for the views
    component: () => import('@/views/ForgotPasswordPage.vue')
  },
  {
    path: '/home',
    component: HomePage,
    meta: { requiresAuth: false },
    children: [
      {
        path: '',
        // @ts-expect-error we don't have type declarations for the views
        component: () => import('@/components/HomeSpecialties.vue')
      },
      {
        path: 'gastro',
        // @ts-expect-error we don't have type declarations for the views
        component: () => import('@/views/GastroPage.vue'),
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home'
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
