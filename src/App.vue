<template>
  <div id="app">
    <v-app v-resize="onResize">
      <v-content>
        <Header></Header>
        <v-progress-linear :active="isload" :indeterminate="true"></v-progress-linear>
        <v-container>
          <router-view/>
        </v-container>
        <Footer></Footer>
      </v-content>
      <div class="top-button" @click="setTop" :hidden="!canScroll">
        <img class="up-cursor" alt="上矢印" src="/static/img/arrow.png">
        <img class="up" alt="色違いのミズゴロウ" src="/static/img/mizu_cursor_hover.png">
      </div>
    </v-app>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import Component from 'vue-class-component'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

@Component({
  name: 'App',
  computed: {
    ...mapGetters({
      isload: 'getIsLoad',
      canScroll: 'getCanScroll'
    })
  },
  components: {
    Header,
    Footer
  }
})
export default class App extends Vue {
  constructor () {
    super()
    this.onResize()
    window.addEventListener('scroll', this.setOnScroll)
  }

  // mapActionsで関数定義しても上手く動かないので，ひとまず直接dispatch
  onResize () {
    this.$store.dispatch('resizeWindowWidth')
    this.$store.dispatch('resizeWindowHeight')
  }

  setOnScroll () {
    this.$store.dispatch('onScroll')
  }

  setTop () {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth' 
    })
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
  cursor url('/static/img/mizu_cursor.png'), auto

.progress-linear
  margin-top 0px !important
  position fixed !important

.up
  position fixed
  right 50px
  bottom 50px
  width 50px
  height 50px
.up-cursor
  position fixed
  right 100px
  bottom 60px
  width 30px
  height 30px

@media screen and (max-width: 960px)
  .up
    position fixed
    right 20px
    bottom 20px
    width 35px
    height 35px
  .up-cursor
    position fixed
    right 55px
    bottom 28px
    width 20px
    height 20px
</style>
