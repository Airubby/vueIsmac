<template>
    <el-dialog :title="dialogHistoricalEvents.title" :visible.sync="dialogHistoricalEvents.visible" :width="dialogHistoricalEvents.width" :fullscreen="fullscreen">
        <div class="loncom_public_table">
            <div class="loncom_tendency_title">
                <h2 class="loncom_fl">时段：</h2>
                <div class="loncom_fl">
                    <el-date-picker
                    v-model="dateValue"
                    type="datetimerange"
                    :picker-options="pickerOptions"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    align="center"
                    size="mini"
                    >
                    </el-date-picker>
                </div>
                <div class="loncom_fl loncom_ml10">
                    <h2 class="loncom_fl">指标：</h2>
                    <div class="loncom_fl loncom_tendency_titleselect">
                        <span id="tendency_device"></span><a href="javascript:;" class="loncom_color" @click="tendency_select">[选择]</a>
                    </div>
                    <div class="loncom_search_btn loncom_fl loncom_ml10" @click="tendencySearch"><i class="fa fa-search"></i>搜索</div>
                </div>
            </div>
            <div class="loncom_tendency_con" id="tendency_lineZoom">

            </div>
        </div>
    </el-dialog>
</template>

<script>

export default {
    created () {
    
    },
    mounted() {
        
    },
    data() {
        return {
            //是否全屏展示
            fullscreen:false,
            pickerOptions: {
                shortcuts: [{
                    text: '最近一天',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一周',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                    picker.$emit('pick', [start, end]);
                    }
                }]
            },
            dateValue: ''
        }
    },
    methods:{
        tendencySearch:function(){
            var tendencyChar=lineZoom("tendency_lineZoom");
            $(window).resize(function () {
                tendencyChar.resize();
            });
        },
        tendency_select:function(){
            $("#tendency_device").html("你妹");
        },
    },
    props:["dialogHistoricalEvents"]  //子组件在props中创建一个属性，用以接收父组件传过来的值,和父组件v-bind:dialog相同
}
</script>

