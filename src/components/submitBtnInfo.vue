<template>
  <div class="loncom_public_tabbtn">
      <span v-show="submitBtnInfo">
          <el-button type="info" plain @click="giveUp">放弃修改</el-button>
      </span>
      <span>
          <el-button type="primary" @click="submitInfo">提交</el-button>
      </span>
  </div>
</template>

<script>
export default {
    methods:{
      giveUp:function(){
        this.$emit('giveUp');    //v-on:giveUp
      },
      submitInfo:function(){
        this.$emit('submitInfo');
      },
    },
    props:["submitBtnInfo"],
}
</script>

