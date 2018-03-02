<template>
  <div>
    <ul>
      <li v-for="item in cardInfo.data">
          <div class="loncom_public_card_box loncom_public_shadow">
              <div class="loncom_public_card_box_top">
                  <div class="loncom_fl">{{item.dev_name}}</div>
                  <div class="loncom_fr loncom_public_card_box_topr">
                      <div class="loncom_public_card_box_toprtitle">启用</div>
                      <div class="loncom_public_card_box_toprcon loncom_public_shadow">
                          <a href="javascript:;">停用</a>
                          <a href="javascript:;">编辑</a>
                          <a href="javascript:;">删除</a>
                          <a href="javascript:;">克隆</a>
                      </div>
                  </div>
              </div>
              <div class="loncom_public_card_box_center">
                  <div class="loncom_fl loncom_public_card_box_cimg">
                      <img src="static/default/images/shebei.png">
                  </div>
                  <div class="loncom_fr loncom_public_card_box_cinfo">
                      <p><em>通讯状态</em>：<span v-if="item.commStatus==0">正常</span><span style="color: #f00" v-else>失败</span></p>
                      <p><em>告警状态</em>：<span v-if="item.almStatus==0">正常</span><span style="color: #f00" v-else>告警</span></p>
                      <template v-for="innerItem in item.DevvouList">
                        <p v-if="innerItem.id=='HT_Temp'"><em>{{innerItem.ch}}</em>：<span>{{innerItem.value}}</span></p>
                        <p v-else-if="innerItem.id=='HT_Hum'"><em>{{innerItem.ch}}</em>：<span>{{innerItem.value}}</span></p>
                      </template>
                  </div>
              </div>
              <div class="loncom_public_card_box_bottom">
                  <div @click="trend()">趋势</div>
                  <div @click="events()">事件</div>
                  <div v-if="item.htmlurl==''" style="color:#999;cursor:auto;">详情</div>
                  <div v-else @click="detail(item)">详情</div>
              </div>
          </div>
      </li>
    </ul>
    <DialogTendency v-bind:dialogTendency="dialogTendency"></DialogTendency>
    <DialogHistoricalEvents v-bind:dialogHistoricalEvents="dialogHistoricalEvents"></DialogHistoricalEvents>
    </div>
</template>

<script>

import DialogTendency from './dialogTendency.vue'
import DialogHistoricalEvents from './dialogHistoricalEvents.vue'

export default {
   name: 'loncom_card',
    data(){
      return {
        dialogTendency:{
          visible:false,
          title:"趋势分析",
          width: "1000px",
        },
        dialogHistoricalEvents:{
          visible:false,
          title:"历史事件",
          width: "1000px",
        },
      }
    },
    methods:{
      //趋势
        trend(){ 
            this.dialogTendency.visible=true;
        },
        //事件
        events(){
            this.dialogHistoricalEvents.visible=true;
        },
        //详情
        detail(item){
            this.$router.push({path:'/loncom/environment/'+item.htmlurl});
        },
    },
    
    props:["cardInfo"],  //子组件在props中创建一个属性，用以接收父组件传过来的值,和父组件v-bind:parentToChild相同
   components:{DialogTendency,DialogHistoricalEvents},
}
</script>

