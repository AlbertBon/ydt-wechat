import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'url';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(["../components/page/userInfo.vue"], resolve)
    }, {
      path: '/index',
      component: resolve => require(["../components/page/index.vue"], resolve)
    }, {
      path: '/customer/userInfo',
      component: resolve => require(["../components/page/userInfo.vue"], resolve)
    }, {
      path: '/customer/productList',
      component: resolve => require(["../components/page/customer/productList.vue"], resolve)
    }, {
      path: '/customer/productInfo/:productId',
      component: resolve => require(['../components/page/customer/productInfo.vue'], resolve)
    }, {
      path: '/customer/productSearch',
      component: resolve => require(['../components/page/customer/productSearch.vue'], resolve)
    }, {
      path: '/customer/applyList',
      component: resolve => require(['../components/page/customer/applyList.vue'], resolve)
    }, {
      path: '/customer/applySearch',
      component: resolve => require(['../components/page/customer/applySearch.vue'], resolve)
    }, {
      path: '/customer/applyInfo/:applyId',
      component: resolve => require(['../components/page/customer/applyInfo.vue'], resolve)
    }, {
      path: '/customer/applyApproval/:applyId',
      component: resolve => require(['../components/page/customer/applyApproval.vue'], resolve)
    }
  ]
})
