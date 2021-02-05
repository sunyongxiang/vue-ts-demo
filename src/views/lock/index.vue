<template>
  <div class="lock-container pull-height">
    <div class="lock-form animated bounceInDown">
      <div class="animated"
           :class="{'shake':passwdError,'bounceOut':pass}">
        <h3 class="text-white">浙江飞戎智云出品</h3>
        <el-input placeholder="请输入登录密码"
                  type="password"
                  class="input-with-select animated"
                  v-model="passwd"
                  @keyup.enter.native="handleLogin">
          <el-button slot="append"
                     icon="iconfont icon-suo"
                     @click="handleLogin"></el-button>
          <el-button slot="append"
                     icon="el-icon-arrow-right"
                     @click="handleLogout"></el-button>
        </el-input>
      </div>

    </div>
  </div>
</template>
<script lang="ts">
interface Tag{
    label: string;
    value: string;
    query: string;
    close: boolean;
}
import { Component, Vue} from 'vue-property-decorator';
import {State,Mutation} from 'vuex-class'
import {resolveUrlPath} from '@/assets/util'
@Component
export default class Lock extends Vue{
    passwd= "123"
    passwdError= false
    pass= false
    @State lockPasswd!: string
    @Mutation CLEAR_LOCK!: () => void
    @State tag!: Tag
    handleLogin () {
      if (this.passwd != this.lockPasswd) {
        this.passwd = "";
        this.$message({
          message: "解锁密码错误,请重新输入",
          type: "error"
        });
        this.passwdError = true;
        setTimeout(() => {
          this.passwdError = false;
        }, 1000);
        return;
      }
      this.pass = true;
      setTimeout(() => {
        this.CLEAR_LOCK()
        this['$router'].push({ path: resolveUrlPath(this.tag.value || "/index") });
      }, 1000);
    }
    handleLogout () {
      this.$confirm("是否退出系统, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this['$router'].push({ path: "/login" });
      });
    }
}
</script>
<style lang="less">
.lock-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.6);
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0.6;
    position: relative;
}
.pull-height {
    height: 100%;
    overflow: hidden;
}
.lock-container::before {
  z-index: -999;
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url('../../assets/img/login.png');
  background-size: cover;
}
.lock-form {
  width: 300px;
}
.lock-form {
    width: 300px;
}
.bounceInDown {
    -webkit-animation-name: bounceInDown;
    animation-name: bounceInDown;
}
.animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}
.el-input-group--append .el-input__inner, .el-input-group__prepend {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.el-input-group>.el-input__inner {
    vertical-align: middle;
    display: table-cell;
}
.el-input__inner {
    height: 38px;
    line-height: 38px;
}
.el-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}
</style>