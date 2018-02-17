import { ActionContext } from 'vuex'
import api from './_api'

export default {
  init (context: ActionContext<ResasState, CommonState>) {
    api.getPrefectures()
    .then(res => {
      context.commit('changePrefectures', res.data.result)
    })
  },
  onSelectPrefecture (context: ActionContext<ResasState, CommonState>, prefCode: number) {
    context.commit('changeActivePrefectureCode', prefCode)
    context.commit('changeTourismAttractions', [])
    api.getCities(prefCode)
    .then(res => {
      context.commit('changeCities', [{ cityCode: '-', cityName: '全ての市町村' }, ...res.data.result])
    })
  },
  onSelectCity (context: ActionContext<ResasState, CommonState>, cityCode: string) {
    context.commit('changeActiveCityCode', cityCode)
    api.getTourismAttractions(context.getters['getActivePrefectureCode'], cityCode)
    .then(res => {
      context.commit('changeTourismAttractions', res.data.result.data)
    })
  },
  clear (context: ActionContext<ResasState, CommonState>) {
    context.commit('changePrefectures', [])
    context.commit('changeActivePrefectureCode', 0)
    context.commit('changeCities', [])
    context.commit('changeActiveCityCode', '')
    context.commit('changeTourismAttractions', [])
  }
}