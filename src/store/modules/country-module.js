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
    fetchListCountry: ({ commit, dispatch }) => {
      try {
         axios
          .get('https://ss.covid19checkins.com/backend/api/countries')
          .then(async(response) => {
            if (response.status === 200) {
              let data = response.data
              let facilityList = data[0].facilityList
              let firstFacility = facilityList[0].name
              console.log(firstFacility);
              commit('updateListCountry',data)
              dispatch('facility/fetchListFacility',facilityList, {root: true})
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
