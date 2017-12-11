<template>
  <div class="child">
    <h1>子组件</h1>
    <span>子组件显示信息：{{parentToChild}}</span><br>
  </div>
</template>

<script>

export default {
   name: 'child',
    data(){
      return {}
    },
    props:["parentToChild"]
}
</script>

