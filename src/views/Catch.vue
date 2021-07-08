<template>
  <div class="" style="min-height: 100vh;">
    
  <div v-if="bgType === 1" class="d-inline-flex justify-center align-center flex-wrap bg1">
    <v-card class="card mx-auto">
    <v-card-title class="">這次沒有馬上被掙脫？！</v-card-title>
    <v-card-text>
      <div class="text-h5 text-girl">呆：希望會成功！</div>
    </v-card-text>
    <v-card-action>
      <v-col class="text-right">
      <v-btn @click="changeBg1()" color="yellow darken-1" rounded>繼續看下去</v-btn>
      </v-col>
    </v-card-action>
    </v-card>
  </div>

  <div v-else-if="bgType === 2" class="d-inline-flex justify-center align-center flex-wrap bg2"> 
    <v-card class="card mx-auto">
    <v-card-title class="">收服成功！</v-card-title>
    <v-card-text>
      <div class="text-h5 text-girl">呆：太好了...成功收服皮卡丘了！</div>
      <div class="text-h5">
        <div class="text-girl div-block">呆：今天是...</div>
        <div class="text-anvsry div-block">2020/10/20</div>
      </div>
      <div class="text-h5 text-girl">呆：重要的日子！</div>  
    </v-card-text>
    <v-card-action>
      <v-col class="text-right">
      <v-btn @click="changeBg2()" color="yellow darken-1" rounded>召喚出皮卡丘</v-btn>
      </v-col>
    </v-card-action>
    </v-card>
  </div>

  <div v-else-if="bgType === 3" class="d-inline-flex justify-center align-center flex-wrap bg3"> 
    <v-card class="card mx-auto">
    <v-card-title class="">成功召喚出皮卡丘！</v-card-title>
    <v-card-text>
      <div class="text-h5 text-girl">呆：嗨，皮卡...？</div>
      <div class="text-h5 text-girl">呆：咦...我怎麼變成皮卡丘了？！</div>
      <div class="text-h5 text-boy">呆：沒錯！從今天起你就是鄭阿呆的皮卡丘了！</div>
      <div class="text-h5 text-girl">呆：知道了...皮卡皮卡！</div>
    </v-card-text>
    <v-card-action>
      <v-col class="text-right">
      <v-btn @click="changeBg3()" color="yellow darken-1" rounded>在一起</v-btn>
      </v-col>
    </v-card-action>
    </v-card>
  </div>

  <div v-else-if="bgType === 4" class="d-inline-flex justify-center align-center flex-wrap bg4"> 
    <v-card class="card mx-auto">
    <v-card-title class="">出發冒險吧！</v-card-title>
    <v-card-text>
      <div class="text-h5 text-boy">呆：我們的冒險現在才開始呢！</div>
      <div class="text-h5 text-girl">呆：我會一直陪在你身邊的!</div>
      <div class="text-h5 text-girl">呆：皮卡皮卡！</div>
    </v-card-text>
    <v-card-action>
      
      <!--v-btn @click="changeBg3()" color="yellow darken-1" rounded>未完待續</v-btn-->
      
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }" width="100%">
              <v-col class="text-right">
                <v-btn v-bind="attrs" v-on="on" color="yellow darken-1" rounded>未完待續</v-btn>
              </v-col>
          </template>
          <v-card>
            <v-card-title class="orange lighten-2">鄭阿呆與皮卡丘</v-card-title>
            <img src="../assets/couple.jpg" width="100%" height="600">
          </v-card>
        </v-dialog>
      
    </v-card-action>
    </v-card>
  </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      bgType: 1,
      dialog: false,
    }
  },
  mounted() {
    this.text = 'hello mounted'
  },
  methods: {
    changeBg1() {
      this.bgType = 2
    },
    changeBg2() {
      this.bgType = 3
    },
    changeBg3() {
      this.bgType = 4
    }
  }
}
</script>

<style scoped>
.text-tt {
  font-size: 5%;
}
.text-dlg {
  font-size: 3%;
}
.text-girl {
  color: #F06292;
}
.text-boy {
  color: #1E90FF;
}
.text-anvsry {
  font-weight:bold;
  color: #9370DB;
}
.div-block {
  display:inline-block;
}
.bg1, .bg2, .bg3, .bg4 {
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
}
.bg1 {
  background-image: url('../assets/catch1.png');
  background-size: 100vw;
}
.bg2 {
  background-image: url('../assets/catch2.png');
  background-size: 100vw;
}
.bg3 {
  background-image: url('../assets/catch3.png');
  background-size: cover;
}
.bg4 {
  background-image: url('../assets/catch4.png');
  background-size: 100vw;
}
.card {
  width: 40vw;
  /*max-height: 30vh;*/
  position: absolute;
  bottom: 5vh;
}
</style>