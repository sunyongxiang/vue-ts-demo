<template>
  <div class="tags-container">
    <!-- tag盒子 -->
    <div class="tags-box"
         ref="tagBox">
      <div class="tags-list"
           ref="tagsList"
           @mousewheel="hadelMousewheel"
           @mouseup="hadelMouseUp"
           @mousemove="hadelMouse"
           @mousedown="hadelMousestart"
           @touchup="hadelMouseUp"
           @touchmove="hadelMouse"
           @touchstart="hadelMousestart">
        <div ref="tagsPageOpened"
             class="tag-item"
             :class="{'is-active':nowTagValue==item.value}"
             :name="item.value"
             @contextmenu.prevent="openMenu(item,$event)"
             v-for="(item,index) in tagList"
             :key="index"
             @click="openUrl(item)">
          <span class="iconfont icon-yuan-copy-copy-copy-copy tag-item-icon"></span>
          <span class="tag-text">{{item.label}}</span>
          <i class="el-icon-close tag-close"
             @click.stop="closeTag(item)"
             v-if="item.close"></i>
        </div>
      </div>
      <el-dropdown class="tags-menu pull-right">
        <el-button type="primary"
                   size="mini">
          更多
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="closeOthersTags">关闭其他</el-dropdown-item>
          <el-dropdown-item @click.native="closeAllTags">关闭全部</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- <ul class='contextmenu' v-show="visible" :style="{left:left+'px',top:top+'px'}">
          <li @click="closeTag(selectedTag)">关闭</li>
          <li @click="closeOthersTags">关闭其他</li>
          <li @click="closeAllTags">关闭全部</li>
        </ul> -->
  </div>
</template>
<script lang="ts">
interface Tag{
    label: string;
    value: string;
    query: string;
    close: boolean;
}
import { resolveUrlPath,setUrlPath} from '@/assets/util';
import { Component, Vue} from 'vue-property-decorator';
import { State,Mutation,Getter } from "vuex-class";
@Component
export default class TagsIndex extends Vue{
    startX = 0
    startY = 0
    endX = 0
    endY = 0
    lock = false
    tagBodyLeft = 0
    @Mutation DEL_TAG_OTHER!: () => void
    @Mutation DEL_ALL_TAG!: () => void
    @Mutation SET_TAG_CURRENT!: (value: string) => void
    @Mutation SET_TAG!: (value: string) => void
    @State tagWel!: Tag
    @State tagList!: Tag[]
    get nowTagValue () {
      return setUrlPath(this['$route'])
    }
    closeOthersTags(){
        this.DEL_TAG_OTHER()
    }
    closeAllTags () {
      this.DEL_ALL_TAG()
      if(this['$route'].fullPath!==this.tagWel.value){
        this.SET_TAG_CURRENT(this.tagWel.value)
        this['$router'].push({
          path: resolveUrlPath(this.tagWel.value)
        })
      }
    }
    // hadelMousestart(e: TouchEvent): void
    hadelMousestart (e: MouseEvent | TouchEvent): void {
      this.lock = true
      if ((e as MouseEvent).clientX && (e as MouseEvent).clientY) {
        this.startX = (e as MouseEvent).clientX
        this.startY = (e as MouseEvent).clientY
      } else {
        this.startX = (e as TouchEvent).changedTouches[0].pageX
        this.startY = (e as TouchEvent).changedTouches[0].pageY
      }
    }
    hadelMouse (e: MouseEvent | TouchEvent) {
      const boundarystart = 0,
        boundaryend =
          (this.$refs.tagsList as HTMLElement).offsetWidth - (this.$refs.tagBox as HTMLElement).offsetWidth + 100
      if (!this.lock) {
        return
      }
      //鼠标滑动
      if ((e as MouseEvent).clientX && (e as MouseEvent).clientY) {
        this.endX = (e as MouseEvent).clientX
        this.endY = (e as MouseEvent).clientY
        //触摸屏滑动
      } else {
        //获取滑动屏幕时的X,Y
        this.endX = (e as TouchEvent).changedTouches[0].pageX
        this.endY = (e as TouchEvent).changedTouches[0].pageY
      }
      //获取滑动距离
      let distanceX = this.endX - this.startX
      // let distanceY = this.endY - this.startY
      //判断滑动方向——向右滑动
      distanceX = distanceX * 0.8
      if (distanceX > 0 && this.tagBodyLeft < boundarystart) {
        this.tagBodyLeft = this.tagBodyLeft + distanceX
        //判断滑动方向——向左滑动
      } else if (distanceX < 0 && this.tagBodyLeft >= -boundaryend) {
        this.tagBodyLeft = this.tagBodyLeft + distanceX
      }
    }
    hadelMousewheel (e: WheelEvent) {
      const step = 0.8 * 90 //一个tag长度
      const boundarystart = 0,
        boundaryend =
          (this.$refs.tagsList as HTMLElement).offsetWidth -( this.$refs.tagBox as HTMLElement).offsetWidth + 100
      // Y>0向左滑动
      if (e.deltaY > 0 && this.tagBodyLeft >= -boundaryend) {
        this.tagBodyLeft = this.tagBodyLeft - step
        // Y<0向右滑动
      } else if (e.deltaY < 0 && this.tagBodyLeft < boundarystart) {
        this.tagBodyLeft = this.tagBodyLeft + step
      }
    }
    hadelMouseUp () {
      this.lock = false
    }
    openUrl (item: Tag) {
      this.SET_TAG_CURRENT(item.value)
      this.SET_TAG(item.value)
      this['$router'].push({
        path: resolveUrlPath(item.value, item.label)
      })
    }
    @State tag!: Tag
    eachTag (tag: Tag): string | number {
      for (const key in this.tagList) {
        if (this.tagList[key].value == tag.value) {
          return key
        }
      }
      return ''
    }
    @Mutation DEL_TAG!: (item: Tag) => void
    closeTag (item: Tag) {
      // this.$store.commit('DEL_TAG',item)
      const key = this.eachTag(item)
      let tag
      console.log(item.value,this.tag.value)
      this.DEL_TAG(item)
      if (item.value == this.tag.value) {
        tag = this.tagList[key == 0 ? key : (key as number) - 1]
        this.openUrl(tag)
      }
    }
}
</script>
<style lang="less" scoped>
.tags-container {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.tags-container .tags-box {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-right: 106px;
    width: 100%;
    height: 40px;
}
.tags-container .tags-list {
    position: absolute;
    padding: 2px 10px;
    overflow: visible;
    white-space: nowrap;
    -webkit-transition: left .3s ease;
    transition: left .3s ease;
}
.tags-container .tags-menu {
    position: absolute;
    top: 0;
    right: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 15px;
    height: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #fff;
    -webkit-box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
    box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
}
.pull-right {
    float: right !important;
}
.el-dropdown {
    display: inline-block;
    position: relative;
    color: #606266;
    font-size: 14px;
}
.tags-container .tag-item {
    position: relative;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    margin: 2px 4px 2px 0;
    padding: 0 10px;
    border: 1px solid #eee;
    border-radius: 3px;
    color: #495060 !important;
    font-size: 12px;
    vertical-align: middle;
    opacity: 1;
    overflow: hidden;
    cursor: pointer;
}
.tags-container .tag-item.is-active {
    border-color: #409eff;
}
.tags-container .tag-item.is-active .tag-item-icon {
    color: #409eff;
}
.tags-container .tag-item-icon {
    color: #eee;
    font-size: 11px !important;
}
[class^="icon-"] {
    font-family: "iconfont" !important;
    font-size: 18px !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.icon-yuan:before {
    content: "\e657";
}
</style>