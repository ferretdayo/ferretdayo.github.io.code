import { MutationPayload } from 'vuex'

export default {
  changeData(state: ResasState, payload: MutationPayload) {
    state.data = payload
  }
}