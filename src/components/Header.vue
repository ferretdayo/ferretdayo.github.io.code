<template>
  <header id="header">
    <v-navigation-drawer light fixed permanent touchless :mini-variant="isMobile">
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar :to="''">
            <v-list-tile-avatar>
              <!-- <img src="../assets/tsuruemon.jpg" /> -->
              <img src="../assets/mizu.gif" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>ミズゴロウのすみか</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" :to="item.path">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
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
      icon: 'dashboard',
      path: '/skill'
    },
    {
      title: 'PRODUCT',
      icon: 'dashboard',
      path: '/product'
    },
    {
      title: 'HOBBY',
      icon: 'dashboard',
      path: '/hobby'
    },
    {
      title: 'PICTURE',
      icon: 'photo_camera',
      path: '/picture'
    },
    {
      title: 'SOCIAL',
      icon: 'assignment_ind',
      path: '/social'
    }
  ]
}
</script>

<style scoped>

</style>
