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
                                    :data="tree_data"
                                    node-key="id"
                                    ref="tree"
                                    :props="defaultProps"
                                    accordion
                                    :expand-on-click-node="false"
                                    :render-content="renderTree"
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
                                        <!--常规报表-->
                                        <div v-show="show_statement=='0'">
                                            <div class="loncom_mb10 loncom_overflow_hidden">
                                                <div class="loncom_sysinfo_box_left">
                                                    <div class="loncom_color999 loncom_dis_inlineblock">筛选：</div>
                                                    <div class="loncom_dis_inlineblock">
                                                        <el-date-picker
                                                            v-model="datevalue1"
                                                            type="datetimerange"
                                                            :picker-options="pickerOptions"
                                                            range-separator="至"
                                                            start-placeholder="开始日期"
                                                            end-placeholder="结束日期"
                                                            @change="dateChange1(datevalue1)"
                                                            size="mini">
                                                        </el-date-picker>
                                                    </div>
                                                </div>
                                            </div>
                                            <el-search-table-pagination type="local" class="loncom_position_relative" :show-pagination="true" border :data="statement1" :page-sizes="[10,20,50]" :columns="statement_columns1" >                                           
                                                <el-table-column slot="prepend" type="selection"></el-table-column>
                                                <div class="loncom_table_btn">
                                                    <el-button @click="InfoExport1()" size="mini">导出</el-button>
                                                </div>
                                            </el-search-table-pagination>
                                        </div>
                                        <!--告警统计-->
                                        <div v-show="show_statement=='1'">
                                            <div class="loncom_mb10 loncom_overflow_hidden">
                                                <div class="loncom_sysinfo_box_left">
                                                    <div class="loncom_color999 loncom_dis_inlineblock">查询时段：</div>
                                                    <div class="loncom_dis_inlineblock">
                                                        <el-date-picker
                                                            v-model="datevalue2"
                                                            type="datetimerange"
                                                            range-separator="至"
                                                            start-placeholder="开始日期"
                                                            end-placeholder="结束日期"
                                                            @change="dateChange2(datevalue2)"
                                                            size="mini">
                                                        </el-date-picker>
                                                    </div>
                                                </div>
                                            </div>
                                            <el-search-table-pagination type="local" class="loncom_position_relative" :show-pagination="true" border :data="statement2" :page-sizes="[10,20,50]" :columns="statement_columns2" >                                           
                                                <el-table-column slot="prepend" type="selection"></el-table-column>
                                                <div class="loncom_table_btn">
                                                    <el-button @click="InfoExport2" size="mini">导出</el-button>
                                                    <el-button @click="InfoCount" size="mini">统计</el-button>
                                                </div>
                                            </el-search-table-pagination>
                                        </div>
                                        <!--定制报表-->
                                        <div v-show="show_statement=='2'">
                                            <div class="loncom_mb10 loncom_overflow_hidden">
                                                <div class="loncom_sysinfo_box_left">
                                                    <div class="loncom_color999 loncom_dis_inlineblock">筛选：</div>
                                                    <div class="loncom_dis_inlineblock">
                                                        <el-date-picker
                                                            v-model="datevalue3"
                                                            type="datetimerange"
                                                            :picker-options="pickerOptions"
                                                            range-separator="至"
                                                            start-placeholder="开始日期"
                                                            end-placeholder="结束日期"
                                                            @change="dateChange3(datevalue3)"
                                                            size="mini">
                                                        </el-date-picker>
                                                    </div>
                                                </div>
                                            </div>
                                            <el-search-table-pagination type="local" class="loncom_position_relative" :show-pagination="true" border :data="statement3" :page-sizes="[10,20,50]" :columns="statement_columns3" >                                           
                                                <el-table-column slot="prepend" type="selection"></el-table-column>
                                                <template slot-scope="scope" slot="preview-handle">
                                                    <span>
                                                        <a href="javascript:;" class="loncom_color">excel</a> 
                                                        <em>|</em> 
                                                        <a href="javascript:;" class="loncom_color">word</a>
                                                        <em>|</em> 
                                                        <a href="javascript:;" class="loncom_color">pdf</a>
                                                    </span>
                                                </template>
                                                <div class="loncom_table_btn">
                                                    <el-button @click="InfoExport3()" size="mini">导出</el-button>
                                                </div>
                                            </el-search-table-pagination>
                                        </div>
                                        
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
            tree_data: [{
                label: '常规报表',
                id:'e1',
                type:'0',
                children: [{
                    label: '设备1',
                    id:'e1_1',
                    type:'0',
                    children: [{
                        label: '属性1',
                        id:'e1_1_1',
                        type:'0',
                    },{
                        label: '属性2',
                        id:'e1_1_2',
                        type:'0',
                    }]
                },{
                    label: '设备2',
                    id:'e1_2',
                    type:'0',
                    children: [{
                        label: '属性1',
                        id:'e1_2_1',
                        type:'0',
                    },{
                        label: '属性2',
                        id:'e1_2_2',
                        type:'0',
                    }]
                }]
            }, {
                label: '告警统计',
                id:'e2',
                type:'1',
            },{
                label: '定制报表',
                id:'e1',
                type:'2',
                children: [{
                    label: '定制1',
                    id:'e1_1',
                    type:'2',
                },{
                    label: '定制2',
                    id:'e1_2',
                    type:'2',
                }]
            }],
            defaultProps: { //树形公用
                children: 'children',
                label: 'label'
            },
            //点击切换显示那个报表
            show_statement:'0',
            
            //报表时间
            pickerOptions: {
                shortcuts: [{
                    text: '全选',
                    onClick(picker) {
                        const start='';
                        const end='';
                        picker.$emit('pick', [start, end]);
                    }
                },{
                    text: '日报',
                    onClick(picker) {
                        const theDate = new Date();
                        const start=theDate.Format("yyyy-MM-dd 00:00:00");
                        const end=theDate.Format("yyyy-MM-dd 23:59:59");
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '周报',
                    onClick(picker) {
                        const theDate = new Date();
                        const nowDay=theDate.getDay();
                        let start=null;
                        let end=null;
                        if(nowDay!=0){
                            start=new Date(theDate.getTime()-3600*1000*24*(nowDay-1)).Format("yyyy-MM-dd 00:00:00");
                            end=new Date(theDate.getTime()+3600*1000*24*(7-nowDay)).Format("yyyy-MM-dd 23:59:59"); 
                        }else{
                            start=new Date(theDate.getTime()-3600*1000*24*6).Format("yyyy-MM-dd 00:00:00");
                            end=theDate.Format("yyyy-MM-dd 23:59:59");
                        }
                        picker.$emit('pick', [start, end]);
                    }
                },{
                    text: '月报',
                    onClick(picker) {
                        const theDate = new Date();
                        let theMonth=theDate.getMonth();
                        const start = new Date(theDate.getFullYear(),theMonth,1).Format("yyyy-MM-dd 00:00:00");
                        let nextMonth=theMonth+1;
                        const end=new Date(new Date(theDate.getFullYear(),nextMonth,1)-1000*60*60*24).Format("yyyy-MM-dd 23:59:59");
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            //常规报表
            datevalue1:'',
            statement1: [
                 {time:'2017-03-21 10:00',type:'值***' },
                 {time:'2017-03-21 10:00',type:'值***' },
                 {time:'2017-03-21 10:00',type:'值***' },
                 {time:'2017-03-21 10:00',type:'值***' },
                 
             ],
             statement_columns1: [
                { prop: 'time', label: '时间',minWidth:60},
                { prop: 'type', label: '属性' },
            ],
            //告警统计
            datevalue2:'',
            statement2: [
                 {time:'2017-03-21 10:00',name:'温度过高告警',grade:'重要',addr:'**位置，1号温湿度，温度',affirm_time:'2017-03-21 10:00' ,relieve_time:'2017-03-21 10:00'},
                 {time:'2017-03-21 10:00',name:'温度过高告警',grade:'重要',addr:'**位置，1号温湿度，温度',affirm_time:'2017-03-21 10:00' ,relieve_time:'2017-03-21 10:00'},
                 {time:'2017-03-21 10:00',name:'温度过高告警',grade:'重要',addr:'**位置，1号温湿度，温度',affirm_time:'2017-03-21 10:00' ,relieve_time:'2017-03-21 10:00'},
                 {time:'2017-03-21 10:00',name:'温度过高告警',grade:'重要',addr:'**位置，1号温湿度，温度',affirm_time:'2017-03-21 10:00' ,relieve_time:'2017-03-21 10:00'},
                 {time:'2017-03-21 10:00',name:'温度过高告警',grade:'重要',addr:'**位置，1号温湿度，温度',affirm_time:'2017-03-21 10:00' ,relieve_time:'2017-03-21 10:00'},
             ],
             statement_columns2: [
                { prop: 'time', label: '告警时间'},
                { prop: 'name', label: '告警名称' },
                { prop: 'grade', label: '等级' },
                { prop: 'addr', label: '告警定位' ,minWidth:60},
                { prop: 'affirm_time', label: '确认时间' },
                { prop: 'relieve_time', label: '解除时间' },
            ],
            //定制报表
            datevalue3:'',
            statement3: [
                 {name:'**报表2017-03-20 10:00',cycle:'日报',time:'2017-03-21 10:00'},
                 {name:'**报表2017-03-20 10:00',cycle:'日报',time:'2017-03-21 10:00'},
                 {name:'**报表2017-03-20 10:00',cycle:'日报',time:'2017-03-21 10:00'},
             ],
             statement_columns3: [
                { prop: 'name', label: '报表名称',minWidth:60},
                { prop: 'cycle', label: '周期'},
                { prop: 'time', label: '生成时间'},
                { prop: 'handle', label: '操作' ,slotName:'preview-handle'},
            ],


       }
   },
   methods:{
        //添加定制
        addOrder(){
            this.$router.push({path:'/loncom/statement/addOrder'});
        },
        //树形
        handleNodeClick(node,data,store) {
            this.show_statement=data.type;
        },
        
        //点击树形编辑
        editTree(node,data,store) {
            this.$router.push({path:'/loncom/statement/addOrder',query:{id:node.id}});
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
        //渲染控制器树形的编辑删除图标
        renderTree(h, { node, data, store }) {
            return (
            <span class="loncom_tree_list">
              <em class="loncom_mr10" on-click={ () => this.handleNodeClick(node,data,store) }>{node.label}</em>
              
              <em class="loncom_fr loncom_tree_listbtn">
                <i class="el-icon-edit loncom_mr5" on-click={ () => this.editTree(node,data,store) }></i>
                <i class="el-icon-delete" on-click={ () => this.removeTree(node, data) }></i>
              </em>
            </span>
            );
        },
        //常规报表时间切换
        dateChange1:function(){

        },
        //常规报表导出
        InfoExport1:function(){

        },
        //告警统计时间切换
        dateChange2:function(){

        },
        //告警统计导出
        InfoExport2:function(){

        },
        //告警统计统计
        InfoCount:function(){

        },

   
   },
   components:{},
}
</script>