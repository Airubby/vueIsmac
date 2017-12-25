<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <h2>系统管理</h2>
            <TopChangeInfo v-bind:topChangeInfo="top_items"></TopChangeInfo>
        </div>
        <div class="loncom_scroll_con loncom_right_changecon">
            <!--通知-->
            <div :class="{'loncom_active': top_items[0].loncom_active}" class="loncom_public_card">
                <!--事件通知-->
                <div class="loncom_pr20 loncom_mb50">
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
                                    <p>
                                        {{scope.row.system_time}}
                                    </p>
                                    <a href="javascript:;" class="loncom_color" @click="informEditTime(scope.row)">修改</a>
                                </template>
                            </el-table-column>
                            <el-table-column label="告警接收人">
                                <template slot-scope="scope">
                                    <p>
                                        {{scope.row.system_user}}
                                    </p>
                                    <a href="javascript:;" class="loncom_color" @click="informEditUser(scope.row)">修改</a>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <DialogSystemInformTime v-bind:dialogSystemInformTime="inform_editTime"></DialogSystemInformTime>
                    <DialogSystemInformUser v-bind:dialogSystemInformUser="inform_editUser"></DialogSystemInformUser>
                </div>
                <!--通知装置-->
                <div class="loncom_system_inform_top loncom_pr20">
                    <div class="loncom_system_inform_top_left"><h2>通知装置</h2></div>
                    <div class="loncom_sysinfo_box loncom_system_inform_top_right">
                         提示：设置事件通知前请配置告警装置，告警装置工作异常将会影响告警通知正常发送。
                    </div>
                </div>
                <div class="loncom_system_inform_card">
                    <ul>
                        <li>
                            <div class="loncom_system_inform_cardbox">
                                <div class="loncom_system_inform_cardboxtop">
                                    <div class="loncom_system_inform_cardboxtopimg"></div>
                                    <div class="loncom_system_inform_cardboxtoptext">
                                        <h2>短信猫</h2>
                                        <p>说明：通过短信猫将告警事件以短信形式通知到用户手机</p>
                                    </div>
                                </div>
                                <div class="loncom_system_inform_cardboxbottom">
                                    <a href="javascript:;">测试</a>
                                    <em>|</em>
                                    <a href="javascript:;">设置</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="loncom_system_inform_cardbox">
                                <div class="loncom_system_inform_cardboxtop">
                                    <div class="loncom_system_inform_cardboxtopimg"></div>
                                    <div class="loncom_system_inform_cardboxtoptext">
                                        <h2>声光报警器</h2>
                                        <p>说明：通过现场声光通知用户处理告警事件</p>
                                    </div>
                                </div>
                                <div class="loncom_system_inform_cardboxbottom">
                                    <a href="javascript:;">测试</a>
                                    <em>|</em>
                                    <a href="javascript:;">设置</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="loncom_system_inform_cardbox">
                                <div class="loncom_system_inform_cardboxtop">
                                    <div class="loncom_system_inform_cardboxtopimg"></div>
                                    <div class="loncom_system_inform_cardboxtoptext">
                                        <h2>邮件服务器</h2>
                                        <p>说明：通过邮件将告警事件或报表发送到用户指定邮箱</p>
                                    </div>
                                </div>
                                <div class="loncom_system_inform_cardboxbottom">
                                    <a href="javascript:;">测试</a>
                                    <em>|</em>
                                    <a href="javascript:;">设置</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="loncom_system_inform_cardbox">
                                <div class="loncom_system_inform_cardboxtop">
                                    <div class="loncom_system_inform_cardboxtopimg"></div>
                                    <div class="loncom_system_inform_cardboxtoptext">
                                        <h2>电话盒</h2>
                                        <p>说明：通过自动拨打电话将告警事件以语音形式通知到用户手机或座机</p>
                                    </div>
                                </div>
                                <div class="loncom_system_inform_cardboxbottom">
                                    <a href="javascript:;">测试</a>
                                    <em>|</em>
                                    <a href="javascript:;">设置</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
            <!--用户-->
            <div :class="{'loncom_active':top_items[1].loncom_active}" class="loncom_public_card">
                
                <ul>
                    <li>
                        <div class="loncom_public_card_box loncom_public_shadow loncom_system_user_add" @click="addUser">
                            <div class="loncom_public_add"><em></em><em></em></div>
                        </div>
                    </li>
                    <li v-for="item in users_info.data">
                        <div class="loncom_public_card_box loncom_public_shadow">
                            <div class="loncom_public_card_box_top loncom_overflow_hidden">
                                <div class="loncom_system_user">
                                    <div class="loncom_system_user_img">
                                        <img src="static/default/images/icon-touxiang.png" >
                                    </div>
                                    <div class="loncom_system_user_text">
                                        <p>{{item.userid}}</p>
                                        <p class="loncom_color">{{item.rolename}}</p>
                                    </div>
                                </div>
                                <div class="loncom_system_user_right">
                                    <span><em></em>未启用</span>
                                </div>
                            </div>
                            <div class="loncom_system_user_info"> 
                                <p>姓名：{{item.name}}</p>     
                                <p>手机：{{item.phone}}</p>    
                                <p>门卡：{{item.access_id}}</p>   
                                <p>邮箱：{{item.email}}</p>    
                                <p>备注：</p>
                            </div>
                            <div class="loncom_system_user_bottom">
                                <a href="javascript:;" @click="editUser"><i class="fa fa-edit"></i></a>
                                <a href="javascript:;" @mouseenter="enter(item)" @mouseleave="leave(item)">
                                    <i class="fa fa-ellipsis-h"></i>
                                    <div class="loncom_system_user_bottombox loncom_public_shadow" v-show="item.bottomShow">
                                        <a href="javascript:;">操作日志</a>
                                        <a href="javascript:;">禁用</a>
                                        <a href="javascript:;">删除</a>
                                    </div>    
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
            <!--后台-->
            <div :class="{'loncom_active':top_items[2].loncom_active}" class="loncom_public_table loncom_system_sys">
                <div class="loncom_public_tab">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="平台信息" name="first">
                            <div class="loncom_public_tabbox loncom_public_tabbox0">
                                <div class="loncom_public_tabboxcon loncom_public_tabboxcon0">
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>平台名称
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input v-model="platform_info.name" size="small"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>机房名称
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input v-model="platform_info.itroom" size="small"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>系统编码
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input v-model="platform_info.sys_code" size="small"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            平台LOGO
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <div class="loncom_system_syslogo">
                                                <img :src="'static/public/images/'+platform_info.logo">
                                            </div>
                                            <el-upload
                                                class="upload-demo"
                                                action="https://jsonplaceholder.typicode.com/posts/"
                                                multiple
                                                :limit="3">
                                                <el-button size="small" type="primary">LOGO上传<i class="el-icon-upload el-icon--right"></i></el-button>
                                                <div slot="tip" class="el-upload__tip">只能上传jpg/png格式文件，文件不能超过50kb</div>
                                            </el-upload>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            供应商
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input v-model="platform_info.provider" size="small"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            客服热线
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input v-model="platform_info.hotline" size="small"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            客服邮箱
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input v-model="platform_info.email" size="small"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                        License
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-upload
                                                class="upload-demo"
                                                action="https://jsonplaceholder.typicode.com/posts/"
                                                multiple
                                                :limit="3">
                                                <el-button size="small" type="primary" class="loncom_public_fl">选择授权文件<i class="el-icon-upload el-icon--right"></i></el-button>
                                                <a href="javascript:;" class="loncom_system_syslicense">获取机器码</a>
                                            </el-upload>
                                            
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            到期期限
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input v-model="platform_info.deadline" size="small"></el-input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="系统参数" name="second">
                            <div class="loncom_public_tabbox loncom_public_tabbox1">
                                <div class="loncom_public_tabboxcon loncom_public_tabboxcon1">
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>IP地址
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input v-model="syspar_info.ip" size="small"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>网关
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input v-model="syspar_info.gageway" size="small"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>掩码
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input v-model="syspar_info.mask" size="small"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            历史数据清理
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <div>
                                                <div class="loncom_dis_inlineblock">
                                                    <span class="loncom_public_radio loncom_fl">
                                                        <input type="radio" name="radioClear" id="radioType1" :checked="!syspar_info.clear" class="loncom_public_radio_input"> 
                                                        <label for="radioType1"></label>
                                                    </span> 
                                                    <div class="loncom_dis_inline">关闭</div>
                                                </div>
                                                <div class="loncom_dis_inlineblock">
                                                    <span class="loncom_public_radio loncom_fl">
                                                        <input type="radio" name="radioClear" id="radioType2" :checked="syspar_info.clear" class="loncom_public_radio_input"> 
                                                        <label for="radioType2"></label>
                                                    </span> 
                                                    <div class="loncom_dis_inline">开启</div>
                                                </div>
                                            </div>
                                            <div class="loncom_list_box_info">启用历史数据清理则系统定期自动清理过期数据</div>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            最大保存天数
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input v-model="syspar_info.days" size="small"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            系统性能预警
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <div>
                                                <div class="loncom_dis_inlineblock">
                                                    <span class="loncom_public_radio loncom_fl">
                                                        <input type="radio" name="warning" id="radioType3" :checked="!syspar_info.warning" class="loncom_public_radio_input"> 
                                                        <label for="radioType3"></label>
                                                    </span> 
                                                    <div class="loncom_dis_inline">关闭</div>
                                                </div>
                                                <div class="loncom_dis_inlineblock">
                                                    <span class="loncom_public_radio loncom_fl">
                                                        <input type="radio" name="warning" id="radioType4" :checked="syspar_info.warning" class="loncom_public_radio_input"> 
                                                        <label for="radioType4"></label>
                                                    </span> 
                                                    <div class="loncom_dis_inline">开启</div>
                                                </div>
                                            </div>
                                            <div class="loncom_list_box_info">启用性能预警，达到预警条件触发告警</div>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            存储阀值
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input v-model="syspar_info.store" size="small"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            内存阀值
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input v-model="syspar_info.memory" size="small"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            CPU阀值
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input v-model="syspar_info.cpu" size="small"></el-input>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
                <div class="loncom_public_tabbtn">
                    <el-button type="info" plain>放弃修改</el-button>
                    <el-button type="primary">提交</el-button>
                </div>
            </div>
            <!--结束-->
        </div>
    </div>
</template>


<script>

import TopChangeInfo from '../components/topChangeInfo.vue'
import DialogSystemInformTime from '../components/dialogSystemInformTime.vue'
import DialogSystemInformUser from '../components/dialogSystemInformUser.vue'

export default {
    
  created () {
    
  },
  mounted() {
      //超出滚动
      scrollCon();
      tabScroll("0");
  },
   data() {
       return {
           //头部切换
          　top_items: [
　　　　　　　　　{select:'通知',loncom_active:true},
　　　　　　　　　{select:'用户',loncom_active:false},
                {select:'后台',loncom_active:false},
　　　　　　　],
            //*******通知的页面展示信息
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
            //修改通知用户
            inform_editUser:{
                visible:false,
                title:"修改通知接收人",
                width: "800px",
                data:{}
            },

            //*******用户信息列表
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
                        phone:"222",
                        bottomShow:false
                    },
                    {
                        userid:"admin1",
                        rolename:"管理员",
                        email:"123@qq.com",
                        name:"小小",
                        access_id:"1111",
                        phone:"222",
                        bottomShow:false
                    }
                ]
            },
            //**********后台信息
            activeName: 'first',  //切换信息
            platform_info:{
                name:'iSmartSite',
                itroom:'1号机房',
                sys_code:'ep3543423',
                logo:'logo.png',
                provider:'深圳龙控',
                hotline:'0123456789',
                email:'12222@qq.com',
                License:'',
                deadline:'永久'
            },
            syspar_info:{
                ip:'192.168.10.188',
                gageway:'192.168.10.1',
                mask:'255.255.255.0',
                clear: false,
                days:180,
                warning:false,
                store:'',
                memory:'',
                cpu:'',
            }

       }
   },
   methods:{
       
        //修改接收时段
        informEditTime(row){
            this.inform_editTime.visible=true;
            this.inform_editTime.data=row;
        },
        //修改告警接收人
        informEditUser(row){
            this.inform_editUser.visible=true;
            this.inform_editUser.data=row;
        },
        //短信，电话，邮件启停用
        informChange(row,_this){
            console.log(_this)
        },
         //*******新增用户
        addUser(){
            console.log("新增用户")
        },
        //编辑用户
        editUser(item){
            console.log("修改用户")
        },
        //enter移入显示
        enter:function(item){
            console.log()
            item.bottomShow=true;
        },
        //leave移出隐藏
        leave:function(item){
            item.bottomShow=false;
        },
        //********后台信息
        handleClick(tab) {  //超出滚动用
            tabScroll(tab.index);
        }
   },
   components:{TopChangeInfo,DialogSystemInformTime,DialogSystemInformUser},
}
</script>










