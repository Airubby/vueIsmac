<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <h2>能效管理</h2>
            <TopChangeInfo v-bind:topChangeInfo="top_items"></TopChangeInfo>
        </div>
        <div class="loncom_scroll_con loncom_right_changecon">
            <div :class="{'loncom_active':top_items[0].loncom_active}" class="loncom_public_card">
                <div class="loncom_energy_state_top">

                </div>
            </div>

            <div :class="{'loncom_active':top_items[1].loncom_active}" class="loncom_public_table">
                
            </div>
        </div>
    </div>
</template>


<script>
import TopChangeInfo from '../components/topChangeInfo.vue'
export default {
    
  created () {
    
  },
  mounted() {

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
   components:{TopChangeInfo},
}
</script>