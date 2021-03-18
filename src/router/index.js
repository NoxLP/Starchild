import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Event from '../views/Event.vue'
import Comments from '../views/Comments.vue'
import Userprofile from '../views/Userprofile.vue'

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
    component: Home,
    props: true
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/comments/',
    name: 'comments',
    component: Comments,
    props: true
  },
  {
    path: '/event/:eventId',
    name: 'event',
    component: Event,
    props: true
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
