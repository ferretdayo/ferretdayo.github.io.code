<template>
  <v-footer id="footer">
    <v-flex>
      &copy; {{ new Date().getFullYear() }} - <strong>ferretdayo</strong>
    </v-flex>
  </v-footer>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'Footer'
})
export default class Footer extends Vue {
  constructor () {
    super()
  }
}
</script>

<style scoped>

</style>
