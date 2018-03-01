<template>
    <div class="header">
      <h2>测试table</h2>
      <div style="width: 1000px;margin:0 auto; position:relative;">
       <el-search-table-pagination type="local" :data="tableData" :columns="columns" >
       
      </el-search-table-pagination>
      </div>
      <a @click="test">点我测试改变值</a>
    </div>
</template>
<script>
export default {
  data() {
    return {
        columns: [
          { prop: 'name', label: 'Name'},
          { prop: 'mobile', label: 'Mobile' },
        ],
        tableData: [
          { name: 'Sam', mobile: '15299xxxx152',},
          { name: 'Jean', mobile: '13452xxxx',},
        ]
    }
  },
  methods:{
    test:function(){
      this.tableData[0].name="KKK";
    }
  },
  components:{},
}
</script>

