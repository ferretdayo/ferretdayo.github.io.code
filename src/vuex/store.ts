import Vuex, { ActionTree, GetterTree, MutationTree, Store } from 'vuex'
import Vue from 'vue'
import CommonAction from './Common/CommonAction'
import CommonMutation from './Common/CommonMutation'
import CommonGetter from './Common/CommonGetter'
import CommonState from './Common/CommonState'

Vue.use(Vuex)

export default new Vuex.Store<CommonState>({
  state: CommonState,
  actions: CommonAction,
  getters: CommonGetter,
  mutations: CommonMutation
})
