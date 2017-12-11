//ajax请求没用ajax请求
function open_ajax(url, parameter, request,type, error, async) {
    type = type ? type : "Get";
    $.ajax({
        type: type,
        url: url,
        data: parameter,
        async: async ? async : true,
        cache:false,
        error: function () {
            if (error != null && error != "") {
                error();
            }
        },
        success: function (msg) {
            if (request)
                request(msg);
        }
    });
}
//替换字符串,指定用在样式替换上
function replaceString(string,str){
    var startStr=string.substring(0,9);
    var endStr=string.substring(string.indexOf('/css/'),string.length);
    return startStr+str+endStr;
}
//超出滚动
function scrollCon(){
	//获取要滚动的dom高度
    if($(".loncom_scroll_con").length>0){
    	var docHeight=$(window).height();
        var scrollHieght=$(".loncom_public_top").height();
        var thisHeight=$(".loncom_scroll_con").height();
        if($(".loncom_scroll_con").siblings().hasClass("loncom_public_top")){
        	$(".loncom_scroll_con").height(docHeight-scrollHieght);
        }else{
        	$(".loncom_scroll_con").height(thisHeight);
        }
        //添加滚动
        $('.loncom_scroll_con').niceScroll({
            cursorcolor: "rgba(204, 204, 204, 0.4)",//#CC0071 光标颜色
            cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
            touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
            cursorwidth: "2px", //像素光标的宽度
            cursorborder: "0", // 游标边框css定义
            cursorborderradius: "2px",//以像素为光标边界半径
            autohidemode: true //是否隐藏滚动条
        });
    }
}
$(window).resize(function () {
	scrollCon();
});
//全屏切换
var isFullScreen=true;//是否全屏
function switcFullScreen(){
    isFullScreen=!isFullScreen;
    if(isFullScreen){
        if(document.exitFullscreen) {
            document.exitFullscreen();
        } else if(document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if(document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }else{
        var element=document.documentElement;
        if(element.requestFullscreen) {
            element.requestFullscreen();
        } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if(element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if(element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }
}	





