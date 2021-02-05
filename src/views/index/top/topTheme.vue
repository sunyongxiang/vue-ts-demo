<template>
  <div>
    <el-dialog title="选择"
               :visible.sync="box"
               width="50%">
      <el-radio-group v-model="text">
        <el-radio v-for="(item,index) in list"
                  :key="index"
                  :label="item.value">{{item.name}}</el-radio>
      </el-radio-group>
    </el-dialog>
    <span>
      <i class="el-icon-menu"
         @click="open"></i>
    </span>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch} from 'vue-property-decorator';
import { setTheme } from '@/assets/util'
import { State,Mutation } from "vuex-class";
interface Theme{
    name: string;
    value: string;
}
@Component
export default class TopTheme extends Vue {
    box = false
    text = ''
    @State themeName!: string
    @Mutation SET_THEME_NAME!: (theme: string) => void
    list: Theme[]= [
        {
            name: '默认主题',
            value: '',
        }, {
            name: '炫彩主题',
            value: 'theme-star'
        },  {
            name: '渐变主题',
            value: 'theme-gradual'
        }
    ]
    open(){
        this.box = true;
    }
    @Watch('text')
    themeChage(val: string){
        this.SET_THEME_NAME(val)
        setTheme(val)
    }
    // watch: {
    // text: function (val) {
    //   this.$store.commit('SET_THEME_NAME', val);
    //   setTheme(val);
    // }
    mounted () {
        this.text = this.themeName;
        if (!this.text) {
            this.text = '';
        }
    }
}
</script>
<style>
.theme-star .avue-contail {
    background-image: url('../../../assets/img/star-squashed.jpeg');
    background-size: 100% 100%;
}
.theme-star .el-submenu__title,.theme-star .el-submenu__title i {
    color: #fff !important;
}
.theme-star .sidebar-container, .theme-star .logo, .theme-star .el-menu-item, .theme-star .el-submenu__title, .theme-star .el-menu {
    background-color: transparent !important;
}
.theme-star .avue-tabs {
    padding: 0 20px !important;
}
.theme-star .top {
    border-bottom: none;
    background-color: transparent !important;
}
.theme-star .avue-tabs{
  background-color: transparent !important;
}
.theme-star .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: none;
}
.theme-star .el-menu-item i {
    color: #fff !important;
}
.theme-star .el-menu-item.is-active span, .theme-star .el-menu-item.siderbar-active span ,.theme-star .el-menu-item span{
    color: #fff !important;
}
.theme-star .logo_title i, .theme-star .tags-breadcrumb i {
    color: #fff;
}
.theme-star .tag-item {
    color: #fff !important;
    border: none !important;
    background-color: rgba(255, 255, 255, 0.5);
}
.theme-star .tags-container .tags-box  .tag-item.is-active {
    color: #fff !important;
    border: 1px solid #fff !important;
    background-color: rgba(0, 0, 0, 0.4);
}
.theme-star .tags-container .tags-box .tag-item {
    color: #fff !important;
    border: none !important;
    background-color: rgba(255, 255, 255, 0.5);
}
.theme-star .top .top-item i {
     color: #fff;
}
.theme-star .tags-menu {
    background-color: rgba(0, 0, 0, 0.6) !important;
}
.theme-star .el-menu-item.is-active, .theme-star .el-menu-item.siderbar-active {
    background-color: rgba(0, 0, 0, 0.4) !important;
}
/* 主题样式2 */
.theme-gradual .avue-contail {
    background: linear-gradient(120deg, #bc00e3, #4efffb) !important;
}
.theme-gradual .el-submenu__title,.theme-gradual .el-submenu__title i {
    color: #fff !important;
}
.theme-gradual .sidebar-container, .theme-gradual .logo, .theme-gradual .el-menu-item, .theme-gradual .el-submenu__title, .theme-gradual .el-menu {
    background-color: transparent !important;
}
.theme-gradual .avue-tabs {
    padding: 0 20px !important;
}
.theme-gradual .top {
    border-bottom: none;
    background-color: transparent !important;
}
.theme-gradual .avue-tabs{
  background-color: transparent !important;
}
.theme-gradual .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: none;
}
.theme-gradual .el-menu-item i {
    color: #fff !important;
}
.theme-gradual .el-menu-item.is-active span, .theme-gradual .el-menu-item.siderbar-active span ,.theme-gradual .el-menu-item span{
    color: #fff !important;
}
.theme-gradual .logo_title i, .theme-gradual .tags-breadcrumb i {
    color: #fff;
}
.theme-gradual .tag-item {
    color: #fff !important;
    border: none !important;
    background-color: rgba(255, 255, 255, 0.5);
}
.theme-gradual .tags-container .tags-box  .tag-item.is-active {
    color: #fff !important;
    border: 1px solid #fff !important;
    background-color: rgba(0, 0, 0, 0.4);
}
.theme-gradual .tags-container .tags-box .tag-item {
    color: #fff !important;
    border: none !important;
    background-color: rgba(255, 255, 255, 0.5);
}
.theme-gradual .top .top-item i {
    color: #fff;
}
.top .top-item i.el-dialog__close{
  color: #909399!important;
}
.theme-gradual .tags-menu {
    background-color: rgba(0, 0, 0, 0.6) !important;
}
.theme-gradual .el-menu-item.is-active, .theme-gradual .el-menu-item.siderbar-active {
    background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0.28)), to(rgba(255, 255, 255, 0))) !important;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0)) !important;
}
</style>
