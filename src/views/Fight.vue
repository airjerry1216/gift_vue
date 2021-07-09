<template>
  <div class="" style="min-height: 100vh;">
    
    <div v-if="bgType === 1" class="d-flex justify-center align-center flex-wrap bg1">
       <img @click="catchBall2()" class="ball" src="../assets/ball.jpg">
      <v-card class="card1 mx-auto">
      <v-card-title class="">戰鬥開始！</v-card-title>
      <v-card-text>
        <div class="text-h6 text-pika">皮：PikaPika！</div>
        <div class="text-h6 text-pika">皮：PikaPikaChu~~~</div>
        <div class="text-h6 text-girl">呆：我可是清大皮卡丘..竟然比我還會放電！</div>
        <div class="text-h6 text-girl">{{word0}}</div>
      </v-card-text>
      <v-card-actions>
        <v-col class="text-right">
        <v-btn @click="changeBg1()" color="yellow darken-1" rounded>接招</v-btn>
        </v-col>
      </v-card-actions>
      </v-card>
    </div>

    <div v-else-if="bgType === 2" class="bg2"> 
      <div class="card2 d-flex justify-center">
        <v-card width="45vw" class="mx-5">
          <v-card-title class="">{{wordtt}}</v-card-title>
          <v-card-text>
            <div class="text-h6 text-girl">{{word1}}</div>
            <div class="text-h6 text-girl">{{word2}}</div>
            <!--div class="text-h6 text-girl">呆：目前的收服成功率大概是 {{ p1 }}% ...</div-->
            <!--div class="text-h6">{{p2}}</div-->
          </v-card-text>
        </v-card>

        <v-card width="45%" class="mx-5">
          <v-card-action>
            <!--v-btn @click="btn1()" class="btn text-h5">戰鬥</v-btn-->
            <v-dialog v-model="dialog1" width="500" persistent>
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="btn text-h5" v-bind="attrs" v-on="on">戰鬥</v-btn>
              </template>
              <v-card>
                <v-card-title class="orange lighten-2">選擇招式</v-card-title>
                <v-card-actions>

                  <v-dialog v-model="dialog11" width="500" persistent>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn class="text-h6" :disabled="dis1" v-bind="attrs" v-on="on">牽手 {{eb1}}/1</v-btn>
                    </template>
                    <v-card>
                      <v-card-title class="orange lighten-2">跟呆第一次牽手是在哪裡？</v-card-title>
                      <v-text-field v-model="ans1" label="請輸入地點" class="v-text-field" hint="好像刪去些雜念，可以喚起更多回憶" persistent-hint></v-text-field>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="yellow darken-1" rounded @click="btn1()">送出</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>

                  <v-dialog v-model="dialog12" width="500" persistent>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn class="text-h6" :disabled="dis2" v-bind="attrs" v-on="on">看電影  {{eb2}}/1</v-btn>
                    </template>
                    <v-card>
                      <v-card-title class="orange lighten-2">跟呆一起看過哪些電影或影集？</v-card-title>
                      <v-select v-model="mv" :items="movies" label="請選擇" multiple chips></v-select>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="yellow darken-1" rounded @click="btn2()">送出</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>

                  <v-dialog v-model="dialog13" width="500" persistent>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn class="text-h6" :disabled="dis3" v-bind="attrs" v-on="on">密語  {{eb3}}/1</v-btn>
                    </template>
                    <v-card>
                      <v-card-title class="orange lighten-2">要命令呆做呆命令的事要加什麼關鍵字？</v-card-title>
                      <v-text-field v-model="ans3" label="請輸入名稱" hint="三個字，諧音梗，工程師必學" persistent-hint></v-text-field>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="yellow darken-1" rounded @click="btn3()">送出</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>

                  <v-dialog v-model="dialog14" width="500" persistent>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn class="text-h6" :disabled="dis4" v-bind="attrs" v-on="on">稱呼  {{eb4}}/1</v-btn>
                    </template>
                    <v-card>
                      <v-card-title class="orange lighten-2">呆跟呆都怎麼稱呼彼此？</v-card-title>
                      <v-text-field v-model="ans4" label="請輸入名稱" hint="四個字" persistent-hint></v-text-field>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="yellow darken-1" rounded @click="btn4()">送出</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>

                  <v-spacer></v-spacer>
                  <v-btn color="yellow darken-1" rounded @click="dialog1 = false">關閉</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-dialog v-model="dialog2" width="200" persistent>
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="btn text-h5" v-bind="attrs" v-on="on">背包</v-btn>
              </template>
              <v-card>
                <v-card-title class="orange lighten-2">我的背包</v-card-title>
                
                

                <div class="d-flex">
                  <div>
                    <v-icon large color="red">mdi-pokeball</v-icon>
                    <span>{{ballCnt}}</span>
                  </div>    
                  <div class="ml-auto">
                    <v-btn @click="throwBall()" depressed :disabled="disBall">精靈球</v-btn>
                  </div>
                </div>
                
                <div class="d-flex">
                  <div>
                    <v-icon large color="#0000FF">mdi-pokeball</v-icon>
                    <span>{{ball2Cnt}}</span>
                  </div>
                  <div class="ml-auto">
                    <v-btn @click="throwBall2()" depressed :disabled="disBall2">超級球</v-btn>
                  </div>
                </div>
                <div class="d-flex">
                  <div>
                    <v-icon large color="#ffd700">mdi-pokeball</v-icon>
                    <span>0</span>
                  </div>
                  <div class="ml-auto">
                    <v-btn @click="throwBall()" depressed disabled>高級球</v-btn><br>
                  </div>
                </div>

                <div class="d-flex">
                  <div>
                    <v-icon large color="purple">mdi-pokeball</v-icon>
                    <span>0</span>
                  </div>
                  <div class="ml-auto">
                    <v-btn @click="throwBall()" depressed disabled>大師球</v-btn><br>
                  </div>
                </div>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="yellow darken-1" rounded @click="dialog2 = false">關閉</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-dialog v-model="dialog3" width="500" persistent>
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="btn text-h5" v-bind="attrs" v-on="on">寶可夢</v-btn>
              </template>
              <v-card>
                <v-card-title class="orange lighten-2">呆的寶可夢</v-card-title>
                <v-card-text class="text-h5">奇奇阿亮猴王...都還只是小孩子</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="yellow darken-1" rounded @click="dialog3 = false">關閉</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-dialog v-model="dialog4" width="500" persistent>
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="btn text-h5" v-bind="attrs" v-on="on">逃跑</v-btn>
              </template>
              <v-card>
                <v-card-title class="orange lighten-2">逃跑計劃</v-card-title>
                <v-card-text class="text-h5">想跑去哪？</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="yellow darken-1" rounded disabled>逃跑</v-btn>
                  <v-btn color="yellow darken-1" rounded @click="dialog4 = false">不逃跑</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

          </v-card-action>
        </v-card>
      </div>

      <div class="card3 card-shape" style="background-color:#FFFACD;">
        <div class="text-h5 mx-7 my-3">皮卡丘
          <v-icon color="pink">mdi-gender-female</v-icon>
          <div class="div-block" style="position: absolute; right: 10%">Lv99</div>
        </div>
        <v-progress-linear
          :value="value1"
          :color="getColor(value1)"
          height="20"
          rounded
        ></v-progress-linear>
      </div>
      <div class="card4 card-shape" style="background-color:#FFFACD;">
        <div class="text-h5 mx-7 my-3">黃阿呆
          <v-icon color="pink">mdi-gender-female</v-icon>
          <div class="div-block" style="position: absolute; right: 10%">Lv21</div>
        </div>
        <v-progress-linear
          :value="value2"
          color="green"
          height="20"
          rounded
        ></v-progress-linear>
        <div class="text-h6" style="position: absolute; right: 10%">8/11</div>
      </div>

      <v-dialog v-model="dialog21" width="500" persistent>
        <v-card>
          <v-card-title class="orange lighten-2">投出精靈球！</v-card-title>
          <v-card-text class="text-h5">糟糕！皮卡丘掙脫了！</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="yellow darken-1" rounded @click="dialog21 = false; if(ballCnt > 0) {disBall = false}">關閉</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialog22" width="500" persistent>
        <v-card>
          <v-card-title class="orange lighten-2">投出超級球！</v-card-title>
          <v-card-text class="text-h5">糟糕！浪費超級球了！</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="yellow darken-1" rounded @click="dialog22 = false; if(ball2Cnt > 0) {disBall2 = false}">關閉</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <div v-show="fallBall === 1" class="pokeball pokeBallPos">
        <div class="pokeball__button"></div>
      </div>
      <div v-show="fallBall2 === 1" class="pokeball2 pokeBallPos">
        <div class="pokeball__button"></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 100,
      value2: 100,
      bgType: 1,
      fightCnt: 0,
      ballCnt: 520,
      ball2Cnt: 0,
      ballShakeTime: 0,
      fallBall: 0,
      fallBall2: 0,
      factor1: 1,
      factor2: 1,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog11: false,
      dialog12: false,
      dialog13: false,
      dialog14: false,
      dialog21: false,
      dialog22: false,
      ans1: '',
      ans2: '',
      ans3: '',
      ans4: '',
      dis1: false,
      dis2: false,
      dis3: false,
      dis4: false,
      disBall: false,
      disBall2: true,
      eb1: 1,
      eb2: 1,
      eb3: 1,
      eb4: 1,
      wordtt: '皮卡丘使出了十萬伏特！',
      word0: '',
      word1: '呆：等級跟血量好像暗示著什麼...是巧合嗎？！',
      word2: '呆：我得專注才行！',
      p1: 1,
      p2: 100,
      mv: [],
      movies: ['鬼滅之刃', '花木蘭', '孤味', '天能', '哥吉拉大戰金剛', '當男人戀愛時', '誰殺了莎拉', '亞森羅蘋']
    }
  },
  mounted() {

  },
  methods: {
    catchBall2() {
      if (this.ball2Cnt < 2) {
        this.disBall2 = false
        this.ball2Cnt += 1
        this.word0 = '呆：竟然發現'+ this.ball2Cnt +'顆提升捕捉率的超級球！'
      }
    },
    changeBg1() {
      this.bgType = 2
      this.minus2(30)
    },
    getColor: function(value) {
      if (value > 50) {
        this.ballShakeTime = 500
        return 'green'
      }
      else if (value > 25) {
        this.ballShakeTime = 1300
        return 'orange'
      }
      else if (value > 10) {
        this.ballShakeTime = 2000
        return 'red'
      }
      else {
        this.ballShakeTime = 2600
        return 'red darken-3'
      }
      return ''
    },
    minus1(value) {
      if (this.value1 - value >= 0) {
        this.value1 -= value
      }
    },
    minus2(value) {
      setTimeout(() => this.value2 -= value, 1000)
    },
    attack() {
      this.fightCnt += 1
      if (this.fightCnt == 1) {
        this.minus1(5)
        this.wordtt = '似乎沒有效果！'
        this.word2 = '呆：沒關係，我還有其他招式！'
      }
      else if (this.fightCnt == 2) {
        this.minus1(45)
        this.factor1 *= 1.32
        this.wordtt = '擊中了要害！'
        this.word2 = '呆：太好了！我看見了希望！'
      }
      else if (this.fightCnt == 3) {
        this.minus1(25)
        this.factor1 *= 1.1
        this.wordtt = '效果拔群！'
        this.word2 = '呆：就差一點點了！'
      }
      else if (this.fightCnt == 4) {
        this.minus1(20)
        this.factor1 *= 1.2
        this.wordtt = '效果拔群！'
        this.word2 = '呆：就是現在了！丟精靈球的好時機！'
      }
      //this.p1 = 100 - Math.ceil(this.value1*Math.pow(this.factor1, this.fightCnt)+this.fightCnt*4) + 1
      //this.p2 = Math.ceil(this.value1*Math.pow(this.factor1, this.fightCnt)+this.fightCnt*4)
    },
    btn1() {
      this.dialog11 = false
      this.dialog1 = false
      if (this.ans1 == '象山') {
        setTimeout(() => this.attack(), 1200)
        this.dis1 = true
        this.eb1 = 0
      }
      else {
        this.wordtt = '什麼也沒有發生'
        this.word2 = '呆：我的招式生疏了嗎...'
      }
    },
    btn2() {
      this.dialog12 = false
      this.dialog1 = false
      if (this.mv.length == 2 && ((this.mv[0] == '天能' && this.mv[1] == '亞森羅蘋') || (this.mv[1] == '天能' && this.mv[0] == '亞森羅蘋'))) {
        setTimeout(() => this.attack(), 1200)
        this.dis2 = true
        this.eb2 = 0
      }
      else {
        this.wordtt = '什麼也沒有發生'
        this.word2 = '呆：我的招式生疏了嗎...'
      }
    },
    btn3() {
      this.dialog13 = false
      this.dialog1 = false
      if (this.ans3 == '命令列') {
        setTimeout(() => this.attack(), 1200)
        this.dis3 = true
        this.eb3 = 0
      }
      else {
        this.wordtt = '什麼也沒有發生'
        this.word2 = '呆：我的招式生疏了嗎...'
      }
    },
    btn4() {
      this.dialog14 = false
      this.dialog1 = false
      if (this.ans4 == '可愛小呆') {
        setTimeout(() => this.attack(), 1200)
        this.dis4 = true
        this.eb4 = 0
      }
      else {
        this.wordtt = '什麼也沒有發生'
        this.word2 = '呆：我的招式生疏了嗎...'
      }
    },
    throwBall() {
      this.ballCnt -= 1
      this.fallBall = 1
      this.disBall = true
      var p = Math.floor(Math.random()*(100-1+1)+1)
      setTimeout(() => {
        this.fallBall = 0
        if (p >= Math.ceil(this.value1*Math.pow(this.factor1, this.fightCnt)+this.fightCnt*4)) {
          this.$router.push({ path: '/catch' })
        }
        this.dialog21 = true
      }, this.ballShakeTime)
    },
    throwBall2() {
      this.ball2Cnt -= 1
      this.fallBall2 = 1
      this.disBall2 = true
      var p = Math.floor(Math.random()*(100-1+1)+1)     
      setTimeout(() => {
        this.fallBall2 = 0
        if (p >= Math.ceil(this.value1*Math.pow(this.factor1, this.fightCnt)+this.fightCnt*4)-15) {
          this.$router.push({ path: '/catch' })
        }
        this.dialog22 = true
      }, this.ballShakeTime)
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
.text-pika {
  color: #FFD54F;
}
.text-girl {
  color: #F06292;
}
.text-boy {
  color: #1E90FF;
}
.text-anvsry {
  font-weight:bold;
  color: hsl(290, 64%, 52%);
}
.div-block {
  display:inline-block;
}
.bg1, .bg2 {
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
}
.bg1 {
  background-image: url('../assets/fight1.jpg');
  background-size: cover;
}
.bg2 {
  background-image: url('../assets/fight_bg.jpg');
  background-size: cover;
}
.card1 {
  width: 40vw;
  /*max-height: 25vh;*/
  position: absolute;
  bottom: 5vh;
}
.card2 {
  max-height: 20vh;
  position: absolute;
  bottom: 5vh;
  width: 100vw;
}
.card3 {
  position: absolute;
  top: 5vh;
  left: 5vw;
}
.card4 {
  position: absolute;
  right: 5vw;
  bottom: 27vh;
}
.card-shape {
  width: 20vw;
  height: 15vh;
  background-color: #fff;
  /*border: 3px solid black;*/
  border-top-left-radius: 10% 50%;
  border-top-right-radius: 10% 50%;
  border-bottom-left-radius: 10% 50%;
  border-bottom-right-radius: 10% 50%;
}
.btn {
  width: 50%;
  min-height: 50%;
}
.ball {
  position: absolute;
  bottom: 5vh;
  left: 5vw;
  width: 5vh;
  height: 5vh;
  cursor: pointer;
}
.pokeBallPos {
  left: 68%;
}
.v-text-field{
  width: 80%;
}

*, *:before, *:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

/* Poké Styles */
.pokeball {
  position: relative;
  top: 30%;
  width: 200px;
  height: 200px;
  background: #fff;
  border: 10px solid #000;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset -10px 10px 0 10px #ccc;
  animation: fall .25s ease-in-out,
             shake 1.25s cubic-bezier(.36,.07,.19,.97) 3;
}
.pokeball::before,
.pokeball::after {
  content:"";
  position: absolute;
}
.pokeball::before {
  background: red;
  width: 100%;
  height: 50%;
}
.pokeball::after {
  top: calc(50% - 10px);
  width: 100%;
  height: 20px;
  background: #000;
}
.pokeball2 {
  position: relative;
  top: 30%;
  width: 200px;
  height: 200px;
  background: #fff;
  border: 10px solid #000;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset -10px 10px 0 10px #ccc;
  animation: fall .25s ease-in-out,
             shake 1.25s cubic-bezier(.36,.07,.19,.97) 3;
}
.pokeball2::before,
.pokeball2::after {
  content:"";
  position: absolute;
}
.pokeball2::before {
  background: blue;
  width: 100%;
  height: 50%;
}
.pokeball2::after {
  top: calc(50% - 10px);
  width: 100%;
  height: 20px;
  background: #000;
}
.pokeball__button {
  position: absolute;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  width: 60px;
  height: 60px;
  background: #7f8c8d;
  border: 10px solid #fff;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 0 10px black;
  animation: blink .5s alternate 7;
}
/* Animation */
@keyframes blink {
  from { background: #eee;}
  to { background: #e74c3c; }
}
@keyframes shake {
  0 { transform: translate(0, 0) rotate(0); }
  20% { transform: translate(-10px, 0) rotate(-20deg); }
  30% { transform: translate(10px, 0) rotate(20deg); }
  50% { transform: translate(-10px, 0) rotate(-10deg); }
  60% { transform: translate(10px, 0) rotate(10deg); }
  100% { transform: translate(0, 0) rotate(0); }
}
@keyframes fall {
  0% { top: -200px }
  60% { top: 0 }
  80% { top: 15% }
  100% { top: 30% }
}
</style>