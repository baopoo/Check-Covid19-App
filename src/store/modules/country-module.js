import axios from 'axios'
import flagAUS from '../../assets/flagAus.png'
import flagVIE from '../../assets/flagVie.png'
import flagIND from '../../assets/flagInd.png'


export const country = {
  namespaced: true,
  state: {
    listCountry: [],
    listFacility: [],
    firstFacility: '',
    countryCode: '',
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
    },
    listFacility: (state) => {
      return state.listFacility
    },
    countryCode: (state) => {
      return state.countryCode;
    },
    firstFacility: (state) => {
      return state.firstFacility;
    }
  },

  mutations: {
    updateListCountry: (state, listCountry) => {
      state.listCountry = listCountry
    },
    updateListFacility: (state, listFacility) => {
      state.listFacility = listFacility
    },
    updateCountryCode: (state, countryCode) => {
      state.countryCode = countryCode;
    },
    updateFirstFacility: (state, firstFacility) => {
      state.firstFacility = firstFacility
    }
  },
  actions: {
    fetchListCountry: ({ commit }) => {
      try {
         axios
          .get('https://ss.covid19checkins.com/backend/api/countries')
          .then(async(response) => {
            if (response.status === 200) {
              let data = response.data
              let facilityList = data[0].facilityList
              let countryCode = data[0].code
              let firstFacility = facilityList[0].name
              commit('updateListCountry',data)
              commit('updateListFacility',facilityList)
              commit('updateCountryCode', countryCode)
              commit('updateFirstFacility', firstFacility)
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
    fetchListFacility: ({ commit }, listFacility) => {
      commit('updateListFacility', listFacility)
    },
    fetchContryCode: ({ commit }, countryCode) => {
      commit('updateCountryCode', countryCode)
    },
    fetchFirstFacility: ({ commit }, firstFacility) => {
      commit('updateFirstFacility', firstFacility)
    }
  },
}
