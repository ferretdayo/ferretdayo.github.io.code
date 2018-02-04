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
    expect(wrapper.find('h1').text()).toEqual('Picture!')
  })

  it('should have selected Picture', () => {
    const wrapper = shallow(Picture, { store, localVue })
    const img = wrapper.findAll('.image').at(0)
    const picture = { name: '__waka1.jpg', caption: '白浜海岸のカニ' } // 0番目の写真
    img.trigger('click')
    expect(store.getters['picture/getSelectedPicture']).toEqual(picture)
    expect(store.getters['picture/getIsOpenDialog']).toBe(true)
  })

  it('should have false isOpenDialog', () => {
    // const wrapper = shallow(Picture, { store, localVue })
    // 状態が初期化されないので，ひとまず．．．これ
    // store.state.picture.isOpenDialog = false

    // クリックして，ダイアログを出す
    // const img = wrapper.findAll('.image').at(0)
    // img.trigger('click')

    // ダイアログを閉じる
    // const dialog = wrapper.find('.dialog')
    // dialog.trigger('input')
    store.dispatch('picture/closeDialog')
    expect(store.getters['picture/getIsOpenDialog']).toBe(false)
  })
})
