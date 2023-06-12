import { fetchContact } from '../../api/contactApi'

export const contactNumber = {
  namespaced: true,
  state: {
    listContactNumber: {},
  },
  getters: {
    listContactNumber: (state) => {
      return state.listContactNumber
    },
  },

  mutations: {
    updateListContactNumber: (state, listContactNumber) => {
      state.listContactNumber = listContactNumber
    },
  },
  actions: {
    fetchListContactNumber: async ({ commit }) => {
      try {
        const response = await fetchContact()
        if (response.status === 200) {
          let data = response.data[0]
          commit('updateListContactNumber', data)
        } else {
          console.log(response)
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
