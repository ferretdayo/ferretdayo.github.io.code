import { GetterTree } from "vuex";

const getters: GetterTree<ResasState, CommonState> = {
  getData(state: ResasState): Object {
    return state.data
  }
}

export default getters