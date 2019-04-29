<template>
  <div id="comp">
    <div class="main-">
      <div class="main--left">
        <NavBar />
      </div>
      <div class="main--right">
        <router-view class="markdown"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/Layouts/NavBar.vue'
  export default {
    name: 'ComponentPage',
    components: {
      NavBar
    },
  }
</script>

<style lang="scss" scope>
  @import '~@/assets/styles/markdownStyle.css';
  .router-link-active {
    color: #41a259 !important;
    background-color: #eeffde !important;
    border-right: 3px solid #41a259 !important;
  }

  #comp {
    overflow: hidden;
    padding: 0;
    width: 100%;
  }

  

  #comp .main- {
    position: relative;
    padding: 40px 0 0;
    margin-left: 0;
    margin-right: 0;
    height: auto;
    zoom: 1;
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  #comp .main- .main--left {
    float: left;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
  }

  #comp .main- .main--right {
    padding: 0 84px 140px 64px;
    min-height: 500px;
    overflow: hidden;
  }

  #comp .main- .main--right a {
    color: #41a259;
    text-decoration: none;
  }
</style>