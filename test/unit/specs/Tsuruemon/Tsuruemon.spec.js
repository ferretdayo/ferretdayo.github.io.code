import Vue from 'vue'
import Vuetify from 'vuetify'
import Tsuruemon from '@/components/Tsuruemon/Tsuruemon'

Vue.use(Vuetify)

describe('Tsuruemon.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Tsuruemon)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h2').textContent).toEqual('ツルえもん㌠')
  })
})
