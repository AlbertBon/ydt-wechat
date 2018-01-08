import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component: resolve => require(["../components/page/index.vue"],resolve)
    },{
      path: '/index',
      component: resolve => require(["../components/page/index.vue"],resolve)
    },{
      path: '/userInfo',
      component:resolve => require(["../components/page/userInfo.vue"],resolve)
    }
  ]
})
