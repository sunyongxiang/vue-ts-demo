<template>
  <div class="logo">
    <transition name="fade">
      <span v-if="isCollapse" class="logo_title is-bold " key="0" :class="{'is-text':!type,'is-img':type}">
        <template>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540902578876&di=43cab812c649421afd7b196135c48327&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F14%2F63%2F42%2F96p58PICGaQ_1024.jpg" width="40" height="40" />
        </template>
      </span>
    </transition>
    <transition-group name="fade">
      <template v-if="!isCollapse">
        <!-- <span class="logo_title is-bold" key="1">WCS智能仓库控制系统</span> -->
        <span class="logo_subtitle" key="2">WCS智能仓库控制系统</span>
      </template>
    </transition-group>
  </div>
</template>
<script lang="ts">
    import { Component, Vue, Prop} from 'vue-property-decorator';
    @Component
    export default class Logo extends Vue {
        type = false
        @Prop({type:Boolean,required:true})
        isCollapse!: true
    }
</script>
<style scoped="scoped" lang="less">
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-active {
  transition: opacity 2.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.logo {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 230px;
  height: 64px;
  line-height: 64px;
  background: #002140;
  color: #fdfdfd;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  overflow: hidden;
  box-sizing: border-box;
}
.logo_title {
  padding: 0 5px 0 0;
  color: #409eff;
  font-size: 28px;
  &.is-bold {
    font-weight: 700;
  }
}
.is-text {
  position: absolute;
  top: 0;
  left: 10px;
}
.is-img {
  position: absolute;
  top: 10px;
  left: 10px;
}
.logo_subtitle {
  font-size: 16px;
  padding-top: 5px;
}
</style>