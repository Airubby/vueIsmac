<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <h2>事件管理</h2>
            <TopChangeInfo v-bind:topChangeInfo="top_items"></TopChangeInfo>
        </div>
        <div class="loncom_scroll_con loncom_right_changecon">
            <!--当前事件-->
            <div :class="{'loncom_active':top_items[0].loncom_active}" class="loncom_public_table loncom_content">
                <div class="loncom_alarm_top">
                    <span>总计：<em class="loncom_mr5">{{all_alarm}}</em>条</span>
                    <div class="loncom_dis_inline">
                        <span class="loncom_dis_inlineblock loncom_ml15" v-for="item in alarm_info" @click="changeAlarm(item)">
                            <i class="loncom_alarm_top_img" :class="item.class"></i>{{item.title}}：<em class="loncom_mr5">{{item.num}}</em>条
                        </span>
                    </div>
                    <div class="loncom_fr">
                        <el-button type="mini">导出</el-button>
                    </div>
                </div>
                <div class="loncom_alarm_con loncom_public_tabbox0">
                    <div class="loncom_alarm_conbox loncom_public_tabboxcon0">
                        <em class="loncom_alarm_line"></em>
                        <ul class="loncom_alarm_list loncom_family_yahei">
                            <li v-for="item in alarm_list">
                                <div class="loncom_alarm_list_time" :class="'loncom_alarm_list_time'+item.alarmType">
                                    <p>{{item.alarmTime}}</p>
                                    <p>{{item.alarmDate}}</p>
                                </div>
                                <div class="loncom_alarm_list_con">
                                    <div class="loncom_alarm_list_contop">
                                        <div class="loncom_fl">{{item.alarmTitle}}</div>
                                        <div class="loncom_fr">
                                            <a href="javascript:;" class="loncom_color108EE9" @click="sureAlarm(item)">确认事件</a>
                                            <em class="loncom_color999 loncom_mr5 loncom_ml5">|</em>
                                            <a href="javascript:;" class="loncom_color108EE9" @click="aoSilence(item)">声光静默</a>
                                            <em class="loncom_color999 loncom_mr5 loncom_ml5">|</em>
                                            <a href="javascript:;" class="loncom_color108EE9">查看通知日志</a>
                                        </div>
                                    </div>
                                    <div class="loncom_color999">{{item.alarmDetail}}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <DialogAlarmAoSilence v-bind:dialogAlarmAoSilence="alarm_aosilence"></DialogAlarmAoSilence>
                </div>
            </div>
            <!--历史事件-->
            <div :class="{'loncom_active':top_items[1].loncom_active}" class="loncom_public_table loncom_content">
                <div class="loncom_alarm_top">
                    <span>时段：</span>
                    <div class="loncom_dis_inline">
                        <el-date-picker
                            v-model="datevalue"
                            type="datetimerange"
                            :picker-options="pickerOptions"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            size="mini">
                        </el-date-picker>
                    </div>
                    <div class="loncom_dis_inline">
                        <el-button type="primary" size="mini" icon="el-icon-search">搜索</el-button>
                    </div>
                </div>
                <div class="loncom_alarm_con loncom_public_tabbox1">
                    <div class="loncom_alarm_conbox loncom_public_tabboxcon1">
                        <em class="loncom_alarm_line"></em>
                        <ul class="loncom_alarm_list loncom_family_yahei">
                            <li v-for="item in history_alarm_list">
                                <div class="loncom_alarm_list_time" :class="'loncom_alarm_list_time'+item.alarmType">
                                    <p>{{item.alarmTime}}</p>
                                    <p>{{item.alarmDate}}</p>
                                </div>
                                <div class="loncom_alarm_list_con">
                                    <div class="loncom_alarm_list_contop">
                                        <div class="loncom_fl">{{item.alarmTitle}}</div>
                                        <div class="loncom_fr">
                                            <a href="javascript:;" class="loncom_color108EE9">查看通知日志</a>
                                        </div>
                                    </div>
                                    <div class="loncom_color999">{{item.alarmDetail}}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import TopChangeInfo from '../components/topChangeInfo.vue'
import DialogAlarmAoSilence from '../components/dialogAlarmAoSilence.vue'
export default {
    
  created () {
    
  },
  mounted() {
    scrollCon();
    tabScroll("0");
  },
   data() {
       return {
           //头部切换
          　top_items: [
　　　　　　　　　　{select:'当前',loncom_active:true},
　　　　　　　　　　{select:'历史',loncom_active:false},
　　　　　　　],
            //头部告警条数显示
            alarm_info:[
                {class:'loncom_index_alarm4',title:'紧急',num:2},
                {class:'loncom_index_alarm3',title:'严重',num:2},
                {class:'loncom_index_alarm2',title:'一般',num:2},
                {class:'loncom_index_alarm1',title:'提示',num:4}
            ],
            all_alarm:10,
            //告警列表
            alarm_list:[
                {alarmType:'4',alarmTime:'14:42:30',alarmDate:'2017-12-28',alarmTitle:'温度过高告警',alarmDetail:'**机房，1号温湿度，温度，值=30.6'},
                {alarmType:'4',alarmTime:'14:42:30',alarmDate:'2017-12-28',alarmTitle:'温度过高告警',alarmDetail:'**机房，1号温湿度，温度，值=30.6'},
                {alarmType:'3',alarmTime:'14:42:30',alarmDate:'2017-12-28',alarmTitle:'温度过高告警',alarmDetail:'**机房，1号温湿度，温度，值=30.6'},
                {alarmType:'1',alarmTime:'14:42:30',alarmDate:'2017-12-28',alarmTitle:'温度过高告警',alarmDetail:'**机房，1号温湿度，温度，值=30.6'},
                {alarmType:'2',alarmTime:'14:42:30',alarmDate:'2017-12-28',alarmTitle:'温度过高告警',alarmDetail:'**机房，1号温湿度，温度，值=30.6'},
                {alarmType:'4',alarmTime:'14:42:30',alarmDate:'2017-12-28',alarmTitle:'温度过高告警',alarmDetail:'**机房，1号温湿度，温度，值=30.6'},
                
            ],
            //声光静默
            alarm_aosilence:{
                visible:false,
                title:"声光静默",
                width: "600px",
                data:{}
            },
            //历史告警列表
            history_alarm_list:[
                {alarmType:'4',alarmTime:'14:42:30',alarmDate:'2017-12-28',alarmTitle:'温度过高告警',alarmDetail:'**机房，1号温湿度，温度，值=30.6'},
                {alarmType:'4',alarmTime:'14:42:30',alarmDate:'2017-12-28',alarmTitle:'温度过高告警',alarmDetail:'**机房，1号温湿度，温度，值=30.6'},
                {alarmType:'3',alarmTime:'14:42:30',alarmDate:'2017-12-28',alarmTitle:'温度过高告警',alarmDetail:'**机房，1号温湿度，温度，值=30.6'},
                {alarmType:'1',alarmTime:'14:42:30',alarmDate:'2017-12-28',alarmTitle:'温度过高告警',alarmDetail:'**机房，1号温湿度，温度，值=30.6'},
                {alarmType:'2',alarmTime:'14:42:30',alarmDate:'2017-12-28',alarmTitle:'温度过高告警',alarmDetail:'**机房，1号温湿度，温度，值=30.6'},
                {alarmType:'4',alarmTime:'14:42:30',alarmDate:'2017-12-28',alarmTitle:'温度过高告警',alarmDetail:'**机房，1号温湿度，温度，值=30.6'},
                
            ],
            //时间范围
            pickerOptions: {
                shortcuts: [{
                    text: '近一天',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '近一周',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', [start, end]);
                    }
                },{
                    text: '近两周',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 14);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '近一个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                    picker.$emit('pick', [start, end]);
                    }
                }]
            },
            datevalue:"",
       }
   },
   methods:{
       //点击切换告警列表
       changeAlarm:function(item){
            
       },
       //确认事件
       sureAlarm:function(item){
           this.$confirm('是否确认事件？确认后该事件将不再重复告警', '确认事件', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '确认成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '确认取消'
                    });          
            });
       },
       //声光静默
       aoSilence:function(item){
            this.alarm_aosilence.visible=true;
            this.alarm_aosilence.data=item;
       },

   },
   components:{TopChangeInfo,DialogAlarmAoSilence},
}
</script>