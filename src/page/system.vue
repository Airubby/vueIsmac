<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <h2>系统管理</h2>
            <TopChangeInfo v-bind:topChangeInfo="top_items"></TopChangeInfo>
        </div>
        <div class="loncom_scroll_con loncom_right_changecon">
            <!--通知-->
            <div :class="{'loncom_active': top_items[0].loncom_active}" class="loncom_public_table">
                
                <div class="loncom_system_inform_top">
                    <div class="loncom_system_inform_top_left"><h2>事件通知</h2></div>
                    <div class="loncom_sysinfo_box loncom_system_inform_top_right">
                         提示：您可以为每类事件设置接收人，对于设备故障等重要事件，建议您务必设置接收，防止事件遗漏造成损失。
                    </div>
                </div>
                <div class="loncom_system_inform_table">
                    <el-table :data="inform_table" border size="mini" style="width: 100%">
                        <el-table-column label="事件等级">
                            <template slot-scope="scope">
                                <i class="loncom_system_inform_tableimg" :class="scope.row.imgClass"></i>
                                <span style="margin-left: 10px">{{ scope.row.Title }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="短信">
                            <template slot-scope="scope">
                                <span class="loncom_public_check">
                                    <input type="checkbox" class="loncom_public_check_input" :id="'dx'+scope.$index" :checked="scope.row.system_dx">
                                    <label :for="'dx'+scope.$index" @click="informChange(scope.row,scope.row.system_dx)"></label>
                                </span>
                                <span style="margin-left: 10px" v-if="scope.row.system_dx">启用</span>
                                <span style="margin-left: 10px" v-else>不启用</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="电话">
                            <template slot-scope="scope">
                                <span class="loncom_public_check">
                                    <input type="checkbox" class="loncom_public_check_input" :id="'dh'+scope.$index" :checked="scope.row.system_dh">
                                    <label :for="'dh'+scope.$index" @click="informChange(scope.row,scope.row.system_dx)"></label>
                                </span>
                                <span style="margin-left: 10px" v-if="scope.row.system_dh">启用</span>
                                <span style="margin-left: 10px" v-else>不启用</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="邮件">
                            <template slot-scope="scope">
                                <span class="loncom_public_check">
                                    <input type="checkbox" class="loncom_public_check_input" :id="'yj'+scope.$index" :checked="scope.row.system_yj">
                                    <label :for="'yj'+scope.$index" @click="informChange(scope.row,scope.row.system_dx)"></label>
                                </span>
                                <span style="margin-left: 10px" v-if="scope.row.system_yj">启用</span>
                                <span style="margin-left: 10px" v-else>不启用</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="接收时段">
                            <template slot-scope="scope">
                                <span>
                                    {{scope.row.system_time}}
                                </span>
                                <a href="javascript:;" class="loncom_color" @click="informEditTime(scope.row)">修改</a>
                            </template>
                        </el-table-column>
                        <el-table-column label="告警接收人">
                            <template slot-scope="scope">
                                <span>
                                    {{scope.row.system_user}}
                                </span>
                                <a href="javascript:;" class="loncom_color" @click="informEditUser(scope.row)">修改</a>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>

                <DialogSystemInformTime v-bind:dialogSystemInformTime="inform_editTime"></DialogSystemInformTime>

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
                            <div class="loncom_system_sys_leftcon_title"><h2>系统</h2></div>
                            <div class="loncom_system_sys_leftconbox">
                                <div class="loncom_list_box">
                                    <div class="loncom_list_box_left">系统名称：</div>
                                    <div class="loncom_list_box_right">系统名称：</div>
                                </div>
                            </div>
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
import DialogSystemInformTime from '../components/dialogSystemInformTime.vue'

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
             inform_table: [
                 {
                     imgClass:'loncom_index_alarm4',Title:'紧急',system_dx:true,system_dh:false,system_yj:true,
                     system_time:'7*24小时',system_user:"李莫愁，杨过，小龙女"
                 },
                 {
                     imgClass:'loncom_index_alarm3',Title:'重要',system_dx:false,system_dh:true,system_yj:true,
                     system_time:'7*24小时',system_user:"李莫愁，杨过，小龙女"
                 },
                 {
                     imgClass:'loncom_index_alarm2',Title:'一般',system_dx:false,system_dh:false,system_yj:false,
                     system_time:'7*24小时',system_user:"李莫愁，杨过，小龙女"
                 },
                 {
                     imgClass:'loncom_index_alarm1',Title:'提示',system_dx:false,system_dh:false,system_yj:true,
                     system_time:'7*24小时',system_user:"李莫愁，杨过，小龙女"
                 }
             ],
        
            //修改通知时段
            inform_editTime:{
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
       
        //修改接收时段
        informEditTime(row){
            console.log(row)
            this.inform_editTime.visible=true;
            this.inform_editTime.data=row;
        },
        //修改告警接收人
        informEditUser(row){

        },
        //短信，电话，邮件启停用
        informChange(row,_this){
            console.log(_this)
        },

        addUser(){
            console.log("新增用户")
        },
        editUser(item){
            console.log("修改用户")
        }
   },
   components:{TopChangeInfo,DialogSystemInformTime},
}
</script>










