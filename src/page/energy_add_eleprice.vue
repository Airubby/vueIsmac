<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <h2>能效管理 &gt; {{topInfo}}</h2>
        </div>
        <div class="loncom_scroll_con">
            <div class="loncom_public_table loncom_content">
                <div class="loncom_public_tab loncom_public_onetab">
                    <el-tabs>
                        <el-tab-pane label="电价配置">
                            <div class="loncom_public_tabbox loncom_public_tabbox0">
                                <div class="loncom_public_tabboxcon loncom_public_tabboxcon0">
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>名称
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input size="small" style="width:400px;"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>基础电价
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <el-input size="small" style="width:400px;"></el-input>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>计费基础
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <span>每月</span>
                                            <el-select v-model="dayValue" placeholder="请选择" style="width:100px;" size="small">
                                                <el-option
                                                v-for="item in dayOptions"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                                </el-option>
                                            </el-select>
                                            <el-select v-model="timeValue" placeholder="请选择" style="width:100px;" size="small">
                                                <el-option
                                                v-for="item in timeOptions"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            说明
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <textarea style="width: 400px;height:150px;"></textarea>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box">
                                        <div class="loncom_list_box_left">
                                            <em>*</em>电价策略
                                        </div>
                                        <div class="loncom_list_box_right">
                                            <a href="javascript:;" class="loncom_color" @click="addLadder">+ 阶梯电价</a> 
                                            <em>|</em> 
                                            <a href="javascript:;" class="loncom_color" @click="addTimeslot">+ 分时电价</a>
                                        </div>
                                    </div>
                                    <div class="loncom_list_box" v-show="showLadder||showTimeslot">
                                        <div v-show="showLadder">
                                            <div class="loncom_mb10">电量：大于<el-input v-model="add_info.sectiond" placeholder="请填写数字" size="small" style="width:100px"></el-input>KWh</div>
                                        </div>
                                        <div v-show="showTimeslot">
                                            <div class="loncom_mb10">时段：
                                                <el-time-picker
                                                    is-range
                                                    v-model="add_info.sectiont"
                                                    format="HH:mm"
                                                    value-format="HH:mm"
                                                    range-separator="至"
                                                    start-placeholder="开始时间"
                                                    end-placeholder="结束时间"
                                                    placeholder="选择时间范围"
                                                    size="small">
                                                </el-time-picker>
                                                (请先选择结束时间后选择开始时间)
                                            </div>
                                        </div>
                                        <div>
                                            基础电价升降值：<el-input v-model="add_info.change_price" placeholder="请填写数字" size="small" style="width:100px"></el-input>(例：上浮为0.5，下浮为-0.3)
                                            <div class="loncom_fr">
                                                <a href="javascript:;" class="loncom_color" @click="addInfoSave">保存</a> 
                                                <em>|</em> 
                                                <a href="javascript:;" class="loncom_color" @click="addInfoCancel">取消</a> 
                                            </div>
                                        </div>
                                    </div>
                                    <div class="loncom_table_inputnoborder">
                                        <el-search-table-pagination type="local" class="loncom_mb50" :show-pagination="false" border :data="table_info" :page-sizes="[10,20,50]" :columns="table_info_columns">                                            
                                            <template slot-scope="scope" slot="preview-type">
                                                <span v-if="scope.row.type=='1'">
                                                    阶梯电价
                                                </span>
                                                <span v-else>
                                                    分时电价
                                                </span>
                                            </template>
                                            <template slot-scope="scope" slot="preview-section">
                                                <span v-if="scope.row.type=='1'">
                                                    <em style="width:5%;float:left;">&gt; </em>
                                                    <em style="width:60px;float:left;">
                                                    <el-input v-model="scope.row.section" size="mini" :disabled="scope.row.loncom_active" :class="{'loncom_active':scope.row.loncom_active}"></el-input>
                                                    </em>
                                                    <em style="width:25%;float:left;"> KWh</em>
                                                
                                                </span>
                                                <span v-else>
                                                    <em style="width:65px;display:inline-block"><el-input v-model="scope.row.section[0]" size="mini" :disabled="scope.row.loncom_active" :class="{'loncom_active':scope.row.loncom_active}"></el-input></em>
                                                     ~ 
                                                     <em style="width:65px;display:inline-block"><el-input v-model="scope.row.section[1]" size="mini" :disabled="scope.row.loncom_active" :class="{'loncom_active':scope.row.loncom_active}"></el-input></em>
                                                </span>
                                            </template>
                                            <template slot-scope="scope" slot="preview-price">
                                                <span>
                                                   <el-input v-model="scope.row.change_price" size="mini" :disabled="scope.row.loncom_active" :class="{'loncom_active':scope.row.loncom_active}"></el-input>
                                                </span>
                                            </template>
                                            <template slot-scope="scope" slot="preview-handle">
                                                <span>
                                                    <a href="javascript:;" :id="'editbtn'+scope.$index" class="loncom_color" @click="editTableInfo(scope.row,scope.$index)">编辑</a> 
                                                    <em>|</em> 
                                                    <a href="javascript:;" class="loncom_color" @click="removeTableInfo(scope.row)">删除</a>
                                                </span>
                                            </template>
                                        </el-search-table-pagination>
                                    </div>
                                    
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
        this.topInfo="新增电价";
    }else{
        this.topInfo="编辑电价";
        this.activeBtn=false;
    }
  },
  mounted() {
    scrollCon();
    
    tabScroll("0");
  },
   data() {
       return {
           //新增编辑控制器头部显示
           topInfo:'',
           energy_info:{},
           //新增设备编辑设备显示不同的按钮信息
           activeBtn:true,

            //树形
            tree_data: [{
                label: '成都一号机房',
                id:'e1',
                children: [{
                    label: '输入电量仪A',
                    id:'e1_1',
                    children: [{
                        label: 'A相有功功率',
                        id:'e1_1_1',
                    },{
                        label: 'B相有功功率',
                        id:'e1_1_2',
                    }]
                },{
                    label: '输入电量仪B',
                    id:'e1_2',
                    children: [{
                        label: 'A相有功功率',
                        id:'e1_2_1',
                    },{
                        label: 'B相有功功率',
                        id:'e1_2_2',
                    }]
                }]
            }],
            defaultProps: { //树形公用
                children: 'children',
                label: 'label'
            },
            //基础计费天选择
           dayOptions: [{
                value: '1',
                label: '第一天'
                }, {
                value: '2',
                label: '最后一天'
            }],
            dayValue:'',
            //基础计费时间选择
           timeOptions: [{
                value: '1',
                label: '8:00'
            }],
            timeValue:'',
            //电价策略table
            table_info:[
                {type:'1',section:'200',change_price:'0.5',change_type:'1',loncom_active:true}, // change_type判断是编辑或是保存1显示编辑，0显示保存
            ],
            table_info_columns: [
                { prop: 'type', label: '类型',slotName:'preview-type'},
                { prop: 'section', label: '电量/时段' ,slotName:'preview-section',minWidth:100 },
                { prop: 'change_price', label: '基础电价升降值',slotName:'preview-price' },
                { prop: 'handle', label: '操作',slotName:'preview-handle' },
            ],
            //新增阶梯分时电价时存储的
            add_info:{
                type:'',
                sectiond:'', //电量
                sectiont:'', //时段
                change_price:'',
            },
            //控制分时阶梯新增时显示的
            showLadder:false,
            showTimeslot:false,

       }
   },
   methods:{
       //新增提交
        addSubmitInfo:function(){
            if(true){
                this.$message({
                    message: '新增成功',
                    type: 'success'
                });
                this.$router.push({path:'/loncom/energy',query:{configItem:'true',configName:'third'}});
            }
        },
        //编辑提交
        editSubmitInfo:function(){
            if(true){
                this.$message({
                    message: '编辑成功',
                    type: 'success'
                });
                this.$router.push({path:'/loncom/energy',query:{configItem:'true',configName:'third'}});
            }
        },
        //放弃编辑
        giveUp:function(){
            this.$router.push({path:'/loncom/energy',query:{configItem:'false',configName:'third'}});
        },

        //增加阶梯电价
        addLadder:function(){
            this.add_info.type='1';
            this.add_info.sectiond='';
            this.add_info.change_price='';
            this.showLadder=true;
            this.showTimeslot=false;
        },
        //增加分时电价
        addTimeslot:function(){
            this.add_info.type='0';
            this.add_info.sectiont='';
            this.add_info.change_price='';
            this.showTimeslot=true;
            this.showLadder=false;
        },
        //保存增加的电价
        addInfoSave:function(){
            console.log(this.add_info.sectiont)
            var _type=this.add_info.type;
            var _section=null
            var _change_price=this.add_info.change_price;
            var _change_type='1';
            var _loncom_active=true;
            if(_type=="1"){
                _section=this.add_info.sectiond;
            }else{
                _section=this.add_info.sectiont;
            }
            this.table_info.push({type:_type,section:_section,change_price:_change_price,change_type:_change_type,loncom_active:_loncom_active});
            this.showLadder=false;
            this.showTimeslot=false;
        },
        //取消增加的电价
        addInfoCancel:function(){
            this.showLadder=false;
            this.showTimeslot=false;
        },
        //编辑
        editTableInfo:function(row,index){
            row.loncom_active=row.loncom_active?false:true;
            row.loncom_active?$("#editbtn"+index).html('编辑'):$("#editbtn"+index).html('保存'); 
            if(row.loncom_active){  //保存
                this.table_info[index]=row;
            }
        },
        
   },
   
}
</script>