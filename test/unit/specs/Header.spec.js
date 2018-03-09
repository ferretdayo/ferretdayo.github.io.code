import Vuex from 'vuex'
import Vuetify from 'vuetify'
import { shallow, createLocalVue } from 'vue-test-utils'

import Header from '@/components/Header'
import CommonAction from '@/vuex/Common/action'
import CommonGetter from '@/vuex/Common/getter'
import CommonMutation from '@/vuex/Common/mutation'
import CommonState from '@/vuex/Common/state'

import PictureModule from '@/vuex/Picture'

const localVue = createLocalVue()

localVue.use(Vuetify)
localVue.use(Vuex)

describe('Header.vue', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: CommonState,
      actions: CommonAction,
      getters: CommonGetter,
      mutations: CommonMutation,
      modules: {
        picture: PictureModule
      }
    })
  })

  it('should render correct contents', () => {
    const wrapper = shallow(Header, { store, localVue })

    expect(wrapper.vm.$data.items)
    .toEqual(expect.arrayContaining([{
      title: 'ツルえもん',
      icon: 'perm_identity',
      path: '/me'
    }]))

    expect(wrapper.element.querySelector('.list__tile__title').textContent).toEqual('ミズゴロウのすみか')
  })
})
