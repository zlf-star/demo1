<template>
<div class="tarBatItem" @click="itemClick">
  <div v-if="!isActive"><slot name="tarBarItem-img"></slot></div>
  <div v-else><slot name="tarBarItem-img-active"></slot></div>
  <div :style="activeStyle"><slot name="tarBarItem-text"></slot></div>
  
</div>
</template>

<script>
  export default {
    name:'TabBarItem',
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    data() {
      return{
        // isActive:true
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    },
    computed:{
      isActive() {
        //indexOf方法，没有找到的话是-1
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive? {color:this.activeColor} : {}
      }
    }
  }
</script>

<style scoped>
.tarBatItem{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tarBatItem img{
  height: 24px;
  width: 24px;
  vertical-align: middle;
  margin-top: 3px;
}
.active{
  color: red;
}
</style>
