<template>
  <div id="hobby">
    <v-layout row wrap>
      <v-flex>
        <h1>Hobby</h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-center>
      <article class="hobby-grid">
        <figure class="hobby-item-image">
          <img class="hobby-image" src="../../assets/badminton.png">
          <figcaption>バドミントン</figcaption>
        </figure>
        <aside class="hobby-item-text">
          バドミントンは約11年間ほどやっていました．<br>
          京都府大会では，ダブルスで1回だけベスト16に入りました〜<br>
          でも，最近1年間ほどバドミントンしてないですが．．．．<br>
          社会人になったらゆるふわにバドミントンしたいので誰か誘ってください＞＜
        </aside>
        <figure class="hobby-item-image">
          <img class="hobby-image" src="../../assets/bowling.png">
          <figcaption>ボウリング</figcaption>
        </figure>
        <aside class="hobby-item-text">
          大学生の時に先輩とめっちゃ10ゲーム投げたりしてました．<br>
          最高スコア245です．<br>
          最近やってないので100超えるかどうか...<br>
        </aside>
        <figure class="hobby-item-image">
          <img src="">
          <figcaption>ダーツ</figcaption>
        </figure>
        <aside class="hobby-item-text">
          大学院1年くらいからはじめました〜<br>
          最近やってませんが，フェニRt8，ライブRt6くらいです．<br>
        </aside>
      </article>
    </v-layout>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'Hobby'
})
export default class Hobby extends Vue {
}
</script>

<style scoped>
.hobby-grid {
  width: 100%;
  margin-top: 50px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 10% 1fr 1fr 10%;
}

.hobby-image {
  width: 350px;
  padding: 20px;
}

.hobby-item-image, .hobby-item-text {
  margin-bottom: 20px;
}

.hobby-item-text {
  text-align: left;
  padding: 20px;
}

.hobby-item-image:nth-of-type(1) {
  grid-row: 1;
  grid-column: 2;
}
.hobby-item-image:nth-of-type(2) {
  grid-row: 2;
  grid-column: 3;
}
.hobby-item-image:nth-of-type(3) {
  grid-row: 3;
  grid-column: 2;
}

.hobby-item-text:nth-of-type(1) {
  grid-row: 1;
  grid-column: 3;
}
.hobby-item-text:nth-of-type(2) {
  grid-row: 2;
  grid-column: 2;
}
.hobby-item-text:nth-of-type(3) {
  grid-row: 3;
  grid-column: 3;
}

@media screen and (min-width: 700px) and (max-width: 900px) {
  .hobby-image {
    width: 250px;
  }
}

@media screen and (max-width: 700px) {
  .hobby-grid {
    width: 100%;
    margin-top: 50px;
    display: block;
  }

  .hobby-item-text {
    text-align: left;
    padding: 10px;
  }

  .hobby-image {
    width: 230px;
    padding: 10px;
  }
}

</style>
