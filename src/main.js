// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import axios from 'axios'
// axios.defaults.headers.post['Content-Type']='application/json';
Vue.prototype.$axios = axios;

import store from '@/vuex/store'
Vue.prototype.$store = store;

import util from './assets/js/util'
Vue.prototype.$util=util;

import $ from 'jquery'

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
