<template>
    <el-dialog :title="dialogTendency.title" :visible.sync="dialogTendency.visible" :width="dialogTendency.width">
        <div class="loncom_public_table">
            <div class="loncom_tendency_title">
                <h2 class="loncom_dis_inline">时段：</h2>
                <div class="loncom_dis_inline">
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
                <div class="loncom_dis_inline loncom_ml10">
                    <h2 class="loncom_dis_inline">指标：</h2>
                    <div class="loncom_dis_inline">
                        <el-select
                            v-model="oValue"
                            multiple
                            collapse-tags
                            size="mini"
                            style="width:120px;"
                            placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <el-button type="primary" size="mini" icon="el-icon-search" class="loncom_ml10" @click="tendencySearch">搜索</el-button>
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
            dateValue: '',
            //指标
            options: [{
                value: 'id1',
                label: '温度'
                }, {
                value: 'id2',
                label: '湿度'
                }],
            oValue:[],
                
        }
    },
    methods:{
            tendencySearch:function(){
                var xData=["09:00", "09:03", "09:13", "09:14", "09:24","09:34","09:44","09:54","10:04","10:14","10:24"];
                var lineData=[
                            {
                                name:'实时IT设备电能',
                                type:'line',
                                symbolSize:8,
                                data:[320, 232, 301, 234, 390, 230, 310,18, 391, 234, 290, 343, 310]
                            },
                            {
                                name:'机房实时总电能',
                                type:'line',
                                symbolSize:8,
                                data:[220, 18, 391, 234, 290, 343, 310, 301, 234, 390, 230, 310,18]
                            },
                        ];
                var tendencyChar=lineZoom("tendency_lineZoom",xData,lineData);
                $(window).resize(function () {
                    tendencyChar.resize();
                });
            },
            tendency_select:function(){
                $("#tendency_device").html("你妹");
            }
    },
    props:["dialogTendency"]  //子组件在props中创建一个属性，用以接收父组件传过来的值,和父组件v-bind:dialogTendency相同
}
</script>

