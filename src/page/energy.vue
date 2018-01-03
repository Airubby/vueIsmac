<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <h2>能效管理</h2>
            <TopChangeInfo v-bind:topChangeInfo="top_items"></TopChangeInfo>
        </div>
        <div class="loncom_scroll_con loncom_right_changecon loncom_family_yahei">
            <div :class="{'loncom_active':top_items[0].loncom_active}" class="loncom_public_card">
                <!--top-->
                <div class="loncom_energy_state_top">
                    <div class="loncom_energy_state_topbox1">
                        <div class="loncom_energy_state_topbox">
                            <div class="loncom_energy_state_topbox_img"></div>
                            <div class="loncom_energy_state_topbox_text">
                               <h2>能效对象1<span>黄色预警</span></h2>
                               <div class="loncom_energy_state_topboxcon">
                                    <ul>
                                        <li>机房：<span>{{top_info.croom}}</span></li>
                                        <li>设计容量(KW)：<span>{{top_info.capacity}}</span></li>
                                        <li>设计PUE：<span>{{top_info.design_pue}}</span></li>
                                        <li>采集周期：<span>{{top_info.cycle}}</span></li>
                                        <li>创建时间：<span>{{top_info.time}}</span></li>
                                    </ul>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div class="loncom_energy_state_topbox2">
                        <div class="loncom_energy_state_topbox">
                            <div class="loncom_energy_state_topbox_img loncom_energy_state_top_energypue"><em></em></div>
                            <div class="loncom_energy_state_topbox_text">
                                <EnergyText v-bind:energyText="now_pue"></EnergyText>
                            </div>
                        </div>
                    </div>
                    <div class="loncom_energy_state_topbox2">
                        <div class="loncom_energy_state_topbox">
                            <div class="loncom_energy_state_topbox_img loncom_energy_state_top_energyload"><em></em></div>
                            <div class="loncom_energy_state_topbox_text">
                                <EnergyText v-bind:energyText="now_load"></EnergyText>
                            </div>
                        </div>
                    </div>
                </div>
                <!--center-->
                <div class="loncom_energy_state_center">
                    <div class="loncom_energy_state_borderbox">
                        <div class="loncom_energy_state_borderbox_title"><h2>能效状态</h2></div>
                        <div class="loncom_energy_state_center_text">
                            <EnergyText v-bind:energyText="center_pue" class="loncom_mb50"></EnergyText>
                            <EnergyText v-bind:energyText="center_power"></EnergyText>
                        </div>
                        <div class="loncom_energy_state_center_char">
                            <div class="loncom_energy_state_center_chartop">
                                <h2 class="loncom_fl">{{date_text}}</h2>
                                <div class="loncom_dis_inlineblock loncom_fr">
                                    <el-date-picker
                                        v-model="datevalue"
                                        type="datetimerange"
                                        :picker-options="pickerOptions"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期"
                                        @change="dateChange"
                                        size="mini">
                                    </el-date-picker>
                                </div>
                            </div>
                            <div class="loncom_energy_state_center_charcon" id="loncom_energy_state_center_charcon">

                            </div>
                        </div>
                    </div>
                </div>
                <!--bottom-->
                <div class="loncom_energy_state_bottom">
                    
                </div>
            </div>

            <div :class="{'loncom_active':top_items[1].loncom_active}" class="loncom_public_table">
                
            </div>
        </div>
    </div>
</template>


<script>
import TopChangeInfo from '../components/topChangeInfo.vue'
import EnergyText from '../components/energyText.vue'
export default {
    
  created () {
    
  },
  mounted() {
    scrollCon();
    var xData=["09:00", "09:03", "09:13", "09:14", "09:24","09:34","09:44","09:54","10:04","10:14","10:24"];
    var yData=[220, 18, 391, 234, 290, 343, 310, 301, 234, 390, 230, 310,18];
    areaChar("loncom_energy_state_center_charcon",xData,yData);
  },
   data() {
       var _this=this;
       return {
           //头部切换
          　top_items: [
　　　　　　　　　　{select:'状态',loncom_active:true},
　　　　　　　　　　{select:'配置',loncom_active:false},
　　　　　　　],
            //top信息
            top_info:{
                croom:'机房1',
                capacity:'120',
                design_pue:'1.5',
                cycle:'5分钟',
                time:'2016-12-12 00:00',
            },
            //top瞬时pue
            now_pue:{
                title:'瞬时PUE',
                num:'124,345',
                rate:'10%',
                rateDetail:'同比设计',
                rateClass:'loncom_energy_down'
            },
            //top瞬时负载
            now_load:{
                title:'瞬时负载',
                num:'54,323',
                rate:'8%',
                rateDetail:'负载率',
                rateClass:'loncom_energy_up'
            },
            //中间pue
            center_pue:{
                title:'累计PUE',
                num:'1.8',
                rate:'10%',
                rateDetail:'同比上周',
                rateClass:'loncom_energy_up'
            },
             //中间用电量
            center_power:{
                title:'本周用电量',
                num:'342',
                rate:'10%',
                rateDetail:'同比上周',
                rateClass:'loncom_energy_down'
            },
            //中间时间范围
            pickerOptions: {
                shortcuts: [{
                    text: '今日',
                    onClick(picker) {
                        const end = new Date();
                        const start=end.Format("yyyy-MM-dd 00:00:00")
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '本周',
                    onClick(picker) {
                        const end = new Date();
                        const nowDay=end.getDay();
                        let start=null;
                        if(nowDay!=0){
                            start=new Date(end.getTime()-3600*1000*24*(nowDay-1)).Format("yyyy-MM-dd 00:00:00");
                        }else{
                            start=new Date(end.getTime()-3600*1000*24*6).Format("yyyy-MM-dd 00:00:00");
                        }
                        picker.$emit('pick', [start, end]);
                    }
                },{
                    text: '本月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date(end.getFullYear(),end.getMonth(),1).Format("yyyy-MM-dd 00:00:00");
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            datevalue:[new Date().Format("yyyy-MM-dd 00:00:00"),new Date()], //默认今天
            //中间pue的text
            date_text:'今日PUE趋势',

       }
   },
   methods:{
       //中间pue趋势
       dateChange:function(dataArr,theText){
           console.log(dataArr)
           console.log(theText)
           //console.log(dataArr[1].Format("yyyy-MM-dd hh:mm:ss"))
           var xData=["09:00", "09:03", "09:13", "09:14", "09:24","09:34","09:44","09:54","10:04","10:14","10:24"];
            var yData=[220, 18, 391, 234, 290, 343, 310, 301, 234, 390, 230, 310,18];
            areaChar("loncom_energy_state_center_charcon",xData,yData);
       },
       dateChangeText:function(dataArr,theText){
            if(theText=="day"){
                this.date_text="今日PUE趋势";
            }else if(theText=="week"){
                this.date_text="本周PUE趋势";
            }else if(theText=="moon"){
                this.date_text="本月PUE趋势";
            }
            this.dateChange(dataArr,theText);
       }


   },
   components:{TopChangeInfo,EnergyText},
}
</script>