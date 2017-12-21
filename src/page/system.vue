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
            <div :class="{'loncom_active':top_items[1].loncom_active}" class="loncom_public_card">
                
                <ul>
                    <li v-for="item in users_info.data">
                        <div class="loncom_public_card_box loncom_public_shadow">
                            <div class="loncom_public_card_box_top">
                                <div class="loncom_fr loncom_public_card_box_topr">
                                    <div class="loncom_public_card_box_toprtitle">正常</div> 
                                    <div class="loncom_public_card_box_toprcon loncom_public_shadow">
                                        <a href="javascript:;" @click="editUser(item)">修改</a>
                                    </div>
                                </div>
                            </div>
                            <div class="loncom_public_card_box_center loncom_system_user">
                                <div class="loncom_system_user_img">
                                    <img src="static/default/images/icon-touxiang.png" >
                                </div>
                                <div class="loncom_system_user_text">
                                    <p>{{item.userid}}</p>
                                    <p class="loncom_color">{{item.rolename}}</p>
                                </div>
                            </div>
                            <div class="loncom_system_user_info">
                                <p>角色：{{item.rolename}}</p>    
                                <p>姓名：{{item.name}}</p>     
                                <p>手机：{{item.phone}}</p>    
                                <p>邮箱：{{item.email}}</p>    
                                <p>卡号：{{item.access_id}}</p>   
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="loncom_public_card_box loncom_public_shadow loncom_system_user_add" @click="addUser">
                            <div class="loncom_public_add"><em></em><em></em></div>
                        </div>
                    </li>
                </ul>

            </div>
            <!--后台-->
            <div :class="{'loncom_active':top_items[2].loncom_active}" class="loncom_public_table loncom_system_sys">
                <div class="loncom_system_sys_left">
                    <div class="loncom_public_shadow loncom_sys_scroll">
                        <div class="loncom_system_sys_leftcon">
                            
                        </div>
                    </div>
                </div>
                <div class="loncom_system_sys_right">
                    <div class="loncom_public_shadow loncom_system_sys_rightcon">
                        欢迎使用龙控iSmartSite产品
                    </div>
                </div>
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
      scrollCon();
      //后台中的滚动
      $('.loncom_sys_scroll').niceScroll(".loncom_system_sys_leftcon",{
        cursorcolor: "rgba(204, 204, 204, 0.4)",//#CC0071 光标颜色
        cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
        touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
        cursorwidth: "5px", //像素光标的宽度
        cursorborder: "0", // 游标边框css定义
        cursorborderradius: "2px",//以像素为光标边界半径
        autohidemode: true //是否隐藏滚动条
    });
    
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
                title:"告警等级通知配置",
                width: "600px",
                data:{}
            },
            //用户信息列表
            users_info:{
                err_code:"0",
                err_msg:"",
                data:[
                    {
                        userid:"admin",
                        rolename:"管理员",
                        email:"123@qq.com",
                        name:"小花",
                        access_id:"1111",
                        phone:"222"
                    },
                    {
                        userid:"admin1",
                        rolename:"管理员",
                        email:"123@qq.com",
                        name:"小小",
                        access_id:"1111",
                        phone:"222"
                    }
                ]
            }


       }
   },
   methods:{
        deploy(item){
            this.inform_deploy.visible=true;
            this.inform_deploy.data=item;
        },
        addUser(){
            console.log("新增用户")
        },
        editUser(item){
            console.log("修改用户")
        }
   },
   components:{TopChangeInfo,DialogDeploy},
}
</script>










