import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Login from '@/page/login'
import Loncom from '@/page/loncom'
import Configure from '@/page/configure'  //组态页面

import Environment from '@/page/environment'  //环境页面
import Environment_detail from '@/page/environment_detail'
import Detail_air from '@/page/Detail_air' //环境系统，动力系统公用的空调详情组件

import Power from '@/page/power' //动力系统

import Security from '@/page/security' //安防系统
import SecurityAddController from '@/page/security_add_controller' //安防系统新增控制器
import SecurityAddCardInfo from '@/page/security_add_cardinfo'  //安防系统新增时间组
import SecurityAddTimeGroup from '@/page/security_add_timegroup'  //安防系统新增时间组
import SecurityAddAccessGroup from '@/page/security_add_accessgroup'  //安防系统新增权限组
import SecurityAddVideo from '@/page/security_add_video' //安防系统新增视频设备

import Energy from '@/page/energy' //能效管理
import EnergyAddEnergyobj from '@/page/energy_add_energyobj'  //能效新增能效对象
import EnergyAddEleprice from '@/page/energy_add_eleprice'  //能效新增电价策略

import Alarm from '@/page/alarm' //动环事件

import Statement from '@/page/statement'  //监控报表
import StatementAddOrder from '@/page/statement_add_order' //监控系统新增定制

import Equipment from '@/page/equipment'  //设备管理
import EquipmentAddElibrary from '@/page/equipment_add_elibrary'  //设备管理新增设备库
import EquipmentAddHlibrary from '@/page/equipment_add_hlibrary'  //设备管理新增界面库
import EquipmentAddEquip from '@/page/equipment_add_equip'  //设备管理新增设备

import System from '@/page/system'  //系统管理
import SystemUserAdd from '@/page/system_user_add'  //系统管理用户新增

import Testindex from '@/page/testindex'
import Testindex1 from '@/page/testindex1'

import Anfang from '@/page/anfang'
import Anfang1 from '@/page/anfang1'
import Anfang2 from '@/page/anfang2'
import TestTable from '@/page/testTable'
import TestTable1 from '@/page/testTable1'
import TestTable0 from '@/page/testTable0'


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
      path: '/configure',
      component: Configure
    },{
      path:'/loncom',
      component: Loncom,
      //redirect:'',
      children:[
        //环境系统
        {path:'/loncom/environment',component:Environment}, //环境系统卡片,环境系统列表
        {path:'/loncom/environment_detail',component:Environment_detail}, //环境系统详情
        {path:'/loncom/environment/airDetail',component:Detail_air},  //环境系统空调详情
        {path:'/loncom/power/airDetail',component:Detail_air},  //动力系统空调详情

        {path:'/loncom/power',component:Power}, //动力系统

        {path:'/loncom/security',component:Security},  //安防系统
        {path:'/loncom/security/addController',component:SecurityAddController},  //安防系统新控制器
        {path:'/loncom/security/addCardInfo',component:SecurityAddCardInfo},  //安防系统新增卡信息
        {path:'/loncom/security/addTimeGroup',component:SecurityAddTimeGroup},  //安防系统新时间组
        {path:'/loncom/security/addAccessGroup',component:SecurityAddAccessGroup},  //安防系统新增权限组
        {path:'/loncom/security/addVideo',component:SecurityAddVideo},  //安防系统新视频设备

        {path:'/loncom/energy',component:Energy}, //能效管理
        {path:'/loncom/energy/addEnergyobj',component:EnergyAddEnergyobj}, //能效管理新增能效对象
        {path:'/loncom/energy/addEnergyEleprice',component:EnergyAddEleprice}, //能效管理新增电价策略

        {path:'/loncom/alarm',component:Alarm}, //动环事件

        {path:'/loncom/statement',component:Statement}, //监控报表
        {path:'/loncom/statement/addOrder',component:StatementAddOrder},  //监控报表新增定制

        {path:'/loncom/equipment',component:Equipment},  //设备管理
        {path:'/loncom/equipment/addElibrary',component:EquipmentAddElibrary}, //设备管理新增设备库
        {path:'/loncom/equipment/addHlibrary',component:EquipmentAddHlibrary}, //设备管理新增界面库
        {path:'/loncom/equipment/addEquip',component:EquipmentAddEquip}, //设备管理新增设备
        
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
      path:'/testindex1',
      component:Testindex1
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
    },{
      path:'/testtable0',
      component:TestTable0
    },

  ]
})


