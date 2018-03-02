<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <h2>环境系统 &gt; 视图详情</h2>
        </div>
        <div class="loncom_scroll_con">
            <div class="loncom_detail loncom_overflow_hidden">
                <div class="loncom_detail_left">
                    <div class="loncom_detail_box">
                        <div class="loncom_detail_box_title">基本信息</div>
                        <div class="loncom_detail_box_li loncom_detail_publicbox">
                            <ul>
                                <li>
                                    <div class="loncom_detail_box_li_left">设备名称：</div>
                                    <div class="loncom_detail_box_li_right">测试空调</div>
                                </li>
                                <li>
                                    <div class="loncom_detail_box_li_left">设备类型：</div>
                                    <div class="loncom_detail_box_li_right">精密空调</div>
                                </li>
                                <li>
                                    <div class="loncom_detail_box_li_left">描述：</div>
                                    <div class="loncom_detail_box_li_right">-</div>
                                </li>
                                <li>
                                    <div class="loncom_detail_box_li_left">安装位置：</div>
                                    <div class="loncom_detail_box_li_right">数据机房</div>
                                </li>
                                <li>
                                    <div class="loncom_detail_box_li_left">维保期限：</div>
                                    <div class="loncom_detail_box_li_right">2020-10-10</div>
                                </li> 
                            </ul>
                        </div>
                    </div>
                    <div class="loncom_detail_box">
                        <div class="loncom_detail_box_title">监控信息</div>
                        <div id="loncom_detailbox">
                            <div class="loncom_detailboxcon">
                                <div class="loncom_detail_box_li">
                                    <div class="loncom_detail_box_li_title">运行参数：</div>
                                    <ul>
                                        <li>
                                            <div class="loncom_detail_box_li_left">室内温度：</div>
                                            <div class="loncom_detail_box_li_right">23</div>
                                        </li>
                                        <li>
                                            <div class="loncom_detail_box_li_left">室内湿度：</div>
                                            <div class="loncom_detail_box_li_right">56</div>
                                        </li>
                                        <li>
                                            <div class="loncom_detail_box_li_left">A相电压：</div>
                                            <div class="loncom_detail_box_li_right">-</div>
                                        </li>
                                        <li>
                                            <div class="loncom_detail_box_li_left">B相电压：</div>
                                            <div class="loncom_detail_box_li_right">-</div>
                                        </li>
                                        <li>
                                            <div class="loncom_detail_box_li_left">电源频率：</div>
                                            <div class="loncom_detail_box_li_right">-</div>
                                        </li> 
                                        <li>
                                            <div class="loncom_detail_box_li_left">温度设定点：</div>
                                            <div class="loncom_detail_box_li_right">-</div>
                                        </li> 
                                        <li>
                                            <div class="loncom_detail_box_li_left">湿度设定点：</div>
                                            <div class="loncom_detail_box_li_right">-</div>
                                        </li> 
                                        <li>
                                            <div class="loncom_detail_box_li_left">电压设定点：</div>
                                            <div class="loncom_detail_box_li_right">-</div>
                                        </li> 
                                    </ul>
                                </div>
                                <div class="loncom_detail_box_li">
                                    <div class="loncom_detail_box_li_title">运行参数：</div>
                                    <ul>
                                        <li>
                                            <div class="loncom_detail_box_li_left">室内温度：</div>
                                            <div class="loncom_detail_box_li_right">23</div>
                                        </li>
                                        <li>
                                            <div class="loncom_detail_box_li_left">室内湿度：</div>
                                            <div class="loncom_detail_box_li_right">56</div>
                                        </li>
                                        <li>
                                            <div class="loncom_detail_box_li_left">A相电压：</div>
                                            <div class="loncom_detail_box_li_right">-</div>
                                        </li>
                                        <li>
                                            <div class="loncom_detail_box_li_left">B相电压：</div>
                                            <div class="loncom_detail_box_li_right">-</div>
                                        </li>
                                        <li>
                                            <div class="loncom_detail_box_li_left">电源频率：</div>
                                            <div class="loncom_detail_box_li_right">-</div>
                                        </li> 
                                        <li>
                                            <div class="loncom_detail_box_li_left">温度设定点：</div>
                                            <div class="loncom_detail_box_li_right">-</div>
                                        </li> 
                                        <li>
                                            <div class="loncom_detail_box_li_left">湿度设定点：</div>
                                            <div class="loncom_detail_box_li_right">-</div>
                                        </li> 
                                        <li>
                                            <div class="loncom_detail_box_li_left">电压设定点：</div>
                                            <div class="loncom_detail_box_li_right">-</div>
                                        </li> 
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="loncom_detail_right">
                    <div class="loncom_detail_box">
                        <div class="loncom_detail_box_title">状态图</div>
                        <div class="loncom_detail_publicbox">
                            <div class="loncom_detail_pic">
                                <div class="img"><img src="static/public/images/jingmikongtiao.png" alt=""></div>
                                <div class="line">
                                    <em></em>
                                    <em></em>
                                    <em></em>
                                    <em></em>
                                </div>
                                <div class="state" id="state">
                                    <span class="normal"><em></em>通讯状态</span>
                                    <span class="unusual"><em></em>告警状态</span>
                                    <span class="normal"><em></em>开机状态</span> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="loncom_detail_box">
                        <div class="loncom_detail_box_title">回风温度</div>
                        <div class="loncom_detail_publicbox" id="loncom_detail_wd"></div>
                    </div>
                    <div class="loncom_detail_box">
                        <div class="loncom_detail_box_title">回风湿度</div>
                        <div class="loncom_detail_publicbox" id="loncom_detail_sd">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    
  created () {
    
  },
  mounted() {
    scrollCon();
    this.fullHeight();
    $(window).resize(function () {
    	fullHeight();
    });
    var color="#0A9ABD";
    var title='回风温度';
    var title1="回风湿度"
    var xData=["09:00", "09:03", "09:13", "09:14", "09:24","09:34","09:44","09:54","10:04","10:14","10:24"];
    var yData=[220, 18, 391, 234, 290, 343, 310, 301, 234, 390, 230, 310,18];
    lineChar("loncom_detail_wd",xData,yData,title,color)
    lineChar("loncom_detail_sd",xData,yData,title1,color)

  },
   data() {
       return {
          
       }
   },
   methods:{
       //全屏高度问题
      fullHeight:function(){
        var dHeight=$(window).height();
	    if(dHeight>785){
	    	$("#loncom_detailbox").css("height",dHeight-785+406+"px");
	    	$(".loncom_detail_publicbox").css("height",Math.round((dHeight-785)/3)+176+"px");
	    	$(".loncom_detail_pic").css("padding-top",Math.round((dHeight-785)/6)+"px");   
	    }else{
	    	$("#loncom_detailbox").css("height","406px");
	    	$(".loncom_detail_publicbox").css("height","176px");
	    	$(".loncom_detail_pic").css("padding-top","0px");  
	    }
        $('#loncom_detailbox').niceScroll(".loncom_detailboxcon",{
            cursorcolor: "rgba(204, 204, 204, 0.4)",//#CC0071 光标颜色
            cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
            touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
            cursorwidth: "2px", //像素光标的宽度
            cursorborder: "0", // 游标边框css定义
            cursorborderradius: "2px",//以像素为光标边界半径
            autohidemode: true //是否隐藏滚动条
        });
      },
   },
   components:{},
}
</script>










