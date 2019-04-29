<template>
  <div id="app">
    <CommonHeader/>
    <router-view class="markdown"></router-view>
  </div>

</template>

<script>
  import CommonHeader from '@/components/Layouts/CommonHeader.vue'
  export default {
    name: 'App',
    components: {
      CommonHeader
    },
  }
</script>

<style lang="scss">
//  @import 'highlight.js/styles/color-brewer.css';
  @import 'assets/styles/lee-ui-style.scss';
  @import 'assets/styles/markdownStyle.css';
  body {
    margin: 0;
    padding: 0;
    font-family: Microsoft YaHei;
  }

  .router-link-active {
    color: #41a259 !important;
    background-color: #eeffde !important;
    border-right: 3px solid #41a259 !important;
  }

  #app {
    overflow: hidden;
    padding: 0;
    width: 100%;
  }
</style>