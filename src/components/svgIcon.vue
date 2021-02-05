<template>
    <svg>
        <use :xlink:href="icon"></use>
    </svg>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
    @Prop({ type: String, required: true })
    private iconName!: string;
    get icon(){
        return '#icon-'+this.iconName
    }
}
</script>
