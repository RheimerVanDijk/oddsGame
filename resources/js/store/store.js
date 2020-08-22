import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedGameObject: {},
    betModelState: false,
    stacks: 0,
    updateList: false,
  },
  mutations: {
    mutateBetModelState(state, data) {
      state.betModelState = data
    },
    mutateSelectedGameObject(state, data) {
      state.selectedGameObject = data
    },
    mutateStacks(state, data) {
      state.stacks = data
    },
    mutateUpdateList(state, data) {
      state.updateList = data
    },
  },
  getters: {
    getBetModelState(state) {
      return state.betModelState
    },
    getSelectedGameObject(state) {
      return state.selectedGameObject
    },
    getStacks(state) {
      return state.stacks
    },
    getUpdateList(state) {
      return state.updateList
    },
  },
})
