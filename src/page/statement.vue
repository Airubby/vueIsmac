<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <h2>监控报表</h2>
        </div>
        <div class="loncom_scroll_con">
            <!--门禁-->
            <div class="loncom_public_table loncom_content">
                <div class="loncom_public_lefttree">
                    <div class="loncom_public_lefttree_title">
                        报表类型
                    </div>
                    <div class="loncom_public_lefttree_con loncom_public_tabbox10">
                        <div class="loncom_public_tabboxcon10">
                            <div class="loncom_public_lefttree_add" @click="addOrder">+ 添加定制</div>
                            <div class="loncom_family_yahei loncom_mt10">
                                <el-tree
                                    :data="access_data"
                                    node-key="id"
                                    ref="tree"
                                    :props="defaultProps"
                                    accordion
                                    :expand-on-click-node="false"
                                    :render-content="renderController"
                                    >
                                </el-tree>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="loncom_public_treeright">
                    <div class="loncom_public_tab loncom_content loncom_public_onetab">
                        <el-tabs>
                            <!--报表记录-->
                            <el-tab-pane label="报表记录">
                                <div class="loncom_public_tabbox loncom_public_tabbox0">
                                    <div class="loncom_public_tabboxcon0">
                                        <!--门状态-->
                                        <div class="loncom_mb10 loncom_overflow_hidden"><div class="loncom_sysinfo_box_left"><h2>门状态</h2></div></div>
                                        <el-search-table-pagination type="local" class="loncom_mb50" :show-pagination="true" border :data="door_status" :page-sizes="[10,20,50]" :columns="door_status_columns" >                                           
                                            <template slot-scope="scope" slot="preview-name">
                                                <span>
                                                    {{ scope.row.name }}
                                                </span>
                                                <span style="color:#33CC00;" v-if="scope.row.online">[在线]</span>
                                                <span style="color:#ccc;" v-else>[离线]</span>
                                            </template>
                                            <template slot-scope="scope" slot="preview-state">
                                                <span v-if="scope.row.state=='1'">
                                                    <em class="loncom_circle loncom_mr5" style="background:#f00;"></em>打开状态
                                                </span>
                                                <span v-else-if="scope.row.state=='0'">
                                                    <em class="loncom_circle loncom_mr5" style="background:#33CC00;"></em>关闭状态
                                                </span>
                                            </template>
                                            <template slot-scope="scope" slot="preview-handle">
                                                <span>
                                                    <a href="javascript:;" class="loncom_color">开门</a> 
                                                    <em>|</em> 
                                                    <a href="javascript:;" class="loncom_color">关门</a>
                                                </span>
                                            </template>
                                        </el-search-table-pagination>
                                        
                                        
                                    </div>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
            </div>
            <!--结束-->
        </div>
    </div>
</template>


<script>

export default {
    
  created () {

  },
  mounted() {
    scrollCon();
    //左侧树形
    tabScroll("0"); 
    
   
    
  },
   data() {
       return {
            //树形
            access_data: [{
                label: '常规报表',
                id:'e1',
                children: [{
                    label: '设备1',
                    id:'e1_1',
                    children: [{
                        label: '属性1',
                        id:'e1_1_1',
                    },{
                        label: '属性2',
                        id:'e1_1_2',
                    }]
                },{
                    label: '设备2',
                    id:'e1_2',
                    children: [{
                        label: '属性1',
                        id:'e1_2_1',
                    },{
                        label: '属性2',
                        id:'e1_2_2',
                    }]
                }]
            }, {
                label: '告警统计',
                id:'e2',
            },{
                label: '定制报表',
                id:'e1',
                children: [{
                    label: '定制1',
                    id:'e1_1',
                },{
                    label: '定制2',
                    id:'e1_2',
                }]
            }],
            defaultProps: { //树形公用
                children: 'children',
                label: 'label'
            },
            //门状态
            door_status: [
                 {
                     code:1,name:'机房前门',online:true,state:'1',type:'供电关闭',belongto:'1号门禁控制器',methods:'刷卡开门',time:'24小时通行'
                 },
                 {
                     code:2,name:'机房后门',online:true,state:'0',type:'供电关闭',belongto:'1号门禁控制器',methods:'刷卡开门',time:'24小时通行'
                 },
                 {
                     code:1,name:'机房侧门',online:false,state:'0',type:'供电关闭',belongto:'2号门禁控制器',methods:'指纹开门',time:'24小时通行'
                 }
             ],
             door_status_columns: [
                { prop: 'code', label: '门编号',minWidth:60,},
                { prop: 'name', label: '门名称',slotName:'preview-name' },
                { prop: 'state', label: '门状态',slotName:'preview-state' },
                { prop: 'type', label: '门磁类型' },
                { prop: 'belongto', label: '所属设备' },
                { prop: 'methods', label: '验证方式' },
                { prop: 'time', label: '有效时段' },
                { prop: 'handle', label: '操作',slotName:'preview-handle' },
            ],



       }
   },
   methods:{
        //添加定制
        addOrder(){
            this.$router.push({path:'/loncom/statement/addOrder'});
        },
        //树形
        handleNodeClick(data) {
            console.log(data);
        },
        //点击树形编辑
        editControllerTree(node,data,store) {
            this.$router.push({path:'/loncom/statement/addOrder',query:{id:node.id}});
        },
        //点击树形删除
        removeControllerTree(node, data) {
            this.$confirm('此操作将永久删除该树形, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    const parent = node.parent;
                    const children = parent.data.children || parent.data;
                    const index = children.findIndex(d => d.id === data.id);
                    children.splice(index, 1);
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
            });
            
        },
        //渲染控制器树形的编辑删除图标
        renderController(h, { node, data, store }) {
            return (
            <span class="loncom_tree_list">
              <em class="loncom_mr10">{node.label}</em>
              
              <em class="loncom_fr loncom_tree_listbtn">
                <i class="el-icon-edit loncom_mr5" on-click={ () => this.editControllerTree(node,data,store) }></i>
                <i class="el-icon-delete" on-click={ () => this.removeControllerTree(node, data) }></i>
              </em>
            </span>
            );
        },
   
   },
   components:{},
}
</script>