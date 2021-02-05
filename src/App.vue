<template>
  <div class="app-view">
     <transition name="fade">
        <router-view />
     </transition>
  </div>
</template>
<style lang="less">
//基础样式
@import "./assets/style/reset.less";
html,body,#app,.app-view{
  width: 100%;
  height: 100%;
}

</style>
