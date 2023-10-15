import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Vtext',
      name: 'Vtext',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Vtext.vue')
    },
    {
      path: '/Green1',
      name: 'Green1',
      component: () => import('../views/Green1.vue')
    },
    {
    path: '/Green2',
    name: 'Green2',
    component: () => import('../views/Green2.vue')
    },
    {
      path: '/GuessNumber',
      name: 'GuessNumber',
      component: () => import('../views/GuessNumber.vue')
    },
    {
      path: '/Sweet',
      name: 'Sweet',
      component: () => import('../views/Sweet.vue')
    }
  ]
})

export default router
