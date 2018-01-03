<template>
  <el-search-table-pagination type="local" class="loncom_position_relative" :show-pagination="true" border :data="tableInfo" :page-sizes="[10,20,50]" :columns="table_info_columns" >                                           
        <el-table-column slot="prepend" type="selection"></el-table-column>
        <template slot-scope="scope" slot="preview-control">
            <span v-if="scope.row.controlState=='1'">
                <em class="loncom_circle loncom_mr5" style="background:#f00;"></em>异常
            </span>
            <span v-else-if="scope.row.controlState=='0'">
                <em class="loncom_circle loncom_mr5" style="background:#33CC00;"></em>正常
            </span>
        </template>
        <template slot-scope="scope" slot="preview-alarm">
            <span v-if="scope.row.alarmState=='1'">
                <em class="loncom_circle loncom_mr5" style="background:#f00;"></em>异常
            </span>
            <span v-else-if="scope.row.alarmState=='0'">
                <em class="loncom_circle loncom_mr5" style="background:#33CC00;"></em>正常
            </span>
        </template>
        <template slot-scope="scope" slot="preview-handle">
            <div>
                <p>
                    <a href="javascript:;" class="loncom_color" @click="stop(scope.row)">停用</a> 
                    <em>|</em> 
                    <a href="javascript:;" class="loncom_color" @click="protection(scope.row)">维护</a>
                </p>
                <p>
                    <a href="javascript:;" class="loncom_color" @click="edit(scope.row)">编辑</a> 
                    <em>|</em> 
                    <a href="javascript:;" class="loncom_color" @click="remove(scope.row)">删除</a>
                </p>
            </div>
        </template>
        <div class="loncom_table_btn">
            <el-button @click="start()" size="mini">启用</el-button>
            <el-button @click="stop()" size="mini">停用</el-button>
            <el-button @click="protection()" size="mini">维护</el-button>
        </div>
    </el-search-table-pagination>
</template>

<script>


export default {
   
    data(){
      return {
          table_info_columns:[
              { prop: 'name', label: '设备名称'},
              { prop: 'type', label: '设备类型'},
              { prop: 'addr', label: '位置',minWidth:100},
              { prop: 'ip', label: '接入点'},
              { prop: 'controlState', label: '监控状态',slotName:'preview-control'},
              { prop: 'alarmState', label: '告警状态',slotName:'preview-alarm'},
              { prop: 'handel', label: '操作',slotName:'preview-handle',width:100},
          ],
      }
    },
    methods:{
      //启用
        start:function(row){

        },
        //停用
        stop:function(row){

        },
        //维护
        protection:function(row){

        },
        //编辑
        edit:function(row){

        },
        //删除
        remove:function(row){

        }
    },
    
    props:["tableInfo"],  //子组件在props中创建一个属性，用以接收父组件传过来的值,和父组件v-bind:parentToChild相同
}
</script>

