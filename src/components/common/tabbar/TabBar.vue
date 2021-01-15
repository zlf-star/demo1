<template>
<div id="tabBar">
  <slot></slot>
</div>
</template>

<script>
  export default {
    name:'TabBar',
  }
</script>

<style scoped>
#tabBar{
  display: flex;
  background-color: #f0f0f0;
  /* height: 49px; */
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -3px 1px rgba(100, 100, 100, .2);

}
</style>
