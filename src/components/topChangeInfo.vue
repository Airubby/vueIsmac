<template>
  <ul class="loncom_fr">
      <li v-for="item in topChangeInfo" @click="tabs(item)" :class="{'loncom_active':item.loncom_active}">{{item.select}}</li>
  </ul>
</template>

<script>

import Vue from 'vue' 

export default {
    data(){
      return {
        
      }
    },
    methods:{
      //头部切换
        tabs (theItem) {
            this.$nextTick(function () {
　　　　　　　　this.topChangeInfo.forEach(function (item) {
　　　　　　　　　　Vue.set(item,'loncom_active',false);
　　　　　　　　});
　　　　　　　　Vue.set(theItem,'loncom_active',true);
　　　　　　});
        },
    },
    
    props:["topChangeInfo"],  //子组件在props中创建一个属性，用以接收父组件传过来的值,和父组件v-bind:parentToChild相同
}
</script>

