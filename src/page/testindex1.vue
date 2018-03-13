<template>
    <div class="header">
      <el-input
        placeholder="输入关键字进行过滤"
        v-model="filterText">
      </el-input>
      <div class="transfer" style="width:1000px;margin:0 auto;overflow:hidden;">
        <div class="transfer_left" style="width:400px;float:left;height:300px;border:1px solid #ccc;">
          <el-tree
            class="filter-tree"
            lazy
            :load="transferLoadNode"
            :props="defaultProps"
            :filter-node-method="filterNode"
            show-checkbox
            ref="tree">
          </el-tree>
        </div>
        <div class="transfer_center" style="width:200px;float:left;">
            <el-button type="primary" @click="moveLeft">left</el-button>
            <el-button type="primary" @click="moveRight">right</el-button>
        </div>
        <div class="transfer_right" style="width:400px;float:left;height:300px;border:1px solid #ccc;">
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="checkedDianwei" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="dw in dianwei" :label="dw.id" :key="dw.id">{{dw.name}}</el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <hr>
      
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
       filterText: '',
        
        defaultProps: {
          label: 'name',
          children: 'zones',
          isLeaf: 'leaf'
        },

         theTree:[],

      //右侧选择框
      checkAll: false,
      checkedDianwei: [],
      dianwei: [], //{id:'1',name:'22'}
      isIndeterminate: false,

      //存储勾选的点位以外的节点
      noChecked:[],


    }
  },
  methods:{
    transferLoadNode:function(node,resolve){
      if (node.level === 0) {
        this.theTree.push({ name: '数据机房',id:'1' ,pid:'0',type:'jifang'});
        return resolve([{ name: '数据机房',id:'1' ,pid:'0',type:'jifang'}]);
      }
      if(node.level===1){
        setTimeout(() => {
          const data = [{
            name: '温湿度',
            id:'2',
            pid:'1',
            type:'shebei'
          }, {
            name: '烟感',
            id:'3',
            pid:'1',
            type:'shebei'
          }];
          this.theTree.push.apply(this.theTree,data);
          return resolve(data);
        }, 500);
      }
      if(node.level===2){
        if(node.data.id=="2"){
            setTimeout(() => {
              const data = [{
                name: '温湿度点位一',
                id:'2-1',
                pid:'2',
                type:'dianwei',

              },{
                name: '温湿度点位二',
                id:'2-2',
                pid:'2',
                type:'dianwei'
              },{
                name: '温湿度点位三',
                id:'2-3',
                pid:'2',
                type:'dianwei'
              }];
              this.theTree.push.apply(this.theTree,data);
              return resolve(data);
            }, 500);
        }else if(node.data.id=="3"){
            setTimeout(() => {
              const data = [{
                name: '烟感点位一',
                id:'3-1',
                pid:'3',
                type:'dianwei'
              },{
                name: '烟感点位二',
                id:'3-2',
                pid:'3',
                type:'dianwei'
              },{
                name: '烟感点位三',
                id:'3-3',
                pid:'3',
                type:'dianwei'
              }];
              this.theTree.push.apply(this.theTree,data);
              return resolve(data);
            }, 500);
        }
        
      }else{
         return resolve([])
      }

    },
    filterNode(value, data) {
      console.log(value)
      console.log(data)
        return data.id==value;
      },
    moveLeft:function(){
      if(this.checkedDianwei.length==0){
        this.$message.warning("请选择要移出的设备点位");
      }else{
        var node=this.$refs.tree.root.childNodes[0];
        var checkArr=[];  //存储勾选的点位，因为this.checkedDianwei只存的id，这个地方需要pid等其他的
        for(var i=0;i<this.checkedDianwei.length;i++){
          for(var j=0;j<this.dianwei.length;j++){
            if(this.checkedDianwei[i]==this.dianwei[j].id){
              checkArr.push(this.dianwei[j]);
              this.dianwei.splice(j,1);
              continue;
            }
          }
        }
        for(var i=0;i<checkArr.length;i++){
          for(var j=0;j<node.childNodes.length;j++){
            if(checkArr[i].pid==node.childNodes[j].data.id){
              for(var k=0;k<node.childNodes[j].childNodes.length;k++){
                if(checkArr[i].id==node.childNodes[j].childNodes[k].data.id){
                  node.childNodes[j].childNodes[k].visible=true;
                }
              }
            }
          }
        }
        this.checkAll = false;
        this.isIndeterminate = false;
        this.checkedDianwei=[];

      }
    },
    moveRight:function(){
      //console.log(this.$refs.tree.getCheckedNodes());
      //console.log(this.theTree)
      //this.$refs.tree.filter(val);
      console.log(this.$refs.tree.root.childNodes[0])
      var node=this.$refs.tree.root.childNodes[0];
      var arr=this.$refs.tree.getCheckedNodes();
      console.log(arr);
      var hasDW=false;
      for(var i=0;i<arr.length;i++){
        for(var j=0;j<node.childNodes.length;j++){
          if(arr[i].pid==node.childNodes[j].data.id){
            for(var k=0;k<node.childNodes[j].childNodes.length;k++){
              if(arr[i].type=="dianwei"&&node.childNodes[j].childNodes[k].visible==true&&arr[i].id==node.childNodes[j].childNodes[k].data.id){
                  this.dianwei.push(arr[i]);
                  hasDW=true;
              }
            }
          }
        }
      }
      if(hasDW){
        //取差集
        // console.log(Object.assign([], this.theTree))
        // let a = new Set(Object.assign([], this.theTree));
        // let b = new Set(this.dianwei); 
        // let differenceABSet = new Set([...a].filter(x => !b.has(x)));
        // this.noChecked=Array.from(differenceABSet._c);
        // console.log(this.noChecked)
        console.log(this.$refs.tree.root.childNodes[0]);
        
        for(var i=0;i<this.dianwei.length;i++){
          for(var j=0;j<node.childNodes.length;j++){
            if(this.dianwei[i].pid==node.childNodes[j].data.id){
              for(var k=0;k<node.childNodes[j].childNodes.length;k++){
                if(this.dianwei[i].id==node.childNodes[j].childNodes[k].data.id){
                  //node.childNodes[j].childNodes.splice(k,1);
                  node.childNodes[j].childNodes[k].visible=false;
                  node.childNodes[j].childNodes[k].checked=false;
                  node.childNodes[j].childNodes[k].parent.checked=false;
                  node.childNodes[j].childNodes[k].parent.parent.checked=false;
                }
              }
            }
          }
        }
        this.checkAll = false;
        this.isIndeterminate = false;

      }else{
          this.$message.warning("请选择设备点位");
      }

    },
    //右侧的
    handleCheckAllChange(val) {
      console.log(val)
      var checkedDW=[];
      for(var i=0;i<this.dianwei.length;i++){
        checkedDW.push(this.dianwei[i].id);
      }
      this.checkedDianwei = val ? checkedDW : [];
      this.isIndeterminate = false;
      console.log(this.checkedDianwei)
    },
    handleCheckedCitiesChange(value) {
      console.log(value)
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.dianwei.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.dianwei.length;

    },

  },
   watch: {
     filterText(val) {
        this.$refs.tree.filter(val);
      }
    },
  components:{},
}
</script>

