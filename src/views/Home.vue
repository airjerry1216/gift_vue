<template>
  <div class="d-flex justify-center align-center flex-wrap bg" style="min-height: 100vh;">
    <div @click="push()" class="text text-h5 neon-effect">{{startText}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startText: '點按開始進行冒險'
    }
  },
  methods: {
    test() {
      alert('alert hello')
    },
    push() {
      this.$router.push({ path: '/intro' })
    }
  }
}
</script>

<style scoped>
.bg {
  background-image: url('../assets/pika_cover2.jpg');
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100vw;
}
.text {
  position: absolute;
  bottom: 10vh;
}
.neon-effect{
  color:#f0efef;
  text-shadow:
    0 0 5px rgb(202, 214, 25),
    0 0 10px rgb(202, 214, 25),
    0 0 20px rgb(202, 214, 25),
    0 0 40px rgb(202, 214, 25);
  animation:neon-shine 1.2s linear infinite;
}
@keyframes neon-shine{
  0%{opacity:1;}
  90%{opacity:0;}
  100%{
  color:#f0efef;}
}
</style>