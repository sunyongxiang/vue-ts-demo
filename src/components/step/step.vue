<template>
    <li
        @click="handlerClick"
        :class="{
            step_pre:$parent.active>=state&&state===0,
            step_cur:$parent.active>=state&&state>0&&state<$parent.steps.length-1,
            step_last:$parent.active>=state&&state>=0&&state===$parent.steps.length-1
        }"
    >
        <slot>{{state+1}}</slot>
    </li>
</template>
<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';
import Steps from  './steps.vue'
@Component
export default class Step extends Vue {
    get state (){
        console.log((this.$parent as Steps).steps)
        return (this.$parent as Steps).steps.findIndex((val: Step)=>val===this)
    }
    @Emit('click')
    handlerClick(){
        return this.state
    }
    mounted(){
        ((this.$parent as Steps).steps as Step[]).push(this)
    }
}
</script>
<style lang="less" scoped>
li{
    list-style:none;
    position: relative;
    flex: 1;
    color: #fff;
    &.step_pre{
        background-color: #6dcfc0;
    }
    &.step_cur{
        background-color: #28beac;
    }
    &.step_last{
        background-color: #06beac;
    }
    &.step_pre:not(:last-child)::after{
        border-left:15px solid #6dcfc0;
    }
    &.step_cur:not(:last-child)::after{
        border-left:15px solid #28beac;
    }
    &.step_last:not(:last-child)::after{
        border-left:15px solid #06beac;
    }
}
</style>