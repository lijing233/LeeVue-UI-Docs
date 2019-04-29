<!--  -->
<template>
  <ul class="navbar">
    <li v-for="item in menuData" :key="item.name">
      <router-link :to="`/component/${item.name}`">{{item.title}}</router-link>
    </li>
  </ul>
</template>

<script>
  import Menu from '@/router/menu.js'
  export default {
    name: '',
    data() {
      return {};
    },

    components: {},

    computed: {
      menuData: function() {
        return Menu
      }
    },

    mounted() {},

    methods: {}
  }
</script>
<style lang='scss' scoped>
  .navbar {
      width: 250px;
      margin: 0;
      padding: 0;

    li {
      margin: 0;
      list-style: none;
      padding: 0;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
    }

    li a {
      font-size: 16px;
      color: #333;
      line-height: 40px;
      height: 40px;
      margin: 0;
      padding: 4px 25px;
      text-decoration: none;
      display: block;
      position: relative;
      -webkit-transition: 0.15s ease-out;
      transition: 0.15s ease-out;
      font-weight: 700;
      border-right: 1px solid #e8e8e8;
    }

    li a:hover {
      color: #41a259;
    }

    li.main--link-group {
      height: auto;
    }

    li.main--link-group a:hover {
      color: #333;
      cursor: default;
    }

    li.main--link-group ul a {
      display: block;
      height: 40px;
      color: #444;
      line-height: 40px;
      font-size: 14px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: 400;
    }

    li.main--link-group ul a:hover {
      color: #41a259;
      cursor: pointer;
    }
  }
</style>