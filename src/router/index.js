import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Cabinets from '../views/Cabinets'
import Profile from '../views/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/cabinets',
      name: 'Cabinets',
      component: Cabinets
    },
    {
      path: 'cabinets/:username',
      name: 'Profile',
      component: Profile
    }
  ]
})
