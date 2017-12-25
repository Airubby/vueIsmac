<template>
    <el-dialog :title="dialogSystemInformUser.title" :visible.sync="dialogSystemInformUser.visible" :width="dialogSystemInformUser.width" >
        
        <div class="loncom_public_table loncom_dialog_scroll" style="height:450px;">
            <div class="loncom_sysinfo_box loncom_dialog_system_informtop">
                提醒：如果以下消息接收人的信息有变更，请到“消息接收人管理”中进行修改。
            </div>
            <!--用户信息-->
            <div class="loncom_system_inform_table loncom_system_informdialog_table">
                <el-table :data="inform_table" border size="mini" style="width: 100%">
                    <el-table-column type="selection" width="36"></el-table-column>
                    <el-table-column label="姓名">
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.name" size="mini" :disabled="scope.row.loncom_active" :class="{'loncom_active':scope.row.loncom_active}"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column label="手机">
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.phone" size="mini" :disabled="scope.row.loncom_active" :class="{'loncom_active':scope.row.loncom_active}"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column label="邮箱">
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.email" size="mini" :disabled="scope.row.loncom_active" :class="{'loncom_active':scope.row.loncom_active}"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column label="角色">
                        <template slot-scope="scope">
                            <span>{{ scope.row.role }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <span v-if="scope.row.role!='系统账户'">
                                <a href="javascript:;" @click="edit(scope.row)" ref="editbtn" class="loncom_color">编辑</a>
                                <em>|</em>
                                <a href="javascript:;" @click="remove(scope.$index)" class="loncom_color">删除</a>
                            </span>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="loncom_system_informdialog_useradd">
                <div class="loncom_system_informdialog_useraddbtn" v-show="add_user_show">
                    <a href="javascript:;" @click="addUser" class="loncom_color loncom_font_size12">+新增通知接收人</a>
                </div>
                <div class="loncom_system_informdialog_usercon" v-show="!add_user_show">
                    <ul>
                        <li><el-input v-model="add_user_info.name" placeholder="姓名" size="mini"></el-input></li>
                        <li><el-input v-model="add_user_info.phone" placeholder="手机" size="mini"></el-input></li>
                        <li><el-input v-model="add_user_info.email" placeholder="邮箱" size="mini"></el-input></li>
                        <li>
                            <el-select v-model="add_user_info.role" size="mini">
                                <el-option value="非系统账户" size="mini"></el-option>
                            </el-select>
                        </li>
                        <li>
                            <a href="javascript:;" @click="sure()" class="loncom_color">确定</a>
                            <em>|</em>
                            <a href="javascript:;" @click="cancel()" class="loncom_color">取消</a>
                        </li>
                    </ul>
                    
                    
                    
                    
                </div>
            </div>
            <!--结束-->
        </div>

        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogSystemInformUser.visible = false">取 消</el-button>
            <el-button type="primary" @click="dialogSure(dialogSystemInformUser)">保 存</el-button>
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
            //table信息
           inform_table:[
               {id:"1",name:"李莫愁",phone:"15228983615",email:"123@qq.com",role:"系统账户",loncom_active:true},
               {name:"杨过",phone:"18521654123",email:"123@qq.com",role:"系统账户",loncom_active:true},
               {name:"小龙女",phone:"15228983615",email:"123@qq.com",role:"非系统账户",loncom_active:true},
           ],
           //新增用户切换显示
           add_user_show:true,
           //新增信息
           add_user_info:{
               name:"",phone:"",email:"",role:"",loncom_active:true
           }
        }
    },
    methods:{
        //保存的操作
        dialogSure:function(dialogSystemInformUser){
            dialogSystemInformUser.visible=false;   
        },
        //编辑
        edit:function(row){
            row.loncom_active=row.loncom_active?false:true;
            row.loncom_active?$(this.$refs.editbtn).html('编辑'):$(this.$refs.editbtn).html('保存');
            
        },
        //删除
        remove:function(index){
            this.inform_table.splice(index, 1);
        },
        //新增用户
        addUser:function(){
            this.add_user_show=false;
        },
        //确定新增用户
        sure:function(){
            if (this.add_user_info.name == "") {
                this.$message({
                    message: '请填写用户名',
                    type: 'warning'
                });
            }else if (this.add_user_info.phone == "") {
                this.$message({
                    message: '请填写手机号',
                    type: 'warning'
                });
            }else if (this.add_user_info.email == "") {
                this.$message({
                    message: '请填写邮箱',
                    type: 'warning'
                });
            }else if (this.add_user_info.role == "") {
                this.$message({
                    message: '请选择角色',
                    type: 'warning'
                });
            }else{
                this.inform_table.push(this.add_user_info);
                this.add_user_show=true;
            }
            
        },
        //取消新增用户
        cancel:function(){
            this.add_user_show=true;
        }
    },
    props:["dialogSystemInformUser"]  //子组件在props中创建一个属性，用以接收父组件传过来的值,和父组件v-bind:dialogDeploy相同
}
</script>

