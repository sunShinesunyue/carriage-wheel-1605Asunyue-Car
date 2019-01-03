import Vue from 'vue'
import App from './App.vue'

import router from '@/routes/index'; // 引入要挂载的路由

import store from '@/store/index'; // 引入数据仓库

import { Swipe, SwipeItem ,Uploader,Popup} from 'vant'; // 引入vant的插件

Vue.use(Swipe).use(SwipeItem); // 挂载

Vue.use(Uploader);

Vue.use(Popup);

// 引入公共样式
import './scss/public.css'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
