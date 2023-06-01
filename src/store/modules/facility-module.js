export const facility = {
  namespaced: true,
  state: {
    listFacility: [],
  },
  getters: {
    listFacility: (state) => {
      return state.listFacility
    },

  },

  mutations: {
    updateListFacility: (state, listFacility) => {
      state.listFacility = listFacility
    },

  },
  actions: {
    fetchListFacility: ({ commit }, listFacility) => {
      commit('updateListFacility', listFacility)
    },
  },
}
