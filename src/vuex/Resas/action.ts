import { ActionContext } from 'vuex'
import Raven from 'raven-js'
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
  async onSelectCity (context: ActionContext<ResasState, CommonState>, cityCode: string) {
    context.commit('changeActiveCityCode', cityCode)
    let attractions: Array<any> = []
    let _attractions = await api.getTourismAttractions(context.getters['getActivePrefectureCode'], cityCode)
    .then(res => {
      if (res.data.result === null) {
        return []
      }
      return res.data.result.data
    })
    context.commit('changeTourismAttractions', _attractions)
  },
  clear (context: ActionContext<ResasState, CommonState>) {
    context.commit('changePrefectures', [])
    context.commit('changeActivePrefectureCode', 0)
    context.commit('changeCities', [])
    context.commit('changeActiveCityCode', '')
    context.commit('changeTourismAttractions', [])
  }
}