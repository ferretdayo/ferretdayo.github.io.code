import { MutationTree } from "vuex"

/**
 * mutationsは値の移り変わりの処理を実装
 */
const mutations: MutationTree<CommonState> = {
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

export default mutations
