import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: ()=>import('../views/ProductsView.vue')
  },
  {
    path: '/single/:id',
    name: 'single',
    component: ()=>import('../views/SingleView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: ()=>import('../views/CartView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
