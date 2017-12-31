<template>
  <div id="counter">
    <div>{{msg}}</div>
    <div>{{count}}</div>
    <button v-on:click="decrement">-1</button>
    <button v-on:click="increment">+1</button>
    <div>
      <button @click="alertCurrentCount">今のカウントは？</button>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions, mapGetters } from 'vuex'

@Component({
  name: 'counter',
  methods: {
    ...mapActions({
      increment: 'increment',
      decrement: 'decrement'
    })
  },
  computed: {
    ...mapGetters({
      count: 'getCount'
    })
  }
})
export default class Counter extends Vue {
  /**
   * dataはこんな感じ
   */
  msg: string = 'Hello World'

  /**
   * computedはこんな感じ
   */
  // get count (): number {
  //   return this.$store.getters.getCount
  // }

  /**
   * methodsはこんな感じ
   */
  alertCurrentCount () {
    alert(this.$store.getters.getCount)
  }
}
</script>

<style scoped>

</style>
