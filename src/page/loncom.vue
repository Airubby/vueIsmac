<template>
    <div class="loncom_content">
        <div class="loncom_sidebar" ref="sidebar">
            <div class="loncom_sidebar_top">
                <span class="loncom_fl">iSmartSite</span>
                <span class="loncom_fr loncom_navbtn" @click="navclick" ref="navbtn"><i class="fa fa-navicon"></i></span>
            </div>
            <div class="loncom_sidebar_list">
                <ul>
                    <li>
                        <router-link to="/loncom/environment">
                            <p><span class="loncom_environment"></span></p>
                            <p>环境系统</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/loncom/power">
                            <p><span class="loncom_power"></span></p>
                            <p>动力系统</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/loncom/security">
                            <p><span class="loncom_security"></span></p>
                            <p>安防系统</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/loncom/energy">
                            <p><span class="loncom_energy"></span></p>
                            <p>能效管理</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/loncom/alarm">
                            <p><span class="loncom_alarm"></span></p>
                            <p>动环事件</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/loncom/statement">
                            <p><span class="loncom_statement"></span></p>
                            <p>监控报表</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/loncom/equipment">
                            <p><span class="loncom_equipment"></span></p>
                            <p>设备管理</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/loncom/system">
                            <p><span class="loncom_system"></span></p>
                            <p>系统管理</p>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="loncom_sidebar_bottom">
                <router-link to="/">
                    <span class="loncom_home"></span>
                </router-link>  
            </div>
        </div>
        <div class="loncom_sidebar_right" ref="content">
            <router-view></router-view>
        </div>
        
    </div>
</template>


<script>
export default {
    created () {
        if(JSON.stringify(localStorage.loginInfo) == undefined){
            this.$message({
                message: "请登录",
                type: 'warning'
            });
            this.$router.push({path:'/login'});
            return;
        }
    },
    mounted() {
        
    },
    data() {
       return {
           navbtn:'open'
       }
   },
    methods:{
        navclick(){
            if(this.navbtn=='open'){
                $(this.$refs.sidebar).css({
                    "left":"-200px",
                    "transition":"all 0.4s ease-in"
                });
                $(this.$refs.content).css({
                    "padding-left":"0",
                    "transition":"all 0.4s ease-in"
                });
                $(this.$refs.navbtn).css({
                    "right":"-33px",
                    "color":"#17C4BB"
                })
                this.navbtn='close';
            }else{
                $(this.$refs.sidebar).css({
                    "left":"0px",
                    "transition":"all 0.4s ease-in"
                });
                $(this.$refs.content).css({
                    "padding-left":"200px",
                    "transition":"all 0.4s ease-in"
                });
                $(this.$refs.navbtn).css({
                    "right":"0",
                    "color":"#fff"
                })
                this.navbtn='open';
            }
             
        }
    }
}
</script>