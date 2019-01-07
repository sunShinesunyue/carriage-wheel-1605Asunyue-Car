import Vue from 'vue'
import App from './App.vue'

import router from '@/routes/index'; // 引入要挂载的路由

import store from '@/store/index'; // 引入数据仓库

import { Swipe, SwipeItem ,Popup ,Picker} from 'vant'; // 引入vant的插件

Vue.use(Swipe).use(SwipeItem); // 挂载

Vue.use(Popup);  // 挂载底部弹出框

Vue.use(Picker); // Picker 选择器

// 引入公共样式
import './scss/public.css'




new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
