<template>
    <el-dialog :title="dialogEnergyConfigAdd.title" :visible.sync="dialogEnergyConfigAdd.visible" :width="dialogEnergyConfigAdd.width">
        <div class="loncom_public_table loncom_dialog_scroll" style="height:400px;">
            <div class="loncom_list_box">
                <div class="loncom_list_box_left">
                    <em>*</em>换算因子：
                </div>
                <div class="loncom_list_box_right">
                    <el-input v-model="add_info.data.factor" size="small" style="width:300px;"></el-input>
                </div>
            </div>
            <div class="loncom_list_box">
                <div class="loncom_list_box_left">
                    <em>*</em>操作符：
                </div>
                <div class="loncom_list_box_right">
                    <el-radio-group v-model="add_info.data.operator" size="small">
                        <el-radio label="1" border>+ 累加</el-radio>
                        <el-radio label="0" border>- 减去</el-radio>
                    </el-radio-group>
                </div>
            </div>
            <div class="loncom_list_box">
                <div class="loncom_list_box_left">
                    <em>*</em>引用测点：
                </div>
                <div class="loncom_list_box_right loncom_font_size12">
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
            </div>
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
            add_info:this.dialogEnergyConfigAdd,
            
        }
    },
    methods:{
        //保存的操作
        dialogSure:function(){
            
            if(true){
                this.$parent.now_config[this.add_info.index].data.push(this.add_info.data);

                //操作以后要清空data
                this.add_info.data={};
                this.dialogEnergyConfigAdd.visible=false;   
            }
        },
        //取消操作
        dialogCancel:function(){
            //操作以后要清空data
            this.add_info.data={};
            this.dialogEnergyConfigAdd.visible=false;   
        },
         //树形
        handleNodeClick(data) {
            console.log(data);
        },

    },
    watch:{
        dialogEnergyConfigAdd(val){
            this.add_info=val;
        },
        add_info(val){
            this.$emit('config',val);
        }
    },
    props:["dialogEnergyConfigAdd"]  
}
</script>

