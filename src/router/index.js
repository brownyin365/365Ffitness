import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import FreeVideos from '../views/FreeVideos.vue'
import Payment from '../views/Payment.vue'
import UpdateProfile from '../views/UpdateProfile.vue'

// import Signup from '../views/Signup.vue'

import { fb } from '../firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import(/* webpackChunkName: "signin" */ '../views/Signin.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue')
  },
  {
    path: '/locations',
    name: 'Locations',
    component: () => import(/* webpackChunkName: "locations" */ '../views/Locations.vue')
  },
//   {
//     path: '/supplements',
//     name: 'Supplements',
//     component: () => import(/* webpackChunkName: "supplements" */ '../views/Supplements.vue')
//   },
  {
    path: '/services',
    name: 'Services',
    component: () => import(/* webpackChunkName: "services" */ '../views/Services.vue')
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment,
    meta: { requiresAuth: true }  },
  {
    path: '/successful',
    name: 'Successful',
    component: () => import(/* webpackChunkName: "successful" */ '../views/Successful.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: { requiresAuth: true }
    // childrens [
    //   {
    //     path: '/trainer',
    //     name: 'trainer',
    //     component: TrainerUpdate
    //   },
    // ]
  },
  {
    path: '/videos',
    name: 'videos',
    component: FreeVideos,
    meta: { requiresAuth: true }
  },
  {
    path: '/update',
    name: 'update',
    component: UpdateProfile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if (requiresAuth && !currentUser) {
    next('/')
  }else if (requiresAuth && currentUser) {
    next()
  }else {
    next()
  }
})

export default router
