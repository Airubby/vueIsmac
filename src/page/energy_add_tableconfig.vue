<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <h2>能效管理 &gt; {{topInfo}}</h2>
        </div>
        <div class="loncom_scroll_con">
            <div class="loncom_public_table loncom_content">
                <div class="loncom_public_tab loncom_public_onetab">
                    <el-tabs>
                        <el-tab-pane label="新增配置">
                            <div class="loncom_public_tabbox loncom_public_tabbox0">
                                <div class="loncom_public_tabboxcon loncom_public_tabboxcon0">
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>换算因子：
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input v-model="dialogEnergyConfigAdd.data.factor" size="small" style="width:300px;"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>操作符：
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-radio-group v-model="radio_value" size="small">
                                                <el-radio label="1" border>+ 累加</el-radio>
                                                <el-radio label="0" border>- 减去</el-radio>
                                            </el-radio-group>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>引用测点：
                                        </div>
                                        <div class="loncom_list_box_right loncom_font_size12">
                                            <el-tree
                                                :data="tree_data"
                                                node-key="id"
                                                ref="tree"
                                                :props="defaultProps"
                                                accordion
                                                show-checkbox
                                                :expand-on-click-node="false"
                                                @getCheckedNodes
                                                >
                                            </el-tree>
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
           radio_value:this.dialogEnergyConfigAdd.data.operator?this.dialogEnergyConfigAdd.data.operator:'1',
            //树形
            tree_data: [{
                label: '成都一号机房',
                id:'e1',
                children: [{
                    label: '输入电量仪A',
                    id:'e1_1',
                    children: [{
                        label: 'A相有功功率',
                        id:'e1_1_1',
                    },{
                        label: 'B相有功功率',
                        id:'e1_1_2',
                    }]
                },{
                    label: '输入电量仪B',
                    id:'e1_2',
                    children: [{
                        label: 'A相有功功率',
                        id:'e1_2_1',
                    },{
                        label: 'B相有功功率',
                        id:'e1_2_2',
                    }]
                }]
            }],
            defaultProps: { //树形公用
                children: 'children',
                label: 'label'
            },

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
        
        
   },
   
}
</script>