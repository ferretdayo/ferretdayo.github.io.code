import PictureModule from './Picture'
import ResasModule from './Resas'
import { ModuleTree } from 'vuex';

const modules: ModuleTree<any> = {
  'picture': PictureModule,
  'resas': ResasModule
}

export default modules