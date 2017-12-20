<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <h2>系统管理</h2>
            <TopChangeInfo v-bind:topChangeInfo="top_items"></TopChangeInfo>
        </div>
        <div class="loncom_scroll_con loncom_right_changecon">
            <div :class="{'loncom_active': top_items[0].loncom_active}">
                1
            </div>

            <div :class="{'loncom_active':top_items[1].loncom_active}">
                2
            </div>

            <div :class="{'loncom_active':top_items[2].loncom_active}">
                3
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
　　　　　　　　　{select:'通知',loncom_active:true},
　　　　　　　　　{select:'用户',loncom_active:false},
                {select:'后台',loncom_active:false},
　　　　　　　],
       }
   },
   methods:{
        
   },
   components:{TopChangeInfo},
}
</script>










