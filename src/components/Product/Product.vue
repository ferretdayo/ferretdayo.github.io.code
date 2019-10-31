<template>
  <div id="product">
    <v-layout row wrap>
      <v-flex>
        <h1>Product!</h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <div class="content-wrap grid-content">
        <section class="release">
          <v-layout row wrap>
            <v-flex>
              <a href="https://clock-maker.herokuapp.com/" target="_blank">
                <img class="release-img" src="../../assets/release1.png">
              </a>
              <figcaption>Clock Maker</figcaption>
              <aside class="fig-aside">時針を好きな文字や数字にし，自分だけの時計ができるアプリです．残念ながら静止画として作るので時計代わりとはなりません．．．</aside>
            </v-flex>
            <v-flex>
              <router-link to="/enjoy/resas">
                <img class="release-img" src="static/img/travel.svg">
              </router-link>
              <figcaption>観光場所の検索</figcaption>
              <aside class="fig-aside">RESAS(地域経済分析システム)に掲載しているデータを国がAPIから利用できるようにしているので，その情報で遊んでみた</aside>
            </v-flex>
          </v-layout>
        </section>
      </div>
    </v-layout>
    <v-layout row wrap>
      <v-flex>
        <h1>OSS Contribute</h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-center>
      <div class="content-wrap list-wrap">
        <v-list expand>
          <v-list-tile
            v-for="contribute in contributeList"
            :key="contribute.pullRequestLink"
          >
            <v-list-tile-content>
              <v-list-tile-title>
                <a
                  class="contribute-link"
                  target="_blank"
                  :href="contribute.githubLink"
                >
                  {{ contribute.title }}
                </a>
              </v-list-tile-title>
              <v-list-tile-sub-title class="contribute-subtitle">{{ contribute.description }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn
                :href="contribute.pullRequestLink"
                target="_blank"
                icon
                ripple
              >
                <v-icon color="grey lighten-1">link</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
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
  contributeList: any = [
    {
      title: 'hyper-pokemon',
      description: 'Electron製のHyperターミナルのポケモンテーマにミズゴロウ背景を追加',
      githubLink: 'https://github.com/klauscfhq/hyper-pokemon',
      pullRequestLink: 'https://github.com/klauscfhq/hyper-pokemon/pull/28'
    },
    {
      title: 'cordova-plugin-camera',
      description: 'cordovaのカメラプラグインのドキュメント修正',
      githubLink: 'https://github.com/apache/cordova-plugin-camera',
      pullRequestLink: 'https://github.com/apache/cordova-plugin-camera/pull/264'
    },
    {
      title: 'react-native-picker-select',
      description: 'Viewで括っていないことによるwarningの対処',
      githubLink: 'https://github.com/lawnstarter/react-native-picker-select',
      pullRequestLink: 'https://github.com/lawnstarter/react-native-picker-select/pull/103'
    }
  ]
}
</script>

<style lang="stylus" scoped>
figcaption
  font-size 18px
  font-weight bold
.content-wrap
  margin-top 40px
  margin-bottom 40px
.list-wrap
  width 80%
.grid-content
  width 100%
  display grid
  grid-template-rows 1fr
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
.contribute-link
  text-decoration none
.contribute-subtitle
  overflow scroll !important
  text-overflow unset !important
@media screen and (max-width: 400px)
  .list-wrap
    width 100%
</style>