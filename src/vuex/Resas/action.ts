import { ActionContext } from 'vuex'
import api from './_api'

export default {
  init (context: ActionContext<ResasState, CommonState>) {
    api.getPeople()
    .then(res => {
      console.log(res)
    })
    // context.commit('changeData', true)
  }
}