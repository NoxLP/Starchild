import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Userprofile from '../views/Userprofile.vue'
import Event from '../views/Event.vue'
import Comments from '../views/Comments.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
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
  },
  {
    path: '/comments',
    name: 'comments',
    component: Comments,
    props: true
  },
  {
    path: '/event',
    name: 'event',
    component: Event,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
