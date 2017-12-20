<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <h2>系统管理</h2>
            <TopChangeInfo v-bind:topChangeInfo="top_items"></TopChangeInfo>
        </div>
        <div class="loncom_scroll_con loncom_right_changecon">
            <!--通知-->
            <div :class="{'loncom_active': top_items[0].loncom_active}" class="loncom_public_table">
                
                <div class="loncom_system_inform loncom_public_shadow" v-for="item in inform_box">
                    <div class="loncom_system_inform_title">
                        <div class="loncom_fl">
                            <span :class="item.topImgClass" class="loncom_system_informalarm"></span>
                            <strong>{{item.topTitle}}</strong>
                            <span><em>*</em>{{item.topDetail}}</span>
                        </div>
                        <div class="loncom_fr">
                            <a href="javascript:;" class="loncom_search_btn" @click="deploy(item)">配置</a>
                        </div>
                    </div>
                    <div class="loncom_system_inform_con">
                        <div class="loncom_system_inform_box">
                            <div>通知方式</div>
                            <div><em :class="{'loncom_active':item.system_dx}" class="loncom_system_dx"></em><span>短信</span></div>
                            <div><em :class="{'loncom_active':item.system_dh}" class="loncom_system_dh"></em><span>电话</span></div>
                            <div><em :class="{'loncom_active':item.system_sg}" class="loncom_system_sg"></em><span>声光</span></div>
                            <div><em :class="{'loncom_active':item.system_yj}" class="loncom_system_yj"></em><span>邮件</span></div>
                        </div>
                        <div class="loncom_system_inform_box">
                            <div>通知用户</div>
                            <div><em :class="{'loncom_active':item.system_gly}" class="loncom_system_gly"></em><span>管理员</span></div>
                            <div><em :class="{'loncom_active':item.system_xtyh}" class="loncom_system_xtyh"></em><span>系统用户</span></div>
                            <div><em :class="{'loncom_active':item.system_fxtyh}" class="loncom_system_fxtyh"></em><span>非系统用户</span></div>
                        </div>
                    </div>
                </div>

                <DialogDeploy v-bind:dialogDeploy="inform_deploy"></DialogDeploy>

            </div>
            <!--用户-->
            <div :class="{'loncom_active':top_items[1].loncom_active}" class="loncom_public_table">
                


            </div>
            <!--后台-->
            <div :class="{'loncom_active':top_items[2].loncom_active}" class="loncom_public_table">
                3
            </div>
            <!--结束-->
        </div>
    </div>
</template>


<script>

import TopChangeInfo from '../components/topChangeInfo.vue'
import DialogDeploy from '../components/dialogDeploy.vue'

export default {
    
  created () {
    
  },
  mounted() {
      //超出滚动
      scrollCon()
  },
   data() {
       return {
           //头部切换
          　top_items: [
　　　　　　　　　{select:'通知',loncom_active:true},
　　　　　　　　　{select:'用户',loncom_active:false},
                {select:'后台',loncom_active:false},
　　　　　　　],
            //通知的页面展示信息
            inform_box:[
                {
                    topImgClass:'loncom_index_alarm4',topTitle:'紧急',topDetail:'备注：等级高于等于“紧急”的事件将按此规则通知。',
                    system_dx:true,system_dh:false,system_sg:true,system_yj:true,system_gly:true,system_xtyh:true,system_fxtyh:false
                },
                {
                    topImgClass:'loncom_index_alarm3',topTitle:'重要',topDetail:'备注：等级高于等于“重要”的事件将按此规则通知。',
                    system_dx:false,system_dh:false,system_sg:true,system_yj:true,system_gly:true,system_xtyh:false,system_fxtyh:false
                },
                {
                    topImgClass:'loncom_index_alarm2',topTitle:'一般',topDetail:'备注：等级高于等于“一般”的事件将按此规则通知。',
                    system_dx:true,system_dh:false,system_sg:false,system_yj:false,system_gly:true,system_xtyh:true,system_fxtyh:false
                },
                {
                    topImgClass:'loncom_index_alarm1',topTitle:'提示',topDetail:'备注：等级高于等于“提示”的事件将按此规则通知。',
                    system_dx:true,system_dh:false,system_sg:false,system_yj:false,system_gly:false,system_xtyh:false,system_fxtyh:false
                }
            ],
            //通知页面配置要用的信息
            inform_deploy:{
                visible:false,
                title:"趋势分析",
                width: "600px",
                data:{}
            }
       }
   },
   methods:{
        deploy(item){
            this.inform_deploy.visible=true;
            this.inform_deploy.data=item;
        }
   },
   components:{TopChangeInfo,DialogDeploy},
}
</script>










