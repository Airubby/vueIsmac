<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <h2>环境系统</h2>
            <TopChangeInfo v-bind:topChangeInfo="top_items"></TopChangeInfo>
        </div>
        <div class="loncom_scroll_con loncom_right_changecon">
            <div :class="{'loncom_active':top_items[0].loncom_active}" class="loncom_public_card loncom_environment_card">
                <CardInfo v-bind:cardInfo="cardInfo"></CardInfo>
            </div>

            <div :class="{'loncom_active':top_items[1].loncom_active}" class="loncom_public_table loncom_environment_table">
                <TableInfo v-bind:tableInfo="tableInfo"></TableInfo>
            </div>
        </div>
    </div>
</template>


<script>

import CardInfo from '../components/cardInfo.vue'
import TableInfo from '../components/tableInfo.vue'
import TopChangeInfo from '../components/topChangeInfo.vue'

export default {
    
  created () {
   
  },
  mounted() {
    scrollCon();
  },
   data() {
       return {
           //头部切换
          　top_items: [
　　　　　　　　　　{select:'卡片',loncom_active:true},
　　　　　　　　　　{select:'列表',loncom_active:false},
　　　　　　　],
            cardInfo:{
                err_code:"0",
                err_msg:"操作成功",
                data:[
                    {
                        state:"1",
                        mgrobjid:"09110874",
                        htmlurl:"airDetail",
                        devtypename:"精密空调",
                        dev_name:"环境05",
                        dev_image:"jingmikongtiao.png",
                        commStatus:"1",
                        almStatus:1,
                        addrname:"数据机房",
                        addrid:"1",
                        DevvouList:[
                            {
                                ch:"温度",
                                datachar:"Analogy",
                                format:"",
                                id:"HT_Temp",
                                value:"0"
                            },
                            {
                                ch:"湿度",
                                datachar:"Analogy",
                                format:"",
                                id:"HT_Hum",
                                value:"0"
                            }
                        ]
                    },
                    {
                        state:"1",
                        mgrobjid:"09110874",
                        htmlurl:"",
                        devtypename:"温湿度",
                        dev_name:"环境06",
                        dev_image:"wenshidu.png",
                        commStatus:"0",
                        almStatus:0,
                        addrname:"数据机房",
                        addrid:"1",
                        DevvouList:[
                            {
                                ch:"温度",
                                datachar:"Analogy",
                                format:"",
                                id:"HT_Temp",
                                value:"19.5"
                            },
                            {
                                ch:"湿度",
                                datachar:"Analogy",
                                format:"",
                                id:"HT_Hum",
                                value:"35"
                            }
                        ]
                    },{
                        state:"1",
                        mgrobjid:"09110874",
                        htmlurl:"",
                        devtypename:"温湿度",
                        dev_name:"环境06",
                        dev_image:"wenshidu.png",
                        commStatus:"0",
                        almStatus:0,
                        addrname:"数据机房",
                        addrid:"1",
                        DevvouList:[
                            {
                                ch:"温度",
                                datachar:"Analogy",
                                format:"",
                                id:"HT_Temp",
                                value:"19.5"
                            },
                            {
                                ch:"湿度",
                                datachar:"Analogy",
                                format:"",
                                id:"HT_Hum",
                                value:"35"
                            }
                        ]
                    }
                ]
            },
            //table信息
            tableInfo:[
                {name:'1号温湿度',type:'环境系统 > 温湿度',addr:'1分行，机房1',ip:'127.0.0.1',controlState:'1',alarmState:'1'},
                {name:'2号温湿度',type:',环境系统 > 温湿度',addr:'1分行，机房1',ip:'127.0.0.1',controlState:'1',alarmState:'0'},
                {name:'3号温湿度',type:',环境系统 > 温湿度',addr:'1分行，机房1',ip:'127.0.0.1',controlState:'0',alarmState:'1'},
            ],
            
       }
   },
   methods:{
   },
   components:{CardInfo,TableInfo,TopChangeInfo},
}
</script>










