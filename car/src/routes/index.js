/*
 * @Author: sunyue
 * @Date: 2019-01-02 15:35:04 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-01-02 16:18:57
 */
/**
 * 1.配置路由页面
 * 2.需要下载vue-router
 */

import VueRouter from 'vue-router'; // 路由配置

import Vue from 'vue';

Vue.use(VueRouter) // 挂载

import IndexPage from '@/pages/Index.vue'    // 引入路由组件

const router = new VueRouter({
    routes:[{
        path:'/index',
        component:IndexPage
    },{
        path:'*',
        redirect:'/index'
    }]
})

// 导航首位
router.beforeEach((to,from,next) =>{
    console.log('我被打印出来了，哈哈哈')
    // next()
})

router.afterEach((to,from,next) => {
    console.log('我被打印出来了，哈哈哈')
    // next()
})

export default router;