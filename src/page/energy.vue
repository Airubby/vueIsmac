<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <h2>能效管理</h2>
            <TopChangeInfo v-bind:topChangeInfo="top_items"></TopChangeInfo>
        </div>
        <div class="loncom_scroll_con loncom_right_changecon loncom_family_yahei">
            <!--状态-->
            <EnergyState v-bind:energyState="top_items"></EnergyState>
            <!--配置-->
            <EnergyConfig v-bind:energyConfig="top_items"></EnergyConfig>
        </div>
    </div>
</template>


<script>
import TopChangeInfo from '../components/topChangeInfo.vue'
import EnergyState from '../components/energyState.vue'
import EnergyConfig from '../components/energyConfig.vue'

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
　　　　　　　　　　{select:'状态',loncom_active:true},
　　　　　　　　　　{select:'配置',loncom_active:false},
　　　　　　　],
       }
   },
   methods:{
   },
   components:{TopChangeInfo,EnergyState,EnergyConfig},
}
</script>