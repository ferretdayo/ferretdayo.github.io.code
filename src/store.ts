import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

type State = {
  count: number
  windowWidth: number
  windowHeight: number
  isMobile: boolean
}

type Getters = {
  getCount (state: State): number
  getWindowWidth (state: State): number
  getWindowHeight (state: State): number
  getIsMobile (state: State): boolean
}

type Actions = {
  increment (context: any): void,
  decrement ({ commit }: any): void,
  resizeWindowWidth (context: any): void
  resizeWindowHeight (context: any): void
}

type Mutations = {
  plus (state: State): void,
  sub (state: State): void,
  windowWidth (state: State, _windowWidth: number): void
  windowHeight (state: State, _windowWidth: number): void
  isMobile (state: State): void
}

// /**
//  * 状態を保持したい変数の管理
//  */
const state: State = {
  count: 0,
  windowWidth: 0,
  windowHeight: 0,
  isMobile: false
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
  },
  resizeWindowWidth (context: any) {
    context.commit('windowWidth', document.documentElement.clientWidth)
    context.commit('isMobile')
  },
  resizeWindowHeight (context: any) {
    context.commit('windowHeight', document.documentElement.clientHeight)
    context.commit('isMobile')
  }
}
/**
 * gettersはstateの値を取得するのに利用
 */
const getters: Getters = {
  getCount (state: any): number {
    return state.count
  },
  getWindowWidth (state: any): number {
    return state.windowWidth
  },
  getWindowHeight (state: any): number {
    return state.windowHeight
  },
  getIsMobile (state: any): boolean {
    return state.isMobile
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
  },
  windowWidth (state: any, _windowWidth: number) {
    state.windowWidth = _windowWidth
  },
  windowHeight (state: any, _windowHeight: number) {
    state.windowHeight = _windowHeight
  },
  isMobile (state: any) {
    if (state.windowWidth < 1264) {
      state.isMobile = true
    } else {
      state.isMobile = false
    }
  }
}

export default new Vuex.Store<State>({
  state,
  actions,
  getters,
  mutations
})
