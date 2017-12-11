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
                        <div class="loncom_index_change">
                            <i class="fa fa-th-large"></i>
                        </div>
                        <div class="loncom_index_left_box_body loncom_active">
                            <router-link :to="{path:item.url}">
                                <div class="loncom_index_left_box_info">
                                    <em :class="item.imgClass"></em>
                                </div>
                                <div class="loncom_index_left_box_info">
                                    <h2>{{item.title}}</h2>
                                    <div class="loncom_index_left_box_info_con" v-show="item.infoClass">
                                        <p>
                                            <span class="loncom_img loncom_index_shebei"></span>
                                            <span class="loncom_text">设备：</span>
                                            <span class="loncom_num">0</span>
                                        </p>
                                    </div>
                                    <div class="loncom_index_left_box_info_con" v-show="item.infoClass">
                                        <p>
                                            <span class="loncom_img loncom_index_yichang"></span>
                                            <span class="loncom_text">异常：</span>
                                            <span class="loncom_num">0</span>
                                        </p>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                        <div class="loncom_index_left_box_body">
                            <router-link :to="{path:item.url}">
                            234
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
                        <div class="loncom_index_change">
	                        <i class="fa fa-th-large"></i>
                       </div>
                    </div>
                    <div class="loncom_index_body_right_list loncom_scroll_con">
                        <div class="loncom_index_wrapper2_con loncom_active">
                            <ul id="loncom_alarms">
                                <li v-for="(item, index) in listAlarm.alarmData">
                                    <div class="loncom_index_list_input">
                                        <input type="checkbox" :id="item.id" class="loncom_index_checkbox"><label :for="item.id"></label>
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
                        <router-link :to="{path:listAlarm.alarmUrl}">
                            <div class="loncom_index_wrapper2_con">
                                <div id="loncom_LevelChart" style="float:left; width:50%; height:100%"></div>
                                <div id="loncom_TypeChart" style="float:left; width:50%; height:100%"></div>
                                <div style="clear: both;"></div>
                            </div>
                        </router-link>
                    </div>
                    <div class="loncom_index_body_right_list_checkall" id="loncom_alerm_check_all">
                        <div class="loncom_index_list_input">
                            <input type="checkbox" id="loncom_index_checkbox_all" class="loncom_index_checkbox"><label for="loncom_index_checkbox_all"></label>
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



export default {
  created () {
    
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
    
    $(".loncom_index_change").on("click",function(){
        if($(this).siblings(".loncom_index_left_box_body").eq(0).hasClass("loncom_active")){
            $(this).siblings(".loncom_index_left_box_body").eq(0).removeClass("loncom_active");
            $(this).siblings(".loncom_index_left_box_body").eq(1).addClass("loncom_active");
            $(this).find(".fa").addClass("fa-th-list");
        }else if($(this).siblings(".loncom_index_left_box_body").eq(1).hasClass("loncom_active")){
            $(this).siblings(".loncom_index_left_box_body").eq(0).addClass("loncom_active");
            $(this).siblings(".loncom_index_left_box_body").eq(1).removeClass("loncom_active");
            $(this).find(".fa").removeClass("fa-th-list");
        }else if($(this).parent(".loncom_index_body_right_title").siblings(".loncom_index_body_right_list").find(".loncom_index_wrapper2_con").eq(0).hasClass("loncom_active")){
            $(this).parent(".loncom_index_body_right_title").siblings(".loncom_index_body_right_list").find(".loncom_index_wrapper2_con").eq(0).removeClass("loncom_active");
            $(this).parent(".loncom_index_body_right_title").siblings(".loncom_index_body_right_list").find(".loncom_index_wrapper2_con").eq(1).addClass("loncom_active");
            $(this).find(".fa").addClass("fa-th-list");
            $("#loncom_alerm_check_all").hide();
        }else{
            $(this).parent(".loncom_index_body_right_title").siblings(".loncom_index_body_right_list").find(".loncom_index_wrapper2_con").eq(0).addClass("loncom_active");
            $(this).parent(".loncom_index_body_right_title").siblings(".loncom_index_body_right_list").find(".loncom_index_wrapper2_con").eq(1).removeClass("loncom_active");
            $(this).find(".fa").removeClass("fa-th-list");
            $("#loncom_alerm_check_all").show();
        }
    });
    

  },
  data() {
    return {
        dialogVisible: false,
        isShow:true,
        listData:[
            {url:"/loncom/environment",title:"环境",imgClass:"loncom_index_hj",infoClass:true},
            {url:"/loncom/power",title:"动力",imgClass:"loncom_index_kt",infoClass:true},
            {url:"/loncom/equipment",title:"IT设备",imgClass:"loncom_index_pd",infoClass:false},
            {url:"/loncom/security",title:"安防",imgClass:"loncom_index_af",infoClass:false}
        ],
        listAlarm:{
            alarmUrl:"/loncom/alarm",
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
        this.$router.push({path:'/login'});
    },
   
  }
  
}
</script>

