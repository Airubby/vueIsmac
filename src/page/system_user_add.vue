<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <h2>系统管理 &gt; {{userTop}}</h2>
        </div>
        <div class="loncom_scroll_con">
            <!--新增用户-->
            <div class="loncom_public_table loncom_system_userpage">
                <div class="loncom_system_userpage_left">
                    <div class="loncom_public_shadow loncom_system_userpage_scroll loncom_public_tabbox0">
                        <div class="loncom_system_userpage_leftcon loncom_public_tabboxcon0">
                            <div class="loncom_system_userpagebox">
                                <div class="loncom_system_userpagetitle">
                                    <h2>账号设置</h2>
                                </div>
                                <div class="loncom_system_userpagecon">
                                    <div class="loncom_list_box loncom_system_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>角色
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-radio-group v-model="user_info.role" size="small">
                                                <el-radio label="1" border>系统账户</el-radio>
                                                <el-radio label="2" border>非系统账户</el-radio>
                                            </el-radio-group>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box loncom_system_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>用户名
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input size="small" placeholder="请输入用户名" v-model="user_info.username"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box loncom_system_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>密码
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input size="small" placeholder="请输入密码" v-model="user_info.password"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box loncom_system_list_box">
                                        <div class="loncom_list_box_left">
                                            姓名
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input size="small" placeholder="请输入姓名" v-model="user_info.name"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box loncom_system_list_box">
                                        <div class="loncom_list_box_left">
                                            手机
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input size="small" placeholder="请输入电话" v-model="user_info.phone"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box loncom_system_list_box">
                                        <div class="loncom_list_box_left">
                                            邮箱
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input size="small" placeholder="请输入邮箱" v-model="user_info.email"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box loncom_system_list_box">
                                        <div class="loncom_list_box_left">
                                            备注
                                        </div>
                                        <div class="loncom_list_box_right loncom_list_box_rightremark">
                                            <textarea v-model="user_info.remark"></textarea>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="loncom_system_userpagebox">
                                <div class="loncom_system_userpagetitle">
                                    <h2>状态</h2>
                                </div>
                                <div class="loncom_system_userpagecon">
                                    <div class="loncom_list_box loncom_system_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>有效时段
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <div class="loncom_mr10">
                                                <div class="loncom_dis_inlineblock">
                                                    <span class="loncom_public_radio loncom_fl">
                                                        <input type="radio" class="loncom_public_radio_input" name="systemtime" id="systemtime1" checked>
                                                        <label for="systemtime1" @click="show_time=false"></label>
                                                    </span>
                                                    <div class="loncom_dis_inline">永久</div>
                                                </div>
                                                <div class="loncom_dis_inlineblock">
                                                    <span class="loncom_public_radio loncom_fl">
                                                        <input type="radio" class="loncom_public_radio_input" name="systemtime" id="systemtime2">
                                                        <label for="systemtime2" @click="show_time=true"></label>
                                                    </span>
                                                    <div class="loncom_dis_inline">以下时间段</div>
                                                </div>
                                            </div>
                                            <div class="loncom_mt10" v-show="show_time">
                                                <el-date-picker
                                                    v-model="value"
                                                    type="datetimerange"
                                                    :picker-options="pickerOptions"
                                                    range-separator="至"
                                                    start-placeholder="开始时间"
                                                    end-placeholder="结束时间"
                                                    placeholder="选择时间范围"
                                                    size="mini"
                                                    >
                                                </el-date-picker>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="loncom_system_userpagebox">
                                <el-button type="primary" @click="submitInfo">确定</el-button>
                                <el-button type="info" plain @click="giveUp">取消</el-button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="loncom_system_userpage_right">
                    <div class="loncom_public_shadow loncom_system_userpage_scroll loncom_public_tabbox1">
                        <div class="loncom_system_userpage_rightcon loncom_public_tabboxcon1">
                            欢迎使用龙控iSmartSite产品
                        </div>
                    </div>
                </div>
            </div>
            <!--结束-->
        </div>
    </div>
</template>


<script>


export default {
    
  created () {
    var obj = this.$route.query;
    if(JSON.stringify(obj) == "{}"){
        this.userTop="新增用户";
    }else{
        this.userTop="编辑用户";
        console.log(obj);
        //获取到的赋给 user_info  字段根据后台需求匹配正确
    }
  },
  mounted() {
      //超出滚动
      scrollCon();
      //后台中的滚动
      tabScroll("0");
      tabScroll("1");
  },
   data() {
       return {
           //新增编辑用户头部显示
           userTop:'',
           user_info:{
               role:'1',
               name:'',
               password:'',
               name:'',
               phone:'',
               email:'',
               remark:''
           },
           //显示自定义时间
            show_time:false,
            pickerOptions: {
                shortcuts: [{
                    text: '一周',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    end.setTime(start.getTime() + 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '一个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    end.setTime(start.getTime() + 3600 * 1000 * 24 * 30);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '三个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    end.setTime(start.getTime() + 3600 * 1000 * 24 * 90);
                    picker.$emit('pick', [start, end]);
                    }
                }]
            },
            value:'',
       }
   },
   methods:{
       //确定提交
       submitInfo:function(){
            if(true){
                this.$message({
                    message: '新增成功',
                    type: 'success'
                });
                this.$router.push({path:'/loncom/system',query:{userAdd:'true'}});
            }
       },
       //取消
       giveUp:function(){
            this.$router.push({path:'/loncom/system',query:{userAdd:'false'}});
       }
   },
   components:{},
}
</script>










