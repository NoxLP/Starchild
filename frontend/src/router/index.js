import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Userprofile from '../views/Userprofile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'login',
    // component: Login
    name: 'home',
    component: Home
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    component: Userprofile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
