<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <h2>设备管理 &gt; {{topInfo}}</h2>
        </div>
        <div class="loncom_scroll_con">
            <div class="loncom_public_table loncom_content">
                <div class="loncom_public_tab">
                    <el-tabs v-model="ActiveName">
                        <el-tab-pane label="基本信息" name="first">
                            <div class="loncom_public_tabbox loncom_public_tabbox0">
                                <div class="loncom_public_tabboxcon loncom_public_tabboxcon0">
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>设备分类
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <div class="loncom_dis_inline">
                                                空调 > 精密空调
                                            </div>
                                            <div class="loncom_dis_inline loncom_ml15">
                                                <a href="javascript:;" class="loncom_color1ABC9C">编辑</a>
                                            </div>
                                            <div class="loncom_dis_inline loncom_ml15">
                                                <a href="javascript:;" class="loncom_color1ABC9C">添加扩展分类</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>总线类型
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-select size="small" placeholder="选择类型">
                                                <el-option
                                                    v-for="item in trunkOptions"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>品牌型号
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <div class="loncom_mb10">
                                                <el-select size="small" placeholder="选择品牌">
                                                    <el-option
                                                        v-for="item in brandOptions"
                                                        :key="item.value"
                                                        :label="item.label"
                                                        :value="item.value">
                                                    </el-option>
                                                </el-select>
                                            </div>
                                            <div>
                                                <el-input size="small" placeholder="填写型号"></el-input>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>模板名称
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input size="small"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>界面模板
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <div class="loncom_dis_inline">
                                                空调 > 精密空调
                                            </div>
                                            <div class="loncom_dis_inline loncom_ml15">
                                                <a href="javascript:;" class="loncom_color1ABC9C">选择</a>
                                            </div>
                                            <div class="loncom_list_box_info">
                                                智能设备必须关联合适的界面模板，否则无法显示详情视图
                                            </div>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            说明
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <textarea style="height: 150px;" placeholder="填输入内容"> </textarea>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="测点信息" name="second">
                            <div class="loncom_public_tabbox loncom_public_tabbox1">
                                <div class="loncom_equipment_addelibrary loncom_public_table loncom_public_tabboxcon1">
                                    <div class="loncom_mb10 loncom_overflow_hidden">
                                        <el-upload
                                            class="upload-demo"
                                            action
                                            multiple
                                            :before-upload="beforeUpload"
                                            :limit="1">
                                            <el-button size="small" icon="el-icon-upload2" round>导入测点</el-button>
                                        </el-upload>
                                    </div>
                                    <el-search-table-pagination type="local" :show-pagination="true" border :data="table_info" :page-sizes="[10,20,50]" :columns="table_info_columns" >                                           
                                        <template slot-scope="scope" slot="preview-units">
                                            <span>
                                                <el-input size="small" v-model="scope.row.units"></el-input>
                                            </span>
                                        </template>
                                        <template slot-scope="scope" slot="preview-ifstart">
                                            <span style="height:40px">
                                                <el-switch
                                                    style="display: block"
                                                    v-model="scope.row.ifstart"
                                                    active-color="#13ce66"
                                                    inactive-color="#ff4949"
                                                    active-value="1"
                                                    inactive-value="0"
                                                    active-text="是"
                                                    inactive-text="否">
                                                </el-switch>
                                            </span>
                                        </template>
                                        <template slot-scope="scope" slot="preview-signal">
                                            <span>
                                                <el-input size="small" v-model="scope.row.signal"></el-input>
                                            </span>
                                        </template>
                                        <template slot-scope="scope" slot="preview-target">
                                            <span>
                                                <el-input size="small" v-model="scope.row.target"></el-input>
                                            </span>
                                        </template>
                                    </el-search-table-pagination>
                                </div>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
                <div class="loncom_public_tabbtn">
                    <span v-show="!activeBtn">
                        <el-button type="info" plain @click="giveUp">放弃修改</el-button>
                        <el-button type="primary" @click="editSubmitInfo">提交</el-button>
                    </span>
                    <span v-show="activeBtn">
                        <el-button type="primary" @click="addSubmitInfo">提交</el-button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    
  created () {
   var obj = this.$route.query;
    if(JSON.stringify(obj) == "{}"){
        this.topInfo="添加设备库";
    }else{
        this.topInfo="编辑设备库";
        this.activeBtn=false;
        console.log(obj);
        this.elibrary_info=obj;
        //获取到的赋给 elibrary_info  字段根据后台需求匹配正确
    }
  },
  mounted() {
    scrollCon();
    
    tabScroll("0");
    tabScroll("1");
  },
   data() {
    
       return {
           //新增编辑控制器头部显示
           topInfo:'',
           elibrary_info:{},
           //新增设备编辑设备显示不同的按钮信息
           activeBtn:true,

           ActiveName: 'first',  //选项卡头部切换信息
           //总线类型
           trunkOptions:[],
           //品牌型号
           brandOptions:[],
          //测点信息table
          table_info:[
                {type:'模拟量',name:'A相电压',units:'V',ifstart:'1',alarm:'配置',store:'配置',signal:'',target:''},
                {type:'模拟量',name:'A相电压',units:'V',ifstart:'0',alarm:'配置',store:'配置',signal:'',target:''},
            ],
        table_info_columns:[
            { prop: 'type', label: '类型'},
            { prop: 'name', label: '测点名称',minWidth:100},
            { prop: 'units', label: '单位',slotName:'preview-units'},
            { prop: 'ifstart', label: '是否启用',slotName:'preview-ifstart'},
            { prop: 'alarm', label: '告警参数'},
            { prop: 'store', label: '存储参数'},
            { prop: 'signal', label: '信号分组',slotName:'preview-signal'},
            { prop: 'target', label: '指标分组',slotName:'preview-target'},
        ],

       }
   },
   methods:{
        //导入测点
       beforeUpload:function(file){
           let config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                } 
            }; //添加请求头
             
            let fd = new FormData()
            fd.append('file', file)
            fd.append('headers', config)
             
            this.$api.post('/upload/xls',fd, r => {
                console.log(111)
            	 console.log(r);
            }); 
       },
       //新增提交
        addSubmitInfo:function(){
            if(true){
                this.$message({
                    message: '新增成功',
                    type: 'success'
                });
                this.$router.push({path:'/loncom/equipment'});
            }
        },
        //编辑提交
        editSubmitInfo:function(){
            if(true){
                this.$message({
                    message: '编辑成功',
                    type: 'success'
                });
                this.$router.push({path:'/loncom/equipment'});
            }
        },
        //放弃编辑
        giveUp:function(){
            this.$router.push({path:'/loncom/equipment'});
        },
        
   },
   components:{},
}
</script>