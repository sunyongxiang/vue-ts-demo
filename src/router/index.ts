import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// import lock from '../page/lock/index.vue'
Vue.use(VueRouter)
const routes: Array<RouteConfig> = [
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index/index.vue'),
    children:[{
      path:'/home/index',component:() => import('@/views/Home.vue')
    },{
      path:'/home/devModel',component:() => import('@/views/Home.vue')
    },{
      path:'/home/createCenter',component:() => import('@/views/Home.vue')
    },{
      path:'/home/seeCenter',component:() => import('@/views/Home.vue')
    }]
  },{
    path: '/lock',
    name: 'lock',
    component: () => import('@/views/lock/index.vue')
  },
  {
    path: '*',//除了已经配置好路由
    redirect: '/index'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
