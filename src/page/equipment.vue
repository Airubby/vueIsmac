<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <h2>能效管理</h2>
            <TopChangeInfo v-bind:topChangeInfo="top_items"></TopChangeInfo>
        </div>
        <div class="loncom_scroll_con loncom_right_changecon loncom_family_yahei">
            <!--设备库-->
            <div :class="{'loncom_active':　top_items[0].loncom_active}" class="loncom_public_card">
                <EquipmentLibrary v-bind:equipmentLibrary="eLibrary"></EquipmentLibrary>
            </div>
            <!--界面库-->
            <div :class="{'loncom_active':　top_items[1].loncom_active}" class="loncom_public_card">
                <EquipmentLibrary v-bind:equipmentLibrary="hLibrary"></EquipmentLibrary>
            </div>
           
        </div>
    </div>
</template>


<script>
import TopChangeInfo from '../components/topChangeInfo.vue'
import EquipmentLibrary from '../components/equipmentLibrary.vue'

export default {
    
  created () {
    //判断新进来还是界面库编辑新增后来这个页面的
    var obj = this.$route.query;
    if(JSON.stringify(obj) != "{}"){
        if(obj.configItem!=undefined){
            this.top_items[0].loncom_active=false;
            this.top_items[1].loncom_active=true;
        }
    }
  },
  mounted() {
    scrollCon();
   
  },
   data() {
       return {
           //头部切换
          　top_items: [
　　　　　　　　　　{select:'设备库',loncom_active:true},
　　　　　　　　　　{select:'界面库',loncom_active:false},
　　　　　　　],
            eLibrary:{
                type:'eLib',
            },
            hLibrary:{
                type:'hLib',
            },
       }
   },
   methods:{
   },
   components:{TopChangeInfo,EquipmentLibrary},
}
</script>