import { ActionTree } from "vuex"

/**
 * actionsはmutationsを利用して，アクションの処理を実装
 */
const actions: ActionTree<CommonState, any> = {
  resizeWindowWidth (context: any) {
    context.commit('windowWidth', document.documentElement.clientWidth)
    context.commit('isMobile')
  },
  resizeWindowHeight (context: any) {
    context.commit('windowHeight', document.documentElement.clientHeight)
    // console.log(window.scrollY)
    // context.commit('changeCanScroll', window.scrollbars.visible)
    context.commit('isMobile')
  },
  loading (context: any) {
    context.commit('changeIsload', true)
  },
  loaded (context: any) {
    context.commit('changeIsload', false)
  },
  onScroll (context: any) {
    context.commit('changeCanScroll', !!window.scrollY)
  }
}

export default actions
