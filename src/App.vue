<template>
  <div id="app">
    <v-app>
      <Header></Header>
      <v-content>
        <router-view/>
      </v-content>
      <Footer></Footer>
    </v-app>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import Header from '@/components/Header.vue'

@Component({
  name: 'App',
  components: {
    Header
  }
})
export default class App extends Vue {
  constructor () {
    super()
    // mapActionsで関数定義しても上手く動かないので，ひとまず直接dispatch
    this.$store.dispatch('resizeWindowWidth')
    window.addEventListener('resize', () => { setTimeout(this.$store.dispatch('resizeWindowWidth'), 300) })
  }
}
</script>

<style lang="stylus">
@import '../node_modules/vuetify/src/stylus/main.styl'

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
body
  margin: 0px;
</style>
