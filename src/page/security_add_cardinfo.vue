<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <h2>安防系统 &gt; {{topInfo}}</h2>
        </div>
        <div class="loncom_scroll_con">
            <div class="loncom_public_table loncom_content">
                <div class="loncom_public_tab loncom_public_onetab">
                    <el-tabs>
                        <el-tab-pane label="发卡授权">
                            <div class="loncom_public_tabbox loncom_public_tabbox0">
                                <div class="loncom_public_tabboxcon loncom_public_tabboxcon0">
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>卡号
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input v-model="card_info.cardcode" size="small"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>领用者(姓名)
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <span>{{card_info.usename}}</span>
                                            <a href="javascript:;" @click="" class="loncom_color1ABC9C">选择</a>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>权限组
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-select v-model="accessValue" size="small" placeholder="请选择">
                                                <el-option
                                                v-for="item in accessOptions"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            初始化设置
                                        </div>
                                        <div class="loncom_list_box_right">
                                           <div>
                                                <span class="loncom_public_check loncom_fl">
                                                    <input type="checkbox" id="sys1" class="loncom_public_check_input"> 
                                                    <label for="sys1"></label>
                                                </span> 
                                                <span>新增时同步到控制器</span>
                                           </div>
                                           <div class="loncom_list_box_info">新增时将卡号信息同步到控制器！</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </el-tab-pane>
                        
                    </el-tabs>
                </div>
                <div class="loncom_public_tabbtn">
                    <span v-show="!activeBtn">
                        <el-button type="info" plain @click="giveUp">放弃修改</el-button>
                        <el-button type="primary" @click="editSubmitInfo">提交</el-button>
                    </span>
                    <span v-show="activeBtn">
                        <el-button type="primary" @click="addSubmitInfo">提交</el-button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import TopChangeInfo from '../components/topChangeInfo.vue'
export default {
    
  created () {
   var obj = this.$route.query;
    if(JSON.stringify(obj) == "{}"){
        this.topInfo="新增门卡";
    }else{
        this.topInfo="编辑门卡";
        this.activeBtn=false;
        console.log(obj);
        this.card_info=obj;
        this.accessValue=obj.authority;
        //获取到的赋给 card_info  字段根据后台需求匹配正确
    }
  },
  mounted() {
    scrollCon();
    
    tabScroll("0");
  },
   data() {
       return {
           //新增编辑控制器头部显示
           topInfo:'',
           card_info:{},
           //新增编辑显示不同的按钮信息
           activeBtn:true,
           //获取权限组显示
           accessOptions: [{
                value: '1',
                label: '权限组1'
                }, {
                value: '2',
                label: '权限组2'
                }, {
                value: '3',
                label: '权限组3'
                }, {
                value: '4',
                label: '通用权限组'
            }],
            accessValue:'',
       }
   },
   methods:{
       //新增
        addSubmitInfo:function(){
            if(true){
                this.$message({
                    message: '新增成功',
                    type: 'success'
                });
                this.$router.push({path:'/loncom/security'});
            }
        },
        //编辑
        editSubmitInfo:function(){
            if(true){
                this.$message({
                    message: '编辑成功',
                    type: 'success'
                });
                this.$router.push({path:'/loncom/security'});
            }
        },
        //放弃编辑
        giveUp:function(){
            this.$router.back();
        },
        
   },
   components:{TopChangeInfo},
}
</script>