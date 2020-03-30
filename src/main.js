import Vue from 'vue'
import App from './App.vue'
// 引入路由
import VueRouter from 'vue-router'

// 引入路由配置
import router from './router/index'

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
