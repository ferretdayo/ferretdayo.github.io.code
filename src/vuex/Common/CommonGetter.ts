import { GetterTree } from "vuex"

/**
 * gettersはstateの値を取得するのに利用
 */
const getters: GetterTree<CommonState, any> = {
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

export default getters
