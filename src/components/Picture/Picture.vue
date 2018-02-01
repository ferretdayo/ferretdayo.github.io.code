<template>
  <div id="picture">
    <v-layout row wrap>
      <v-flex>
        <h1>Picture!</h1>
      </v-flex>
    </v-layout>

    <v-layout row wrap justify-center>
      <v-flex xs12 10 offset-1>
        <!-- アルバム開始 -->
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
              <!-- 写真の表示 -->
              <v-flex xs12 6 md6 lg4 v-for="picture in album.pictures" :key="picture.name">
                <img class="image" :src="require(`../../assets/sm${picture.name}`)" :alt="picture.caption" @click="tapPicture(picture)">
                <div class="picture-caption">{{picture.caption}}</div>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
        <!-- 本当はcomputedにしたかった．．． -->
        <!-- 縦画像の場合 -->
        <div v-if="selectedPicture">
          <v-dialog v-if="selectedPicture.verticle" :value="isOpenDialog" :width="`${(getWindowHeight/100)*80*2.0/3.0}px`" @input="closeDialog">
            <v-card v-if="selectedPicture.name">
              <v-card-media class="card-media" :src="require(`../../assets/lg${selectedPicture.name}`)" :alt="selectedPicture.caption" contain :height="`${getWindowHeight/100*80}px`"></v-card-media>
              <v-card-title>
                <v-flex>
                  <h3>{{selectedPicture.caption}}</h3>
                </v-flex>
              </v-card-title>
            </v-card>
          </v-dialog>
          <!-- 横画像の場合 -->
          <v-dialog v-else :value="isOpenDialog" :width="`${(getWindowWidth/100)*70}px`" @input="closeDialog">
            <v-card v-if="selectedPicture.name">
              <v-card-media class="card-media" :src="require(`../../assets/lg${selectedPicture.name}`)" :alt="selectedPicture.caption" contain :height="`${((getWindowWidth/100)*70)*2.0/3.0}px`"></v-card-media>
              <v-card-title>
                <v-flex>
                  <h3>{{selectedPicture.caption}}</h3>
                </v-flex>
              </v-card-title>
            </v-card>
          </v-dialog>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapGetters, mapActions } from 'vuex'

@Component({
  name: 'Picture',
  computed: {
    ...mapGetters(['getWindowHeight', 'getWindowWidth']),
    ...mapGetters('picture', {
      selectedPicture: 'getSelectedPicture',
      isOpenDialog: 'getIsOpenDialog'
    })
  },
  methods: {
    ...mapActions('picture', [
      'tapPicture',
      'closeDialog'
    ])
  }
})
export default class Picture extends Vue {
  // dialog: boolean = false
  // modalPicture: any = {}
  albums = [
    {
      name: '和歌山',
      startDate: '2016/09/01',
      endDate: '2016/09/02',
      pictures: [
        { name: '__waka1.jpg', caption: '白浜海岸のカニ' },
        { name: '__waka2.jpg', caption: '円月島' },
        { name: '__waka3.jpg', caption: 'アドベンチャーワールドの🐶' }
      ]
    },
    {
      name: '江ノ島',
      startDate: '2017/05/05',
      endDate: '2017/05/05',
      pictures: [
        { name: '_eno1.jpg', caption: 'ミズゴロウと岩' },
        { name: '_eno2.jpg', caption: '波に飲まれた後のミズゴロウ' },
        { name: '__eno1.jpg', caption: 'しらす丼' }
      ]
    },
    {
      name: '京都御苑',
      startDate: '2017/08/08',
      endDate: '2017/08/08',
      pictures: [
        { name: '_goen1.jpg', caption: 'ミズゴロウと🌸' }
      ]
    },
    {
      name: '城崎温泉',
      startDate: '2017/08/25',
      endDate: '2017/08/25',
      pictures: [
        { name: '_kino1.jpg', caption: 'ミズゴロウに立ちはだかるパンダ' },
        { name: '__kino1.jpg', caption: '温泉' },
        { name: '__kino2.jpg', caption: 'そばです😊' }
      ]
    },
    {
      name: 'イタリア',
      startDate: '2017/10/04',
      endDate: '2017/10/11',
      pictures: [
        { name: '__italy1.jpg', caption: 'ミケランジェロ広場からの夜景' },
        { name: '__italy2.jpg', caption: 'ヴェネツィアの船version1' },
        { name: '__italy3.jpg', caption: 'ヴェネツィアの船version2' },
        { name: '_italy1.jpg', caption: 'コロッセオのミズゴロウ' },
        { name: '_italy2.jpg', caption: 'ミズゴロウと猫' },
        { name: '_italy3.jpg', caption: 'パンテオン神殿のミズゴロウ', verticle: true },
        { name: '_italy4.jpg', caption: 'サンタンジェロ城付近のミズゴロウ' },
        { name: '_italy5.jpg', caption: 'サンタンジェロ城のミズゴロウ' },
        { name: '_italy6.jpg', caption: 'なんとか橋のミズゴロウ' },
        { name: '_italy7.jpg', caption: 'ミケランジェロ広場のミズゴロウ' },
        { name: '_italy8.jpg', caption: 'ピサの斜塔のミズゴロウ', verticle: true },
        { name: '_italy9.jpg', caption: 'ヴェネツィアのミズゴロウ' }
      ]
    }
  ]

  // tapPicture (picture: any) {
  //   this.modalPicture = picture
  //   this.dialog = true
  // }
}
</script>

<style scoped>
.image {
  width: 240px;
  height: 240px;
  object-fit: cover;
}
.subheader {
  margin: 50px auto 0px;
}
.picture-caption {
  margin-bottom: 10px;
}
.card-media {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 600px) {
  .image {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
}

</style>
