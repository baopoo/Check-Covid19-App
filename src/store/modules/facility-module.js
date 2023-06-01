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
    fetchListCountry: ({ commit }, listFacility) => {
      // console.log(listFacility)
      commit('updateListFacility', listFacility)
    },
  },
}
