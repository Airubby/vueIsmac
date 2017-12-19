<template>
  <div class="child">
    <h1>子组件</h1>
    <span>子组件显示信息：{{parentToChild.title}}</span><br>
    <span>子组件显示信息：{{parentToChild.content}}</span>
  </div>
</template>

<script>

export default {
   //name: 'child',
    data(){
      return {}
    },
    props:["parentToChild"]  //子组件在props中创建一个属性，用以接收父组件传过来的值,和父组件v-bind:parentToChild相同
}
</script>

