<template>
    <el-dialog :title="dialogAlarmAoSilence.title" :visible.sync="dialogAlarmAoSilence.visible" :width="dialogAlarmAoSilence.width" >
        
        <div class="loncom_public_table loncom_dialog_scroll" style="height:150px;">
            <div class="loncom_list_box">
                <div class="loncom_list_box_left">&nbsp;</div>
                <div class="loncom_list_box_right">
                    <div class="loncom_mb15">
                        <span class="loncom_public_radio loncom_fl">
                            <input type="radio" name="systemtime" id="systemtime1" checked="checked" class="loncom_public_radio_input"> 
                            <label for="systemtime1"></label>
                        </span> 
                        <div class="loncom_dis_inline">一直静默直至事件解除</div>
                    </div>
                    <div class="loncom_dialog_aosilence">
                        <span class="loncom_public_radio loncom_fl">
                            <input type="radio" name="systemtime" id="systemtime2" class="loncom_public_radio_input"> 
                            <label for="systemtime2"></label>
                        </span> 
                        <div class="loncom_dis_inline">静默 <el-input v-model="inputValue" size="small" class="dialog_alarm_input"></el-input> 分钟后恢复状态</div>
                    </div>
                </div>
            </div>
        </div>

        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogAlarmAoSilence.visible = false">取 消</el-button>
            <el-button type="primary" @click="dialogSure(dialogAlarmAoSilence)">保 存</el-button>
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
            inputValue:'',
        }
    },
    methods:{
        //保存的操作
        dialogSure:function(dialogAlarmAoSilence){
            dialogAlarmAoSilence.visible=false;   
        }
    },
    props:["dialogAlarmAoSilence"]  
}
</script>

