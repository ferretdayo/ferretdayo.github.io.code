import Vuex, { ActionTree, GetterTree, MutationTree, Store } from 'vuex'
import Vue from 'vue'
import CommonAction from './Common/action'
import CommonMutation from './Common/mutation'
import CommonGetter from './Common/getter'
import CommonState from './Common/state'
import Modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store<any>({
  state: CommonState,
  actions: CommonAction,
  getters: CommonGetter,
  mutations: CommonMutation,
  modules: Modules
})
