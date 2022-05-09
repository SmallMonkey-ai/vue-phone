// 注册element-ui组件库

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 注册myPlugins

import myPlugins from './myPlugins'
Vue.use(myPlugins)