<template>
 <div class="child">
    <h1>子组件</h1>
    <button v-on:click="childToParent">向父组件传值</button>
  </div>
</template>

<script>

export default {
      name: 'child',
        data(){
            return {}
        },
        methods: {
        childToParent(){
            this.$emit("childToParentMsg", "子组件向父组件传值");
        }
    }
};
</script>
