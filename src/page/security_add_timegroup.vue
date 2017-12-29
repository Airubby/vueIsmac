<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <h2>安防系统 &gt; {{topInfo}}</h2>
        </div>
        <div class="loncom_scroll_con">
            <div class="loncom_public_table loncom_content">
                <div class="loncom_public_tab loncom_public_onetab">
                    <el-tabs>
                        <el-tab-pane label="门禁时间组配置">
                            <div class="loncom_public_tabbox loncom_public_tabbox0">
                                <div class="loncom_public_tabboxcon loncom_public_tabboxcon0">
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>时间组名称
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input v-model="time_info.name" size="small"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>周范围
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <div class="loncom_dis_inlineblock loncom_mr10" v-for="item in weekData">
                                                <span class="loncom_public_check loncom_fl">
                                                    <input type="checkbox" class="loncom_public_check_input" :id="item.id">
                                                    <label :for="item.id"></label>
                                                </span>
                                                <span>{{item.title}}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>时间范围
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <div class="loncom_mb10">
                                                <el-time-picker
                                                    is-range
                                                    v-model="value1"
                                                    range-separator="至"
                                                    start-placeholder="开始时间"
                                                    end-placeholder="结束时间"
                                                    placeholder="选择时间范围"
                                                    size="small"
                                                    >
                                                </el-time-picker>
                                            </div>
                                            <div class="loncom_mb10">
                                                <el-time-picker
                                                    is-range
                                                    v-model="value2"
                                                    range-separator="至"
                                                    start-placeholder="开始时间"
                                                    end-placeholder="结束时间"
                                                    placeholder="选择时间范围"
                                                    size="small"
                                                    >
                                                </el-time-picker>
                                            </div>
                                            <div class="loncom_mb10">
                                                <el-time-picker
                                                    is-range
                                                    v-model="value3"
                                                    range-separator="至"
                                                    start-placeholder="开始时间"
                                                    end-placeholder="结束时间"
                                                    placeholder="选择时间范围"
                                                    size="small"
                                                    >
                                                </el-time-picker>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            说明
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <textarea class="security_timegroup_textarea"></textarea>
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
        this.topInfo="新增时间组";
    }else{
        this.topInfo="编辑时间组";
        this.activeBtn=false;
        console.log(obj);
        //获取到的赋给 time_info  字段根据后台需求匹配正确
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
           time_info:{},
           //新增设备编辑设备显示不同的按钮信息
           activeBtn:true,
           //周范围
           weekData:[
                {title:"周一",id:"sysweek1"},
                {title:"周二",id:"sysweek2"},
                {title:"周三",id:"sysweek3"},
                {title:"周四",id:"sysweek4"},
                {title:"周五",id:"sysweek5"},
                {title:"周六",id:"sysweek6"},
                {title:"周天",id:"sysweek7"}
            ],
            //时间范围
            pickerOptions: {
                shortcuts: [{
                    text: '全天',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24);
                    picker.$emit('pick', [start, end]);
                    }
                }]
            },
            value1:"",
            value2:"",
            value3:"",
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
                this.$router.push({path:'/loncom/security',query:{accessActiveName:'third'}});
            }
        },
        //编辑提交
        editSubmitInfo:function(){
            if(true){
                this.$message({
                    message: '编辑成功',
                    type: 'success'
                });
                this.$router.push({path:'/loncom/security',query:{accessActiveName:'third'}});
            }
        },
        //放弃编辑
        giveUp:function(){
            this.$router.push({path:'/loncom/security',query:{accessActiveName:'third'}});
        },
        
   },
   components:{TopChangeInfo},
}
</script>