<template>
  <div class="hello">
    <counter></counter>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import Counter from './Counter'

@Component({
  name: 'helloWorld',
  components: { Counter }
})
export default class HelloWorld extends Vue {
}
</script>

<style scoped>

</style>
