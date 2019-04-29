<!-- 返回顶部 -->
<template>
  <div class="back-top" @click="animateBackTop">
    返回顶部
  </div>
</template>

<script>
export default {
  /* TODO: 添加某位置显示隐藏，渐变等效果 & 某元素中backTop */
  name: 'backTop',
  data () {
    return {
      timer: null
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    handleBackTop() {
      window.scrollTo(0,0);
    },
    stoBackTop() {
      if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
        window.scrollBy(0,-50);
        this.timer = setTimeout(this.stoBackTop, 10);
      } else {
        clearTimeout(this.timer);
      }
    },
    animateBackTop() {
      /* 当前只对window做滚回操作 */
      const top = document.documentElement.scrollTop;
      const startTime = +new Date();
      const duration = 200; //ms

      function run() {
        const time = +new Date() - startTime;
        // console.log(top * (1 - time / duration));
        if (time >= duration) {
          window.scrollTo(0, 0);
          cancelAnimationFrame(run.timer);
        } else {
          window.scrollTo(0, top * (1 - time / duration));
          run.timer = requestAnimationFrame(run);
        }
      } 
        requestAnimationFrame(run);
      }
    }
}

</script>
<style lang='scss' scoped>
.back-top{
  position: fixed;
  width: 60px;
  height: 60px;
  line-height: 60px;
  font-size: 13px;
  border-radius: 50%;
  background: pink;
  right: 50px;
  bottom: 100px;
  cursor: pointer;
}
</style>