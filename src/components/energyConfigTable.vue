<template>
    <div>
        <div class="loncom_mb10 loncom_overflow_hidden">
            <div class="loncom_sysinfo_box_left"><h2>{{table_info[1].title}}</h2></div>
            <div class="loncom_fr">
                <el-button type="primary" size="mini" @click="addConfig">新增</el-button>
            </div>    
        </div>
        <el-search-table-pagination type="local" class="loncom_mb50" :show-pagination="false" border :data="table_info[1].data" :page-sizes="[10,20,50]" :columns="config_columns" >                                           
            
            <template slot-scope="scope" slot="preview-operator">
                <span style="color:#00A950;" v-if="scope.row.operator=='1'">+ 累加</span>
                <span style="color:#F04133;" v-else-if="scope.row.operator=='0'">- 减去</span>
            </template>
            <template slot-scope="scope" slot="preview-handle">
                <span>
                    <a href="javascript:;" class="loncom_color" @click="editConfig(scope.row)">编辑</a> 
                    <em>|</em> 
                    <a href="javascript:;" class="loncom_color" @click="removeConfig(scope.$index)">删除</a>
                </span>
            </template>
        </el-search-table-pagination>
        
    </div>
</template>

<script>

export default {
   
    data(){
      return {
          //配置信息
        config_columns: [
            { prop: 'operator', label: '操作符',slotName:'preview-operator'},
            { prop: 'station', label: '引用测点' ,minWidth:100},
            { prop: 'factor', label: '换算因子' },
            { prop: 'handle', label: '操作',slotName:'preview-handle' },
        ],
        //父组件数据备份
        table_info:this.energyConfigTable,
        

      }
    },
    methods:{
      addConfig:function(){
            this.table_info[0].visible=true;
            this.table_info[0].type=this.table_info[1].type;
      },
      editConfig:function(row){
           this.table_info[0].visible=true;
            this.table_info[0].type=this.table_info[1].type;
            this.table_info[0].data=row;
      },
      removeConfig:function(index){
          console.log(index)
          //这样删除有问题，只有自己获取判断index索引去删除才行
          this.table_info[1].data.splice(index,1)
      },
    },
    watch:{
        energyConfigTable(val){
            this.table_info=val;
        },
        table_info(val){
            this.$emit('config',val);
        }
    },
    props:["energyConfigTable"],  
}
</script>

