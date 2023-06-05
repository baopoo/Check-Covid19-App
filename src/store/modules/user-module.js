export const user = {
  namespaced: true,
  state: {
    listAnwser: [],
  },
  getters: {
    listAnwser: (state) => {
      return state.listAnwser
    },
  },

  mutations: {
    updateListAnwser: (state, listAnwser) => {
        state.listAnwser = listAnwser;
    },
    pushNewAnwser: (state, payload) => {
      state.listAnwser.push(payload);
    }
  },
  actions: {
    fetchListAnwser: ({ commit, state }, payload) => {
      let listAnwser = state.listAnwser;
      let listAnwserCode = listAnwser.map(item => item.code);
      if (listAnwser.length > 0) {
        if (listAnwserCode.indexOf(payload.code) === -1) {
          commit('pushNewAnwser', payload)
        } else {
          let index = listAnwserCode.indexOf(payload.code);
          listAnwser.splice(index, 1, payload);
          commit('updateListAnwser', listAnwser);
        }
      } else {
        commit('pushNewAnwser', payload)
      }
      console.log(state.listAnwser);
    },
  },
}
