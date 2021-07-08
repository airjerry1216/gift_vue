<template>
  <div class="d-flex justify-center align-center flex-wrap bg" style="min-height: 100vh;">
    
    <v-card v-show="page === 1" class="card mx-auto">
      <v-card-title>咦...?<br>皮卡丘好像有禮物要送給你！</v-card-title>
      <v-card-text>

      </v-card-text>
      <v-card-action>
        <v-col class="text-right">
        <v-btn @click="acceptBtn()" color="yellow darken-1" rounded>接受</v-btn>
        </v-col>
      </v-card-action>
    </v-card>

    <v-card v-show="page === 2" class="card mx-auto">
      <v-card-title>在這個時候... 皮卡丘說話了？！</v-card-title>
      <v-card-text>
        <div class="text-h5 text-pika">皮：想要這個禮物的話，得先打贏我，嘿嘿</div>
        <div class="text-h5 text-girl">呆：好！就決定收服你了，皮卡丘！</div>
      </v-card-text>
      
      <v-card-action>
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }" width="100%">
              <v-col class="text-right">
                <v-btn v-bind="attrs" v-on="on" color="yellow darken-1" rounded>呆的想像</v-btn>
                <v-btn @click="fightBtn()" color="yellow darken-1" rounded>開始戰鬥</v-btn>
              </v-col>
          </template>
          <v-card>
            <v-card-title class="orange lighten-2">呆的腦海浮現了...</v-card-title>
            <img src="../assets/imagine.jpg" width="100%" height="600">
          </v-card>
        </v-dialog>
        
      </v-card-action>
    </v-card>

  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      dialog: false,
    }
  },
  mounted() {
    this.text = 'hello mounted'
  },
  methods: {
    acceptBtn() {
      this.page = 2
    },
    fightBtn() {
      this.$router.push({ path: '/fight' })
    }
  }
}
</script>

<style scoped>
.text {
  border: 1px solid black;
  width: 10vw;
}
.text-girl {
  color: #F06292;
}
.text-pika {
  color: #FFD54F;
}
.bg {
  background-image: url('../assets/intro2.png');
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100vw;
}
.card {
  width: 40vw;
  position: absolute;
  bottom: 5vh;
}
</style>