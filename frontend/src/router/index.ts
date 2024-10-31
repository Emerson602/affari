import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
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
    path: '/products',
    name: 'Products',
    component: () => import('../views/ProductsView.vue')
   }, 

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router


