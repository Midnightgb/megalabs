import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

// Importación de vistas
// @ts-expect-error we don't have type declarations
const LoginPage = () => import('@/views/LoginPage.vue')
// @ts-expect-error we don't have type declarations
const HomePage = () => import('@/views/HomePage.vue')
// @ts-expect-error we don't have type declarations
const HomeSpecialties = () => import('@/components/HomeSpecialties.vue')
// @ts-expect-error we don't have type declarations
const GastroHomePage = () => import('@/views/GastroHomePage.vue')
// @ts-expect-error we don't have type declarations
const GastroHome = () => import('@/components/GastroHome.vue')
// @ts-expect-error we don't have type declarations
const GastroEntorologiaPage = () => import('@/views/GastroEntorologiaPage.vue')
// @ts-expect-error we don't have type declarations
const GastroProductsPage = () => import('@/views/GastroProductsPage.vue')
// Definición de rutas
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/forgot-password',
    // @ts-expect-error we don't have type declarations
    component: () => import('@/views/ForgotPasswordPage.vue')
  },
  {
    path: '/home',
    component: HomePage,
    meta: { requiresAuth: false },
    children: [
      {
        path: '',
        component: HomeSpecialties
      },
      {
        path: 'gastro',
        component: GastroHomePage,
        children: [
          {
            path: '',
            component: GastroEntorologiaPage
          },
          {
            path: 'gastroentorologia',
            component: GastroEntorologiaPage
          },
          {
            path: 'gastroentorologia/products',
            component: GastroProductsPage
          },
        ]
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
