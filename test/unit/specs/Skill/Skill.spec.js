import Vue from 'vue'
import Vuetify from 'vuetify'
import Skill from '@/components/Skill/Skill'

Vue.use(Vuetify)

describe('Skill.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Skill)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent).toEqual('Skill')

    // サブタイトルがちゃんとあるか
    expect(vm.$el.querySelectorAll('h2.section')[0].textContent).toEqual('language')
    expect(vm.$el.querySelectorAll('h2.section')[1].textContent).toEqual('framework')
    expect(vm.$el.querySelectorAll('h2.section')[2].textContent).toEqual('other')

    // サブタイトルの中にデータあるかどうか
    expect([...vm.$el.querySelectorAll('section#language .skill-content')].map(value => value.textContent)).toEqual(expect.arrayContaining(['JavaScript']))
    expect([...vm.$el.querySelectorAll('section#framework .skill-content')].map(value => value.textContent)).toEqual(expect.arrayContaining(['Vue.js']))
    expect([...vm.$el.querySelectorAll('section#other .skill-content')].map(value => value.textContent)).toEqual(expect.arrayContaining(['Docker']))
  })

  it('should have skills', () => {
    const Constructor = Vue.extend(Skill)
    const vm = new Constructor().$mount()
    expect(Object.keys(vm.$data)).toEqual(["languages", "frameworks", "others"])
  })

  it('should have note', () => {
    const Constructor = Vue.extend(Skill)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h3.note').textContent).toEqual('備考')
  })
})