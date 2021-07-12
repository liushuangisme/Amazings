/*
 * @Description: 
 * @Author: charles
 * @Date: 2021-07-01 11:24:08
 * @LastEditors: charles
 * @LastEditTime: 2021-07-02 10:39:17
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      scrollToTop: true
    },
    component: () => import('../views/Home.vue')
  },{
    path: '/project',
    name: 'Project',
    meta: {
      scrollToTop: true
    },
    component: () => import('../views/Project.vue')
  },{
    path: '/apply',
    name: 'Apply',
    meta: {
      scrollToTop: true
    },
    component: () => import('../views/Apply.vue')
  },{
    path: '/applyQuery',
    name: 'ApplyQuery',
    meta: {
      scrollToTop: true
    },
    component: () => import('../views/ApplyQuery.vue')
  },{
    path: '/applySuccess',
    name: 'ApplySuccess',
    meta: {
      scrollToTop: true
    },
    component: () => import('../views/ApplySuccess.vue')
  }, {
    path: '/article',
    name: 'Article',
    meta: {
      scrollToTop: true
    },
    component: () => import('../views/Article.vue')
  }, {
    path: '/contact',
    name: 'Contact',
    meta: {
      scrollToTop: true
    },
    component: () => import('../views/Contact.vue')
  }, {
    path: '/list',
    name: 'List',
    meta: {
      scrollToTop: true
    },
    component: () => import('../views/List.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
