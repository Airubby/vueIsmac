import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Login from '@/page/login'
import Loncom from '@/page/loncom'

import Environment from '@/page/environment'  //环境页面
import Environment_detail from '@/page/environment_detail'

import Power from '@/page/power' //动力系统
import Security from '@/page/security' //安防系统
import SecurityAddController from '@/page/security_add_controller' //安防系统新增控制器
import SecurityAddTimeGroup from '@/page/security_add_timegroup'  //安防系统新增时间组

import Energy from '@/page/energy' //能效管理
import Alarm from '@/page/alarm' //动环事件
import Statement from '@/page/statement'  //监控报表
import Equipment from '@/page/equipment'  //设备管理
import System from '@/page/system'  //系统管理
import SystemUserAdd from '@/page/system_user_add'  //系统管理用户新增

import Testindex from '@/page/testindex'

import Anfang from '@/page/anfang'
import Anfang1 from '@/page/anfang1'
import Anfang2 from '@/page/anfang2'
import TestTable from '@/page/testTable'
import TestTable1 from '@/page/testTable1'


Vue.use(Router)

export default new Router({
  mode:'hash',  //hash,history，history打包静态无法展示，不知道要怎么设置才行
  routes: [
    {
      path: '',
      component: Index
    },{
      path: '/',
      component: Index
    },{
      path: '/login',
      component: Login
    },{
      path:'/loncom',
      component: Loncom,
      //redirect:'',
      children:[
        //环境系统
        {path:'/loncom/environment',component:Environment}, //环境系统卡片,环境系统列表
        {path:'/loncom/environment_detail',component:Environment_detail}, //环境系统详情

        {path:'/loncom/power',component:Power}, //动力系统

        {path:'/loncom/security',component:Security},  //安防系统
        {path:'/loncom/security/addController',component:SecurityAddController},  //安防系统新控制器
        {path:'/loncom/security/addTimeGroup',component:SecurityAddTimeGroup},  //安防系统新时间组

        {path:'/loncom/energy',component:Energy}, //能效管理
        {path:'/loncom/alarm',component:Alarm}, //动环事件
        {path:'/loncom/statement',component:Statement}, //监控报表
        {path:'/loncom/equipment',component:Equipment},  //设备管理
        
        {path:'/loncom/system',component:System},    //系统管理
        {path:'/loncom/system/userAdd',component:SystemUserAdd},  //系统管理用户新增
      ]
    },
     //公共页面






    
    //以下为测试页面
    {
      path:'/testindex',
      component:Testindex
    },
    {
      path:'/anfang',
      component:Anfang,
      redirect: '/anfang/anfang1',
      children:[
        {path:'/anfang/anfang1',name:'Anfang1',component:Anfang1},
        {path:'/anfang/anfang2',name:'Anfang2',component:Anfang2}
      ]
    },
    {
      path:'/testtable',
      component:TestTable
    },{
      path:'/testtable1',
      component:TestTable1
    },

  ]
})


