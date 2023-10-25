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
      path: '/VueAll',
      name: 'VueAll',
      component: () => import('../views/VueAll.vue')
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
      component: () => import('../views/ExpenseTracker.vue'),
    },
    {
      path: '/ETLogin',
      name: 'ETLogin',
      component: () => import('../views/ExpenseTracker/ETLogin.vue'),
    },
    {
      path: '/ETSignUp',
      name: 'ETSignUp',
      component: () => import('../views/ExpenseTracker/ETSignUp.vue')
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
      path: '/HW',
      name: 'HW',
      component: () => import('../views/HW.vue'),
      children: [
        {
          path: 'Login',
          component: () => import('../components/Login.vue')
        },
        {
          path: 'HwHome',
          component: () => import("../views/HwHome.vue")
        },
        {
          path: 'HwQuz',
          component: () => import('../components/HwQuz.vue')
        }
      ]
    },
    {
      path: '/VueRouter',
      name: 'VueRouter',
      component: () => import('../views/VueRouter.vue'),
      children: [
        {
          path: 'ComA',
          component: () => import('../components/RouterComA.vue')
        },
        {
          path: 'ComB',
          component: () => import('../components/RouterComA.vue')
        },
      ]
    },
    {
      path: '/Props',
      name: 'Props',
      component: () => import('../components/Props.vue')
    },
    {
      path: '/Emit',
      name: 'Emit',
      component: () => import('../views/Emit.vue'),
      children: [
        {
          path: 'child2',
          component: () => import('../components/child2.vue')
        }
      ]
    },
    {
      path: '/DataFlow',
      name: 'DataFlow',
      component: () => import('../views/DataFlow.vue')
    },
    {
      path: '/ProvideAndInject',
      name: 'ProvideAndInject',
      component: () => import('../views/ProvideAndInject.vue'),
      children: [
        {
          path: 'child1',
          component: () => import('../components/ProvidePage/Providechild1.vue')
        }
      ]
    },
    {
      path: '/WatchAndComputed',
      name: 'WatchAndComputed',
      component: () => import('../views/WatchAndComputed.vue')
    },
    {
      path: '/Pinia',
      name: 'Pinia',
      component: () => import('../views/Pinia.vue')
    },
  ]
})

export default router
