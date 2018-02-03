import Vuex from 'vuex'
import Vuetify from 'vuetify'
import { shallow, createLocalVue } from 'vue-test-utils'

import App from '@/App'
import Header from '@/components/Header'

import CommonAction from '@/vuex/Common/CommonAction'
import CommonGetter from '@/vuex/Common/CommonGetter'
import CommonMutation from '@/vuex/Common/CommonMutation'
import CommonState from '@/vuex/Common/CommonState'

import PictureModule from '@/vuex/Picture/PictureModule'

const localVue = createLocalVue()

localVue.use(Vuetify)
localVue.use(Vuex)

describe('App.vue', () => {
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
    const wrapper = shallow(App, { store, localVue })
    const mizugorouImage = wrapper.find('img')
    expect(mizugorouImage.exists()).toBe(true)
  })
})
