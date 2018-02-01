import PictureModule from './Picture/PictureModule'
import { ModuleTree } from 'vuex';

const modules: ModuleTree<PictureState> = {
  'picture': PictureModule
}

export default modules