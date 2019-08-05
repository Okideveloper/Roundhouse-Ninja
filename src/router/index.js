import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
});