<template>
    <el-dialog :title="dialogSystemInformTime.title" :visible.sync="dialogSystemInformTime.visible" :width="dialogSystemInformTime.width" >
        
        <div class="loncom_public_table loncom_dialog_scroll" style="height:250px;">
            <div class="loncom_sysinfo_box loncom_dialog_system_informtop">
                提醒：如果以下消息接收人的信息有变更，请到“消息接收人管理”中进行修改。
            </div>
            <!--周范围-->
            <div class="loncom_list_box">
                <div class="loncom_list_box_left">
                    <em>*</em>周范围：
                </div>
                <div class="loncom_list_box_right">

                    <div class="loncom_dis_inlineblock loncom_mr10" v-for="item in weekData">
                        <span class="loncom_public_check loncom_fl">
                            <input type="checkbox" class="loncom_public_check_input" :id="item.id">
                            <label :for="item.id"></label>
                        </span>
                        <div class="loncom_dis_inline">{{item.title}}</div>
                    </div>

                </div>
            </div>
            <!--时间范围-->
            <div class="loncom_list_box">
                <div class="loncom_list_box_left">
                    <em>*</em>时间范围：
                </div>
                <div class="loncom_list_box_right">
                    <div class="loncom_mr10">
                        <div class="loncom_dis_inlineblock">
                            <span class="loncom_public_radio loncom_fl">
                                <input type="radio" class="loncom_public_radio_input" name="systemtime" id="systemtime1" checked>
                                <label for="systemtime1" @click="show_time=false"></label>
                            </span>
                            <div class="loncom_dis_inline">全天</div>
                        </div>
                        <div class="loncom_dis_inlineblock">
                            <span class="loncom_public_radio loncom_fl">
                                <input type="radio" class="loncom_public_radio_input" name="systemtime" id="systemtime2">
                                <label for="systemtime2" @click="show_time=true"></label>
                            </span>
                            <div class="loncom_dis_inline">以下时间段</div>
                        </div>
                    </div>
                    <div class="loncom_mt10" v-show="show_time">
                        <el-time-picker
                            is-range
                            v-model="value"
                            :picker-options="pickerOptions"
                            range-separator="至"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间"
                            placeholder="选择时间范围"
                            size="mini"
                            >
                        </el-time-picker>
                    </div>
                </div>
            </div>
            <!--结束-->
        </div>

        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogSystemInformTime.visible = false">取 消</el-button>
            <el-button type="primary" @click="dialogSure(dialogSystemInformTime)">保 存</el-button>
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
            weekData:[
                {title:"周一",id:"sysweek1"},
                {title:"周二",id:"sysweek2"},
                {title:"周三",id:"sysweek3"},
                {title:"周四",id:"sysweek4"},
                {title:"周五",id:"sysweek5"},
                {title:"周六",id:"sysweek6"},
                {title:"周天",id:"sysweek7"}
            ],
            //时间范围
            pickerOptions: {
                shortcuts: [{
                    text: '全天',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24);
                    picker.$emit('pick', [start, end]);
                    }
                }]
            },
            value:"",
            //显示自定义时间
            show_time:false,
        }
    },
    methods:{
        //保存的操作
        dialogSure:function(dialogSystemInformTime){
            dialogSystemInformTime.visible=false;   
        }
    },
    props:["dialogSystemInformTime"]  //子组件在props中创建一个属性，用以接收父组件传过来的值,和父组件v-bind:dialogDeploy相同
}
</script>

