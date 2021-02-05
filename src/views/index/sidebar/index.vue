<template>
  <div class="sidebar-container"
       :class="{'is-active':isCollapse}">
    <logo :isCollapse="isCollapse"></logo>
    <el-menu unique-opened
            class="my-menu"
             :default-active="nowTagValue"
             mode="vertical"
             :show-timeout="1000"
             background-color="#00142a"
             text-color="hsla(0,0%,100%,.65)"
             active-text-color="#409eff"
             :collapse="isCollapse">
        <sidebar-item :menu="menu"
                    :isCollapse="isCollapse"></sidebar-item>
    </el-menu>
  </div>
</template>
<script lang="ts">
interface MenuItem{
    id: number;
    label: string;
    href: string;
    icon: string;
    isHide: boolean;
    query?: string;
}
import { setUrlPath } from '@/assets/util'
import logo from './logo.vue'
import sidebarItem from './sidebarItem.vue'
import { Component, Vue, Prop} from 'vue-property-decorator';
@Component({
    components:{
        logo,
        sidebarItem
    }
})
export default class SideBarIndex extends Vue {
    get nowTagValue(){
        console.log(this['$route'])
        return setUrlPath(this['$route'])
    }
    @Prop({type:Boolean,required:true})
    isCollapse!: true
    menu: MenuItem[]= [{
            id: 0,
            label: "首页",
            href: '/home/index',
            icon:'el-icon-setting',
            isHide:false
        },{
            id: 0,
            label: "设备模型",
            href: '/home/devModel',
            icon:'el-icon-setting',
            isHide:false
        },{
            id: 0,
            label: "创客中心",
            href: '/home/createCenter',
            icon:'el-icon-setting',
            isHide:false
        },{
            id: 0,
            label: "监控中新",
            href: '/home/seeCenter',
            icon:'el-icon-setting',
            isHide:false
        },{
            id: 0,
            label: "首页1",
            href: '/home/index/1',
            icon:'el-icon-setting',
            isHide:false
        },{
            id: 0,
            label: "设备模型1",
            href: '/home/devModel/1',
            icon:'el-icon-setting',
            isHide:false
        },{
            id: 0,
            label: "创客中心1",
            href: '/home/createCenter/1',
            icon:'el-icon-setting',
            isHide:false
        },{
            id: 0,
            label: "监控中新1",
            href: '/home/seeCenter/1',
            icon:'el-icon-setting',
            isHide:false
        },{
            id: 0,
            label: "首页2",
            href: '/home/index/2',
            icon:'el-icon-setting',
            isHide:false
        },{
            id: 0,
            label: "设备模型2",
            href: '/home/devModel/2',
            icon:'el-icon-setting',
            isHide:false
        },{
            id: 0,
            label: "创客中心2",
            href: '/home/createCenter/2',
            icon:'el-icon-setting',
            isHide:false
        },{
            id: 0,
            label: "监控中新2",
            href: '/home/seeCenter/2',
            icon:'el-icon-setting',
            isHide:false
        },{
            id: 0,
            label: "首页3",
            href: '/home/index/3',
            icon:'el-icon-setting',
            isHide:false
        },{
            id: 0,
            label: "设备模型3",
            href: '/home/devModel/3',
            icon:'el-icon-setting',
            isHide:false
        },{
            id: 0,
            label: "创客中心3",
            href: '/home/createCenter/3',
            icon:'el-icon-setting',
            isHide:false
        },{
            id: 0,
            label: "监控中新3",
            href: '/home/seeCenter/3',
            icon:'el-icon-setting',
            isHide:false
        }]
}
</script>
<style lang="less" scoped>
.sidebar-container {
    background: #00142a;
    -webkit-transition: width .6s;
    transition: width .6s;
}
.my-menu{
    border:none;
}

</style>