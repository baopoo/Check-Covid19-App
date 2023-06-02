import Vue from 'vue'
import Vuex from 'vuex'
import { country } from './modules/country-module'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: { country },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
})
