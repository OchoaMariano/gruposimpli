import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BusinessesView from '../views/BusinessesView.vue'
import WorkWithUsView from '../views/WorkWithUsView.vue'
import ContactUs from '../views/ContactUs.vue'
import SimplitecView from '../views/SimplitecView.vue'
import SimplisegView from '../views/SimplisegView.vue'
import SimplicarView from '../views/SimplicarView.vue'
import SimplimuvView from '../views/SimplimuvView.vue'
import SimplidataView from '../views/SimplidataView.vue'
import SimpliplanView from '../views/SimpliplanView.vue'
import SimpligoView from '../views/SimpligoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/businesses',
      name: 'businesses',
      component: BusinessesView
    },
    {
      path: '/simplitec',
      name: 'simplitec',
      component: SimplitecView
    },
    {
      path: '/simplimuv',
      name: 'simplimuv',
      component: SimplimuvView
    },
    {
      path: '/simplicar',
      name: 'simplicar',
      component: SimplicarView
    },
    {
      path: '/simpliplan',
      name: 'simpliplan',
      component: SimpliplanView
    },
    {
      path: '/simpliseg',
      name: 'simpliseg',
      component: SimplisegView
    },
    {
      path: '/simplidata',
      name: 'simplidata',
      component: SimplidataView
    },
    {
      path: '/simpligo',
      name: 'simpligo',
      component: SimpligoView
    },
    {
      path: '/work',
      name: 'work',
      component: WorkWithUsView
    },
    {
      path: '/Contact',
      name: 'contact',
      component: ContactUs
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { top:0, behavior: 'smooth' }
  }
})

export default router
