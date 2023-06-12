import flagAUS from '../../assets/flagAus.png'
import flagVIE from '../../assets/flagVie.png'
import flagIND from '../../assets/flagInd.png'
import { fetchCountry } from '../../api/countryApi'

export const country = {
  namespaced: true,
  state: {
    listCountry: [],
    listFacility: [],
    listQuestion: [],
    firstFacility: '',
    countryCode: '',
    listCountryFlag: [
      {
        id: 1,
        imgUrl: flagAUS,
      },
      {
        id: 2,
        imgUrl: flagIND,
      },
      {
        id: 3,
        imgUrl: flagVIE,
      },
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
      return state.countryCode
    },
    firstFacility: (state) => {
      return state.firstFacility
    },
    listQuestion: (state) => {
      return state.listQuestion
    },
  },

  mutations: {
    updateListCountry: (state, listCountry) => {
      state.listCountry = listCountry
    },
    updateListFacility: (state, listFacility) => {
      state.listFacility = listFacility
    },
    updateCountryCode: (state, countryCode) => {
      state.countryCode = countryCode
    },
    updateFirstFacility: (state, firstFacility) => {
      state.firstFacility = firstFacility
    },
    updateListQuestion: (state, listQuestion) => {
      state.listQuestion = listQuestion
    },
  },
  actions: {
    fetchListCountry: async ({ commit }) => {
      try {
        const response = await fetchCountry()
        if (response.status === 200) {
          let data = response.data
          let facilityList = data[0].facilityList
          let questionList = data[0].questionList
          let countryCode = data[0].code
          let firstFacility = facilityList[0].name
          commit('updateListCountry', data)
          commit('updateListFacility', facilityList)
          commit('updateListQuestion', questionList)
          commit('updateCountryCode', countryCode)
          commit('updateFirstFacility', firstFacility)
         } else {
          console.log(response);
         }
        
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
    },
    fetchListQuestion: ({ commit }, listQuestion) => {
      commit('updateListQuestion', listQuestion)
    },
  },
}
