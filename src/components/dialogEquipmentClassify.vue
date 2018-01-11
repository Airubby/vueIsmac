<template>
    <el-dialog :title="dialogEquipmentClassify.title" :visible.sync="dialogEquipmentClassify.visible" :width="dialogEquipmentClassify.width">
        <div class="loncom_public_table loncom_dialog_scroll" style="height:400px;">
            <el-tree
                :data="tree_data"
                node-key="id"
                ref="tree"
                :props="defaultProps"
                accordion
                show-checkbox
                :expand-on-click-node="false"
                @handleNodeClick
                >
            </el-tree>
        </div>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogCancel">取 消</el-button>
            <el-button type="primary" @click="dialogSure">保 存</el-button>
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
            
            //树形
            tree_data: [{
                label: '成都一号机房',
                id:'e1',
                children: [{
                    label: '输入电量仪A',
                    id:'e1_1',
                    children: [{
                        label: 'A相有功功率',
                        id:'e1_1_1',
                    },{
                        label: 'B相有功功率',
                        id:'e1_1_2',
                    }]
                },{
                    label: '输入电量仪B',
                    id:'e1_2',
                    children: [{
                        label: 'A相有功功率',
                        id:'e1_2_1',
                    },{
                        label: 'B相有功功率',
                        id:'e1_2_2',
                    }]
                }]
            }],
            defaultProps: { //树形公用
                children: 'children',
                label: 'label'
            },
            
            //备份数据
            add_info:this.dialogEquipmentClassify,
            
        }
    },
    methods:{
        //保存的操作
        dialogSure:function(){
            
            if(true){
               
                this.dialogEquipmentClassify.visible=false;   
            }
        },
        //取消操作
        dialogCancel:function(){
           
            this.dialogEquipmentClassify.visible=false;   
        },
         //树形
        handleNodeClick(data) {
            console.log(data);
        },

    },
    watch:{
        dialogEquipmentClassify(val){
            this.add_info=val;
        },
        add_info(val){
            this.$emit('config',val);
        }
    },
    props:["dialogEquipmentClassify"]  
}
</script>

