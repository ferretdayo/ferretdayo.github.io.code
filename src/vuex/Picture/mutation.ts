import { MutationPayload } from 'vuex'

export default {
  changeSelectedPicture(state: PictureState, payload: MutationPayload) {
    state.selectedPicture = payload
  },
  changeIsOpenDialog(state: PictureState, payload: MutationPayload) {
    state.isOpenDialog = !!payload
  }
}