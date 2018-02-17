import { GetterTree } from "vuex";

const getters: GetterTree<PictureState, CommonState> = {
  getSelectedPicture(state: PictureState): Object {
    return state.selectedPicture
  },
  getIsOpenDialog(state: PictureState): boolean {
    return state.isOpenDialog
  }
}

export default getters