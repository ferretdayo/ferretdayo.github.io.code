<template>
  <div id="counter">
    <div>{{count}}</div>
    <button v-on:click="decrement">-1</button>
    <button v-on:click="increment">+1</button>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions } from 'vuex'

@Component({
  name: 'counter',
  methods: {
    ...mapActions({
      increment: 'increment',
      decrement: 'decrement'
    })
  }
})
export default class Counter extends Vue {
  get count (): number {
    return this.$store.getters.getCount
  }
}
</script>

<style scoped>

</style>
