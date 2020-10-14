import Vue from 'vue'
import App from './App'
import store from './store'

// 引入路由器
import router from './router/index'
import LyTab from 'ly-tab'

// 引入字体图标文件
import '@/common/css/style.css'

// 引入mint-ui

import MintUI from 'mint-ui'

Vue.use(MintUI)

Vue.use(LyTab);

new Vue({
  el:'#app',
  router,
  store,
  render: h=>h(App)
});
