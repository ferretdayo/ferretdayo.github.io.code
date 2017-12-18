<template>
  <div id="counter">
    <div>{{count}}</div>
    <button v-on:click="decrement">-1</button>
    <button v-on:click="increment">+1</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Counter',
  computed: {
    count () {
      return this.$store.getters.getCount
    }
  },
  methods: {
    ...mapActions({
      increment: 'increment',
      decrement: 'decrement'
    })
  }
}
</script>

<style scoped>

</style>
