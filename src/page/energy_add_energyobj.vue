<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <h2>能效管理 &gt; {{topInfo}}</h2>
        </div>
        <div class="loncom_scroll_con">
            <div class="loncom_public_table loncom_content">
                <div class="loncom_public_tab loncom_public_onetab">
                    <el-tabs>
                        <el-tab-pane label="能效对象配置">
                            <div class="loncom_public_tabbox loncom_public_tabbox0">
                                <div class="loncom_public_tabboxcon loncom_public_tabboxcon0">
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>对象名称
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input v-model="energy_info.name" size="small"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>设计容量
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input v-model="energy_info.capacity" size="small"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>设置PUE
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input v-model="energy_info.pue" size="small"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>采集周期
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-button :type="item.type" size="mini" v-for="item in pue_info" @click="changePue(item)">{{item.valueShow}}</el-button>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>管理域
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <div class="loncom_dis_inlineblock">
                                                1号分行 &gt; 机房1
                                            </div> 
                                            <a href="javascript:;" class="loncom_color1ABC9C loncom_dis_inlineblock loncom_ml15">选择</a>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            说明
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <textarea style="height:150px;"></textarea>
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
        this.topInfo="新增能效对象";
    }else{
        this.topInfo="编辑能效对象";
        this.activeBtn=false;
        console.log(obj);
        //获取到的赋给 energy_info  字段根据后台需求匹配正确
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
           energy_info:{},
           //新增设备编辑设备显示不同的按钮信息
           activeBtn:true,
           //pue采集周期
           pue_info:[
               {type:'primary',value:'5',valueShow:'5分钟'},
               {type:'',value:'10',valueShow:'10分钟'},
               {type:'',value:'30',valueShow:'30分钟'},
           ]
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
                this.$router.push({path:'/loncom/energy',query:{configItem:'true'}});
            }
        },
        //编辑提交
        editSubmitInfo:function(){
            if(true){
                this.$message({
                    message: '编辑成功',
                    type: 'success'
                });
                this.$router.push({path:'/loncom/energy',query:{configItem:'true'}});
            }
        },
        //放弃编辑
        giveUp:function(){
            this.$router.push({path:'/loncom/energy',query:{configItem:'false'}});
        },
        //切换pue周期
        changePue:function(item){
            for(var i=0;i<this.pue_info.length;i++){
                this.pue_info[i].type='';
            }
            item.type='primary';
        }
        
   },
   
}
</script>