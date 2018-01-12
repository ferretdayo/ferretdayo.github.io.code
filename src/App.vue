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
      <div @click="setTop">
        <div class="up-cursor">↑</div>
        <img class="up" src="./assets/mizu_cursor_hover.png">
      </div>
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

  setTop () {
    window.scroll(0, 0)
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
.up
  display fixed
  position absolute
  right 50px
  bottom 50px
  width 50px
  height 50px
.up-cursor
  display fixed
  position absolute
  right 90px
  bottom 30px
  width 50px
  height 50px

@media screen and (max-width: 960px)
  .up
    display fixed
    position absolute
    right 20px
    bottom 20px
    width 35px
    height 35px
  .up-cursor
    display fixed
    position absolute
    right 50px
    bottom 20px
    width 35px
    height 35px
</style>
