import { GetterTree } from "vuex";

const getters: GetterTree<ResasState, CommonState> = {
  getPrefectures(state: ResasState): Array<any> {
    return state.prefectures
  },
  getActivePrefectureCode(state: ResasState): number {
    return state.activePrefectureCode
  },
  getCities(state: ResasState): Array<any> {
    return state.cities
  },
  getActiveCityCode(state: ResasState): string {
    return state.activeCityCode
  },
  getTourismAttractions(state: ResasState): Array<any> {
    return state.tourismAttractions
  }
}

export default getters