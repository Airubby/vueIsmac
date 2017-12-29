<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <h2>安防系统 &gt; {{topInfo}}</h2>
        </div>
        <div class="loncom_scroll_con">
            <div class="loncom_public_table loncom_content">
                <div class="loncom_public_tab loncom_public_onetab">
                    <el-tabs>
                        <el-tab-pane label="视频设备配置">
                            <div class="loncom_public_tabbox loncom_public_tabbox0">
                                <div class="loncom_public_tabboxcon loncom_public_tabboxcon0">
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            设备型号
                                        </div>
                                        <div class="loncom_list_box_right">
                                            海康DS8****
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>设备名称
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input v-model="video_info.name" size="small"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>接入点类型
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <div class="loncom_dis_inlineblock loncom_mr10">
                                                <span class="loncom_public_radio loncom_fl">
                                                    <input type="radio" name="radioType" id="radioType1" checked="checked" class="loncom_public_radio_input"> 
                                                    <label for="radioType1"></label>
                                                </span> 
                                                <span>NVR</span>
                                            </div>
                                            <div class="loncom_dis_inlineblock">
                                                <span class="loncom_public_radio loncom_fl">
                                                    <input type="radio" name="radioType" id="radioType2" class="loncom_public_radio_input"> 
                                                    <label for="radioType2"></label>
                                                </span> 
                                                <span>网络摄像头</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>IP地址/端口
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <div class="loncom_fl" style="width: 60%;margin-right:5%;">
                                                <el-input v-model="video_info.ip" size="small"></el-input>
                                            </div>
                                            <div class="loncom_fl" style="width: 35%;">
                                                <el-input v-model="video_info.port" size="small"></el-input>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            用户名
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input v-model="video_info.username" size="small"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            密码
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input v-model="video_info.password" type="password" size="small"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            通道数量
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-select v-model="video_info.type" size="small" placeholder="请选择">
                                                <el-option value="4通道" ></el-option>
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
        this.topInfo="新增视频设备";
    }else{
        this.topInfo="编辑视频设备";
        this.activeBtn=false;
        console.log(obj);
        //获取到的赋给 video_info  字段根据后台需求匹配正确
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
           video_info:{},
           //新增设备编辑设备显示不同的按钮信息
           activeBtn:true,
       }
   },
   methods:{
       //新增提交
        addSubmitInfo:function(){
            if(true){
                this.$message({
                    message: '新增成功',
                    type: 'success'
                });
                this.$router.push({path:'/loncom/security',query:{videoItem:'true'}});
            }
        },
        //编辑提交
        editSubmitInfo:function(){
            if(true){
                this.$message({
                    message: '编辑成功',
                    type: 'success'
                });
                this.$router.push({path:'/loncom/security',query:{videoItem:'true'}});
            }
        },
        //放弃编辑
        giveUp:function(){
            this.$router.push({path:'/loncom/security',query:{videoItem:'false'}});
        },
        
   },
   components:{TopChangeInfo},
}
</script>