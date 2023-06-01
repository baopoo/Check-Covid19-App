import Vue from 'vue'
import Vuex from 'vuex'
import { country } from './modules/country-module'
import { facility } from './modules/facility-module'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: { country, facility },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
})
