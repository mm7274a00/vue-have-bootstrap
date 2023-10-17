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
      path: '/Vfor',
      name: 'Vfor',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Vfor.vue')
    },
    {
      path: '/Von',
      name: 'Von',
      component: () => import('../views/Von.vue')
    },
    {
      path: '/VtextAndVModel',
      name: 'VtextAndVModel',
      component: () => import('../views/VtextAndVModel.vue')
    },
    {
    path: '/Vbind',
    name: 'Vbind',
    component: () => import('../views/Vbind.vue')
    },
    {
      path: '/VifAndVshow',
      name: 'VifAndVshow',
      component: () => import('../views/VifAndVshow.vue')
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
      path: '/ExpenseTracker',
      name: 'ExpenseTracker',
      component: () => import('../views/ExpenseTracker.vue')
    },
    {
      path: '/Sweet',
      name: 'Sweet',
      component: () => import('../views/Sweet.vue')
    },
    {
      path: '/Fall',
      name: 'Fall',
      component: () => import('../views/Fall.vue')
    },
    {
      path: '/House',
      name: 'House',
      component: () => import('../views/House.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../components/Login.vue')
    },
    {
      path: '/HouseHeader',
      name: 'HouseHeader',
      component: () => import('../components/HouseHeader.vue')
    }
  ]
})

export default router
