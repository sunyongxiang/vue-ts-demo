<template>
  <el-container class="avue-contail">
    <el-aside id="style-2" :style="{width: isCollapse ? asideWidthCollapse : asideWidth}">
      <!-- 左侧导航栏 -->
      <sidebar class="avue-sidebar" :isCollapse="isCollapse"></sidebar>
    </el-aside>
    <el-container>
      <el-header height="auto" 
                 class="avue-tabs">
        <!-- 顶部导航栏 -->
        <top></top>
        <!-- 顶部标签卡 -->
        <tags />
      </el-header>
      <el-main class="avue-main">
        <!-- 主体视图层 -->
        <transition name="fade-transverse">
          <keep-alive>
            <router-view class="avue-view" v-if="$route.meta.keepAlive" />
          </keep-alive>
        </transition>
        <transition name="fade-transverse">
          <router-view class="avue-view"
                       v-if="!$route.meta.keepAlive" />
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';
import top from './top/index.vue'
import tags from './tags/index.vue'
import sidebar from './sidebar/index.vue'
import { State } from "vuex-class";
@Component({
  components: {
    top,
    tags,
    sidebar
  }
})
export default class HomeIndex extends Vue {
  // [侧边栏宽度] 正常状态
  asideWidth =  '230px';
  // [侧边栏宽度] 折叠状态
  asideWidthCollapse='65px';
  //刷新token的时间
  refreshTime='';
  // @State lockPasswd!: string
  @State isCollapse!: boolean
}
</script>

<style lang="less" scoped>
.fade-transverse-leave-active,
.fade-transverse-enter-active {
    transition: all .5s;
}

.fade-transverse-enter {
    opacity: 0;
    transform: translateX(-30px);
}

.fade-transverse-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.avue-contail {
  height: 100%;
}
.avue-sidebar {
  height: 100%;
}
.avue-tabs {
  padding: 0;
  background: #fff;
}
.avue-main {
  position: relative;
  margin: 20px;
  background: #fff;
  box-sizing: border-box;
}
.avue-view {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: auto;
}
#style-2::-webkit-scrollbar-track{
    background-color: transparent;
    opacity: 0.5;
    // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.22);
}
/*定义滚动条高宽及背景*/
#style-2::-webkit-scrollbar{
    width: 6px;
    background-color: transparent;
    border-radius: 5px;
    opacity: 0.5;
}
/*定义滚动条*/
#style-2::-webkit-scrollbar-thumb{
    background: rgba(70, 80, 123, 0.2);
    border-radius: 10px;
}
</style>