import { GetterTree } from "vuex"

/**
 * gettersはstateの値を取得するのに利用
 */
const getters: GetterTree<CommonState, any> = {
  getWindowWidth (state: any): number {
    return state.windowWidth
  },
  getWindowHeight (state: any): number {
    return state.windowHeight
  },
  getIsMobile (state: any): boolean {
    return state.isMobile
  },
  getIsLoad (state: any): boolean {
    return state.isload
  },
  getCanScroll (state: any): boolean {
    return state.canScroll
  }
}

export default getters
