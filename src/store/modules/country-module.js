import axios from 'axios'

export const country = {
  namespace: true,
  state: {
    listCountry: [],
  },
  getters: {
    listCountry: (state) => {
      return state.listCountry
    },
  },

  mutations: {
    updateListCountry: (state, listCountry) => {
      state.listCountry = listCountry
    },
  },
  actions: {
    fetchListCountry: async ({ commit }) => {
      try {
        await axios
          .get('https://ss.covid19checkins.com/backend/api/countries')
          .then((response) => {
            if (response.status === 200) {
              // console.log(response.data)
              commit('updateListCountry', response.data)
            } else {
              console.log(response)
            }
          })
          .catch((error) => {
            console.log(error)
          })
      } catch (error) {
        console.log(error)
      }
    },
  },
}
