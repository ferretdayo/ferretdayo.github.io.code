import Vue from 'vue'
import Router from 'vue-router'
import Tsuruemon from '@/components/Tsuruemon/Tsuruemon.vue'
import Skill from '@/components/Skill/Skill.vue'
import Product from '@/components/Product/Product.vue'
import Hobby from '@/components/Hobby/Hobby.vue'
import Picture from '@/components/Picture/Picture.vue'

import '../../node_modules/vuetify/dist/vuetify.min.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tsuruemon',
      component: Tsuruemon, 
    },
    {
      path: '/me',
      name: 'Tsuruemon',
      component: Tsuruemon
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/hobby',
      name: 'Hobby',
      component: Hobby
    },
    {
      path: '/picture',
      name: 'Picture',
      component: Picture
    }
  ]
})
