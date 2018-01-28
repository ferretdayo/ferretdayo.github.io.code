import Vue from 'vue'
import Vuetify from 'vuetify'
import Hobby from '@/components/Hobby/Hobby'

Vue.use(Vuetify)

describe('Hobby.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hobby)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent).toEqual('Hobby')
  })
})
