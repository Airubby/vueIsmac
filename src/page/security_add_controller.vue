<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <h2>安防系统 &gt; {{topInfo}}</h2>
        </div>
        <div class="loncom_scroll_con">
            <div class="loncom_public_table loncom_content">
                <div class="loncom_public_tab loncom_public_onetab">
                    <el-tabs>
                        <el-tab-pane label="门禁设备配置">
                            <div class="loncom_public_tabbox loncom_public_tabbox0">
                                <div class="loncom_public_tabboxcon loncom_public_tabboxcon0">
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            设备型号
                                        </div>
                                        <div class="loncom_list_box_right">
                                            中控K系列门禁控制器
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>设备名称
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input v-model="controller_info.name" size="small"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>通讯方式
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <div class="loncom_dis_inlineblock loncom_mr10">
                                                <span class="loncom_public_radio loncom_fl">
                                                    <input type="radio" name="radioType" id="radioType1" checked="checked" class="loncom_public_radio_input"> 
                                                    <label for="radioType1"></label>
                                                </span> 
                                                <span>TCP/IP</span>
                                            </div>
                                            <div class="loncom_dis_inlineblock">
                                                <span class="loncom_public_radio loncom_fl">
                                                    <input type="radio" name="radioType" id="radioType2" class="loncom_public_radio_input"> 
                                                    <label for="radioType2"></label>
                                                </span> 
                                                <span>RS485</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>IP地址/端口
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <div class="loncom_fl" style="width: 60%;margin-right:5%;">
                                                <el-input v-model="controller_info.ip" size="small"></el-input>
                                            </div>
                                            <div class="loncom_fl" style="width: 35%;">
                                                <el-input v-model="controller_info.port" size="small"></el-input>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            通讯密码
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input v-model="controller_info.password" width="215" type="password" size="small"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            控制器类型
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-select v-model="controller_info.type" size="small" placeholder="请选择">
                                                <el-option value="单门" ></el-option>
                                                <el-option value="双门" ></el-option>
                                                <el-option value="四门" ></el-option>
                                            </el-select>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            安装位置
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <div>
                                                <div class="loncom_dis_inlineblock">
                                                    1号分行 > 机房1
                                                </div>
                                                <a href="javascript:;" class="loncom_color1ABC9C loncom_dis_inlineblock loncom_ml15">选择</a>
                                            </div>
                                            <div class="loncom_list_box_info">
                                                当系统存在多个机房时选择设备所在的机房
                                            </div>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            初始化设置
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <div>
                                                <span class="loncom_public_check loncom_fl">
                                                    <input type="checkbox" id="checkType1" checked="true" class="loncom_public_check_input"> 
                                                    <label for="checkType1"></label>
                                                </span> 
                                                <span>添加到默认权限组</span>
                                            </div>
                                            <div>
                                                <span class="loncom_public_check loncom_fl">
                                                    <input type="checkbox" id="checkType2" class="loncom_public_check_input"> 
                                                    <label for="checkType2"></label>
                                                </span> 
                                                <span>清空设备中的数据</span>
                                            </div>
                                            <div class="loncom_list_box_info">
                                                【新增时删除设备中数据】功能将会删除设备中除事件记录之外的数据，请谨慎使用！
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </el-tab-pane>
                        
                    </el-tabs>
                </div>
                <div class="loncom_public_tabbtn">
                    <span v-show="!activeBtn">
                        <el-button type="info" plain @click="giveUp">放弃修改</el-button>
                        <el-button type="primary" @click="editSubmitInfo">提交</el-button>
                    </span>
                    <span v-show="activeBtn">
                        <el-button type="primary" @click="addSubmitInfo">提交</el-button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import TopChangeInfo from '../components/topChangeInfo.vue'
export default {
    
  created () {
   var obj = this.$route.query;
    if(JSON.stringify(obj) == "{}"){
        this.topInfo="新增设备";
    }else{
        this.topInfo="编辑设备";
        this.activeBtn=false;
        console.log(obj);
        //获取到的赋给 controller_info  字段根据后台需求匹配正确
    }
  },
  mounted() {
    scrollCon();
    
    tabScroll("0");
  },
   data() {
       return {
           //新增编辑控制器头部显示
           topInfo:'',
           controller_info:{},
           //新增设备编辑设备显示不同的按钮信息
           activeBtn:true,
       }
   },
   methods:{
       //新增
        addSubmitInfo:function(){
            if(true){
                this.$message({
                    message: '新增成功',
                    type: 'success'
                });
                this.$router.push({path:'/loncom/security'});
            }
        },
        //编辑
        editSubmitInfo:function(){
            if(true){
                this.$message({
                    message: '编辑成功',
                    type: 'success'
                });
                this.$router.push({path:'/loncom/security'});
            }
        },
        //放弃编辑
        giveUp:function(){
            this.$router.back();
        },
        
   },
   components:{TopChangeInfo},
}
</script>