import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Services from '../views/ServicesView.vue'
import About from '../views/AboutView.vue'
import Contacts from '../views/ContactsView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,    
  },  
  {
   path: '/services',
   name: 'Services',
   component: () => import('../views/ServicesView.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/ContactsView.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router


