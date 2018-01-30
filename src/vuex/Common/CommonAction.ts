import { ActionTree } from "vuex"

/**
 * actionsはmutationsを利用して，アクションの処理を実装
 */
const actions: ActionTree<CommonState, any> = {
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

export default actions
