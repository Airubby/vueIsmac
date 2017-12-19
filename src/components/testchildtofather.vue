<template>
 <div class="child">
    <h1>子组件</h1>
    <button @click="childToParent">向父组件传值</button>
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
            console.log("cao")
            this.$emit("childToParentMsg", "子组件向父组件传值，这个是子组件传给父组件显示");
            //childToParentMsg和父组件中v-on:childToParentMsg相同
        }
    }
};
</script>
