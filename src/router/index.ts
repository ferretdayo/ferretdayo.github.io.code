import Vue from 'vue'
import Router from 'vue-router'
import Tsuruemon from '@/components/Tsuruemon/Tsuruemon.vue'
import Hobby from '@/components/Hobby/Hobby.vue'

import '../../node_modules/vuetify/dist/vuetify.min.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Tsuruemon',
      component: Tsuruemon, 
      children: [
        {
          path: 'me',
          name: 'Tsuruemon',
          component: Tsuruemon
        },
        {
          path: 'hobby',
          name: 'Hobby',
          component: Hobby
        },
      ]
    }
  ]
})
