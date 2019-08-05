import Vue from 'vue';
import VueRouter from 'vue-router';
import App from "./App"
import Home from './pages/Home';
import Jokes from './pages/Jokes';



Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/jokes',
    name: 'Jokes',
    component: Jokes
  }
]

const app = new Vue({
  el: "#app",
  render: h => h(App),
  router: new VueRouter(
    {
      routes,
      mode: 'history',
      hash: false
    })
});