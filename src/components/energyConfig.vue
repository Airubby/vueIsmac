<template>
  <div :class="{'loncom_active':energyConfig[1].loncom_active}" class="loncom_public_table loncom_content">
      <div class="loncom_public_lefttree">
        <div class="loncom_public_lefttree_title">
            能效管理对象
        </div>
        <div class="loncom_public_lefttree_con loncom_public_tabbox10">
            <div class="loncom_public_tabboxcon10">
                <div class="loncom_public_lefttree_add" @click="addEnergy">+ 添加能效对象</div>
                <div class="loncom_family_yahei loncom_mt10">
                    <el-tree
                        :data="energy_data"
                        node-key="id"
                        ref="tree"
                        :props="defaultProps"
                        accordion
                        :expand-on-click-node="false"
                        :render-content="renderEnergy"
                        >
                    </el-tree>
                </div>
            </div>
        </div>
    </div>
    <div class="loncom_public_treeright">
        <div class="loncom_public_tab loncom_content">
            <el-tabs v-model="ActiveName" @tab-click="HandleClick">
                <!--瞬时能效-->
                <el-tab-pane label="瞬时能效" name="first">
                    <div class="loncom_public_tabbox loncom_public_tabbox0">
                        <div class="loncom_public_tabboxcon0">
                           <!--总输入-->
                           <EnergyConfigTable v-bind:energyConfigTable="[addInfo,now_totalconfig]"></EnergyConfigTable>
                           <!--IT设备-->
                           <EnergyConfigTable v-bind:energyConfigTable="[addInfo,now_itconfig]"></EnergyConfigTable>
                            <!--结束-->
                        </div>
                    </div>
                </el-tab-pane>
                <!--累计能效-->
                <el-tab-pane label="累计能效" name="second">
                    <div class="loncom_public_tabbox loncom_public_tabbox1">
                        <div class="loncom_public_tabboxcon1">
                            <!--总输入-->
                           <EnergyConfigTable v-bind:energyConfigTable="[addInfo,all_totalconfig]"></EnergyConfigTable>
                           <!--IT设备-->
                           <EnergyConfigTable v-bind:energyConfigTable="[addInfo,all_itconfig]"></EnergyConfigTable>
                           <!--结束-->
                        </div>
                    </div>
                </el-tab-pane>
                <!--电价策略-->
                <el-tab-pane label="电价策略" name="third">
                    <div class="loncom_public_tabbox loncom_public_tabbox2">
                        <div class="loncom_public_tabboxcon2">
                            3
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
    <DialogEnergyConfigAdd v-bind:dialogEnergyConfigAdd="addInfo"></DialogEnergyConfigAdd>
  </div>
</template>
<script>
import EnergyConfigTable from './energyConfigTable.vue'
import DialogEnergyConfigAdd from '../components/dialogEnergyConfigAdd.vue'
export default {
  created () {
    //判断新进来还是编辑新增后来这个页面的
    var obj = this.$route.query;
    if(JSON.stringify(obj) != "{}"){
        if(obj.configItem!=undefined){
            this.$parent.top_items[0].loncom_active=false;
            this.$parent.top_items[1].loncom_active=true;
            return;
        }
    }
  },
  mounted() {
    //切换选项卡的超出滚动
    tabScroll("0");
    tabScroll("1");
    tabScroll("2");
  },
   data() {
       return {
        　top_items:[],
          //控制器树形
            energy_data: [{
                label: '成都一号机房',
                id:'e1',
                children: [{
                    label: '1号机房能效',
                    id:'e1_1',
                },{
                    label: '2号机房能效',
                    id:'e1_2',
                }]
            }, {
                label: '成都二号机房',
                id:'e2',
                children: [{
                    label: '1号机房能效',
                    id:'e2_1',
                },{
                    label: '2号机房能效',
                    id:'e2_2',
                }]
            }],
            defaultProps: { //树形公用
                children: 'children',
                label: 'label'
            },
            //选项卡切换
            ActiveName: 'first', 
            
            //瞬时总输入
            now_totalconfig:{
                title:'总输入',
                type:'now_totalconfig',
                data:[
                    { operator:'1',station:'输入电量仪 ^ A相有功功率',factor:'1.0' },
                    { operator:'0',station:'输入电量仪 ^ A相有功功率',factor:'2.0' },
                    { operator:'0',station:'输入电量仪 ^ A相有功功率',factor:'3.0' },
                ]
            },
            //瞬时IT设备
            now_itconfig:{
                title:'IT设备',
                type:'now_itconfig',
                data:[
                    { operator:'1',station:'输入电量仪 ^ A相有功功率',factor:'1.0' },
                    { operator:'0',station:'输入电量仪 ^ A相有功功率',factor:'1.0' },
                    { operator:'0',station:'输入电量仪 ^ A相有功功率',factor:'1.0' },
                ]
            },
            //累计总输入
            all_totalconfig:{
                title:'总输入',
                type:'all_totalconfig',
                data:[
                    { operator:'1',station:'输入电量仪 ^ A相有功功率',factor:'1.0' },
                    { operator:'1',station:'输入电量仪 ^ A相有功功率',factor:'1.0' },
                    { operator:'0',station:'输入电量仪 ^ A相有功功率',factor:'1.0' },
                ]
            },
            //累计IT设备
            all_itconfig:{
                title:'IT设备',
                type:'all_itconfig',
                data:[
                    { operator:'1',station:'输入电量仪 ^ A相有功功率',factor:'1.0' },
                    { operator:'0',station:'输入电量仪 ^ A相有功功率',factor:'1.0' },
                    { operator:'1',station:'输入电量仪 ^ A相有功功率',factor:'1.0' },
                ]
            },
            //新增
            addInfo:{
                visible:false,
                title:"新增配置",
                width: "600px",
                type:'',
                data:{operator:'1',station:'',factor:''},
            },

       }
   },
   methods:{
        HandleClick(tab) {  //切换中超出滚动用
            tabScroll(tab.index);
        },
        //添加控制器
        addEnergy(){
            this.$router.push({path:'/loncom/energy/addEnergyobj'});
        },
        //渲染控制器树形的编辑删除图标
        renderEnergy(h, { node, data, store }) {
            return (
            <span class="loncom_tree_list">
              <em class="loncom_mr10">{node.label}</em>
              
              <em class="loncom_fr loncom_tree_listbtn">
                <i class="el-icon-edit loncom_mr5" on-click={ () => this.editEnergyTree(node,data,store) }></i>
                <i class="el-icon-delete" on-click={ () => this.removeEnergyTree(node, data) }></i>
              </em>
            </span>
            );
        },
        //树形
        handleNodeClick(data) {
            console.log(data);
        },
        //点击树形编辑
        editEnergyTree(node,data,store) {
            console.log(node)
            console.log(data)
            console.log(store)
            this.$router.push({path:'/loncom/energy/addEnergyobj',query:{id:node.id}});
        },
        //点击树形删除
        removeEnergyTree(node, data) {
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


   },
  props:["energyConfig"],
  components:{EnergyConfigTable,DialogEnergyConfigAdd},

}
</script>

