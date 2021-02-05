<template>
  <span>
    <i class="iconfont icon-suo" @click="handleLock" style="font-size:22px;"></i>
    <el-dialog title="设置锁屏密码" :visible.sync="visible" width="30%" append-to-body>
      <el-form :model="form" ref="form" label-width="80px">
        <el-form-item label="锁屏密码" prop="passwd" :rules="[{ required: true, message: '锁屏密码不能为空'}]">
          <el-input v-model="form.passwd" placeholder="请输入锁屏密码"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleSetLock">确 定</el-button>
      </span>
    </el-dialog>
  </span>
</template>
<script lang="ts">
    interface FromContent{
        passwd: string;
    }
    import { Component, Vue} from 'vue-property-decorator';
    import { Mutation,State } from "vuex-class";
    import { validatenull} from "@/assets/util";
    import {Form} from 'element-ui'; 
    @Component
    export default class TopLock extends Vue{
        @Mutation SET_LOCK!: () => void
        @Mutation SET_LOCK_PASSWD!: (password: string) => void
        @State lockPasswd!: string
        form: FromContent = {
            passwd: ""
        }
        visible = false
        handleLock() {
            console.log(this.lockPasswd)
            if (validatenull(this.lockPasswd)) {
                this.visible = true;
                return;
            }
            this.SET_LOCK()
            setTimeout(() => {
                this['$router'].push({ path: "/lock" });
            }, 100);
        }
        handleSetLock() {
            (this.$refs["form"] as Form).validate((valid: boolean) => {
                if (valid) {
                    this.SET_LOCK_PASSWD(this.form.passwd)
                    this.handleLock();
                }
            })
        }
    }
</script>