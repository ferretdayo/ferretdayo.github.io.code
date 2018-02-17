import Action from './action'
import Mutation from './mutation'
import Getter from './getter'
import State from './state'
import { Module } from 'vuex'

const resasModule: Module<ResasState, any> = {
  namespaced: true,
  state: State,
  actions: Action,
  mutations: Mutation,
  getters: Getter
}

export default resasModule