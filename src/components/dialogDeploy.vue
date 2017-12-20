<template>
    <el-dialog :title="dialogDeploy.title" :visible.sync="dialogDeploy.visible" :width="dialogDeploy.width">
        
        <div class="loncom_public_table">
            <!--通知方式-->
            <div class="loncom_list_box">
                <div class="loncom_list_box_left">
                    <em>*</em>通知方式：
                </div>
                <div class="loncom_list_box_right">
                    <div>
                        <span class="loncom_public_check loncom_fl">
                            <input type="checkbox" class="loncom_public_check_input" id="public_check_input0" :checked="dialogDeploy.data.system_dx">
                            <label for="public_check_input0"></label>
                        </span>
                        <div class="loncom_dis_inline">短信</div>
                    </div>
                    <div>
                        <span class="loncom_public_check loncom_fl">
                            <input type="checkbox" class="loncom_public_check_input" id="public_check_input1" :checked="dialogDeploy.data.system_dh">
                            <label for="public_check_input1"></label>
                        </span>
                        <div class="loncom_dis_inline">电话</div>
                    </div>
                    <div>
                        <span class="loncom_public_check loncom_fl">
                            <input type="checkbox" class="loncom_public_check_input" id="public_check_input2" :checked="dialogDeploy.data.system_sg">
                            <label for="public_check_input2"></label>
                        </span>
                        <div class="loncom_dis_inline">声光</div>
                    </div>
                    <div>
                        <span class="loncom_public_check loncom_fl">
                            <input type="checkbox" class="loncom_public_check_input" id="public_check_input3" :checked="dialogDeploy.data.system_yj">
                            <label for="public_check_input3"></label>
                        </span>
                        <div class="loncom_dis_inline">邮件</div>
                    </div>
                </div>
            </div>
            <!--通知方式-->
            <div class="loncom_list_box">
                <div class="loncom_list_box_left">
                    <em>*</em>通知用户：
                </div>
                <div class="loncom_list_box_right">
                    <div>
                        <span class="loncom_public_check loncom_fl">
                            <input type="checkbox" class="loncom_public_check_input" id="public_check_input4" :checked="dialogDeploy.data.system_gly">
                            <label for="public_check_input4"></label>
                        </span>
                        <div class="loncom_dis_inline">管理员</div>
                    </div>
                    <div>
                        <span class="loncom_public_check loncom_fl">
                            <input type="checkbox" class="loncom_public_check_input" id="public_check_input5" :checked="dialogDeploy.data.system_xtyh">
                            <label for="public_check_input5"></label>
                        </span>
                        <div class="loncom_dis_inline">系统用户</div>
                    </div>
                    <div>
                        <span class="loncom_public_check loncom_fl">
                            <input type="checkbox" class="loncom_public_check_input" id="public_check_input6" :checked="dialogDeploy.data.system_fxtyh">
                            <label for="public_check_input6"></label>
                        </span>
                        <div class="loncom_dis_inline">非系统用户</div>
                    </div>
                </div>
            </div>
            <!--周范围-->
            <div class="loncom_list_box">
                <div class="loncom_list_box_left">
                    <em>*</em>周范围：
                </div>
                <div class="loncom_list_box_right">

                    <div class="loncom_dis_inlineblock loncom_mr10" v-for="item in weekData">
                        <span class="loncom_public_check loncom_fl">
                            <input type="checkbox" class="loncom_public_check_input" :id="item.id" :checked="dialogDeploy.data.system_week1">
                            <label :for="item.id"></label>
                        </span>
                        <div class="loncom_dis_inline">{{item.title}}</div>
                    </div>

                </div>
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
            weekData:[
                {title:"周一",id:"sysweek1"},
                {title:"周二",id:"sysweek2"},
                {title:"周三",id:"sysweek3"},
                {title:"周四",id:"sysweek4"},
                {title:"周五",id:"sysweek5"},
                {title:"周六",id:"sysweek6"},
                {title:"周天",id:"sysweek7"}
            ]
        }
    },
    methods:{
            
    },
    props:["dialogDeploy"]  //子组件在props中创建一个属性，用以接收父组件传过来的值,和父组件v-bind:dialogDeploy相同
}
</script>

