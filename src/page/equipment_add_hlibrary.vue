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
                                            <em>*</em>设备分类
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <div class="loncom_dis_inline">
                                                空调 > 精密空调
                                            </div>
                                            <div class="loncom_dis_inline loncom_ml15">
                                                <a href="javascript:;" class="loncom_color1ABC9C">编辑</a>
                                            </div>
                                            <div class="loncom_dis_inline loncom_ml15">
                                                <a href="javascript:;" class="loncom_color1ABC9C">添加扩展分类</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>模板名称
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-select size="small" placeholder="请选择组态">
                                                <el-option
                                                    v-for="item in temOptions"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>标签
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-select size="small" placeholder="请选择标签">
                                                <el-option
                                                    v-for="item in labelOptions"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>界面文件
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-button size="mini" icon="el-icon-upload2" round >上传文件</el-button>
                                            <div class="loncom_list_box_info">
                                                支持扩展名：.rar .zip ...
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
    if(JSON.stringify(obj) == "{}"){
        this.topInfo="添加界面库";
    }else{
        this.topInfo="编辑界面库";
        this.activeBtn=false;
        console.log(obj);
        //获取到的赋给 hlibrary_info  字段根据后台需求匹配正确
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
           hlibrary_info:{},
           //新增设备编辑设备显示不同的按钮信息
           activeBtn:true,
           //模板名称
           temOptions:[],
           //标签
           labelOptions:[],

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