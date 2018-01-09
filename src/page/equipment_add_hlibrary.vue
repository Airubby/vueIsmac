<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <h2>监控报表 &gt; {{topInfo}}</h2>
        </div>
        <div class="loncom_scroll_con">
            <div class="loncom_public_table loncom_content">
                <div class="loncom_public_tab">
                    <el-tabs v-model="ActiveName">
                        <el-tab-pane label="基本信息" name="first">
                            <div class="loncom_public_tabbox loncom_public_tabbox0">
                                <div class="loncom_public_tabboxcon loncom_public_tabboxcon0">
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            报表类型
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <div class="loncom_dis_inline">
                                                环境报表
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
                                            <em>*</em>报表名称
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input v-model="order_info.name" size="small"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>报表周期
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <div v-for="(item,index) in cycle">
                                                <span class="loncom_public_radio loncom_fl">
                                                    <input type="radio" name="radioType" :id="'radio'+index" :checked="item.value==show_cycle" class="loncom_public_radio_input"> 
                                                    <label :for="'radio'+index" @click="changeCycle(item)"></label>
                                                </span> 
                                                <span>{{item.name}}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>时间范围
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <!--日报显示-->
                                            <div class="loncom_statement_add_daytime" v-show="show_cycle=='day'">
                                                <span>每天</span>
                                                <span class="loncom_dis_inlineblock" style="width:90px;">
                                                    <el-select v-model="day_time_range.start" disabled size="small">
                                                        <el-option value="00:00"></el-option>
                                                    </el-select>
                                                </span>
                                                <span>到</span>
                                                <span class="loncom_dis_inlineblock" style="width:90px;">
                                                    <el-select v-model="day_time_range.end" disabled size="small">
                                                        <el-option value="24:00"></el-option>
                                                    </el-select>
                                                </span>
                                            </div>
                                            <!--周报显示-->
                                            <div class="loncom_statement_add_weektime" v-show="show_cycle=='week'">
                                                <div class="loncom_dis_inlineblock loncom_mr10" v-for="(item,index) in week_time_range">
                                                    <span class="loncom_public_check loncom_fl">
                                                        <input type="checkbox" :id="'checkWeek'+index" :checked="item.check" class="loncom_public_check_input"> 
                                                        <label :for="'checkWeek'+index"></label>
                                                    </span> 
                                                    <span>{{item.name}}</span>
                                                </div>
                                            </div>
                                            <!--月报显示-->
                                            <div class="loncom_statement_add_moontime" v-show="show_cycle=='moon'">
                                                <div class="loncom_dis_inlineblock loncom_mr10" style="width: 55px;" v-for="(item,index) in moon_time_range">
                                                    <span class="loncom_public_check loncom_fl">
                                                        <input type="checkbox" :id="'checkMoon'+index" :checked="item.check" class="loncom_public_check_input"> 
                                                        <label :for="'checkMoon'+index"></label>
                                                    </span> 
                                                    <span>{{item.name}}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>生成时间
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <!--日报显示-->
                                            <div class="loncom_statement_add_daytime" v-show="show_cycle=='day'">
                                                <span>每天</span>
                                                <span class="loncom_dis_inlineblock" style="width:90px;">
                                                    <el-select v-model="day_time_create.day" size="small">
                                                        <el-option value="次日"></el-option>
                                                        <el-option value="今日"></el-option>
                                                    </el-select>
                                                </span>
                                                <span>到</span>
                                                <span class="loncom_dis_inlineblock" style="width:90px;">
                                                    <el-select v-model="day_time_create.time" size="small">
                                                        <el-option value="8:00"></el-option>
                                                    </el-select>
                                                </span>
                                            </div>
                                            <!--周报显示-->
                                            <div class="loncom_statement_add_weektime" v-show="show_cycle=='week'">
                                                <span class="loncom_dis_inlineblock" style="width:90px;">
                                                    <el-select v-model="week_time_create.week" size="small">
                                                        <el-option value="本周"></el-option>
                                                        <el-option value="下周"></el-option>
                                                    </el-select>
                                                </span>
                                                <span class="loncom_dis_inlineblock" style="width:90px;">
                                                    <el-select v-model="week_time_create.theweek" size="small">
                                                        <el-option value="周一"></el-option>
                                                        <el-option value="周二"></el-option>
                                                    </el-select>
                                                </span>
                                                <span class="loncom_dis_inlineblock" style="width:90px;">
                                                    <el-select v-model="week_time_create.time" size="small">
                                                        <el-option value="8:00"></el-option>
                                                    </el-select>
                                                </span>
                                            </div>
                                            <!--月报显示-->
                                            <div class="loncom_statement_add_moontime" v-show="show_cycle=='moon'">
                                                <span class="loncom_dis_inlineblock" style="width:90px;">
                                                    <el-select v-model="moon_time_create.moon" size="small">
                                                        <el-option value="本月"></el-option>
                                                        <el-option value="下月"></el-option>
                                                    </el-select>
                                                </span>
                                                <span class="loncom_dis_inlineblock" style="width:90px;">
                                                    <el-select v-model="moon_time_create.themoon" size="small">
                                                        <el-option value="第一天"></el-option>
                                                        <el-option value="最后一天"></el-option>
                                                    </el-select>
                                                </span>
                                                <span class="loncom_dis_inlineblock" style="width:90px;">
                                                    <el-select v-model="moon_time_create.time" size="small">
                                                        <el-option value="8:00"></el-option>
                                                    </el-select>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>状态
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <div class="loncom_dis_inlineblock">
                                                <span class="loncom_public_radio loncom_fl">
                                                    <input type="radio" name="radioState" checked="checked" id="radioType4" class="loncom_public_radio_input"> 
                                                    <label for="radioType4"></label>
                                                </span> 
                                                <span>启用</span>
                                            </div>
                                            <div class="loncom_dis_inlineblock loncom_ml15">
                                                <span class="loncom_public_radio loncom_fl">
                                                    <input type="radio" name="radioState" id="radioType5" class="loncom_public_radio_input"> 
                                                    <label for="radioType5"></label>
                                                </span> 
                                                <span>未启用</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            邮件订阅
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <span class="loncom_public_check loncom_fl">
                                                <input type="checkbox" id="checkType1" checked="true" class="loncom_public_check_input"> 
                                                <label for="checkType1"></label>
                                            </span> 
                                            <span>启用</span>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            订阅用户
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <textarea style="height: 150px;" placeholder="填写邮件地址，以;隔开"> </textarea>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="配置内容" name="second">
                            <div class="loncom_public_tabbox loncom_public_tabbox1">
                                <div class="loncom_public_tabboxcon loncom_public_tabboxcon1">
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            数据处理
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <div class="loncom_dis_inlineblock loncom_pr20" v-for="(item,index) in data_handing">
                                                <span class="loncom_public_check loncom_fl">
                                                    <input type="checkbox" :id="'check'+index" :checked="item.check" class="loncom_public_check_input"> 
                                                    <label :for="'check'+index"></label>
                                                </span> 
                                                <span>{{item.name}}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div>
                                            <span>订阅内容：</span>
                                            <span style="margin-left:245px;">仅显示勾选内容</span>
                                        </div>
                                        <el-transfer v-model="transfer_value" :data="transfer_data" :titles="['Source', 'Target']"></el-transfer>
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
        this.topInfo="添加定制";
    }else{
        this.topInfo="编辑定制";
        this.activeBtn=false;
        console.log(obj);
        //获取到的赋给 order_info  字段根据后台需求匹配正确
    }
  },
  mounted() {
    scrollCon();
    
    tabScroll("0");
    tabScroll("1");
  },
   data() {
       //月报时间范围
       const moonTimeRange = _ => {
        const data = [];
        for (let i = 1; i <= 31; i++) {
          data.push({
            name: `${i}号`,
            check: false,
          });
        }
        return data;
      };
       return {
           //新增编辑控制器头部显示
           topInfo:'',
           order_info:{},
           //新增设备编辑设备显示不同的按钮信息
           activeBtn:true,

           ActiveName: 'first',  //选项卡头部切换信息

           //报表周期
           cycle:[
               {name:'日报',value:'day'},
               {name:'周报',value:'week'},
               {name:'月报',value:'moon'},
           ],
           //点击什么显示什么
           show_cycle:'day',
           //日报表时间范围,生成时间
           day_time_range:{
               start:'00:00',
               end:'24:00'
           },
           day_time_create:{
               day:'今日',
               time:'8:00'
           },
           //周报表时间范围,生成时间
           week_time_range:[
                {name:'周一',check:true},
                {name:'周二',check:true},
                {name:'周三',check:true},
                {name:'周四',check:true},
                {name:'周五',check:true},
                {name:'周六',check:false},
                {name:'周日',check:false},
           ],
           week_time_create:{
                week:'本周',
                theweek:'周一',
                time:'8:00'
           },
           //月报表时间范围,生成时间
           moon_time_range:moonTimeRange(),
           moon_time_create:{
                moon:'本月',
                themoon:'第一天',
                time:'8:00'
           },


           //配置内容数据处理
           data_handing:[
               {name:'汇总',check:true},
               {name:'取平均值',check:false},
               {name:'取极值',check:false},
               {name:'差分值',check:false}
           ],
           //配置内容订阅内容
           transfer_data:[
               {key:'1',label:'温度1'},
               {key:'2',label:'温度2'},
               {key:'3',label:'温度3'},
               {key:'4',label:'温度4'},
               {key:'5',label:'温度5'},
               {key:'6',label:'温度6'},
               
           ],
           transfer_value:[1,4]


       }
   },
   methods:{

        //切换周期
        changeCycle:function(item){
            this.show_cycle=item.value;
        },

       //新增提交
        addSubmitInfo:function(){
            if(true){
                this.$message({
                    message: '新增成功',
                    type: 'success'
                });
                this.$router.push({path:'/loncom/security',query:{accessActiveName:'first'}});
            }
        },
        //编辑提交
        editSubmitInfo:function(){
            if(true){
                this.$message({
                    message: '编辑成功',
                    type: 'success'
                });
                this.$router.push({path:'/loncom/security',query:{accessActiveName:'first'}});
            }
        },
        //放弃编辑
        giveUp:function(){
            this.$router.push({path:'/loncom/security',query:{accessActiveName:'first'}});
        },
        
   },
   components:{},
}
</script>