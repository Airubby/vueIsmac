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

            },
            hLibrary:{

            },
       }
   },
   methods:{
   },
   components:{TopChangeInfo,EquipmentLibrary},
}
</script>