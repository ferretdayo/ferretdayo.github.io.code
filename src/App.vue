<template>
  <div id="app">
    <v-app v-resize="onResize">
      <v-content>
        <Header></Header>
        <v-container>
          <router-view/>
        </v-container>
        <Footer></Footer>
      </v-content>
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
    this.onResize()
  }

  // mapActionsで関数定義しても上手く動かないので，ひとまず直接dispatch
  onResize () {
    this.$store.dispatch('resizeWindowWidth')
  }
}
</script>

<style lang="stylus">
@import '../node_modules/vuetify/src/stylus/main.styl'

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
body
  margin 0px
  cursor url('./assets/mizu_cursor.png'), auto
</style>
