import Vue from 'vue'
import VueRouter from 'vue-router'
import Backlog from '@/views/Backlog'

Vue.use(VueRouter)


const routes = [
  {
    path: '/backlog',
    name: 'Backlog',
    component: Backlog,
  },
  {
    path: '*',
    redirect: '/backlog',
  },
  {
    path: '/board',
    name: 'KanbanBoard',
    component: () => import('@/views/KanbanBoard')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
