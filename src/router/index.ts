import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
// @ts-expect-error we don't have type declarations for the views
import TabsPage from '@/views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    // @ts-expect-error we don't have type declarations for the views
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/forgot-password',
    // @ts-expect-error we don't have type declarations for the views
    component: () => import('@/views/ForgotPasswordPage.vue')
  },
  {
    path: '/tabs/',
    component: TabsPage,
    meta: { requiresAuth: false },
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        // @ts-expect-error we don't have type declarations for the views
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        // @ts-expect-error we don't have type declarations for the views
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        // @ts-expect-error we don't have type declarations for the views
        component: () => import('@/views/Tab3Page.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
