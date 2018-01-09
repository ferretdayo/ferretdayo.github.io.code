<template>
  <div id="skill">
    <v-layout row wrap>
      <v-flex>
        <h1>Skill</h1>
      </v-flex>
    </v-layout>
    <!-- プログラミング言語の紹介 -->
    <section>
      <h2 class="section">language</h2>
      <v-layout row wrap>
        <v-flex v-for="language in languages" :key="language.content">
          <div class="skill">
            <h2 class="skill-lv">Lv. {{language.lv}}</h2>
            <img class="skill-icon" :src="language.icon">
            <div class="skill-content">{{language.name}}</div>
          </div>
        </v-flex>
      </v-layout>
    </section>
    <!-- フレームワークの紹介 -->
    <section>
      <h2 class="section">framework</h2>
      <v-layout row wrap>
        <v-flex v-for="framework in frameworks" :key="framework.content">
          <div class="skill">
            <h2 class="skill-lv">Lv. {{framework.lv}}</h2>
            <img class="skill-icon" :src="framework.icon">
            <div class="skill-content">{{framework.name}}</div>
          </div>
        </v-flex>
      </v-layout>
    </section>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'Skill'
})
export default class Skill extends Vue {
  languages = [
    {
      lv: 20,
      icon: '../../assets/tsuruemon.jpg',
      name: 'JavaScript'
    },
    {
      lv: 20,
      icon: 'src/assets/tsuruemon.jpg',
      name: 'PHP'
    },
    {
      lv: 20,
      icon: 'src/assets/tsuruemon.jpg',
      name: 'Java'
    },
    {
      lv: 20,
      icon: 'src/assets/tsuruemon.jpg',
      name: 'Swift'
    },
    {
      lv: 20,
      icon: 'src/assets/tsuruemon.jpg',
      name: 'HTML'
    },
    {
      lv: 20,
      icon: 'src/assets/tsuruemon.jpg',
      name: 'CSS'
    }
  ]
  frameworks = [
    {
      lv: 20,
      icon: 'src/assets/tsuruemon.jpg',
      name: 'Vue.js'
    },
    {
      lv: 20,
      icon: 'src/assets/tsuruemon.jpg',
      name: 'AngularJS v4'
    },
    {
      lv: 20,
      icon: 'src/assets/tsuruemon.jpg',
      name: 'Laravel'
    },
    {
      lv: 20,
      icon: 'src/assets/tsuruemon.jpg',
      name: 'Spring Boot'
    }
  ]
}
</script>

<style lang="stylus" scoped>
.section
  text-align center
  margin-top 20px
.skill
  margin 10px 50px 40px
  .skill-lv
    font-weight bold
  .skill-icon
    width 140px
    height 140px
    border-radius 70px
  .skill-content
    font-size 18px
@media screen and (max-width: 600px)
  .skill
    margin 10px 10px 20px
    .skill-icon
      width 80px
      height 80px
      border-radius 40px
</style>