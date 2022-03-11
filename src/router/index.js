import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Log1 from '../components/Log1.vue'
import UserLog from '../components/UserLog.vue'
import LogPhone from '../components/LogPhone.vue'
import Verify from '../components/Verify.vue'
import Bio from '../components/Bio.vue'
import Page from '../components/Page.vue'
import UserSign from '../components/UserSign.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Log1',
    name: 'Log1',
    component: Log1
  },
  {
    path: '/UserLog',
    name: 'LogIn',
    component: UserLog
  },
  {
    path: '/LogPhone',
    name: 'PhoneLog',
    component: LogPhone
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: UserSign
  },
  {
    path: '/Homepage',
    name: 'Page',
    component:Page
  },
  {
    path: '/Verify',
    name: 'Verify',
    component: Verify
  },
  {
    path: '/Bio',
    name: 'Bio',
    component: Bio
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
