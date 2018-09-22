import axios, { AxiosStatic } from 'axios'
import Raven from 'raven-js'

const http: AxiosStatic = axios

export default (Vue, { store }) => {
  http.interceptors.request.use((config) => {
    // axiosでリクエストを送った場合はLoadingのフラグを立たせる
    store.commit('changeIsLoad', true)
    return config
  }, (error) => Raven.captureException(error))

  http.interceptors.response.use((response) => {
    // axiosでリクエストを受け取った場合はLoadingのフラグを下ろす
    store.commit('changeIsLoad', false)
    return response
  }, (error) => Raven.captureException(error))

  Vue.http = http
  Object.defineProperties(Vue.prototype, {
    $http: {
      get () {
        return http
      }
    }
  })
}
