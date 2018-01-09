<template>
  <div id="tsuruemon">
    <v-layout row wrap>
      <v-flex>
        <v-avatar
          :tile="false"
          :size="'200px'"
          class="grey lighten-4"
        >
          <img src="../../assets/tsuruemon.jpg" alt="avatar">
        </v-avatar>
        <h2 class="name">ツルえもん㌠</h2>
      </v-flex>
    </v-layout>
    <v-layout class="layout-content" row wrap>
      <v-flex xs12 sm12 md6>
        <h3 class="title">情報</h3>
        <v-list class="content">
          <v-list-tile v-for="information in informations" :key="information.content">
            <v-list-tile-action>
              <v-icon>{{information.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-if="information.link"><a target="_blank" :href="information.link">{{ information.content }}</a></v-list-tile-title>
              <v-list-tile-title v-else>{{ information.content }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
      <v-flex xs12 sm12 md6>
        <h3 class="title">経歴</h3>
        <v-list class="content">
          <v-list-tile v-for="career in careers" v-bind:key="career.content">
            <v-list-tile-action>
              <v-icon>{{ career.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ career.content }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'Tsuruemon'
})
export default class Tsuruemon extends Vue {
  careers = [
    {
      icon: 'school',
      content: '京都+広島の小学校'
    },
    {
      icon: 'school',
      content: '広島+京都の中学校'
    },
    {
      icon: 'school',
      content: '京都の高等学校'
    },
    {
      icon: 'school',
      content: '広島市立大学（3年間）'
    },
    {
      icon: 'school',
      content: '国立筑波大学大学院'
    },
    {
      icon: 'work',
      content: '株式会社????????'
    }
  ]

  informations = [
    {
      icon: 'place',
      content: '茨城県'
    },
    {
      icon: 'cake',
      content: '1994/07/07'
    },
    {
      icon: 'email',
      content: 'ferretdayo[at]gmail.com'
    },
    {
      icon: 'public',
      content: 'Twitter',
      link: 'https://twitter.com/terado_desu'
    },
    {
      icon: 'public',
      content: 'Qiita',
      link: 'https://qiita.com/ferretdayo'
    },
    {
      icon: 'public',
      content: 'hatena blog',
      link: 'http://ferretdayo.hatenablog.com/'
    }
  ]
}
</script>

<style lang="stylus" scoped>
#tsuruemon
  margin-top 20px
  .name
    margin-top 10px
  .title
    text-align left 
    padding-left 18px
    margin-top 20px
  .content
    background-color inherit
  .layout-content
    margin-top 10px
// ipad用
@media screen and (min-width: 700px) and (max-width: 960px)
  .layout-content
    padding-left 200px
</style>
