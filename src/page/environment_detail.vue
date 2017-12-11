<template>
    <div>
        <h2>安防页</h2>
        <router-link to="/" class="shouye"><div class="content">返回首页</div></router-link>  
        <div class="left">
            <router-link to="/anfang/anfang1"><div class="content">安防一</div></router-link>  
            <router-link to="/anfang/anfang2"><div class="content">安防二</div></router-link>  
        </div>
        <div id="app">
            <router-view></router-view>
        </div>
    </div>
</template>

<style>
    
    
</style>
<script>

</script>