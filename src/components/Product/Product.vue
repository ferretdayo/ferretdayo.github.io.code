<template>
  <div id="product">
    <v-layout row wrap>
      <v-flex>
        <h1>Product!</h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <div class="grid-content">
        <section class="release">
          <v-layout row wrap>
            <v-flex>
              <a href="https://clock-maker.herokuapp.com/" target="_blank">
                <img class="release-img" src="../../assets/release1.png">
              </a>
              <figcaption>Clock Maker</figcaption>
              <aside class="fig-aside">時針を好きな文字や数字にし，自分だけの時計ができるアプリです．残念ながら静止画として作るので時計代わりとはなりません．．．</aside>
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
  name: 'Product'
})
export default class Product extends Vue {
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
  grid-template-rows 1fr 1fr
  grid-template-columns 10% 1fr 10%
.release
  grid-row 1
  grid-column 2
.release-img
  width 200px
  height 200px
  object-fit cover
.fig-aside
  margin 10px auto 40px
  width 200px
  font-size 14px
  text-align left
</style>