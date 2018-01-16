<template>
    <div class="header">
      <h2>测试table</h2>
      <el-search-table-pagination type="local" :show-pagination="false" border :data="tableData1" :page-sizes="[2, 10]" :columns="columns1" >
      <template slot="preview-column" slot-scope="scope">
      
      <el-input size="small" v-model="tableData1[scope.$index].mobile"></el-input>
        </template> 
</el-search-table-pagination>


******************************************

      <!--
      <el-search-table-pagination url="https://api.github.com/repos/zollero/el-search-table-pagination/branches" :list-field="data"  :columns="columns1" :formOptions="formOptions1">
      </el-search-table-pagination> 
-->
      <div style="width: 1000px;margin:0 auto; position:relative;">
       <el-search-table-pagination type="local" :show-selection="true" :show-pagination="true"  fit border stripe select selection :data="tableData" :page-sizes="[2, 10]" :columns="columns" :form-options="formOptions"  >
          <el-table-column slot="prepend" type="selection"></el-table-column>
          <template slot="preview-column" 
          slot-scope="scope">
          <input type="checkbox">
        </template>
        <!--  
          <template slot="preview-column" slot-scope="scope" type="selection"></template>
          <div style="margin-top: 20px;position:absolute;bottom:0;z-index:99" >
            <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
            <el-button @click="setCurrent()">取消选择</el-button>
          </div>

          -->
      </el-search-table-pagination>
      </div>
     


    </div>
    
</template>





<script>

export default {
  created () {
    this.$api.get('topics', null, function(r) {
      console.log(r)
    })
  },
  mounted() {
   
  },
  data() {
    return {
      columns1: [
          { prop: 'name', label: 'Name'},
          { prop: 'mobile', label: 'Mobile' ,slotName: 'preview-column' },
        ],
        tableData1: [
          { name: 'Sam', mobile: '15299xxxx152' },
          { name: 'Jean', mobile: '13452xxxx'},
        ],

      formOptions2: {
          inline: true,
          submitBtnText: 'Search',
          submitLoading:'...',
          forms: [
            { prop: 'name', label: '标题' },
            { prop: 'commit', label: 'commit' },
            
          ]
        },
        columns2: [
          { prop: 'name', label: 'Branch', width: 100 },
          { prop: 'commit', label: 'Last Commit', minWidth: 140, render: row => row.commit.sha },
          { prop: 'commit', label: 'Last Commit Url', minWidth: 180, render: row => row.commit.url }
        ],





      formOptions: {
          inline: true,
          submitBtnText: '搜索',
          submitLoading:'true',
          forms: [
            { prop: 'name', label: '姓名' },
            { prop: 'mobile', label: '电话' },
            { prop: 'sex', label: '性别', itemType: 'select',
              options: [
                { value: '', label: '所有' },
                { value: 0, label: '男' },
                { value: 1, label: '女' }
              ]
            }
          ]
        },
        
        columns: [
          {label: '',width: 50, slotName: 'preview-column',},
          { prop: 'name', label: 'Name'},
          { prop: 'mobile', label: 'Mobile' },
          { prop: 'sex', label: 'Sex',
            render: row => {
              const { sex } = row
              return sex === 0 ? 'Male' : sex === 1 ? 'Female' : 'Unknow'
            }
          },
          { prop: 'name1', label: 'Name'},
          { prop: 'mobile1', label: 'Mobile'},
          {label: '自定义dom', prop:'sex1',align:'center',
            render: row => {
              console.log(row)
            }
          },
        ],
        tableData: [
          { name: 'Sam', mobile: '15299xxxx152', name1: 'Sam', mobile1: '15299xxxx', sex: 0 ,sex1: 0 },
          { name: 'Jean', mobile: '13452xxxx',  name1: 'Sam', mobile1: '15299xxxx',sex: 1 ,sex1: 0},
          { name: 'Tony', mobile: '187233xxxx', name1: 'Sam', mobile1: '15299xxxx', sex: 0 ,sex1: 1},
          { name: 'Sam', mobile: '15299xxxx',  name1: 'Sam', mobile1: '15299xxxx',sex: 0 ,sex1: 0},
          { name: 'Jean', mobile: '13452xxxx', name1: 'Sam', mobile1: '15299xxxx',sex: 1 ,sex1: 1},
          { name: 'Tony', mobile: '187233xxxx', name1: 'Sam', mobile1: '15299xxxx', sex: 0 ,sex1: 0}
        ]
    }
  },
  methods:{
   
  },
  components:{},
}
</script>

