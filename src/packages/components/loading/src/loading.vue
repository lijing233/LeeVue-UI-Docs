<!--  -->
<template>
  <transition name="el-loading-fade">
    <div 
      v-show="visible"
      class="el-loading"
      :class="{ 'is-fullscreen': fullscreen }"
    >
      <div class="el-loading-solt">
        <div class="el-loading-circle"></div>
        <p class="el-loading-text">{{ loadingText }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'lee-loading',
    data() {
      return {
        fullscreen: false,
        visible: false,
        loadingText: '',
      };
    },
    methods: {
      setText(text) {
        this.loadingText = text;
      }
    }
  }
</script>
<style lang='scss' scoped>
  .el-loading-fade-enter,
  .el-loading-fade-leave-active {
    opacity: 0;
  }
  $maskBgColor: rgba(255, 255, 255, .9);

	@keyframes loading{
    from{transform:rotate(0deg)}
    to{transform:rotate(360deg)}
  }
  @keyframes growing{
    from{transform:translate(-50%,50%) scaleX(0)}
    50%{transform:translate(-50%,50%) scaleX(1)}
    to{transform:translate(-50%,50%) scaleX(0)}
  }
  
  .el-loading{
    position: absolute;
    z-index: 9999;
    background-color: $maskBgColor;
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: opacity 0.3s;

    .el-loading-solt{
        top: 50%;
        width: 100%;
        text-align: center;
        position: absolute;
        transform:translateY(-50%);
    }

    .el-loading-circle{
			position:relative;
			width:50px;
			height:50px;
			border:3px solid #41a259;
			margin:0 auto;
			border-radius:50%;
			animation:loading 1.6s cubic-bezier(0.53, 0.15, 0.39, 0.74) infinite
		}

    .el-loading-circle::after{
			position:absolute;
			content:'';
			bottom:0;
			left:50%;
			transform:translate(-50%,50%) scale(0);
			width:15px;
			height:10px;
			background:#fff;
			animation:growing 1.6s cubic-bezier(0.53, 0.15, 0.39, 0.74) infinite
		}

    .el-loading-text{
      margin: 20px 0;
      font-size: 15px;
      text-align: center;
    }
  }

  .is-fullscreen{
    position: fixed;
  }
</style>