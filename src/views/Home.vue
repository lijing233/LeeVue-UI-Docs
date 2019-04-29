<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Vue-Lee-UI"/>
    <button @click="toggleMsg">show message</button>
    <BackTop></BackTop>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import BackTop from '@/packages/components/backTop/src/backTop.vue'

export default {
  name: 'home',
  data() {
    return{
      flag: false
    }
  },
  components: {
    HelloWorld,
    BackTop,
  },
  mounted() {
    console.log(this.$route);
  },
  methods: {
    toggleMsg() {
      this.$message({
        type: 'success',
        message: '成功！！'
      })
      // $message({
      //   type: 'success',
      //   message: '成功！！'
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
  .home{
    text-align: center;
    padding-top: 100px;
    min-height: 1500px;
  }
</style>

