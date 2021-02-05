import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/icons/index.ts'
import vueStep from '@/components/step/index.ts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/font-icon/iconfont.css'
Vue.config.productionTip = false
Vue.use(vueStep)
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')