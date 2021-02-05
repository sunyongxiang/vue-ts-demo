<template>
  <div class="pull-auto top-menu">
    <el-menu :default-active="activeIndex"
             mode="horizontal"
             text-color="#606266">
      <template v-for="(item,index) in items">
        <el-menu-item :index="item.parentId+''"
                      :key="index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{item.label}}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts">
interface Menu {
  label: string;
  href: string;
  icon: string;
  parentId: number;
}
import { Component, Vue} from 'vue-property-decorator';
@Component
export default class TopMenu extends Vue {
    activeIndex = "0"
    items: Menu[] = [{
        label: "首页",
        href: "/wel/index",
        icon: 'el-icon-menu',
        parentId: 0
    }]
}
</script>
<style scoped="scoped" lang="less">
.top-menu {
  margin-top: -4px;
  box-sizing: border-box;
}
</style>