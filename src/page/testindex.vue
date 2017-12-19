<template>
    <div class="header">
      <h2>
      index
      <div id="style">
      <span @click="ccl">风格一</span>
      <span @click="ccll">风格二</span>
      
      
      </div>
      </h2>
      <router-link to="/anfang" class="colorStyle"><div class="content">安防系统123</div></router-link>  
      <router-link to="/shezhi" class="colorStyle"><div class="content">设置</div></router-link>  
      <router-link to="/content" class="colorStyle"><div class="content">内容</div></router-link>  
      <!--<img src="./assets/images/logo.png">
      <img src="/src/assets/images/logo.png">
      这样引图片会编译成base:64的图片
      -->
      <img src="static/default/images/login_logo.png" class="logo">
      <img v-bind:src="logoUrl">
      <div class="logo"></div>
      <div class="article_list">
        <ul>
          <li v-for="item in testData">
            <span>
              {{ item.message }}
            </span>
          </li>
        </ul>
        <ul>
          <li v-for="item in testData1">
            <span>
              {{ item.message }}
            </span>
          </li>
        </ul>
      </div>
      <Loading></Loading>
      <!--子向父-->
      <ChildtoFather @childToParentMsg="showChildToParentMsg" ></ChildtoFather>
      
      <!--父向子-->
      <FathertoChild v-bind:parentToChild="parentMsg"></FathertoChild>

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
    this.testData=[{ message: 'Foo' },
      { message: 'Bar' }];
      this.testData1=[{ message: 'Foo' },
      { message: 'Bar' }];
    // this.$api.get('Dev', {'action':'query','model':{"devtypeid":"1"},'sid':'0424d65992c13f9657cb0fc7a4adcc56'}, r => {
    //   console.log(r)
    //   this.testData=[{ message: 'Foo' },
    //   { message: 'Bar' }];
    // })
   
    // this.$api.get('/ISmac/BaseServlet', null, function(r) {
    //   console.log(r)
    // })
    // open_ajax("http://192.168.10.51:8080/Dev",{'action':'query','model':{"devtypeid":"1"},'sid':'0424d65992c13f9657cb0fc7a4adcc56'},function(result){
    //   console.log(result)
    // })
    // open_ajax("http://192.168.10.51:8080/ISmac/BaseServlet",function(result){
    //   console.log(result)
    // })

  },
  mounted() {
    $(".logo").on("click",function(){
      console.log(12)
    })
  },
  data() {
    return {
      logoUrl:require("../../static/"+this.styleLink+"/images/login_logo.png"),
      testData:[],
      testData1:[],
      parentMsg:{
        title:"父组件向子组件传值,我这个是父传给子显示的",
        content:"132"
      }
    }
  },
  methods:{
    ccl:function(){
      this.styleLink="blue";
      var str=$(".styleLink").attr("href");
      var strLink=replaceString(str,"blue"); 
      $(".styleLink").attr("href",strLink);
      
    },
    ccll:function(){
      this.styleLink="default";
      var str=$(".styleLink").attr("href");
      var strLink=replaceString(str,"default"); 
      $(".styleLink").attr("href",strLink);
    },
    showChildToParentMsg:function(data){
        console.log("父组件显示信息："+data)
      }
  },
  components:{ChildtoFather,FathertoChild},
}
</script>

