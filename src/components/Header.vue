<template>
  <header id="header">
    <v-navigation-drawer app fixed permanent touchless :mini-variant="isMobile">
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar :to="''">
            <v-list-tile-avatar>
              <img src="/static/img/mizu.gif" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>ミズゴロウのすみか</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" :to="item.path" @click="pageInit">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script lang='ts'>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import Component from 'vue-class-component'

@Component({
  name: 'Header',
  computed: mapGetters({'isMobile': 'getIsMobile'})
})
export default class Header extends Vue {
  items: any = [
    {
      title: 'ツルえもん',
      icon: 'perm_identity',
      path: '/me'
    },
    {
      title: 'SKILL',
      icon: 'computer',
      path: '/skill'
    },
    {
      title: 'PRODUCT',
      icon: 'devices_other',
      path: '/product'
    },
    {
      title: 'HOBBY',
      icon: 'directions_run',
      path: '/hobby'
    },
    {
      title: 'PICTURE',
      icon: 'photo_camera',
      path: '/picture'
    }
  ]

  pageInit() {
    window.scroll(0, 0)
  }
}
</script>

<style scoped>

</style>
