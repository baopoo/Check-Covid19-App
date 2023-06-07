import axios from 'axios'

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
          state.listContactNumber = listContactNumber;
      },
    },
    actions: {
      fetchListContactNumber: ({ commit }) => {
        try {
           axios
            .get('https://647e9adcc246f166da8f2f57.mockapi.io/my-app/contact-number')
            .then((response) => {
              if (response.status === 200) {
                let data = response.data[0]
                commit('updateListContactNumber', data)
              } else {
                console.log(response);
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
  