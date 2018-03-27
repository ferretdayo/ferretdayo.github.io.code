import { ActionContext } from 'vuex'
import Raven from 'raven-js'

export default {
  tapPicture (context: ActionContext<PictureState, CommonState>, payload: object) {
    Raven.captureMessage('tap Pictrue', {
      tags: { category: 'picture' },
      level: 'info'
    })
    context.commit('changeSelectedPicture', payload)
    context.commit('changeIsOpenDialog', true)
  },
  closeDialog (context: ActionContext<PictureState, CommonState>, payload: boolean) {
    Raven.captureMessage('close dialog of Pictrue', {
      tags: { category: 'picture' },
      level: 'info'
    })
    context.commit('changeIsOpenDialog', false)
  }
}