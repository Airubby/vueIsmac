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
                <ul>
                    <li>
                        <div class="loncom_public_card_box loncom_public_shadow">
                            <div class="loncom_public_card_box_top">
                                <div class="loncom_fl">122</div>
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
                                    <p><em>通讯状态</em>：<span>正常</span></p>
                                    <p><em>告警状态</em>：<span>正常</span></p>
                                    <p><em>温度</em>：<span>22.22</span></p>
                                    <p><em>湿度</em>：<span>30</span></p>
                                </div>
                            </div>
                            <div class="loncom_public_card_box_bottom">
                                <div @click="trend()">趋势</div>
                                <div @click="events()">事件</div>
                                <div @click="detail()">详情</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div :class="{'loncom_active':!loncom_active}" class="loncom_public_table loncom_environment_table">

            </div>
        </div>
    </div>
</template>


<script>
import Vue from 'vue' 
export default {
    
  created () {
    
  },
  mounted() {

  },
   data() {
       return {
           loncom_active: true,
           　top_items: [
　　　　　　　　　　{select:'卡片',loncom_active:true},
　　　　　　　　　　{select:'列表',loncom_active:false},
　　　　　　　　]
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
        //趋势
        trend(){

        },
        //事件
        events(){
            
        },
        //详情
        detail(){

        }
   }

}
</script>










