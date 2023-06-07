import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './router'
import { store } from './store'
import 'ant-design-vue/dist/antd.css'
import './styles/index.scss'
import { ValidationProvider } from 'vee-validate';
import { ValidationObserver } from 'vee-validate'
import VueFireworks from 'vue-damp-fireworks'

Vue.use(VueFireworks)

import { Radio, Progress, Select, Checkbox, Modal} from 'ant-design-vue';
Vue.use(Radio);
Vue.use(Progress)
Vue.use(VueRouter)
Vue.use(Select)
Vue.use(Checkbox)
Vue.use(Modal)



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
