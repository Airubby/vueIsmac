<template>
    <div class="header" style="width:1000px;margin: 30px auto;">
      
    <el-table :data="inform_table" border size="mini" style="width: 100%">
                    <el-table-column type="selection" width="36"></el-table-column>
                    <el-table-column label="姓名">
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.name" size="mini" :disabled="scope.row.loncom_active" :class="{'loncom_active':scope.row.loncom_active}"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column label="手机">
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.phone" size="mini" :disabled="scope.row.loncom_active" :class="{'loncom_active':scope.row.loncom_active}"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column label="邮箱">
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.email" size="mini" :disabled="scope.row.loncom_active" :class="{'loncom_active':scope.row.loncom_active}"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column label="角色">
                        <template slot-scope="scope">
                            <span>{{ scope.row.role }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <span v-if="scope.row.role!='系统账户'">
                                <a href="javascript:;" @click="edit(scope.row)" ref="editbtn" class="loncom_color">编辑</a>
                                <em>|</em>
                                <a href="javascript:;" @click="remove(scope.$index)" class="loncom_color">删除</a>
                            </span>
                        </template>
                    </el-table-column>
                </el-table>

           <!--     
      <template>
        <egrid border
          max-height="500"
          column-type="selection"
          :data="data"
          :columns="columns"
          :columns-schema="columnsSchema"
         >
        </egrid>
      </template>
-->

      <template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>









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
      inform_table:[
               {id:"1",name:"李莫愁",phone:"15228983615",email:"123@qq.com",role:"系统账户",loncom_active:true},
               {name:"杨过",phone:"18521654123",email:"123@qq.com",role:"系统账户",loncom_active:true},
               {name:"小龙女",phone:"15228983615",email:"123@qq.com",role:"非系统账户",loncom_active:true},
           ],
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        data: [
          {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-08',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-06',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-07',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }
        ],
        columns: [
          { label: '日期', prop: 'date' },
          { label: '姓名', prop: 'name' },
          { label: '省份', prop: 'province' },
          { label: '市区', prop: 'city' },
          { label: '地址', prop: 'address' },
          { label: '邮编', prop: 'zip' }
        ],
        // columnsSchema 可以用来单独定义 columns 的某一列，这里的设置会覆盖 columnsProps 的配置属性
      columnsSchema: {
        '地址': {
          width: 'auto',
          // propsHandler 可用于转换传给自定义组件的 props 这里将 props 变成了 address
          // propsHandler ({ col, row }) {
          //   return { address: row[col.prop] }
          // },
          // // 这里的 props 是 address
          // component: Vue.extend({
          //   props: ['address'],
          //   render (h) {
          //     return h('span', {
          //       style: { color: '#20A0FF' }
          //     }, this.address)
          //   }
          // })
        }
      }

    }
  },
  methods:{
   // columnsHandler 可用于在现有的 columns 进行操作，对 columns 进行增删改，这里新增了操作列
    columnsHandler (cols) {
      return cols.concat({
        label: '操作',
        align: 'left',
        component: Btn,
        // listeners 可用于监听自定义组件内部 $emit 出的事件
        listeners: {
          'row-edit' (row) {
            console.log('row-edit', row)
          }
        }
      })
    },

    selectionChange (rows) {
      console.log('selected', rows)
    },
    handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      //编辑
        edit:function(row){
            row.loncom_active=row.loncom_active?false:true;
            row.loncom_active?$(this.$refs.editbtn).html('编辑'):$(this.$refs.editbtn).html('保存');
            
        },
        //删除
        remove:function(index){
            console.log(index)
            this.inform_table.splice(index, 1);
        },



  },
  components:{},
}
</script>

