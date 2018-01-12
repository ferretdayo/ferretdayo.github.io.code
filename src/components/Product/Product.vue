<template>
  <div id="product">
    <v-layout row wrap>
      <v-flex>
        <h1>Product!</h1>
      </v-flex>
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
}
</script>

<style scoped>

</style>
