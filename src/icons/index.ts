import Vue from 'vue'
import svgIcon from '@/components/svgIcon.vue'
// webpack创建一个以SVG目录为上下文的require函数
const req = require.context('./svg',false,/\.svg$/)
// keys方法会获取所有svg文件
req.keys().map(req)
Vue.component('svg-icon',svgIcon)