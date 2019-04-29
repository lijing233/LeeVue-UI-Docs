<template>
  <div class="lee-button cant-seclet" @click="handleClick">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'LeeButton',
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  }
</script>
<style>
  .lee-button {
    border: 1px solid #41a259;
    background-color: #41a259;
    display: inline-block;
    border-radius: 2px;
    height: 14px;
    line-height: 14px;
    color: #fff;
    padding: 10px 19px;
    cursor: pointer;
    white-space: nowrap;
    margin: 0 10px;
  }
</style>