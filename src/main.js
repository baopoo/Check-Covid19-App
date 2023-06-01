import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './router'
import { store } from './store'
import 'ant-design-vue/dist/antd.css'
import './styles/index.scss'

import { Radio } from 'ant-design-vue';
Vue.use(Radio);
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
})
