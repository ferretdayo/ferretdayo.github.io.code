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
            <i class="skill-icon" :class="language.icon"></i>
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
            <i class="skill-icon" :class="framework.icon"></i>
            <div class="skill-content">{{framework.name}}</div>
          </div>
        </v-flex>
      </v-layout>
    </section>
    <!-- その他の技術の紹介 -->
    <section>
      <h2 class="section">other</h2>
      <v-layout row wrap>
        <v-flex v-for="other in others" :key="other.content">
          <div class="skill">
            <h2 class="skill-lv">Lv. {{other.lv}}</h2>
            <i class="skill-icon" :class="other.icon"></i>
            <div class="skill-content">{{other.name}}</div>
          </div>
        </v-flex>
      </v-layout>
    </section>
    <aside>
      <h3 class="note">備考</h3>
      <v-layout row wrap>
        <v-flex class="explain-definition" xs12 sm6>lv． 0 ~ lv． 10 : 触ったことあります</v-flex>
        <v-flex class="explain-definition" xs12 sm6>lv．11 ~ lv． 20 : ちょっと使えます</v-flex>
        <v-flex class="explain-definition" xs12 sm6>lv．21 ~ lv． 30 : まあまあ使えます</v-flex>
        <v-flex class="explain-definition" xs12 sm6>lv．31 ~ lv． 40 : まあ使えます</v-flex>
        <v-flex class="explain-definition" xs12 sm6>lv．41 ~ lv． 50 : あー使えます</v-flex>
        <v-flex class="explain-definition" xs12 sm6>lv．51 ~ lv． 60 : 使えます</v-flex>
        <v-flex class="explain-definition" xs12 sm6>lv．61 ~ lv． 70 : よく使えます</v-flex>
        <v-flex class="explain-definition" xs12 sm6>lv．71 ~ lv． 80 : いつも使えます</v-flex>
        <v-flex class="explain-definition" xs12 sm6>lv．81 ~ lv． 90 : 寝るときも一緒です</v-flex>
        <v-flex class="explain-definition" xs12 sm6>lv．91 ~ lv．100 : 私はそれで出来ている</v-flex>
      </v-layout>
    </aside>
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
    { lv: 24, icon: 'devicon-javascript-plain colored', name: 'JavaScript' },
    { lv: 20, icon: 'devicon-php-plain colored', name: 'PHP' },
    { lv: 18, icon: 'devicon-java-plain colored', name: 'Java' },
    { lv: 16, icon: 'devicon-typescript-plain colored', name: 'TypeScript' },
    { lv: 14, icon: 'devicon-mysql-plain colored', name: 'MySQL' },
    { lv: 12, icon: 'devicon-html5-plain colored', name: 'HTML' },
    { lv: 10, icon: 'devicon-css3-plain colored', name: 'CSS' },
    { lv: 8, icon: 'devicon-python-plain colored', name: 'Python' },
    { lv: 5, icon: 'devicon-swift-plain colored', name: 'Swift' },
    { lv: -10, icon: 'devicon-c-plain colored', name: 'C' }
  ]
  frameworks = [
    { lv: 18, icon: 'devicon-vuejs-plain colored', name: 'Vue.js' },
    { lv: 16, icon: 'devicon-angularjs-plain colored', name: 'AngularJS' },
    { lv: 12, icon: 'devicon-laravel-plain colored', name: 'Laravel' },
    { lv: 10, icon: 'devicon-devicon-plain colored', name: 'Spring Boot(icon待ち)' },
    { lv: 4, icon: 'devicon-react-original colored', name: 'React' }
  ]
  others = [
    { lv: 14, icon: 'devicon-docker-plain colored', name: 'Docker' },
    { lv: 10, icon: 'devicon-gulp-plain colored', name: 'gulp' },
    { lv: 7, icon: 'devicon-travis-plain colored', name: 'Travis CI' },
    { lv: 5, icon: 'devicon-jasmine-plain colored', name: 'Jasmine' },
    { lv: 5, icon: 'devicon-nginx-original colored', name: 'nginx' },
    { lv: 5, icon: 'devicon-webpack-plain colored', name: 'webpack' }
  ]
}
</script>

<style lang="stylus" scoped>
.section
  text-align center
  border-bottom 3px solid darkgray
  font-size 26px
  margin 50px 0 20px
.note
  text-align center
  border-bottom 3px solid darkgray
  font-size 20px
  margin 20px 0
.skill
  margin 10px 50px 40px
  .skill-lv
    font-weight bold
  .skill-icon
    font-size 140px
  .skill-content
    font-size 18px
.explain-definition
  text-align left
  padding-left 10%
@media screen and (max-width: 600px)
  .skill
    margin 10px 10px 20px
    .skill-icon
      width 80px
      height 80px
      border-radius 40px
  .explain-definition
    padding-left 4%
    font-size: 12px
</style>