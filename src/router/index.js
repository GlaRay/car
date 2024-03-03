import { createRouter, createWebHistory } from 'vue-router'

// 路由表  记录页面url的  
const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/aboutus',
    component: () => import('@/views/AboutUs.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
