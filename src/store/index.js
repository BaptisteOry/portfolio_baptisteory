import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curRoute: null,
    prevRoute: null
  },
  mutations: {
    setCurRoute (state, curRoute) {
      state.curRoute = curRoute
    },
    setPrevRoute (state, prevRoute) {
      state.prevRoute = prevRoute
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getTransitionRoute: state => {
      return state.curRoute.meta.id < state.prevRoute.meta.id ? 'slide_left' : 'slide_right'
    }
  }
})
