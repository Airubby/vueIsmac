<template>
  <div class="scale_panel">
    <div class="scale" ref="scale">
        <div ref="scale_con"></div>
        <span ref="btn"></span>
    </div>
    <div class="revBtn" ref="revBtn">
        <em v-if="timeShaft.rev=='true'" class="pause"></em>
        <em v-else class="play"></em>
    </div> 
</div> 
</template>

<style>
    .scale_panel{
        font-size:12px;
        width:100%; 
        padding-right:18px;
        position: relative;
    }
    .scale{ 
        background-repeat: repeat-x; 
        background-position: 0 100%; 
        background-color: #E4E4E4; 
        width: 100%; 
        height: 8px; 
        position: relative; 
        font-size: 0px; 
        
    }
    .scale span{
        background:#4299F4; 
        width:8px;
        height:16px; 
        position:absolute; 
        left:0px;
        top:-4px;
        cursor:pointer;
        border-radius:2px;
    }
    .scale div{ 
        background-repeat: repeat-x; background-color: #16C5BB; width: 0px; position: absolute; height: 8px; left: 0; bottom: 0; 
        border-radius: 3px 0 0 3px; 
    }
    .revBtn{
      position:absolute;
      right:0;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background: #16C5BB;
      top: -4px;
      cursor:pointer;
    }
    .revBtn em.play{
        content: "";
        width: 0;
        height: 0;
        font-size: 0px;
        line-height: 0px;
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
        border-right: 7px solid #fff;
        position: absolute;
        top: 4px;
        left: 4px;
    }
    .revBtn em.pause{
        content: '';
        width: 6px;
        border-left: 2px solid #fff;
        border-right: 2px solid #fff;
        height: 8px;
        position: absolute;
        left: 5px;
        top: 4px;
    }

</style>
<script>
export default {
    mounted(){
        this.init();
    },
    data() {
      return {
        timeShaft:this.videoTimeShaft
      }
    },
    methods:{
        init:function(){
            var _this=this,g=document,b=window;
            var tmax=this.$refs.scale.offsetWidth-this.$refs.btn.offsetWidth;
            var startTime=new Date(this.timeShaft.startTime).getTime();
            var endTime=new Date(this.timeShaft.endTime).getTime();
            var num=(endTime-startTime)/tmax;

            var timer=setInterval(function(){
              _this.timerFn();
              if(parseInt(_this.$refs.btn.style.left)>=tmax){
                  clearInterval(timer);
                  _this.timeShaft.rev='false';
              }
            },num);

            this.$refs.revBtn.onclick=function(){
              if(_this.timeShaft.rev=='true'){
                _this.timeShaft.rev='false';
                clearInterval(timer);
              }else{
                if(parseInt(_this.$refs.btn.style.left)<tmax){
                  _this.timeShaft.rev='true';
                  timer=setInterval(function(){
                    _this.timerFn();
                    if(parseInt(_this.$refs.btn.style.left)>=tmax){
                        clearInterval(timer);
                        _this.timeShaft.rev='false';
                    }
                  },num)
                }
                
              }
            }
            this.$refs.btn.onmousedown=function(e){
                var x=(e||b.event).clientX;
                var max=_this.$refs.scale.offsetWidth-_this.$refs.btn.offsetWidth,l=_this.$refs.btn.offsetLeft;
                document.onmousemove=function(e){
                    var thisX=(e||b.event).clientX;
                    var to=Math.min(max,Math.max(0,l+(thisX-x)));
                    _this.$refs.btn.style.left=to+'px';
                    _this.$refs.scale_con.style.width=Math.max(0,to)+'px';
                    _this.timeShaft.moveStart=new Date(num*to+startTime).Format("yyyy-MM-dd hh:mm:ss");
                    b.getSelection ? b.getSelection().removeAllRanges() : g.selection.empty();
                }
                document.onmouseup=new Function('this.onmousemove=null');
            }
        },
        timerFn:function(){
            var _this=this,left;
            if(_this.$refs.btn.style.left==""){
                left=parseInt(_this.$refs.btn.style.left+1)
            }else{
                left=parseInt(_this.$refs.btn.style.left)+1;
            }
            _this.$refs.btn.style.left=left+'px';
            _this.$refs.scale_con.style.width=left+'px';
        },

    },
    props:["videoTimeShaft"],
    
}
</script>