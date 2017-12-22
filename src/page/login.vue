<template>
    <div class="loncom_login">
        <div class="loncom_login_con loncom_public_shadow">
            <div class="loncom_logo_img"></div>
            <div class="loncom_logo_text">机房监控管理系统</div>
            <div class="loncom_login_input">
                <p class="loncom_user"><input type="text" placeholder="请输入用户名称"></p>
                <p class="loncom_pass"><input type="text" placeholder="请输入登录密码"></p>
                <button @click="loginIn">登录</button>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
  methods:{
      loginIn:function(){
          if(true){  //登录成功
            this.$message({
                message: '恭喜你，登录成功！',
                type: 'success'
            });
            this.$router.push({path:'/'});
          }else{
              this.$message({
                message: '错误',
                type: 'warning'
            });
          }
      }
  }
}
</script>