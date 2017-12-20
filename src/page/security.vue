<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <h2>安防系统</h2>
            <ul class="loncom_fr">
                <li v-for="item in top_items" @click="tabs(item)" :class="{'loncom_active':item.loncom_active}">{{item.select}}</li>
            </ul>
        </div>
        <div class="loncom_scroll_con loncom_environment">
            <div :class="{'loncom_active':loncom_active}" class="loncom_public_card loncom_environment_card">
                
            </div>

            <div :class="{'loncom_active':!loncom_active}" class="loncom_public_table loncom_environment_table">
                
            </div>
        </div>
    </div>
</template>

<style>
    
    
</style>
<script>

</script>