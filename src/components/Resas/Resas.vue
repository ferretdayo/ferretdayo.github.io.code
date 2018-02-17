<template>
  <div id="resas">
    <v-layout row wrap>
      <v-flex>
        <h1>観光場所などの検索</h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-subheader>都道府県</v-subheader>
      </v-flex>
      <v-flex xs12>
        <v-select
          :items="prefectures"
          item-text="prefName"
          item-value="prefCode"
          label="都道府県"
          single-line
          bottom
          @change="onSelectPrefecture"
        ></v-select>
      </v-flex>
      <v-flex xs12>
        <v-subheader>市町村</v-subheader>
      </v-flex>
      <v-flex xs12>
        <v-select
          :items="cities"
          item-text="cityName"
          item-value="cityCode"
          label="市町村"
          single-line
          bottom
          @change="onSelectCity"
        ></v-select>
      </v-flex>
      <v-flex xs12>
        <li v-for="tourismAttraction in tourismAttractions" :key="tourismAttraction.resourceCode">{{tourismAttraction.resourceName}}</li>
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
}
</script>

<style lang="stylus" scoped>
</style>