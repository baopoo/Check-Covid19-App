import axios from 'axios'
import flagAUS from '../../assets/flagAus.png'
import flagVIE from '../../assets/flagVie.png'
import flagIND from '../../assets/flagInd.png'


export const country = {
  namespaced: true,
  state: {
    listCountry: [],
    listCountryFlag: [
      {
        id: 1,
        imgUrl: flagAUS
      },
      {
        id: 2,
        imgUrl: flagIND
      },
      {
        id: 3,
        imgUrl: flagVIE
      }
    ],
  },
  getters: {
    listCountry: (state) => {
      return state.listCountry
    },
    listCountryFlag: (state) => {
      return state.listCountryFlag
    }
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
