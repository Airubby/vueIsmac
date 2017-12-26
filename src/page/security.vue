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
                            <el-tab-pane label="门禁监控" name="first">
                                <div class="loncom_public_tabbox loncom_public_tabbox0">
                                    <div class="loncom_public_tabboxcon0">

                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="发卡授权" name="second">
                                发卡授权
                            </el-tab-pane>
                            <el-tab-pane label="门禁配置" name="third">
                                门禁配置
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

       }
   },
   methods:{
        handleClick(tab) {  //超出滚动用
            tabScroll(tab.index);
        },
        handleNodeClick(data) {
            console.log(data);
        },
        editTree(node,data,store) {
            console.log(node)
            console.log(data)
            console.log(store)
            this.$router.push({path:'/loncom/security/accessAdd',query:{id:node.id}});
        },

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

        renderContent(h, { node, data, store }) {
            var _level=node.level;
            return (
            <span class="loncom_tree_list">
              <em class="loncom_mr10">{node.label}{node.level}</em>
              
              <em class="loncom_fr loncom_tree_listbtn">
                <i class="el-icon-edit loncom_mr5" on-click={ () => this.editTree(node,data,store) }></i>
                <i class="el-icon-delete" on-click={ () => this.removeTree(node, data) }></i>
              </em>
            </span>
            );
        }
   },
   components:{TopChangeInfo},
}
</script>