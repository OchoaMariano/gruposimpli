import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BusinessesView from '../views/BusinessesView.vue'
import WorkWithUsView from '../views/WorkWithUsView.vue'
import ContactUs from '../views/ContactUs.vue'

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
      path: '/work',
      name: 'work',
      component: WorkWithUsView
    },
    {
      path: '/Contact',
      name: 'contact',
      component: ContactUs
    }
  ]
})

export default router
