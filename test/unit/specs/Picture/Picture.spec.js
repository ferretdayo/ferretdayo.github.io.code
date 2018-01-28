import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import Picture from '@/components/Picture/Picture'

Vue.use(Vuetify)

describe('Picture.vue', () => {
  it('should render correct contents', () => {
    // const Constructor = Vue.extend(Picture)
    // const vm = new Constructor().$mount()
    // console.log(vm.$data)
    // expect(vm.$el.querySelector('h1').textContent).toEqual('Picture!')

    // サブタイトルがちゃんとあるか
    // expect(vm.$el.querySelectorAll('h2.section')[0].textContent).toEqual('language')
    // expect(vm.$el.querySelectorAll('h2.section')[1].textContent).toEqual('framework')
    // expect(vm.$el.querySelectorAll('h2.section')[2].textContent).toEqual('other')

    // // サブタイトルの中にデータあるかどうか
    // expect([...vm.$el.querySelectorAll('section#language .skill-content')].map(value => value.textContent)).toEqual(expect.arrayContaining(['JavaScript']))
    // expect([...vm.$el.querySelectorAll('section#framework .skill-content')].map(value => value.textContent)).toEqual(expect.arrayContaining(['Vue.js']))
    // expect([...vm.$el.querySelectorAll('section#other .skill-content')].map(value => value.textContent)).toEqual(expect.arrayContaining(['Docker']))
  })

  // it('should have skills', () => {
  //   const Constructor = Vue.extend(Skill)
  //   const vm = new Constructor().$mount()
  //   expect(Object.keys(vm.$data)).toEqual(["languages", "frameworks", "others"])
  // })

  // it('should have note', () => {
  //   const Constructor = Vue.extend(Skill)
  //   const vm = new Constructor().$mount()
  //   expect(vm.$el.querySelector('h3.note').textContent).toEqual('備考')
  // })
})
