<template>
  <div class="top">
    <div class="top-button is-left">
      <!-- breadcrumb按钮和面包屑 -->
      <div class="tags-breadcrumb">
        <i class="iconfont icon-caidan tag-collapse"
           :class="[{ 'tag-collapse_right': isCollapse }]"
           @click="showCollapse"></i>
      </div>
    </div>
    <h1 class="top-title">
      <topMenu></topMenu>
    </h1>
    <div class="top-button is-right">
      <!-- <el-tooltip class="item"
                  effect="dark"
                  content="主题色"
                  placement="bottom">
        <span class="top-item">
          <top-color></top-color>
        </span>
      </el-tooltip> -->
      <el-tooltip class="item"
                  effect="dark"
                  content="锁屏"
                  placement="bottom">
        <span class="top-item">
          <top-lock></top-lock>
        </span>
      </el-tooltip>
      <el-tooltip class="item"
                  effect="dark"
                  content="特色主题"
                  placement="bottom">
        <span class="top-item">
          <top-theme></top-theme>
        </span>
      </el-tooltip>
      <el-tooltip class="item"
                  effect="dark"
                  :content="isFullScren?'退出全屏':'全屏'"
                  placement="bottom">
        <span class="top-item">
          <i class="iconfont" style="font-size:20px;" :class="!isFullScren?'icon-Group-':'icon-tuichuquanping'"
             @click="handleScreen"></i>
        </span>
      </el-tooltip>
      <el-tooltip class="item"
                  effect="dark"
                  content="用户头像"
                  placement="bottom">
        <img class="top-userImg"
             :src="'avatar'">
      </el-tooltip>
      <el-dropdown>
        <span class="el-dropdown-link">
          {{'username'}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="logout"
                            >退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';
import { State,Mutation } from "vuex-class";
import topMenu from './topMenu.vue'
import topTheme from './topTheme.vue'
import topLock from './topLock.vue'
@Component({
    components:{
        topMenu,
        topTheme,
        topLock
    }
})
export default class TopIndex extends Vue {
    @Mutation SET_COLLAPSE!: () => void
    @State isCollapse!: boolean;
    isFullScren = false
    logout(){
        console.log(1)
    }
    showCollapse(){
        this.SET_COLLAPSE()
    }
    handleScreen(){
        console.log(1)
    }
}
</script>
<style lang="less" scoped>
.top {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid #eee;
    color: rgba(0, 0, 0, 0.65);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 18px;
    height: 64px;
    line-height: 1;
    padding: 0 10px;
    white-space: nowrap;
    background: #fff;
}
.top-button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.top-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: inherit;
    font-weight: 400;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.top-item {
    margin-right: 12px;
}
</style>
<style lang="less">
.top{
  .el-menu--horizontal{
    border-bottom: none;
  }
}
.tags-breadcrumb {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 16px;
    height: 50px;
    i{
      font-size:36px;
      cursor: pointer;
    }
}
.tag-collapse.tag-collapse_right {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
}
</style>