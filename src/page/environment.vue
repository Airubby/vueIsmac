<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <h2>环境系统</h2>
            <ul class="loncom_fr">
                <li v-for="item in top_items" @click="tabs(item)" :class="{'loncom_active':item.loncom_active}">{{item.select}}</li>
            </ul>
        </div>
        <div class="loncom_scroll_con loncom_environment">
            <div :class="{'loncom_active':loncom_active}" class="loncom_public_card loncom_environment_card">
                <CardInfo v-bind:cardInfo="cardInfo"></CardInfo>
            </div>

            <div :class="{'loncom_active':!loncom_active}" class="loncom_public_table loncom_environment_table">
                
            </div>
        </div>
    </div>
</template>


<script>
import Vue from 'vue' 
import CardInfo from '../components/cardInfo.vue'


export default {
    
  created () {
    
  },
  mounted() {

  },
   data() {
       return {
           //头部切换
            loncom_active: true,
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
                        htmlurl:"baidu.com",
                        devtypename:"温湿度",
                        dev_name:"05",
                        dev_image:"wenshidu.png",
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
                        dev_name:"06",
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
            }
       }
   },
   methods:{
        //头部切换
        tabs (theitem) {
            this.$nextTick(function () {
　　　　　　　　this.top_items.forEach(function (item) {
　　　　　　　　　　Vue.set(item,'loncom_active',false);
　　　　　　　　});
　　　　　　　　Vue.set(theitem,'loncom_active',true);
               this.loncom_active=!(this.loncom_active);
　　　　　　});
        },
   },
   components:{CardInfo},
}
</script>










