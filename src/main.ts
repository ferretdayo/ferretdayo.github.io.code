import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Raven
  .config('https://5e7c78515ef040ad8103a2de65527744@sentry.io/301182')
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
