<template>
  <div :class="{'loncom_active':energyState[0].loncom_active}" class="loncom_public_card">
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
              <div class="loncom_energy_state_center_text loncom_energy_state_boxcon">
                  <EnergyText v-bind:energyText="center_pue" class="loncom_mb50"></EnergyText>
                  <EnergyText v-bind:energyText="center_power"></EnergyText>
              </div>
              <div class="loncom_energy_state_center_char loncom_energy_state_boxcon">
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
                              @change="dateChange(datevalue)"
                              size="mini">
                          </el-date-picker>
                      </div>
                  </div>
                  <div class="loncom_energy_state_center_charcon" id="loncom_energy_state_center_charcon"></div>
              </div>
          </div>
      </div>
      <!--bottom-->
      <div class="loncom_energy_state_bottom">
          <div class="loncom_energy_state_bottombox">
              <div class="loncom_energy_state_borderbox">
                  <div class="loncom_energy_state_borderbox_title"><h2>能耗分布</h2></div>
                  <div class="loncom_energy_state_boxcon" id="loncom_energy_state_pie"></div>
              </div>
          </div>
          <div class="loncom_energy_state_bottombox">
              <div class="loncom_energy_state_borderbox">
                  <div class="loncom_energy_state_borderbox_title"><h2>用电排行</h2><router-link :to="{path:'/'}" class="loncom_fr loncom_color108EE9">更多</router-link></div>
                  <div class="loncom_energy_state_table loncom_energy_state_boxcon">
                      <el-search-table-pagination type="local" class="loncom_position_relative" :show-pagination="false" :data="power_info" :columns="power_info_columns" >                                           
                          
                          <template slot-scope="scope" slot="preview-chain">
                              <span v-if="scope.row.chainType=='1'">
                                  <em style="color:#00A950">{{ scope.row.chain }}↑</em>
                              </span>
                              <span v-else-if="scope.row.chainType=='0'">
                                  <em style="color:#F04133">{{ scope.row.chain }}↓</em>
                              </span>
                          </template>

                      </el-search-table-pagination>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import EnergyText from './energyText.vue'
export default {
  created () {
    
  },
  mounted() {
       //中间pue趋势
    var xData=["09:00", "09:03", "09:13", "09:14", "09:24","09:34","09:44","09:54","10:04","10:14","10:24"];
    var yData=[220, 18, 391, 234, 290, 343, 310, 301, 234, 390, 230, 310,18];
    areaChar("loncom_energy_state_center_charcon",xData,yData);
    //能效分布
    var dataJson=[
                    {value:30, name:'照明'},
                    {value:40, name:'IT设备'},
                    {value:10, name:'空调'},
                    {value:10, name:'配电量'},
                    {value:10, name:'其它'}
                ];
    pieChar("loncom_energy_state_pie",dataJson);
  },
   data() {
       return {
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
                        const theDate = new Date();
                        const start=theDate.Format("yyyy-MM-dd 00:00:00");
                        const end=theDate.Format("yyyy-MM-dd 23:59:59");
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '本周',
                    onClick(picker) {
                        const theDate = new Date();
                        const nowDay=theDate.getDay();
                        let start=null;
                        let end=null;
                        if(nowDay!=0){
                            start=new Date(theDate.getTime()-3600*1000*24*(nowDay-1)).Format("yyyy-MM-dd 00:00:00");
                            end=new Date(theDate.getTime()+3600*1000*24*(7-nowDay)).Format("yyyy-MM-dd 23:59:59"); 
                        }else{
                            start=new Date(theDate.getTime()-3600*1000*24*6).Format("yyyy-MM-dd 00:00:00");
                            end=theDate.Format("yyyy-MM-dd 23:59:59");
                        }
                        picker.$emit('pick', [start, end]);
                    }
                },{
                    text: '本月',
                    onClick(picker) {
                        const theDate = new Date();
                        let theMonth=theDate.getMonth();
                        const start = new Date(theDate.getFullYear(),theMonth,1).Format("yyyy-MM-dd 00:00:00");
                        let nextMonth=theMonth+1;
                        const end=new Date(new Date(theDate.getFullYear(),nextMonth,1)-1000*60*60*24).Format("yyyy-MM-dd 23:59:59");
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            datevalue:[new Date().Format("yyyy-MM-dd 00:00:00"),new Date()], //默认今天
            //中间pue的text
            date_text:'今日PUE趋势',
            //中间pue的选择的今日本周本月标识
            date_identity:'0',
            //用电排行
            power_info:[
                {id:'1',ranking:'1',moon:'6月份',power:'120',cost:'120',chain:'10%',chainType:'1'}, //chainType1表示升高，0表示下降，不用1,0表示，根据后台给的去判断也可以
                {id:'1',ranking:'2',moon:'7月份',power:'120',cost:'120',chain:'20%',chainType:'1'},
                {id:'1',ranking:'3',moon:'8月份',power:'120',cost:'120',chain:'20%',chainType:'0'},
                {id:'1',ranking:'4',moon:'9月份',power:'120',cost:'120',chain:'20%',chainType:'1'},
                {id:'1',ranking:'5',moon:'5月份',power:'120',cost:'120',chain:'10%',chainType:'0'},
                {id:'1',ranking:'6',moon:'10月份',power:'120',cost:'120',chain:'10%',chainType:'0'},
            ],
            power_info_columns:[
                { prop: 'ranking', label: '排名',width:60},
                { prop: 'moon', label: '月份'},
                { prop: 'power', label: '用电量'},
                { prop: 'cost', label: '电费',minWidth:100},
                { prop: 'chain', label: '周环比',slotName:'preview-chain',width:80},
            ],
       }
   },
   methods:{
       //中间pue趋势
       dateChange:function(dataArr){
           console.log(dataArr)
           //console.log(dataArr[1].Format("yyyy-MM-dd hh:mm:ss"))
           var nowDate=new Date();
           var dayStart=nowDate.Format("yyyy-MM-dd 00:00:00");
           var dayEnd=nowDate.Format("yyyy-MM-dd 23:59:59");
           var weekStart=""; 
           var weekEnd="";
           var nowDay=nowDate.getDay();
           if(nowDay!=0){
                weekStart=new Date(nowDate.getTime()-3600*1000*24*(nowDay-1)).Format("yyyy-MM-dd 00:00:00");
                weekEnd=new Date(nowDate.getTime()+3600*1000*24*(7-nowDay)).Format("yyyy-MM-dd 23:59:59"); 
            }else{
                weekStart=new Date(nowDate.getTime()-3600*1000*24*6).Format("yyyy-MM-dd 00:00:00");
                weekEnd=nowDate.Format("yyyy-MM-dd 23:59:59");
            }
            var theMonth=nowDate.getMonth();
            var nextMonth=theMonth+1;
            var moonStart=new Date(nowDate.getFullYear(),theMonth,1).Format("yyyy-MM-dd 00:00:00");
            var moonEnd=new Date(new Date(nowDate.getFullYear(),nextMonth,1)-1000*60*60*24).Format("yyyy-MM-dd 23:59:59");
            
            //显示文本
            console.log(weekStart);
            console.log(weekEnd);
            console.log(moonStart);
            console.log(moonEnd);
            if(dataArr[0]==dayStart&&dataArr[1]==dayEnd){
                this.date_text="今日PUE趋势";
                this.date_identity="0";
            }else if(dataArr[0]==weekStart&&dataArr[1]==weekEnd){
                this.date_text="本周PUE趋势";
                this.date_identity="1";
            }else if(dataArr[0]==moonStart&&dataArr[1]==moonEnd){
                this.date_text="本月PUE趋势";
                this.date_identity="2";
            }else{
                this.date_text="自定义时段PUE趋势";
                this.date_identity="3";
            }

           var xData=["09:00", "09:03", "09:13", "09:14", "09:24","09:34","09:44","09:54","10:04","10:14","10:24"];
            var yData=[220, 180, 391, 234, 290, 343, 310, 301, 234, 390, 230, 310,180];
            areaChar("loncom_energy_state_center_charcon",xData,yData);
       },


   },
  props:["energyState"],
  components:{EnergyText},

}
</script>

