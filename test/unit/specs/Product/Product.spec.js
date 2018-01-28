import Vue from 'vue'
import Vuetify from 'vuetify'
import Product from '@/components/Product/Product'

Vue.use(Vuetify)

describe('Product.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Product)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent).toEqual('Product!')
  })
})
