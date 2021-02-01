import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Portfolio from '../views/Portfolio.vue'
import Contact from '../views/Contact.vue'

import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { id: 0 }
  },
  {
    path: '/a-propos',
    name: 'About',
    component: About,
    meta: { id: 1 }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: { id: 2 }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { id: 3 }
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to, from, next) => {
  store.commit('setCurRoute', to)
  store.commit('setPrevRoute', from)
})

export default router
