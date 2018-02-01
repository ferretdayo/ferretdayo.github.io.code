import PictureAction from './PictureAction'
import PictureMutation from './PictureMutation'
import PictureGetter from './PictureGetter'
import PictureState from './PictureState'
import { Module } from 'vuex'

const pictureModule: Module<PictureState, any> = {
  namespaced: true,
  state: PictureState,
  actions: PictureAction,
  mutations: PictureMutation,
  getters: PictureGetter
}

export default pictureModule