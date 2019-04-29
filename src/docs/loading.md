# Loading

## 基础用法

通过指令设置全局或局部Loading

:::demo 通过指令设置全局或局部`loading`

```html
<template>
  <div v-loading.fullscreen="fullLoadingFlag" lee-loading-text="loading...">
    <div v-loading="loadingFlag" class="eg-loading-box">
      <p v-for="item in textList">这里是Loading区域这里是Loading区域这里是Loading区域这里是Loading区域这里是Loading区域这里是Loading区域</p>
    </div>
    <div style="margin: 30px 0">
      <lee-button @click="showFullLoading">全局loading</lee-button>
      <lee-button @click="showLoading">局部loading</lee-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        loadingFlag: false,
        fullLoadingFlag: false,
        textList: [1,2,3,4,5,6,7,8,9,0]
      }
    },
    methods: {
      showLoading() {
        this.loadingFlag = true;
        setTimeout(() => {
          this.loadingFlag = false;
        }, 2000)
      },
      showFullLoading() {
        this.fullLoadingFlag = true;
        setTimeout(() => {
          this.fullLoadingFlag = false;
        }, 2000)
      }
    }
  }
</script>
```
:::



## Options

| 参数               | 说明                      | 类型      | 可选值  | 默认值  |
| ---------------- | ----------------------- | ------- | :--: | :--: |
| fullscreen       | v-loading的fullscreen修饰符 | boolean |  -   | true |
| lee-loading-text | loading图标下方文字           | string  |  -   |  ''  |