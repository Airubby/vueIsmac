<template>
    <el-dialog :title="dialogEquipmentPreview.title" :visible.sync="dialogEquipmentPreview.visible" :width="dialogEquipmentPreview.width" :top="dialogEquipmentPreview.top">
        <div slot="title">
            <div class="loncom_dis_inlineblock">界面模板预览</div>
            <div class="loncom_dis_inlineblock loncom_fr" style="margin-right: 30px;cursor:pointer;" @click="fullPreview"><i class="el-icon-rank"></i></div>
        </div>
        <div class="loncom_public_table loncom_dialog_scroll" ref="fullPreview" style="height:400px;">
            
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
            dialog_full:true,
        }
    },
    methods:{
        fullPreview:function(){
            if(this.dialog_full){
                this.dialogEquipmentPreview.width="100%";
                this.dialogEquipmentPreview.top="0vh";
                $(this.$refs.fullPreview).css("height",$(document).height()-45);
            }else{
                this.dialogEquipmentPreview.width="50%";
                this.dialogEquipmentPreview.top="15vh";
                $(this.$refs.fullPreview).css("height","400px");
            }
            this.dialog_full=!this.dialog_full;
        }
    },
    props:["dialogEquipmentPreview"]  
}
</script>

