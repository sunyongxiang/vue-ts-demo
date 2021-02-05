<template>
    <ul class="this_step">
        <slot></slot>
    </ul>
</template>
<script lang="ts">
import { Component, Vue ,Prop} from 'vue-property-decorator';

@Component
export default class Steps extends Vue {
    steps = []
    @Prop({type:Number,required:true})
    active!: number
    created(){
        this.steps = []
    }
}
</script>
<style lang="less" scoped>
*{
    margin:0;
    padding:0;
}
.this_step{
    width:100%;
    height: 30px;
    line-height: 30px;
    margin: 0 auto;
    background-color: #cacaca;
    text-align: center;
    display: flex;
    /deep/ li{
        &:not(:last-child)::before,&:not(:last-child):after{
            display: block;
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            width: 0px;
            height: 0px;
            z-index: 10;
            border-top: 15px solid transparent;
            border-right: 15px solid transparent;
            border-bottom:15px solid transparent;
        }
        &:not(:last-child)::before{
            right:-30PX;
            border-left:15px solid #fff;
        }
        &:not(:last-child)::after{
            right:-29PX;
            border-left:15px solid #cacaca;
        }
    }
}
</style>