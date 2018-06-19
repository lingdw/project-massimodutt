// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import axios from 'axios'
import $ from 'jquery'
import "./assets/css/iconfont.css"
import "./assets/css/reset.css"

Vue.prototype.$axios = axios;
//生产环境打包时, 将其替换为http://localhost:8888/data
Vue.prototype.$api = "/api";


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
