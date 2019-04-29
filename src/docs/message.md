# Message 消息提示

## 基础用法

:::demo `message`通过设置消息的类型和提示语，在页面顶部展示提示语，三秒后消失

```html
<template>
  <div>
    <lee-button @click="showInfo">消息</lee-button>
    <lee-button @click="showSuccess">成功</lee-button>
    <lee-button @click="showWarn">警告</lee-button>
    <lee-button @click="showError">失败</lee-button>
  </div>
</template>
<script>
  export default {
    methods: {
      showInfo() {
        this.$message('这是一条消息提示');
      },
      showSuccess() {
        this.$message({
          type: 'success',
          message: '这是一条消息提示'
        })
      },
      showWarn() {
        this.$message({
          type: 'warn',
          message: '这是一条消息提示'
        })
      },
      showError() {
        this.$message({
          type: 'error',
          message: '这是一条消息提示'
        })
      }
    }
  }
</script>
```
:::



## Options

| 参数      | 说明       | 类型     |           可选值           | 默认值  |
| ------- | -------- | ------ | :---------------------: | :--: |
| type    | 消息提示的类型  | string | info/warn/success/error | info |
| message | 需要展示的提示语 | string |            -            |  ''  |



## 单独引入

单独引入`message`

```
import { Message } from 'lee-ui';
```

通过调用`Message(options)`或`Message.success('message')`来展示消息