<template>
  <div class="loncom_content">
        <div class="equipment_search">
            <el-input placeholder="请输入模板名称进行检索" v-model="search_input">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <div class="equipment_classify">
            <div class="equipment_classify_con">
                <div class="loncom_list_box">
                    <div class="loncom_equipment_list_box_left">
                        设备分类：
                    </div>
                    <div class="loncom_equipment_list_box_right">
                        <el-radio-group v-model="classifyRadio" size="mini">
                            <span v-for="item in classify" @change="classifyClick(item)">
                                <el-radio-button :label="item.id">{{item.name}}</el-radio-button>
                            </span>
                        </el-radio-group>
                    </div>
                </div>
                <div class="loncom_list_box">
                    <div class="loncom_equipment_list_box_left">
                        （多选）品牌型号：
                    </div>
                    <div class="loncom_equipment_list_box_right">
                        <el-checkbox-group v-model="brandRadio" size="mini">
                            <span v-for="item in brand">
                                <el-checkbox-button :label="item.id" @change="brandClick(item)">{{item.name}}</el-checkbox-button>
                            </span>
                        </el-checkbox-group>
                    </div>
                </div>
                <div class="loncom_list_box">
                    <div class="loncom_equipment_list_box_left">
                        总线类型：
                    </div>
                    <div class="loncom_equipment_list_box_right">
                        <el-checkbox-group v-model="typeRadio" size="mini">
                            <span v-for="item in type">
                                <el-checkbox-button :label="item.id" @change="typeClick(item)">{{item.name}}</el-checkbox-button>
                            </span>
                        </el-checkbox-group>
                    </div>
                </div>
            </div>
        </div>
        <div class="loncom_equipment_classify_center">
            <span class="loncom_color999">共搜索到<em>22</em>个模板</span>
            <a href="javascript:;" class="loncom_fr loncom_color108EE9" @click="emptyInfo">清空</a>
        </div>
        <div class="loncom_public_card loncom_equipment_classify_list">
            <ul>
                <li>
                    <div class="loncom_public_card_box loncom_public_shadow" @click="addTemplate">
                        <div class="loncom_public_add"><em></em><em></em></div>
                    </div>
                </li>
                <li v-for="item in equipment_info" v-show="equipmentLibrary.type=='eLib'">
                    <div class="loncom_public_card_box loncom_public_shadow">
                        <div class="loncom_equipment_classify_list_top loncom_overflow_hidden">
                            <div class="loncom_equipment_list_img">
                                <img :src="'static/public/images/'+item.img">
                            </div>
                            <div class="loncom_equipment_list_text">
                                <h2>{{item.templatename}}</h2>
                                <p class="loncom_font_size12 loncom_color999">类型：{{item.type}}，总线：{{item.trunk}}</p>
                                <p class="loncom_font_size12 loncom_color999">品牌：{{item.brand}}，型号：{{item.model}}</p>
                            </div>
                        </div>
                        <div class="loncom_equipment_list_bottom loncom_font_size12 loncom_color999" @click="editTemplate(item)">
                            说明：{{item.detail}}
                        </div>
                        <div class="loncom_equipment_classify_list_handle">
                            <a href="javascript:;">
                               <span class="loncom_fl loncom_color999">操作</span><i class="fa fa-angle-right fa-2x loncom_color999"></i>
                                <div class="loncom_equipment_classify_list_handlecon loncom_public_shadow">
                                    <a href="javascript:;" @click="addEquipment(item)">添加</a>
                                    <a href="javascript:;" @click="editTemplate(item)">编辑</a>
                                    <a href="javascript:;" @click="removeTemplate(item)">删除</a>
                                </div>
                            </a>
                        </div>
                    </div>
                </li>
                <li v-for="item in equipment_info" v-show="equipmentLibrary.type=='hLib'">
                    <div class="loncom_public_card_box loncom_public_shadow">
                        <div class="loncom_equipment_classify_list_top loncom_overflow_hidden" @click="editTemplate(item)">
                            <div class="loncom_equipment_list_img">
                                <img :src="'static/public/images/'+item.img">
                            </div>
                            <div class="loncom_equipment_list_text">
                                <h2>{{item.title}}</h2>
                                <p class="loncom_font_size12 loncom_color999">类型：{{item.type}}</p>
                                <p class="loncom_font_size12 loncom_color999">标签：{{item.model}}</p>
                            </div>
                        </div>
                        <div class="loncom_equipment_list_bottom loncom_font_size12 loncom_color999" @click="editTemplate(item)">
                            说明：{{item.detail}}
                        </div>
                        <div class="loncom_equipment_classify_list_handle">
                            <a href="javascript:;">
                               <span class="loncom_fl loncom_color999">操作</span><i class="fa fa-angle-right fa-2x loncom_color999"></i>
                                <div class="loncom_equipment_classify_list_handlecon loncom_public_shadow" v-show="item.handle_show">
                                    <a href="javascript:;" @click="preview(item)">预览</a>
                                    <a href="javascript:;" @click="editEquipment(item)">编辑</a>
                                    <a href="javascript:;" @click="removeEquipment(item)">删除</a>
                                </div>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <DialogEquipmentPreview v-bind:dialogEquipmentPreview="previewInfo"></DialogEquipmentPreview>
  </div>
</template>
<script>
import DialogEquipmentPreview from './dialogEquipmentPreview.vue'
export default {
  created () {
    
  },
  mounted() {
   
  },
   data() {
       return {
           //搜索框输入
          search_input:'',
          //设备分类
          classify:[
              {id:'all',name:'所有'},
              {id:'1',name:'UPS'},
              {id:'2',name:'空调'},
              {id:'3',name:'电量仪'},
              {id:'4',name:'列头柜'},
              {id:'5',name:'温湿度'},
              {id:'6',name:'漏水主机'},
          ],
          //品牌型号
          brand:[
              {id:'all',name:'所有'},
              {id:'1',name:'标签一'},
              {id:'2',name:'标签一'},
              {id:'3',name:'标签一'},
              {id:'4',name:'标签一'},
              {id:'5',name:'标签一'},
          ],
          //总线类型
          type:[
              {id:'all',name:'所有'},
              {id:'modbus',name:'Modbus'},
              {id:'line',name:'电总'},
              {id:'snmp',name:'SNMP'},
              {id:'tcp',name:'Modbus-TCP'},
              {id:'ck',name:'其它串口总线'},
              {id:'ip',name:'其它IP总线'},
          ],
          //设备分类radio标识
          classifyRadio:'all',
          //品牌型号标识
          brandRadio:['all'],
          //总线标识
          typeRadio:['all'],
          //模板列表
          equipment_info:[
            {addType:'ck',img:'loushui.png',title:'UPS_艾默生_ITA',type:'UPS',trunk:'Modbus',brand:'艾默生',model:'ITA',detail:'这里可以放一两项简单描述.不带操作，仅可点击查看详情'},
            {addType:'wk',img:'loushui.png',title:'UPS_艾默生_ITA',type:'UPS',trunk:'Modbus',brand:'艾默生',model:'ITA',detail:'这里可以放一两项简单描述.不带操作，仅可点击查看详情'},
            {addType:'sn',img:'loushui.png',title:'UPS_艾默生_ITA',type:'UPS',trunk:'Modbus',brand:'艾默生',model:'ITA',detail:'这里可以放一两项简单描述.不带操作，仅可点击查看详情'},
            {addType:'sn',img:'loushui.png',title:'UPS_艾默生_ITA',type:'UPS',trunk:'Modbus',brand:'艾默生',model:'ITA',detail:'这里可以放一两项简单描述.不带操作，仅可点击查看详情'},
          ],
          //预览信息
          previewInfo:{
              visible:false,
              width:"50%",
              top:"15vh",
              url:"h5/index.html",
          },

       }
   },
   methods:{
       //点击设备类型筛选
       classifyClick:function(item){

       },
       //点击品牌型号筛选
       brandClick:function(item){
            if(item.id=="all"){  //点击所有其它的active去掉
                this.brandRadio=['all'];
            }else{
                if(this.brandRadio[0]=='all'){
                    this.brandRadio.splice(0,1);
                }else if(this.brandRadio.length==0){
                    this.brandRadio=['all'];
                }
            }
       },
       //点击总线筛选
       typeClick:function(item){
            if(item.id=="all"){  //点击所有其它的active去掉
                this.typeRadio=['all'];
            }else{
                if(this.typeRadio[0]=='all'){
                    this.typeRadio.splice(0,1);
                }else if(this.typeRadio.length==0){
                    this.typeRadio=['all'];
                }
            }
       },
       //清空
       emptyInfo:function(){
           this.search_input='';
            this.classifyRadio='所有';
            this.brandRadio=['all'];
            this.typeRadio=['all'];
       },
       
        //新增模板
        addTemplate:function(){
            if(this.equipmentLibrary.type=='eLib'){ //设备库
                this.$router.push({path:'/loncom/equipment/addElibrary'});
            }else{  //界面库
                this.$router.push({path:'/loncom/equipment/addHlibrary'});
            }
        },
        //编辑模板
        editTemplate:function(item){
            if(this.equipmentLibrary.type=='eLib'){ //设备库
                this.$router.push({path:'/loncom/equipment/addElibrary',query:item});
            }else{  //界面库
                this.$router.push({path:'/loncom/equipment/addHlibrary',query:item});
            }
        },
        //添加设备
        addEquipment:function(item){
            item.mark='add';
            if(this.equipmentLibrary.type=='eLib'){ //设备库
                item.type='eLib';
                this.$router.push({path:'/loncom/equipment/addEquip',query:item});
            }else{  //界面库
                item.type='hLib';
                this.$router.push({path:'/loncom/equipment/addEquip',query:item});
            }
        },
        //编辑设备
        editEquipment:function(item){
            item.mark='edit';
            if(this.equipmentLibrary.type=='eLib'){ //设备库
                item.type='eLib';
                this.$router.push({path:'/loncom/equipment/addEquip',query:item});
            }else{  //界面库
                item.type='hLib';
                this.$router.push({path:'/loncom/equipment/addEquip',query:item});
            }
        },
        //预览
        preview:function(item){
            this.previewInfo.visible=true;
        },
        //删除设备
        removeEquipment:function(item){
            
        },



   },
  props:["equipmentLibrary"],
  components:{DialogEquipmentPreview},

}
</script>

