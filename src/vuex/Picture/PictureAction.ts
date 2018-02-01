import { ActionContext } from 'vuex'

export default {
  tapPicture (context: ActionContext<PictureState, CommonState>, payload: object) {
    context.commit('changeSelectedPicture', payload)
    context.commit('changeIsOpenDialog', true)
  },
  closeDialog (context: ActionContext<PictureState, CommonState>, payload: boolean) {
    context.commit('changeIsOpenDialog', false)
  }
}