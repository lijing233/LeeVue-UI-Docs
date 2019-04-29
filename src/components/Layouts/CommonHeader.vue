<!-- 公共头 -->
<template>
  <div class="main-header">
    <div class="main-header-logo" @click="jump('home')">
      <img src="@/assets/logo.png" alt="logo">
    </div>
    <div class="main-header-title" @click="jump('home')">Vue-Lee-UI</div>
    <ul class="main-header-nav">
      <li v-for="(item, index) in menu" :key="index" :class="{'active': pageRoutePath.includes(item.path)}" @click="jump(item.path)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'CommonHeader',
    data() {
      return {
        menu: [
          {
            name: '指南',
            path: 'guide',
          },
          {
            name: '组件',
            path: 'component',
          },
        ]
      };
    },

    components: {},

    computed: {
      pageRoutePath: function () {
        return this.$route.path
      }
    },

    mounted() {
    },

    methods: {
      jump(path) {
        this.$router.push({
          name: path
        })
      }
    }
  }
</script>
<style lang='scss' scoped>
  .main-header {
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    -webkit-box-shadow: 0 2px 8px #f0f1f2;
    box-shadow: 0 2px 8px #f0f1f2;
    position: relative;
    z-index: 10;
    height: 65px;
    color: #444;
  }

  .main-header .main-header-logo {
    cursor: pointer;
    height: 100%;
    float: left;
    margin-left: 40px;
    position: absolute;
  }

  .main-header .main-header-logo img {
    height: 30px;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .main-header .main-header-title {
    cursor: pointer;
    height: 65px;
    line-height: 65px;
    font-size: 25px;
    display: inline-block;
    padding-left: 75px;
    font-weight: bold;
  }

  .main-header .main-header-nav {
    margin: 0;
    padding: 0;
    float: right;
    height: 100%;
    background: transparent;
    margin-right: 160px;
  }

  .main-header .main-header-nav li {
    list-style: none;
    color: #314659;
    height: 100%;
    line-height: 65px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    min-width: 72px;
    border-top: 2px solid transparent;
    text-align: center;
    cursor: pointer;
    font-size: 15px;
    float: left;
    border-bottom: 3px solid #fff;
    -webkit-transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    margin-right: 10px;
  }

  .main-header .main-header-nav li.active {
    color: #41a259;
    border-bottom: 3px solid #41a259;
  }
</style>