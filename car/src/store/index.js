/*
 * @Author: sunyue 
 * @Date: 2019-01-02 16:20:10 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-01-02 17:54:46
 */
/**
 * 1.数据仓库
 * 2.建筑完就要被挂载
 */
import Vuex from 'vuex';

import Vue from 'vue';

import createLogger from 'vuex/dist/logger'; // 打印日志

import upLoadImage from './modules/upLoadImage'; // 引入另一个数据仓

Vue.use(Vuex); // 挂载Vuex

export default new Vuex.Store({
    modules:{
        upLoadImage 
    },
    plugins:[createLogger()] // 打印日志
})
