import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    title: 'Start',
    meta: {title: 'Start'}
  },
  {
    path: '/intro',
    name: 'Intro',
    title: 'Intro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Intro.vue')
    },
    meta: {title: 'Intro'}
  },
  {
    path: '/fight',
    name: 'Fight',
    title: 'Battle',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Fight.vue')
    },
    meta: {title: 'Battle'}
  },
  {
    path: '/catch',
    name: 'Catch',
    title: 'Catch',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Catch.vue')
    },
    meta: {title: 'Catch'}
  }
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
      document.title = to.meta.title
  }
  next();
})
export default router
