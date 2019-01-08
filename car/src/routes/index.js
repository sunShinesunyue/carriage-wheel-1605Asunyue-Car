
/**
 * 1.配置路由页面
 * 2.需要下载vue-router
 */

import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/pages/Index.vue';

// 被改成路由按需加载了 动态路由

// import WheelPage from '@/pages/wheel.vue';
// import App from '@/pages/app.vue';
// import Chelun from '@/pages/chelun.vue';  // 引入到切换页面

// 路由按需加载
const WheelPage = () =>import('@/pages/Index.vue');
const App = () =>import('@/pages/app.vue');
const Chelun = () =>import('@/pages/chelun.vue');


// 引入二级路由页面
// import Order from '@/secondPage/order.vue'
// import Address from '@/secondPage/address.vue'
// import Solve from '@/secondPage/solve.vue'
// import Success from '@/secondPage/success.vue' 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect:'/chelun'
    },
    {
      path: '/index',
      component: App
    },
    {
      path:'/wheel',
      component:WheelPage
    },
    {
      path:'/chelun',
      component:Chelun
      // children:[
      //   {
      //     path:'/chelun/order',
      //     component:Order,
      //   },
      //   {
      //     path:'/chelun/address',
      //     component:Address,
      //   },
      //   {
      //     path:'/chelun/solve',
      //     component:Solve,
      //   },
      //   {
      //     path:'/chelun/success',
      //     component:Success,
      //   }
      // ]
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