import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

type State = {
  count: number
}

type Getters = {
  getCount (state: State): number
}

type Actions = {
  increment (context: any): void,
  decrement ({ commit }: any): void
}

type Mutations = {
  plus (state: State): void,
  sub (state: State): void
}


// /**
//  * 状態を保持したい変数の管理
//  */
const state: State = {
  count: 0
}
/**
 * actionsはmutationsを利用して，アクションの処理を実装
 */
const actions: Actions = {
  increment (context: any) {
    context.commit('plus')
  },
  decrement ({ commit }: any) {
    commit('sub')
  }
}
/**
 * gettersはstateの値を取得するのに利用
 */
const getters: Getters = {
  getCount (state: any): number {
    return state.count
  }
}
/**
 * mutationsは値の移り変わりの処理を実装
 */
const mutations: Mutations = {
  plus (state: any) {
    state.count += 1
  },
  sub (state: any) {
    state.count -= 1
  }
}

export default new Vuex.Store<State>({
  state,
  actions,
  getters,
  mutations
})
