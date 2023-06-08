import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './router'
import { store } from './store'
import 'ant-design-vue/dist/antd.css'
import './styles/index.scss'
import { ValidationProvider, ValidationObserver, localize } from 'vee-validate'
import en from 'vee-validate/dist/locale/en.json'
import Antd from 'ant-design-vue'

Vue.use(VueRouter)
Vue.use(Antd)

localize('en', en);

import VueConfetti from 'vue-confetti'
Vue.use(VueConfetti)


const router = new VueRouter({
  mode: 'history',
  routes,
})

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver)


new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
})
