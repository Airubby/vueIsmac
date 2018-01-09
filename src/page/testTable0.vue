<template>
    <div class="header">


      <div style="width: 1000px;margin:0 auto; position:relative;">
       <el-search-table-pagination type="local" :show-pagination="true" border :data="tableData" :page-sizes="[2, 10]" :columns="columns">
          <el-table-column slot="prepend" type="selection"></el-table-column>

      </el-search-table-pagination>
      </div>
     


    </div>
    
</template>





<script>

export default {
  created () {
  
  },
  mounted() {
   
  },
  data() {
    return {
      




      formOptions: { forms: []},
        
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

