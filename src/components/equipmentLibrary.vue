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
                        <span v-for="item in classify">{{item.name}}</span>
                    </div>
                </div>
                <div class="loncom_list_box">
                    <div class="loncom_equipment_list_box_left">
                        （多选）品牌型号：
                    </div>
                    <div class="loncom_equipment_list_box_right">
                        <span v-for="item in brand">{{item.name}}</span>
                    </div>
                </div>
                <div class="loncom_list_box">
                    <div class="loncom_equipment_list_box_left">
                        总线类型：
                    </div>
                    <div class="loncom_equipment_list_box_right">
                        <span v-for="item in type">{{item.name}}</span>
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
                <li v-for="item in equipment_info">
                    <div class="loncom_public_card_box loncom_public_shadow" @click="editTemplate(item)">
                        <div class="loncom_equipment_classify_list_top loncom_overflow_hidden">
                            <div class="loncom_equipment_list_img">
                                <img :src="'static/public/images/'+item.img">
                            </div>
                            <div class="loncom_equipment_list_text">
                                <h2>{{item.title}}</h2>
                                <p class="loncom_font_size12 loncom_color999">类型：{{item.type}}，总线：{{item.trunk}}</p>
                                <p class="loncom_font_size12 loncom_color999">品牌：{{item.brand}}，型号：{{item.model}}</p>
                            </div>
                        </div>
                        <div class="loncom_equipment_list_bottom loncom_font_size12 loncom_color999">
                            说明：{{item.detail}}
                        </div>
                        <div class="loncom_equipment_classify_list_handle">
                            <a href="javascript:;" @mouseenter="enter(item)" @mouseleave="leave(item)">
                               <span class="loncom_fl loncom_color999">操作</span><i class="fa fa-angle-right fa-2x loncom_color999"></i>
                                <div class="loncom_equipment_classify_list_handlecon loncom_public_shadow" v-show="item.handle_show">
                                    <a href="javascript:;">添加</a>
                                    <a href="javascript:;">编辑</a>
                                    <a href="javascript:;">删除</a>
                                </div>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
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
           //搜索框输入
          search_input:'',
          //设备分类
          classify:[
              {name:'所有'},
              {name:'UPS'},
              {name:'空调'},
              {name:'电量仪'},
              {name:'列头柜'},
              {name:'温湿度'},
              {name:'漏水主机'},
          ],
          //品牌型号
          brand:[
              {name:'所有'},
              {name:'标签一'},
              {name:'标签一'},
              {name:'标签一'},
              {name:'标签一'},
              {name:'标签一'},
          ],
          //总线类型
          type:[
              {name:'所有'},
              {name:'Modbus'},
              {name:'电总'},
              {name:'SNMP'},
              {name:'Modbus-TCP'},
              {name:'其它串口总线'},
              {name:'其它IP总线'},
          ],
          //模板列表
          equipment_info:[
            {img:'loushui.png',title:'UPS_艾默生_ITA',type:'UPS',trunk:'Modbus',brand:'艾默生',model:'ITA',detail:'这里可以放一两项简单描述.不带操作，仅可点击查看详情',handle_show:false},
            {img:'loushui.png',title:'UPS_艾默生_ITA',type:'UPS',trunk:'Modbus',brand:'艾默生',model:'ITA',detail:'这里可以放一两项简单描述.不带操作，仅可点击查看详情',handle_show:false},
            {img:'loushui.png',title:'UPS_艾默生_ITA',type:'UPS',trunk:'Modbus',brand:'艾默生',model:'ITA',detail:'这里可以放一两项简单描述.不带操作，仅可点击查看详情',handle_show:false},
            {img:'loushui.png',title:'UPS_艾默生_ITA',type:'UPS',trunk:'Modbus',brand:'艾默生',model:'ITA',detail:'这里可以放一两项简单描述.不带操作，仅可点击查看详情',handle_show:false},
          ],

       }
   },
   methods:{
       //清空
       emptyInfo:function(){
            this.equipment_info=[];
       },
        //enter移入显示
        enter:function(item){
            item.handle_show=true;
        },
        //leave移出隐藏
        leave:function(item){
            item.handle_show=false;
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



   },
  props:["equipmentLibrary"],
  components:{},

}
</script>

