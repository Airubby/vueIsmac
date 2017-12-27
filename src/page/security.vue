<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <h2>安防系统</h2>
            <TopChangeInfo v-bind:topChangeInfo="top_items"></TopChangeInfo>
        </div>
        <div class="loncom_scroll_con loncom_right_changecon">
            <div :class="{'loncom_active':top_items[0].loncom_active}" class="loncom_public_table loncom_content">
                <div class="loncom_public_lefttree">
                    <div class="loncom_public_lefttree_title">
                        门禁控制器
                    </div>
                    <div class="loncom_public_lefttree_con loncom_public_tabbox10">
                        <div class="loncom_public_tabboxcon10">
                            <div class="loncom_public_lefttree_add">+ 添加控制器</div>
                            <div class="loncom_family_yahei loncom_mt10">
                                <el-tree
                                    :data="access_data"
                                    node-key="id"
                                    ref="tree"
                                    :props="defaultProps"
                                    accordion
                                    :expand-on-click-node="false"
                                    :render-content="renderContent"
                                    >
                                </el-tree>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="loncom_public_treeright">
                    <div class="loncom_public_tab loncom_public_tab100">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <!--门禁监控-->
                            <el-tab-pane label="门禁监控" name="first">
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
                                        <!--发卡授权-->
                                        <div class="loncom_mb10 loncom_overflow_hidden">
                                            <div class="loncom_sysinfo_box_left"><h2>门禁事件</h2></div>
                                            <div class="loncom_fr">
                                                <div class="loncom_dis_inline loncom_security_doorevent_title">
                                                    <span>时间范围：</span>
                                                    <el-radio-group v-model="event_radio" size="mini">
                                                        <el-radio label="1" border>全部</el-radio>
                                                        <el-radio label="2" border>自定义</el-radio>
                                                    </el-radio-group>
                                                    <el-date-picker
                                                        v-model="doorvenet_datevalue"
                                                        type="daterange"
                                                        range-separator="至"
                                                        start-placeholder="开始日期"
                                                        end-placeholder="结束日期"
                                                        size="mini">
                                                    </el-date-picker>
                                                </div>
                                                <el-button type="primary" size="mini">导出</el-button>
                                            </div>
                                        </div>
                                        <el-search-table-pagination type="local" :show-pagination="true" border :data="door_event" :page-sizes="[10,20,50]" :columns="door_event_columns" >                                           
                                            
                                        </el-search-table-pagination>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <!--发卡授权-->
                            <el-tab-pane label="发卡授权" name="second">
                                <div class="loncom_public_tabbox loncom_public_tabbox1">
                                    <div class="loncom_public_tabboxcon1">
                                        <el-search-table-pagination type="local" class="loncom_position_relative" :show-pagination="true" border :data="card_info" :page-sizes="[10,20,50]" :columns="card_info_columns" :form-options="card_info_formOptions" >                                           
                                            <el-table-column slot="prepend" type="selection"></el-table-column>
                                            <template slot-scope="scope" slot="preview-handle">
                                                <span>
                                                    <p><a href="javascript:;" class="loncom_color">同步到控制器</a> </p>
                                                    <p>
                                                        <a href="javascript:;" class="loncom_color">开门</a> 
                                                        <em>|</em> 
                                                        <a href="javascript:;" class="loncom_color">关门</a>
                                                    </p>
                                                </span>
                                            </template>

                                            <el-button type="primary" size="mini" class="loncom_security_cardinfoadd" @click="cardInfoAdd">新增</el-button>
                                            <div class="loncom_table_btn">
                                                <el-button @click="cardInfoExport()" size="mini">导出</el-button>
                                            </div>
                                        </el-search-table-pagination>
                                        
                                    </div>
                               </div>
                            </el-tab-pane>
                            <!--门禁配置-->
                            <el-tab-pane label="门禁配置" name="third">
                                <div class="loncom_public_tabbox loncom_public_tabbox2">
                                    <div class="loncom_public_tabboxcon2">
                                        <!--门禁时间组-->
                                        <div class="loncom_mb10 loncom_overflow_hidden">
                                            <div class="loncom_sysinfo_box_left"><h2>门禁时间组</h2></div>
                                            <div class="loncom_fr">
                                                <el-button type="primary" size="mini">新增</el-button>
                                            </div>
                                        </div>
                                        <el-search-table-pagination type="local" class="loncom_position_relative loncom_mb50" :show-pagination="true" border :data="time_info" :page-sizes="[10,20,50]" :columns="time_info_columns" >                                           
                                            <el-table-column slot="prepend" type="selection"></el-table-column>
                                            <template slot-scope="scope" slot="preview-handle">
                                                <span>
                                                    <a href="javascript:;" class="loncom_color">编辑</a> 
                                                    <em>|</em> 
                                                    <a href="javascript:;" class="loncom_color">删除</a>
                                                </span>
                                            </template>
                                            <div class="loncom_table_btn">
                                                <el-button @click="timeInfoExport()" size="mini">导出</el-button>
                                            </div>
                                        </el-search-table-pagination>
                                         <!--门禁权限组-->
                                        <div class="loncom_mb10 loncom_overflow_hidden">
                                            <div class="loncom_sysinfo_box_left"><h2>门禁权限组</h2></div>
                                            <div class="loncom_fr">
                                                <el-button type="primary" size="mini">新增</el-button>
                                            </div>
                                        </div>
                                        <el-search-table-pagination type="local" class="loncom_position_relative" :show-pagination="true" border :data="access_info" :page-sizes="[10,20,50]" :columns="access_info_columns" >                                           
                                            <el-table-column slot="prepend" type="selection"></el-table-column>
                                            <template slot-scope="scope" slot="preview-handle">
                                                <span>
                                                    <a href="javascript:;" class="loncom_color">添加门</a> 
                                                    <em>|</em> 
                                                     <a href="javascript:;" class="loncom_color">编辑</a> 
                                                    <em>|</em> 
                                                    <a href="javascript:;" class="loncom_color">删除</a>
                                                </span>
                                            </template>
                                            <div class="loncom_table_btn">
                                                <el-button @click="accessInfoExport()" size="mini">导出</el-button>
                                            </div>
                                        </el-search-table-pagination>
                                        
                                    </div>
                               </div>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
            </div>

            <div :class="{'loncom_active':top_items[1].loncom_active}" class="loncom_public_table loncom_environment_table">
                23
            </div>
        </div>
    </div>
</template>


<script>
import TopChangeInfo from '../components/topChangeInfo.vue'
export default {
    
  created () {
   
  },
  mounted() {
    scrollCon();
    tabScroll("10"); //左侧树形
    tabScroll("0");
    tabScroll("1");
    tabScroll("2");
    
   
    
  },
   data() {
       return {
           //头部切换
          　top_items: [
　　　　　　　　　　{select:'门禁',loncom_active:true},
　　　　　　　　　　{select:'视频',loncom_active:false},
　　　　　　　],
            activeName: 'first',  //头部切换信息
            //树形
            access_data: [{
                label: '成都一号机房',
                id:'e1',
                children: [{
                    label: '1号控制器',
                    id:'e1_1',
                    children: [{
                        label: '读卡器1',
                        id:'e1_1_1',
                    },{
                        label: '读卡器2',
                        id:'e1_1_2',
                    }]
                },{
                    label: '2号控制器',
                    id:'e1_2',
                    children: [{
                        label: '读卡器1',
                        id:'e1_2_1',
                    },{
                        label: '读卡器2',
                        id:'e1_2_2',
                    }]
                }]
            }, {
                label: '成都二号机房',
                id:'e2',
                children: [{
                    label: '1号控制器',
                    id:'e2_1',
                    children: [{
                        label: '读卡器1',
                        id:'e2_1_1',
                    },{
                        label: '读卡器2',
                        id:'e2_1_2',
                    }]
                },{
                    label: '2号控制器',
                    id:'e2_2',
                    children: [{
                        label: '读卡器1',
                        id:'e2_2_1',
                    },{
                        label: '读卡器2',
                        id:'e2_2_2',
                    }]
                }]
            }],
            defaultProps: {
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
            //门事件
            event_radio:'1', //全部，自定义切换
            doorvenet_datevalue:'',  //自定义的时间
            door_event: [
                 {
                     time:'2017-03-21 10:00:00',detail:'刷卡开门',card:'0332346466',personnel:'李莫愁',address:'1号机房,机房前门',belongto:'1号门禁控制器',methods:'刷卡开门'
                 },
                 {
                     time:'2017-03-21 10:00:00',detail:'刷卡开门',card:'0332346466',personnel:'李莫愁',address:'1号机房,机房前门',belongto:'1号门禁控制器',methods:'刷卡开门'
                 },
                 {
                     time:'2017-03-21 10:00:00',detail:'刷卡开门',card:'0332346466',personnel:'李莫愁',address:'1号机房,机房前门',belongto:'1号门禁控制器',methods:'刷卡开门'
                 },
             ],
             door_event_columns: [
                { prop: 'time', label: '时间',minWidth:100},
                { prop: 'detail', label: '事件描述'},
                { prop: 'card', label: '卡号'},
                { prop: 'personnel', label: '人员'},
                { prop: 'address', label: '位置'},
                { prop: 'belongto', label: '设备'},
                { prop: 'methods', label: '验证方式'},
            ],
            //发卡授权
            card_info:[
                {cardcode:'0332346466',usename:'李莫愁',authority:'通用权限组',time:'24小时通行'},
                {cardcode:'0332346467',usename:'小龙女',authority:'通用权限组',time:'24小时通行'},
                {cardcode:'0332346468',usename:'李莫愁',authority:'通用权限组',time:'24小时通行'},
            ],
            card_info_columns:[
                { prop: 'cardcode', label: '卡号'},
                { prop: 'usename', label: '领用者(姓名)'},
                { prop: 'authority', label: '关联权限组'},
                { prop: 'time', label: '时间组'},
                { prop: 'handel', label: '操作',slotName:'preview-handle',minWidth:100},
            ],
            card_info_formOptions:{
                inline: true,
                size:'mini',
                resetBtnText:'重置',
                submitBtnText: '搜索',
                submitLoading:'true',
                forms: [
                    { prop: 'cardcode', label: '卡号检索' },
                    { prop: 'usename', label: '姓名检索' },
                ]
            },
            //门禁时间组
            time_info:[
                {name:'24小时通行',remark:'24小时通行'},
                {name:'24小时通行',remark:'24小时通行'},
                {name:'24小时通行',remark:'24小时通行'},
            ],
            time_info_columns:[
                { prop: 'name', label: '时间组名称'},
                { prop: 'remark', label: '备注',minWidth:100},
                { prop: 'handel', label: '操作',slotName:'preview-handle'},
            ],
             //门禁权限组
            access_info:[
                {name:'24小时通行',timename:'24小时通行',obj:'机房前门，机房后门，机房侧门'},
                {name:'24小时通行',timename:'24小时通行',obj:'机房前门，机房后门，机房侧门'},
                {name:'24小时通行',timename:'24小时通行',obj:'机房前门，机房后门，机房侧门'},
            ],
            access_info_columns:[
                { prop: 'name', label: '权限组名称'},
                { prop: 'timename', label: '门禁时间组'},
                { prop: 'obj', label: '应用对象',minWidth:100},
                { prop: 'handel', label: '操作',slotName:'preview-handle',width:150},
            ],

       }
   },
   methods:{
        handleClick(tab) {  //超出滚动用
            tabScroll(tab.index);
        },
        //树形
        handleNodeClick(data) {
            console.log(data);
        },
        //点击树形编辑
        editTree(node,data,store) {
            console.log(node)
            console.log(data)
            console.log(store)
            this.$router.push({path:'/loncom/security/accessAdd',query:{id:node.id}});
        },
        //点击树形删除
        removeTree(node, data) {
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
        //渲染树形的编辑删除图标
        renderContent(h, { node, data, store }) {
            return (
            <span class="loncom_tree_list">
              <em class="loncom_mr10">{node.label}</em>
              
              <em class="loncom_fr loncom_tree_listbtn">
                <i class="el-icon-edit loncom_mr5" on-click={ () => this.editTree(node,data,store) }></i>
                <i class="el-icon-delete" on-click={ () => this.removeTree(node, data) }></i>
              </em>
            </span>
            );
        },
        
   },
   components:{TopChangeInfo},
}
</script>