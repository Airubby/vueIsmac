// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import Loading from './components/loading'


// 引用API文件
import api from './api/index.js'
// 将API方法绑定到全局
Vue.prototype.$api = api

//css全局变量
Vue.prototype.styleLink="default";

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Loading)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


