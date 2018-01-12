<template>
  <div id="picture">
    <v-layout row wrap>
      <v-flex>
        <h1>Picture!</h1>
      </v-flex>
    </v-layout>

    <v-flex xs12 sm10 offset-sm1>
      <div v-for="album in albums" :key="album.name">
        <v-subheader class="subheader">
          <v-flex>
            <h2>{{album.name}}</h2>
            <h3 v-if="album.startDate != album.endDate">{{album.startDate}} ~ {{album.endDate}}</h3>
            <h3 v-else>{{album.startDate}}</h3>
          </v-flex>
        </v-subheader>
        <v-container fluid grid-list-lg>
          <v-layout row wrap>
            <v-flex xs12 sm6 md6 lg4 v-for="picture in album.pictures" :key="picture.name">
              <img class="image" :src="require(`../../assets/${picture.name}`)" :alt="picture.caption">
              <div class="picture-caption">{{picture.caption}}</div>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </v-flex>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'Picture'
})
export default class Picture extends Vue {
  albums = [
    {
      name: 'イタリア',
      startDate: '2017/10/08',
      endDate: '2017/10/16',
      pictures: [
        { name: 'sm__italy1.jpg', caption: 'ミケランジェロ広場からの夜景' },
        { name: 'sm__italy2.jpg', caption: 'ヴェネツィアの船version1' },
        { name: 'sm__italy3.jpg', caption: 'ヴェネツィアの船version2' },
        { name: 'sm_italy1.jpg', caption: 'コロッセオのミズゴロウ' },
        { name: 'sm_italy2.jpg', caption: 'ミズゴロウと猫' },
        { name: 'sm_italy3.jpg', caption: 'パンテオン神殿のミズゴロウ' },
        { name: 'sm_italy4.jpg', caption: 'サンタンジェロ城付近のミズゴロウ' },
        { name: 'sm_italy5.jpg', caption: 'サンタンジェロ城のミズゴロウ' },
        { name: 'sm_italy6.jpg', caption: 'なんとか橋のミズゴロウ' },
        { name: 'sm_italy7.jpg', caption: 'ミケランジェロ広場のミズゴロウ' },
        { name: 'sm_italy8.jpg', caption: 'ピサの斜塔のミズゴロウ' },
        { name: 'sm_italy9.jpg', caption: 'ヴェネツィアのミズゴロウ' }
      ]
    },
    {
      name: '京都御苑',
      startDate: '2017/08/08',
      endDate: '2017/08/08',
      pictures: [
        { name: 'sm_goen1.jpg', caption: 'ミズゴロウと🌸' }
      ]
    }
  ]
}
</script>

<style scoped>
.image {
  width: 240px;
  height: 240px;
  object-fit: cover;
}
.subheader {
  margin: 20px auto 0px;
}
.picture-caption {
  margin-bottom: 10px;
}

@media screen and (max-width: 600px) {
  .image {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
}

</style>
