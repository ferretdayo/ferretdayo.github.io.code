import Vuex from 'vuex'
import Vuetify from 'vuetify'
import { shallow, createLocalVue } from 'vue-test-utils'

import Picture from '@/components/Picture/Picture'
import CommonAction from '@/vuex/Common/CommonAction'
import CommonGetter from '@/vuex/Common/CommonGetter'
import CommonMutation from '@/vuex/Common/CommonMutation'
import CommonState from '@/vuex/Common/CommonState'

import PictureModule from '@/vuex/Picture/PictureModule'

const localVue = createLocalVue()

localVue.use(Vuetify)
localVue.use(Vuex)

describe('Picture.vue', () => {
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
    const wrapper = shallow(Picture, { store, localVue })
    expect(wrapper.element.querySelector('h1').textContent).toEqual('Picture!')
  })

  it('should have selected Picture', () => {
    const picture = { name: '_eno1.jpg', caption: 'ミズゴロウと岩' }
    store.dispatch('picture/tapPicture', picture)
    expect(store.getters['picture/getSelectedPicture']).toBe(picture)
    expect(store.getters['picture/getIsOpenDialog']).toBe(true)
  })
})
