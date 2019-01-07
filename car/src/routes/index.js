/*
 * @Author: sunyue
 * @Date: 2019-01-02 15:35:04 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-01-07 07:58:04
 */
/**
 * 1.配置路由页面
 * 2.需要下载vue-router
 */

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/Index.vue'
import WheelPage from '@/pages/wheel.vue'
import App from '@/pages/app.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: App
    },
    {
      path:'/wheel',
      component:WheelPage
    }
  ]
})
// 导航首位
// Router.beforeEach((to,from,next) =>{
//     console.log('我被打印出来了，哈哈哈')
//     // next()
// })

// Router.afterEach((to,from,next) => {
//     console.log('我被打印出来了，哈哈哈')
//     // next()
// })