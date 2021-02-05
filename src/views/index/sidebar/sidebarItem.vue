<template>
  <div class="menu-wrapper">
    <template v-for="(item,index) in menu">
      <el-menu-item v-if="validate(item.children)"
                    v-show="!item.isHide"
                    :index="filterPath(item.href,index)"
                    @click="open(item)"
                    :key="item.label">
        <i :class="item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
      <el-submenu v-else
                  :index="filterPath(item.label,index)"
                  :key="item.label">
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title"
                :class="{'el-menu--display':isCollapse}">{{item.label}}</span>
        </template>
        <template v-for="(child,cindex) in item.children">
          <el-menu-item :class="{'siderbar-active':nowTagValue==child.href}"
                        :index="filterPath(child.href,cindex)"
                        @click="open(child)"
                        v-if="validate(child.children)"
                        :key="child.label">
            <i :class="child.icon"></i>
            <span slot="title">{{child.label}}</span>
          </el-menu-item>
          <sidebar-item v-else
                        :menu="[child]"
                        :key="cindex"
                        :isCollapse="isCollapse"></sidebar-item>
        </template>
      </el-submenu>
    </template>
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
    import { resolveUrlPath,setUrlPath,validatenull} from '@/assets/util';
    import { Component, Vue, Prop} from 'vue-property-decorator';
    import { Mutation } from "vuex-class";
    @Component
    export default class Logo extends Vue {
        type = false
        @Prop({type:Boolean,required:true})
        isCollapse!: true
        @Prop({type:Array,required:true})
        menu!: []
        get nowTagValue() {
            return setUrlPath(this['$route'])
        }
        @Mutation ADD_TAG!: (play: MenuItem) => void
        @Mutation SET_TAG_CURRENT!: (href: string) => void
        validate(val: any): boolean{
            return validatenull(val)
        }
        filterPath (path: string, index: number): string {
            return path == null ? index + '' : path
        }
        open (item: MenuItem) {
            this.$store.commit('ADD_TAG',{
                label: item.label,
                value: item.href,
                query: item.query,
            })
            this.$store.commit('SET_TAG_CURRENT',item.href)
            this['$router'].push({
                path: resolveUrlPath(item.href, item.label)
            })
        }
    }
</script>