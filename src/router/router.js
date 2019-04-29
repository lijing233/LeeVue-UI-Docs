import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import { MenuRoute } from './menu'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/guide',
      name: 'guide',
      component: () => import(/* webpackChunkName: "guide" */ '../views/guide.md'),
    },
    {
      path: '/component',
      name: 'component',
      redirect: '/component/button',
      component: () => import(/* webpackChunkName: "component" */ '../views/ComponentPage.vue'),
      children: MenuRoute,
    },
  ]
})
