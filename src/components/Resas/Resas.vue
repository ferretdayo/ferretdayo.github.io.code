<template>
  <div id="resas">
    <v-layout row wrap>
      <v-flex>
        <h1>なにか</h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      aa
    </v-layout>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { mapActions } from 'vuex'
import Component from 'vue-class-component'

@Component({
  name: 'Resas',
  methods: {
    ...mapActions('resas', [
      'init'
    ])
  }
})
export default class Resas extends Vue {
  constructor () {
    super()
    this.$store.dispatch('resas/init')
  }
}
</script>

<style lang="stylus" scoped>
</style>