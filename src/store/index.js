import Vue from 'vue'
import Vuex from 'vuex'
import { country } from './modules/country-module'
import { user } from './modules/user-module'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: { country, user },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
})
