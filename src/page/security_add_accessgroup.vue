<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <h2>安防系统 &gt; {{topInfo}}</h2>
        </div>
        <div class="loncom_scroll_con">
            <div class="loncom_public_table loncom_content">
                <div class="loncom_public_tab loncom_public_onetab">
                    <el-tabs>
                        <el-tab-pane label="门禁权限组配置">
                            <div class="loncom_public_tabbox loncom_public_tabbox0">
                                <div class="loncom_public_tabboxcon loncom_public_tabboxcon0">
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>权限组名称
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input v-model="access_info.name" size="small"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>时间组   
                                        </div>
                                        <div class="loncom_list_box_right">
                                             <el-select v-model="timeValue" size="small" placeholder="请选择">
                                                <el-option
                                                v-for="item in timeOptions"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </div>
                                    </div>
                                   <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>应用对象名称
                                        </div>
                                        <div class="loncom_list_box_right loncom_family_yahei">
                                            <el-tree
                                                :data="access_data"
                                                node-key="id"
                                                ref="tree"
                                                show-checkbox
                                                :props="defaultProps"
                                                accordion
                                                :expand-on-click-node="false"
                                                :render-content="renderContent"
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
import TopChangeInfo from '../components/topChangeInfo.vue'
export default {
    
  created () {
   var obj = this.$route.query;
    if(JSON.stringify(obj) == "{}"){
        this.topInfo="新增权限组";
    }else{
        this.topInfo="编辑权限组";
        this.activeBtn=false;
        console.log(obj);
        //获取到的赋给 access_info  字段根据后台需求匹配正确
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
           access_info:{},
           //新增设备编辑设备显示不同的按钮信息
           activeBtn:true,
           //获取时间组显示
           timeOptions: [{
                value: '1',
                label: '时间组1'
                }, {
                value: '2',
                label: '时间组2'
                }, {
                value: '3',
                label: '时间组3'
                }, {
                value: '4',
                label: '时间组4'
            }],
            timeValue:'',
            //树形
            access_data: [{
                label: '1号控制器',
                id:'e1',
                children: [{
                    label: '1号门',
                    id:'e1_1',
                },{
                    label: '2号门',
                    id:'e1_2',
                },{
                    label: '3号门',
                    id:'e1_3',
                },{
                    label: '4号门',
                    id:'e1_4',
                }]
            }, {
                label: '2号控制器',
                id:'e2',
                children: [{
                    label: '1号门',
                    id:'e2_1',
                },{
                    label: '2号门',
                    id:'e2_2',
                }]
            }, {
                label: '3号控制器',
                id:'e3',
                children: [{
                    label: '1号门',
                    id:'e3_1',
                },{
                    label: '2号门',
                    id:'e3_2',
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
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