<template>
    <div class="header" style="width:1000px;margin: 30px auto;">
      

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
    }
  },
  components:{},
}
</script>

