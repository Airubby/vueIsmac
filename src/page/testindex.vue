<template>
    <div class="header">
      <!--<img src="./assets/images/logo.png">
      <img src="/src/assets/images/logo.png">
      这样引图片会编译成base:64的图片
      -->
      <div style="width: 500px;margin:30px auto;">{{timeShaft.moveStart}}-{{timeShaft.rev}}<Loading :videoTimeShaft="timeShaft"></Loading></div>
      <img src="static/default/images/login_logo.png" class="logo">
      <img v-bind:src="logoUrl">
      <div class="logo"></div>
      <!--子向父-->
      <ChildtoFather @childToParentMsg="showChildToParentMsg" ></ChildtoFather>
      
      <!--父向子-->
      <FathertoChild v-bind:parentToChild="parentMsg" v-on:parentFn="theFatherFn"></FathertoChild>

      <!--测试异步加载树形-->
      <hr></hr>
      <el-tree
        :props="props"
        :load="loadNode"
        lazy
        show-checkbox>
      </el-tree>
      <hr />
     
      <hr>
      <div style="height:100px;"></div>
    </div>
    
</template>





<script>


import ChildtoFather from '../components/testchildtofather.vue'
import FathertoChild from '../components/testfathertochild.vue'


$(".logo").on("click",function(){
  console.log(132)
})


export default {
  created () {
    // this.$api.get('/api/topics', null, function(r) {
    //   console.log(r)
    // })
   
    // this.$api.get('Dev', {'action':'query','model':{"devtypeid":"1"},'sid':'0424d65992c13f9657cb0fc7a4adcc56'}, r => {
    //   console.log(r)
    // })

    // this.$api.get('/ISmac/BaseServlet', null, function(r) {
    //   console.log(r)
    // })
    // open_ajax("http://192.168.10.51:8080/Dev",{'action':'query','model':{"devtypeid":"1"},'sid':'0424d65992c13f9657cb0fc7a4adcc56'},function(result){
    //   console.log(result)
    // })
    // open_ajax("http://192.168.10.47:8080/ISmac/loncomServlet",{},function(result){
    //   console.log(result)
    // })

  },
  mounted() {
    $(".logo").on("click",function(){
      console.log(12)
    })
//测试生成树形json
    var datajson=[
       {id:"5832adde-49f4-4a12-a38f-c609d2c5a723",pid:"0",name:"控制器"},
      {id:"1",pid:"5832adde-49f4-4a12-a38f-c609d2c5a723",name:"门一"},
      {id:"11",pid:"1",name:"门一1"},
      {id:"12",pid:"1",name:"门一2"},
       {id:"122",pid:"12",name:"门一222"},
      {id:"2",pid:"5832adde-49f4-4a12-a38f-c609d2c5a723",name:"门2"},
      {id:"3",pid:"5832adde-49f4-4a12-a38f-c609d2c5a723",name:"门3"},
      {id:"5832adde-49f4-4a12-a38f",pid:"0",name:"控制器"},
      {id:"1",pid:"5832adde-49f4-4a12-a38f",name:"门一"},
      {id:"2",pid:"5832adde-49f4-4a12-a38f",name:"门2"},
      {id:"3",pid:"5832adde-49f4-4a12-a38f",name:"门3"},
    ]
    function getJsonTree1(dataJson,parentId){
        var itemArr=[];
        for(var i=0;i<dataJson.length;i++){ 
            var node=dataJson[i];
             if(node.pid==parentId){ 
               var newNode=node;
               newNode.children=getJsonTree1(dataJson,node.id);
                itemArr.push(newNode);              
             }
        }
        return itemArr;
    }
    console.log(getJsonTree1(datajson,"0"))


  },
  data() {
    return {
      logoUrl:require("../../static/"+this.styleLink+"/images/login_logo.png"),
      testData:[],
      testData1:[],
      parentMsg:{
        title:"父组件向子组件传值,我这个是父传给子显示的",
        content:"132"
      },

      //测试异步加载树形
      props: {
        label: 'name',
        children: 'zones',
        isLeaf: 'leaf'
      },

      timeShaft:{
          startTime:'2018-4-14 12:00:00',
          endTime:'2018-4-14 12:00:10',
          moveStart:'2018-4-14 12:00:00',
          rev:'true',
      }

    }
  },
  methods:{
    showChildToParentMsg:function(data){
      console.log("父组件显示信息："+data)
    },
    theFatherFn:function(param){
      console.log("子组件点击来执行的这个方法");
      console.log(param)
    },
    //测试异步加载树形  
    loadNode(node, resolve) {
            console.log(node)
            console.log(resolve)
            if (node.level === 0) {
              //return resolve([{ name: 'region' }]);
              return resolve([{ name: '常规报表' },{name:'告警统计'},{name:'定制报表'}]);
            }
            if(node.level===1){
              //获取接口数据
              var has=true;
              if(has){ //接口有数据
                setTimeout(() => {
                  const data = [{
                    name: 'leaf',
                    leaf: true
                  }, {
                    name: 'zone'
                  }];
                  return resolve(data);
                }, 500);
              }else{ //没有数据
                return resolve([]);
              }
              

            }
            if(node.level===2){
              setTimeout(() => {
                const data = [{
                  name: 'leaf',
                  leaf: true
                }];
                return resolve(data);
              }, 500);
            }
            // if (node.level > 1) return resolve([]);

            // setTimeout(() => {
            //   const data = [{
            //     name: 'leaf',
            //     leaf: true
            //   }, {
            //     name: 'zone'
            //   }];

            //   resolve(data);
            // }, 500);

    },
    

  },
  components:{ChildtoFather,FathertoChild},
}
</script>

