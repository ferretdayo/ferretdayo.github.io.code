import { MutationPayload } from 'vuex'

export default {
  changePrefectures(state: ResasState, payload: MutationPayload) {
    state.prefectures = payload
  },
  changeActivePrefectureCode(state: ResasState, payload: number) {
    state.activePrefectureCode = payload
  },
  changeCities(state: ResasState, payload: MutationPayload) {
    state.cities = payload
  },
  changeActiveCityCode(state: ResasState, payload: string) {
    state.activeCityCode = payload
  },
  changeTourismAttractions(state: ResasState, payload: MutationPayload) {
    state.tourismAttractions = payload
  }
}