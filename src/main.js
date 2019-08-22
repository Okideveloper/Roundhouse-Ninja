import Vue from 'vue';
import router from './router'
import App from "./App"
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'


import '@vuikit/theme'

Vue.use(Vuikit)
Vue.use(VuikitIcons)


Vue.config.productionTip = false;

const app = new Vue({
  el: "#app",
  render: h => h(App),
  router
});