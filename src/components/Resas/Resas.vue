<template>
  <div id="resas">
    <v-layout row wrap>
      <v-flex>
        <h1>観光場所の検索</h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-space-around>
      <v-flex md5 xs12>
        <v-select
          :items="prefectures"
          item-text="prefName"
          item-value="prefCode"
          label="都道府県"
          single-line
          bottom
          class="select-box"
          @change="onSelectPrefecture"
        ></v-select>
      </v-flex>
      <v-flex md5 xs12>
        <v-select
          :items="cities"
          item-text="cityName"
          item-value="cityCode"
          label="市町村"
          single-line
          bottom
          class="select-box"
          @change="onSelectCity"
        ></v-select>
      </v-flex>
      <v-flex xs12>
        <v-list two-line subheader>
          <v-subheader inset>Tourism Attractions</v-subheader>
          <template v-for="(tourismAttraction, index) in tourismAttractions">
            <v-list-tile avatar :key="tourismAttraction.resourceCode">
              <v-list-tile-avatar>
                <v-icon>location_on</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{tourismAttraction.resourceName}}</v-list-tile-title>
                <v-list-tile-sub-title v-if="tourismAttraction.address">{{tourismAttraction.address}}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon ripple v-if="tourismAttraction.address" :href="`https://www.google.ru/maps/place/${tourismAttraction.address}`">
                  <v-icon color="primary lighten-1">info</v-icon>
                </v-btn>
                <v-btn icon ripple v-else :disabled="true">
                  <v-icon color="primary lighten-1">info</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider v-if="index + 1 < tourismAttractions.length" :key="-index"></v-divider>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import Component from 'vue-class-component'

@Component({
  name: 'Resas',
  computed: {
    ...mapGetters('resas', {
      prefectures: 'getPrefectures',
      cities: 'getCities',
      tourismAttractions: 'getTourismAttractions'
    })
  },
  methods: {
    ...mapActions('resas', [
      'init',
      'onSelectPrefecture',
      'onSelectCity'
    ])
  }
})
export default class Resas extends Vue {
  constructor () {
    super()
    this.$store.dispatch('resas/init')
  }
  beforeDestroy () {
    this.$store.dispatch('resas/clear')
  }

  openMap (location: string) {
  }
}
</script>

<style lang="stylus" scoped>
.select-box
  margin 0 10px
</style>