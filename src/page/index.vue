<template>
    <div class="loncom_index">
      <div class="loncom_index_body">
        <div class="loncom_index_body_top">
            <router-link to="/" class="loncom_logo">
                <img src="static/default/images/logo.png" alt=""><span>iSmac监控系统</span>
            </router-link>
            <div class="loncom_index_top_right">
                <ul>
                    <li class="loncom_index_userhover">
                        <a href="javascript:void(0)">
                            <i class="fa fa-user-circle-o"></i>
                            <span id="username">admin</span>
                        </a>
                        <div class="loncom_index_user_info loncom_public_shadow">
                            <h2>
                                <span>账户信息</span>
                                <a href="javascript:;">账户设置</a>
                            </h2>
                            <ul>
                                <li>
                                    <label>所在部门：</label><div class="loncom_dis_inline">销售部</div>
                                </li>
                                <li>
                                    <label>本次登录：</label><div class="loncom_dis_inline">2017-07-03 14:36:21</div>
                                </li>
                                <li>
                                    <label>登录地区：</label><div class="loncom_dis_inline">广东省深圳市 (IP：183.14.135.1)</div>
                                </li>
                                <li>
                                    <label>上次登录：</label><div class="loncom_dis_inline">2017-06-03 14:36:21</div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="javascript:void(0)" @click="switcFullScreen">
                            <i class="fa fa-arrows-alt"></i>
                            <span>全屏</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" id="loncom_index_alarm">
                            <i class="fa fa-bell-o"></i>
                            <span>告警</span>
                            <em>10</em>
                        </a>
                    </li>
                    <li class="loncom_index_stylehover">
                        <a href="javascript:void(0)" id="loncom_index_style">
                            <i class="fa fa-th"></i>
                            <span>风格</span>
                        </a>
                        <div class="loncom_index_style_info loncom_public_shadow">
                            <ul>
                                <li>风格一</li>
                                <li>风格二</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="javascript:void(0)" @click="powerOff">
                            <i class="fa fa-power-off"></i>
                            <span>退出</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="loncom_index_body_cen">
          <div class="loncom_index_body_center">

            <div class="loncom_index_body_cen_left">
                <!--开始-->
                <div class="loncom_index_body_cen_left_box" v-for="item in listData">
                    <div class="loncom_index_body_left_box_con">
                        <div class="loncom_index_change" @click="listChange(item)">
                            <i class="fa fa-th-large" :class="{'fa-th-list':item.loncom_active}"></i>
                        </div>
                        <div class="loncom_index_left_box_body" :class="{'loncom_active':!item.loncom_active}">
                            <router-link :to="{path:item.menusrc}">
                                <div class="loncom_index_left_box_info">
                                    <em><img :src="'static/public/images/'+item.menuloga"></em>
                                </div>
                                <div class="loncom_index_left_box_info">
                                    <h2>{{item.menuname}}</h2>
                                    <div class="loncom_index_left_box_info_con" v-show="item.infoClass">
                                        <p>
                                            <span class="loncom_img loncom_index_shebei"></span>
                                            <span class="loncom_text">设备：</span>
                                            <span class="loncom_num">{{item.devcountall}}</span>
                                        </p>
                                    </div>
                                    <div class="loncom_index_left_box_info_con" v-show="item.infoClass">
                                        <p>
                                            <span class="loncom_img loncom_index_yichang"></span>
                                            <span class="loncom_text">异常：</span>
                                            <span class="loncom_num">{{item.isalarmall}}</span>
                                        </p>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                        <div class="loncom_index_left_box_body" :class="{'loncom_active':item.loncom_active}">
                            <router-link :to="{path:item.menusrc}"  v-show="item.infoClass" class="loncom_index_left_smallboxline">
                                <div class="loncom_index_left_smallbox" v-for="(inItem,index) in item.devlist" v-if="index<4">
                                    <div class="loncom_index_left_smallbox_img">
                                        <img :src="'static/public/images/'+inItem.devtypeimgurld">
                                    </div>
                                    <div class="loncom_index_left_smallbox_text">
                                        <p>
                                            <span>{{inItem.name}}</span><span>{{inItem.devcount}}</span>
                                        </p>
                                    </div>
                                </div>
                                <em></em>
                                <em></em>
                            </router-link>
                        </div>
                    </div>
                </div>
                <!--结束-->
            </div>
            <!--左侧菜单结束-->
            <div class="loncom_index_body_cen_right">
                <div class="loncom_index_body_cen_right_box1 loncom_index_right_box">
                    <div class="loncom_index_body_right_title loncom_index_body_right_box1_title">
                        <h2>告警</h2>
                        <div class="loncom_index_change"  @click="alarmChange">
	                        <i class="fa fa-th-large" :class="{'fa-th-list':listAlarm.loncom_active}"></i>
                       </div>
                    </div>
                    <div class="loncom_index_body_right_list loncom_scroll_con">
                        <div class="loncom_index_wrapper2_con" :class="{'loncom_active':!listAlarm.loncom_active}">
                            <ul id="loncom_alarms">
                                <li v-for="(item, index) in listAlarm.alarmData">
                                    <div class="loncom_index_list_input">
                                        <input type="checkbox" :id="item.id" class="loncom_index_checkbox" :checked="listAlarm.checkbox_select"><label :for="item.id"></label>
                                    </div>
                                    <router-link :to="{path:listAlarm.alarmUrl}">
                                        <div class="loncom_index_list_info">
                                            <h2><span :class="item.index_alarm_type"></span>{{item.title}}</h2>
                                            <p>{{item.date}},{{item.detail}}</p>
                                        </div>
                                    </router-link>
                                    <div class="loncom_index_list_ok">
                                        <span :class="item.index_alarm_sure"></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <router-link :to="{path:listAlarm.alarmUrl}" style="width: 100%;height:100%;display:block;">
                            <div class="loncom_index_wrapper2_con" :class="{'loncom_active':listAlarm.loncom_active}">
                                <div id="loncom_LevelChart" class="loncom_index_wrapper2_chart loncom_fl"></div>
                                <div id="loncom_TypeChart" class="loncom_index_wrapper2_chart loncom_fl"></div>
                            </div>
                        </router-link>
                    </div>
                    <div class="loncom_index_body_right_list_checkall" id="loncom_alerm_check_all" :class="{'loncom_active':listAlarm.loncom_active}">
                        <div class="loncom_index_list_input">
                            <input type="checkbox" id="loncom_index_checkbox_all" class="loncom_index_checkbox" :checked="listAlarm.checkbox_select"><label for="loncom_index_checkbox_all" @click="checkboxSelect"></label>
                        </div>
                        <a href="javascript:void(0);" class="loncom_index_checkall_btn">批量确认</a>
                    </div>

                </div>
                <!--告警列表结束-->
                <div class="loncom_index_body_cen_right_box2">
                    <div class="loncom_index_body_cen_right_boxl loncom_index_right_box">
                        <div class="loncom_index_body_right_title">
                            <h2>系统</h2>
                            <router-link to="/loncom/system">
                                <i class="fa fa-cog loncom_set"></i>
                            </router-link>
                        </div>
                        <div class="loncom_index_right_box2_con">
                            <ul>
                                <li>
                                    <div class="loncom_index_sys_num">
                                        30
                                    </div>
                                    <div class="loncom_index_sys_info">CPU(%)</div>
                                </li>
                                <li>
                                    <div class="loncom_index_sys_num">
                                        25
                                    </div>
                                    <div class="loncom_index_sys_info">内存(%)</div>
                                </li>
                                <li>
                                    <div class="loncom_index_sys_num">
                                        46
                                    </div>
                                    <div class="loncom_index_sys_info">硬盘(%)</div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="loncom_index_body_cen_right_boxr">
                        <div class="loncom_index_body_cen_right_boxrcon loncom_index_right_box">
                            <router-link to="/loncom/statement">
                                <div class="loncom_index_body_right_title">
                                    <h2>报表</h2>
                                </div>
                                <div class="loncom_index_body_right_con">
                                    <i class="fa fa-bar-chart loncom_chart"></i>
                                </div>
                            </router-link>
                        </div>
                    </div>

                    <div class="loncom_index_body_cen_right_boxr">
                        <div class="loncom_index_body_cen_right_boxrcon loncom_index_right_box">
                            <router-link to="/loncom/energy">
                                <div class="loncom_index_body_right_title">
                                    <h2>能效</h2>
                                </div>
                                <div class="loncom_index_body_right_con">
                                    <i class="fa fa-line-chart loncom_chart"></i>
                                </div>
                            </router-link>
                        </div>
                    </div>

                </div>
            </div>
            <!--右侧结束-->
          </div>
        </div>

        <div class="loncom_index_body_foot">
            <ul>
            	<li class="loncom_pre loncom_foot_act">
                    <a href="javascript:void(0)">&lt;</a>
                </li>
                <li class="loncom_active">
                    <a href="javascript:void(0)">1</a>
                </li>	
                 <li class="loncom_next loncom_foot_act">
                    <a href="javascript:void(0)">&gt;</a>
               	 </li>  
            </ul>
        </div>

      </div>
    </div>
</template>





<script>

import Vue from 'vue' 


export default {
  created () {
    // this.$api.get('/base/subevent', {"Url":"menu","action":"query","model":JSON.stringify({"id":"0"})}, r => {
    //   console.log(r);

    //   if(r.err_code=="0"){
    //     this.listData=r.data;
    //     for(var i=0;i<this.listData.length;i++){
    //         Vue.set(this.listData[i],'loncom_active',false);
    //         if(this.listData[i].devlist.length>0){
    //             var devcountall=0;
    //             var isalarmall=0;
    //             for(var j=0;j<this.listData[i].devlist.length;j++){
    //                 devcountall+=this.listData[i].devlist[j].devcount;
    //                 isalarmall+=this.listData[i].devlist[j].isalarm;
    //             }
    //             Vue.set(this.listData[i],'infoClass',true);
    //             Vue.set(this.listData[i],'devcountall',devcountall);
    //             Vue.set(this.listData[i],'isalarmall',isalarmall);
    //         }else{
    //             Vue.set(this.listData[i],'infoClass',false);
    //         }
    //     }
    //   }


    // })

        if(JSON.stringify(localStorage.loginInfo) == undefined){
            this.$message({
                message: "请登录",
                type: 'warning'
            });
            this.$router.push({path:'/login'});
            return;
        }


  },
  mounted() {
    //首页隐藏滚动
    indexScroll();
    //告警列表超出滚动
    scrollCon();
    $(window).resize(function(){
    	indexScroll();
    });

    function indexScroll(){
    	$(".loncom_index_body").height($(window).height());
    	$(".loncom_index_body").niceScroll({
    	    cursorcolor: "#ccc",//#CC0071 光标颜色
    	    cursoropacitymax: 0, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
    	    touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
    	    cursorwidth: "5px", //像素光标的宽度
    	    cursorborder: "0", // 游标边框css定义
    	    cursorborderradius: "0px",//以像素为光标边界半径
    	    autohidemode: true //是否隐藏滚动条
    	});
    }
    
    
    $(".loncom_index_wrapper2_chart").width(($(".loncom_index_wrapper2_con").width()-2)/2);
    var title="级别";
    var color=['#e2181b','#ec7f19','#dfc027',"#23abe1"];
    var data=[{"name":"紧急","value":"10"},{"name":"重要","value":"10"},{"name":"一般","value":"20"},{"name":"提示","value":"20"}];
    annulus("loncom_LevelChart",title,color,data);

    var title1="处理状态";
    var color1=['#e24758','#145fa0'];
    var data1=[{"name":"未确认","value":"10"},{"name":"已确认","value":"15"}];
    annulus("loncom_TypeChart",title1,color1,data1);

  },
  data() {
    return {
        //菜单列表
        listData:[
            {
                menusrc:"/loncom/environment",menuname:"环境",menuloga:"index_hj.png",infoClass:true,loncom_active:false,devcountall:2,isalarmall:2,
                devlist:[
                    {devcount:1,devtypeimgurld:"wenshidu.png",isalarm:1,name:"温湿度"},
                    {devcount:1,devtypeimgurld:"loushui.png",isalarm:1,name:"漏水"},
                ],
            },
            {menusrc:"/loncom/power",menuname:"动力",menuloga:"index_dl.png",infoClass:false,loncom_active:false,devlist:[]},
            {menusrc:"/loncom/equipment",menuname:"IT设备",menuloga:"index_it.png",infoClass:false,loncom_active:false,devlist:[]},
            {menusrc:"/loncom/security",menuname:"安防",menuloga:"index_af.png",infoClass:false,loncom_active:false,devlist:[]}
        ],
        listAlarm:{
            alarmUrl:"/loncom/alarm",
            loncom_active:false,
            checkbox_select:false,
            alarmData:[
                {id:"e1",index_alarm_type:"loncom_index_alarm1",index_alarm_sure:"loncom_index_alarm_ok",title:"机房漏水告警",date:"2017/2/13 10:25:00",detail:"漏水主机1，机房漏水状态"},
                {id:"e2",index_alarm_type:"loncom_index_alarm2",index_alarm_sure:"loncom_index_alarm_no",title:"机房温度过高告警",date:"2017/2/13 10:25:00",detail:"机房1，1号温湿度，温度，值=30.5"},
                {id:"e3",index_alarm_type:"loncom_index_alarm3",index_alarm_sure:"loncom_index_alarm_ok",title:"机房漏水告警",date:"2017/2/13 10:25:00",detail:"漏水主机1，机房漏水状态"},
                {id:"e4",index_alarm_type:"loncom_index_alarm4",index_alarm_sure:"",title:"机房温度过高告警",date:"2017/2/13 10:25:00",detail:"机房1，1号温湿度，温度，值=30.5"},
                {id:"e1",index_alarm_type:"loncom_index_alarm1",index_alarm_sure:"loncom_index_alarm_ok",title:"机房漏水告警",date:"2017/2/13 10:25:00",detail:"漏水主机1，机房漏水状态"},
                {id:"e2",index_alarm_type:"loncom_index_alarm2",index_alarm_sure:"loncom_index_alarm_no",title:"机房温度过高告警",date:"2017/2/13 10:25:00",detail:"机房1，1号温湿度，温度，值=30.5"},
                {id:"e3",index_alarm_type:"loncom_index_alarm3",index_alarm_sure:"loncom_index_alarm_ok",title:"机房漏水告警",date:"2017/2/13 10:25:00",detail:"漏水主机1，机房漏水状态"},
                {id:"e4",index_alarm_type:"loncom_index_alarm4",index_alarm_sure:"",title:"机房温度过高告警",date:"2017/2/13 10:25:00",detail:"机房1，1号温湿度，温度，值=30.5"},
            ]
        }
    }
  },
  methods:{
    switcFullScreen:function(){
        switcFullScreen();
    },
    powerOff:function(){
        this.$confirm("退出系统?", '提示', {
	        confirmButtonText: '确定',
	        cancelButtonText: '取消',
	        type: 'warning'
	        }).then(() => {
		    	 localStorage.clear();
                this.$router.push({path:'/login'});
	      });
        
    },
    //切换大小展示
    listChange:function(item){
        if(item.loncom_active){
            Vue.set(item,'loncom_active',false);
        }else{
            Vue.set(item,'loncom_active',true);
        }
    },
    //告警切换
    alarmChange:function(){
        this.listAlarm.loncom_active=this.listAlarm.loncom_active?false:true;
    },
    //告警全选
    checkboxSelect:function(){
        console.log(1)
        this.listAlarm.checkbox_select=this.listAlarm.checkbox_select?false:true;
    }
    
  }
  
}
</script>

