import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'
import HttpVue from './http'

Vue.use(Vuetify)
Vue.use(HttpVue, {store})
Vue.config.productionTip = false

Raven
  .config('https://b98ded8dcfa94cc0bd45f091480f9376@sentry.io/768361')
  .addPlugin(RavenVue, Vue)
  .install()

Raven.setUserContext({
  id: 12,
  username: 'ferretdayo',
  email: 'ferretdayo@gmail.com'
})

Raven.setExtraContext({
  name: 'ferretdayo'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
