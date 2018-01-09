<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <h2>设备管理 &gt; {{topInfo}}</h2>
        </div>
        <div class="loncom_scroll_con">
            <div class="loncom_public_table loncom_content">
                <div class="loncom_public_tab loncom_public_onetab">
                    <el-tabs>
                        <el-tab-pane label="基本信息">
                            <div class="loncom_public_tabbox loncom_public_tabbox0">
                                <div class="loncom_public_tabboxcon loncom_public_tabboxcon0">
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            设备库模板
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <div class="loncom_dis_inline">
                                                空调 > 精密空调
                                            </div>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>设备名称
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input size="small" ></el-input>
                                        </div>
                                    </div>
                                    <!--新增串口设备-->
                                    <div v-show="equip_info.addType=='ck'">
                                        <div class="loncom_list_box">
                                            <div class="loncom_list_box_left">
                                                <em>*</em>设备地址
                                            </div>
                                            <div class="loncom_list_box_right">
                                                <el-input size="small" ></el-input>
                                            </div>
                                        </div>
                                        <div class="loncom_list_box">
                                            <div class="loncom_list_box_left">
                                                <em>*</em>采集通道
                                            </div>
                                            <div class="loncom_list_box_right">
                                                <span class="loncom_dis_inlineblock loncom_fl" style="width: 70%;margin-right:3%;">
                                                    <el-select size="small" v-model="gorge">
                                                        <el-option value="485卡"></el-option>
                                                        <el-option value="ID模块"></el-option>
                                                    </el-select>
                                                </span>
                                                <span class="loncom_dis_inlineblock loncom_fl" style="width: 27%;">
                                                    <el-select size="small" v-model="gorge1">
                                                        <el-option value="01"></el-option>
                                                    </el-select>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="loncom_list_box">
                                            <div class="loncom_list_box_left">
                                                <em>*</em>通讯参数
                                            </div>
                                            <div class="loncom_list_box_right">
                                                <el-select size="small" v-model="communicate">
                                                    <el-option value="9600,n,8,1"></el-option>
                                                </el-select>
                                            </div>
                                        </div>
                                    </div>
                                    <!--新增网口设备-->
                                    <div v-show="equip_info.addType=='wk'">
                                        <div class="loncom_list_box">
                                            <div class="loncom_list_box_left">
                                                <em>*</em>设备地址
                                            </div>
                                            <div class="loncom_list_box_right">
                                                <el-input size="small" ></el-input>
                                            </div>
                                        </div>
                                        <div class="loncom_list_box">
                                            <div class="loncom_list_box_left">
                                                <em>*</em>采集通道
                                            </div>
                                            <div class="loncom_list_box_right">
                                                <span class="loncom_dis_inlineblock loncom_fl" style="width: 70%;margin-right:3%;">
                                                    <el-input size="small"></el-input>
                                                </span>
                                                <span class="loncom_dis_inlineblock loncom_fl" style="width: 27%;">
                                                    <el-input size="small"></el-input>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="loncom_list_box">
                                            <div class="loncom_list_box_left">
                                                <em>*</em>通讯参数
                                            </div>
                                            <div class="loncom_list_box_right">
                                                <el-select size="small" v-model="communicate">
                                                    <el-option value="9600,n,8,1"></el-option>
                                                </el-select>
                                            </div>
                                        </div>
                                    </div>
                                    <!--新增snmp-->
                                    <div v-show="equip_info.addType=='sn'">
                                        <div class="loncom_list_box">
                                            <div class="loncom_list_box_left">
                                                <em>*</em>设备IP/端口
                                            </div>
                                            <div class="loncom_list_box_right">
                                                <span class="loncom_dis_inlineblock loncom_fl" style="width: 70%;margin-right:3%;">
                                                    <el-input size="small"></el-input>
                                                </span>
                                                <span class="loncom_dis_inlineblock loncom_fl" style="width: 27%;">
                                                    <el-input size="small"></el-input>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="loncom_list_box">
                                            <div class="loncom_list_box_left">
                                                <em>*</em>版本协议
                                            </div>
                                            <div class="loncom_list_box_right">
                                                <el-select size="small" v-model="communicate">
                                                    <el-option value="V2"></el-option>
                                                </el-select>
                                            </div>
                                        </div>
                                        <div class="loncom_list_box">
                                            <div class="loncom_list_box_left">
                                                <em>*</em>通讯团体字
                                            </div>
                                            <div class="loncom_list_box_right">
                                                <span class="loncom_dis_inlineblock loncom_fl" style="width: 70%;margin-right:3%;">
                                                    <el-input size="small"></el-input>
                                                </span>
                                                <span class="loncom_dis_inlineblock loncom_fl" style="width: 27%;">
                                                    <el-input size="small"></el-input>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <!--结束-->
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            关联地图
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <div class="loncom_dis_inline">
                                                空调 > 精密空调
                                            </div>
                                            <div class="loncom_dis_inline loncom_ml15">
                                                <a href="javascript:;" class="loncom_color1ABC9C">选择</a>
                                            </div>
                                            <div class="loncom_list_box_info">
                                                选择设备所在的机房地图页面...
                                            </div>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            安装位置
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <div class="loncom_dis_inline">
                                                **分行 > 机房1
                                            </div>
                                            <div class="loncom_dis_inline loncom_ml15">
                                                <a href="javascript:;" class="loncom_color1ABC9C">选择</a>
                                            </div>
                                            <div class="loncom_list_box_info">
                                                选当系统存在多个机房时选择设备所在的机房..
                                            </div>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            说明
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <textarea style="height: 150px;" placeholder="请输入内容"> </textarea>
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

export default {
    
  created () {
   var obj = this.$route.query;
   this.equip_info=obj;
   console.log(obj);
    if(obj.mark=='add'){
        this.topInfo="新增设备";
    }else{
        this.topInfo="编辑设备";
        this.activeBtn=false;
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
           equip_info:{},
           //新增设备编辑设备显示不同的按钮信息
           activeBtn:true,
           //新增串口设备
           gorge:'',
           gorge1:'',
           communicate:'',
           

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
                this.$router.push({path:'/loncom/equipment',query:{configItem:'true'}});
            }
        },
        //编辑提交
        editSubmitInfo:function(){
            if(true){
                this.$message({
                    message: '编辑成功',
                    type: 'success'
                });
                this.$router.push({path:'/loncom/equipment',query:{configItem:'true'}});
            }
        },
        //放弃编辑
        giveUp:function(){
            this.$router.push({path:'/loncom/equipment',query:{configItem:'false'}});
        },
        
   },
   components:{},
}
</script>