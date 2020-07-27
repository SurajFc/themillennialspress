const state = () => {
  latest: []
};

const actions = {


  async getLatestNews({
    commit
  }) {
    try {
      const res = await this.$axios
        .$get("news/getLatestnews")
      commit('setLatest', res);

    } catch (err) {
      console.log("error", err)
    }
  },

};
const mutations = {
  setLatest(state, payload) {
    state.latest = payload;
  }
}

const getters = {
  getLatest(state) {
    return state.latest
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
