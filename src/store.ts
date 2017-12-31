import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

// /**
//  * 状態を保持したい変数の管理
//  */
// const state = {
//   count: 0
// }
// /**
//  * actionsはmutationsを利用して，アクションの処理を実装
//  */
// const actions = {
//   increment (context) {
//     context.commit('increment')
//   },
//   decrement ({ commit }) {
//     commit('decrement')
//   }
// }
// /**
//  * gettersはstateの値を取得するのに利用
//  */
// const getters = {
//   getCount (state) {
//     return state.count
//   }
// }
// /**
//  * mutationsは値の移り変わりの処理を実装
//  */
// const mutations = {
//   increment (state) {
//     state.count += 1
//   },
//   decrement (state) {
//     state.count -= 1
//   }
// }

export default new Vuex.Store({
  state: {
    count: 0
  },
  actions: {
    increment (context) {
      context.commit('plus')
    },
    decrement ({ commit }) {
      commit('decrement')
    }
  },
  getters: {
    getCount (state): number {
      return state.count
    }
  },
  mutations: {
    plus (state) {
      state.count += 1
    },
    decrement (state) {
      state.count -= 1
    }
  }
})

// export default new Vuex.Store({
//   state,
//   actions,
//   getters,
//   mutations
// })
