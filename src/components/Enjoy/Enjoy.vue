<template>
  <div id="enjoy">
    <v-layout row wrap>
      <v-flex>
        <h1>Enjoy!</h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <div class="grid-content">
        <section class="enjoy">
          <v-layout row wrap>
            <v-flex>
              <router-link to="/enjoy/resas">
                <img class="enjoy-img" src="static/img/travel.svg">
              </router-link>
              <figcaption>観光場所の検索</figcaption>
              <aside class="fig-aside">RESAS(地域経済分析システム)に掲載しているデータを国がAPIから利用できるようにしているので，その情報で遊んでみた</aside>
            </v-flex>
          </v-layout>
        </section>
      </div>
    </v-layout>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'Enjoy'
})
export default class Enjoy extends Vue {
  constructor () {
    super()
  }
}
</script>

<style lang="stylus" scoped>
figcaption
  font-size 18px
  font-weight bold
.grid-content
  width 100%
  margin-top 50px
  display grid
  grid-template-rows 1fr
  grid-template-columns 10% 1fr 10%
.enjoy
  grid-row 1
  grid-column 2
.enjoy-img
  width 200px
  height 200px
  object-fit cover
.fig-aside
  margin 10px auto 40px
  width 200px
  font-size 14px
  text-align left
</style>